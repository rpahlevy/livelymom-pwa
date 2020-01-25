<template>
  <q-page class='q-pa-md'>
    <h1 class='text-h4 text-pink-4 text-center q-mb-sm text-bold'>Lively Mom</h1>
    <p class='text-body1 text-center q-mb-lg'>
      Cerita &amp; Tips Kehamilan, Melahirkan, Menyusui, dan Parenting
    </p>

    <div class='row q-col-gutter-md'>
      <div v-for='(article, index) in articles' class='col-12 col-sm-6 col-md-4 q-mb-none' :key='article.id'>
        <q-card class='shadow-3' style='border-radius: 8px'>
          <q-card-section class='q-pa-lg'>
            <h1 class='text-h6 q-mt-none q-mb-md line-clamp line-clamp-2'>
              <router-link :to='article.id + "/" + article.slug' class='hide-underline' v-html='article.title.rendered' />
            </h1>

            <div class='text-body2 q-mb-md line-clamp line-clamp-3 post-excerpt' v-html='article.excerpt.rendered' />

            <div class='row items-center justify-between'>
              <div class='text-subtitle2'>
                <!-- <span class='text-pink-5'>{{ item.author.name }}</span> - -->
                <span class=''>{{ formatDate(article.date, 'YYYY-MM-DD') }}</span>
              </div>
              <div>
                <q-btn unelevated round size='sm' color='pink-4' icon='share' @click='share(index)'></q-btn>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      initial: true,
      articles: []
    }
  },

  beforeMount () {
    this.loadData()
  },

  methods: {
    substr: function (str) {
      return str.length > 120 ? str.substr(0, 117) + '...' : str
    },
    loadData: function () {
      this.$q.loading.show()
      this.$api.get('/posts')
        .then(response => {
          if (response.status === 200) {
            return response.json()
          } else {
            this.$q.notify({
              color: 'negative',
              position: 'top',
              message: 'Koneksi bermasalah',
              icon: 'report_problem'
            })
          }
          return null
        })
        .then(response => {
          if (response) {
            this.articles = response
          }
          this.$q.loading.hide()
        })
        .catch(e => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Koneksi bermasalah',
            icon: 'report_problem'
          })
          this.$q.loading.hide()
        })
    },
    formatDate: function (value) {
      var monthNames = [
        'Januari', 'Februari', 'Maret',
        'April', 'Mei', 'Juni', 'Juli',
        'Agustus', 'September', 'Oktober',
        'November', 'Desember'
      ]

      var date = new Date(value)
      var day = date.getDate()
      var monthIndex = date.getMonth()
      var year = date.getFullYear()

      return day + ' ' + monthNames[monthIndex] + ' ' + year
    },
    canShare: function () {
      if (navigator.share) {
        return true
      }
      return false
    },
    share: function (index) {
      let article = this.articles[index]
      let host = window.location.protocol + '//' + window.location.host
      let url = host + '/' + article.id + '/' + article.slug
      if (navigator.share) {
        navigator.share({
          title: article.title.rendered,
          text: article.title.rendered,
          url: url
        })
          .then(() => {
            // console.log('Successful share')
          })
          .catch((e) => {
            // console.log('Error sharing', error)
          })
      } else {
        window.open('https://api.whatsapp.com/send?text=' + article.title.rendered + '. \n' + url + '\n')
      }
    }
  }
}
</script>
