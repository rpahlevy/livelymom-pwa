<template>
  <q-page class='q-pa-md'>
    <h1 class='text-h4 text-center q-mb-sm text-pink-12 text-bold'>Lively Mom</h1>
    <p class='text-body1 text-center text-blue-grey-10 q-mb-lg'>
      Cerita &amp; Tips Kehamilan, Melahirkan, Menyusui, dan Parenting
    </p>

    <q-card v-for='(article, index) in articles' class='q-mb-lg' flat :key='article.id' style='border-radius: 8px'>
      <q-card-section class='q-pa-lg'>
        <h1 class='text-h6 q-mt-none q-mb-md line-clamp line-clamp-2'>
          <router-link :to='"/detail/"+ article.id' class='text-grey-9 hide-underline' v-html='article.title.rendered' />
        </h1>

        <div class='text-body2 text-blue-grey-8 q-mb-md line-clamp line-clamp-3 post-excerpt' v-html='article.excerpt.rendered' />

        <div class='row items-center justify-between'>
          <div class='text-subtitle2'>
            <!-- <span class='text-pink-5'>{{ item.author.name }}</span> - -->
            <span class='text-blue-grey-4'>{{ article.date }}</span>
          </div>
          <div>
            <q-btn unelevated round size='sm' color='pink-5' icon='share' @click='share(index)'></q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
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

  mounted () {
    this.loadData()
  },

  methods: {
    substr: function (str) {
      return str.length > 120 ? str.substr(0, 117) + '...' : str
    },
    loadData: function () {
      this.$q.loading.show()
      this.$axios.get('/posts')
        .then(response => {
          if (response.status && response.status === 200) {
            this.articles = response.data
          }
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'bottom',
            message: 'Loading failed',
            icon: 'report_problem'
          })
        })
        .then(() => {
          this.$q.loading.hide()
        })
    },
    canShare: function () {
      if (navigator.share) {
        return true
      }
      return false
    },
    share: function (index) {
      let article = this.articles[index]
      if (navigator.share) {
        navigator.share({
          title: article.title.rendered,
          text: article.title.rendered,
          url: article.url
        })
          .then(() => {
            // console.log('Successful share')
          })
          .catch((e) => {
            // console.log('Error sharing', error)
          })
      } else {
        window.open('https://api.whatsapp.com/send?text=' + article.title.rendered + '. \n' + article.link + '\n')
      }
    }
  }
}
</script>
