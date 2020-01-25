<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-pink-4 text-white">
      <q-toolbar>
        <q-btn
          flat
          size="md"
          color="white"
          v-go-back="'/'"
          icon="arrow_back"
        />
        <q-toolbar-title>
          <q-avatar>
          </q-avatar>
          &nbsp;
        </q-toolbar-title>
        <q-btn
          flat
          size="md"
          color="white"
          icon='bookmark_border' @click='bookmark'
        />
        <q-btn
          flat
          size="md"
          color="white"
          icon='share' @click='share'
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class='q-pt-md'>
        <div class='q-mb-lg q-px-lg'>
          <h1 v-if='article.title.rendered' class='text-h5 text-pink-4 text-bold q-mb-sm' style='line-height: 1.25' v-html='article.title.rendered' />
          <p v-if='article.date' class='text-subtitle1'>
            <q-icon name='calendar_today' />
            {{ formatDate(article.date, 'YYYY-MM-DD') }}
          </p>
        </div>
        <q-card v-if='article.content.rendered' class='' flat style='border-radius: 30px 30px 0 0'>
          <q-card-section class='q-px-lg q-py-lg'>
            <div v-html='article.content.rendered' class='q-mt-sm text-body1 post-content' id='post-content' />
          </q-card-section>
        </q-card>
        <q-card v-if='article.content.rendered' flat class='bg-blue-grey-2'>
          <q-card-section class='q-px-lg q-py-lg'>
            <p class='text-bold'>Disclaimer</p>
            <p>
              Livelymom adalah blog pribadi yang bertujuan untuk membagikan
              pengalaman perjalanan menjadi seorang ibu.
            </p>
            <p>
               Penulis bukan merupakan dokter, bidan, maupun tenaga medis.
               Masalah atau gejala yang ada di blog ini mungkin sedang Bunda alami.
               Tetapi apa yang ada di blog ini belum tentu sesuai dengan kondisi bunda.
            </p>
            <p class='q-mb-none'>
              Hubungi dokter/bidan Bunda untuk mendapatkan penjelasan
              sesuai dengan kondisi Bunda. Penulis tidak bertanggung jawab
              atas hal-hal yang terjadi karena Bunda mencoba solusi yang
              pernah penulis lakukan tanpa mengkonsultasikan maupun
              pendampingan oleh dokter/bidan.
            </p>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>

  </q-layout>
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
    },
    share: function () {
      let article = this.article
      let host = window.location.protocol + '//' + window.location.host + '/' + article.id + '/' + article.slug
      if (navigator.share) {
        navigator.share({
          title: article.title.rendered,
          text: article.title.rendered,
          url: host
        })
          .then(() => {
            // console.log('Successful share')
          })
          .catch((e) => {
            // console.log('Error sharing', error)
          })
      } else {
        window.open('https://api.whatsapp.com/send?text=' + article.title.rendered + '. \n' + host + '\n')
      }
    }
  }
}
</script>
