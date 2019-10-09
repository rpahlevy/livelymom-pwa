<template>
  <q-page class='q-pt-md'>
    <div class='q-mb-lg q-px-lg'>
      <router-link to='/'>
        <q-btn outline size='md' color='pink-5' class='q-mt-md'>
          <q-icon name='arrow_left'></q-icon>
          Kembali
        </q-btn>
      </router-link>
      <h1 v-if='article.title.rendered' class='text-h4 text-grey-9 text-bold q-mb-sm' style='line-height: 1.25' v-html='article.title.rendered' />
      <p v-if='article.date' class='text-subtitle1'>{{ formatDate(article.date, 'YYYY-MM-DD') }}</p>
    </div>
    <q-card v-if='article.content.rendered' flat style='border-radius: 30px 30px 0 0'>
      <q-card-section class='q-px-lg q-py-lg'>
        <div v-html='article.content.rendered' class='q-mt-sm text-body1 text-blue-grey-8 post-content' id='post-content' />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PostDetail',

  data () {
    return {
      article: {
        date: '',
        title: {
          rendered: ''
        },
        content: {
          rendered: ''
        }
      }
    }
  },

  beforeMount () {
    this.loadData()
  },

  watch: {
    $route (to, from) {
      if (from.name === to.name) {
        this.loadData()
      }
    }
  },

  updated () {
    this.filterContentAnchors()
  },

  methods: {
    loadData: function () {
      this.$q.loading.show()
      this.$api.get('/posts/' + this.$route.params.id)
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
            this.article = response
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
    filterContentAnchors: function () {
      var anchors = document.getElementById('post-content').getElementsByTagName('a')
      var v = this
      for (var anchor of anchors) {
        anchor.onclick = function (e) {
          if (e) {
            e.preventDefault()
          }

          var href = this.getAttribute('href').replace('https://livelymom.com/', '')
          var params = href.split('/')
          v.$router.push({ name: 'PostDetail', params: { id: params[0], slug: params[1] } })
        }
      }
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
    }
  }
}
</script>
