<template>
  <q-page class='q-pa-md'>
    <h1 class='text-h4 text-center q-mb-sm'>Lively Mom</h1>
    <p class='text-body1 text-center text-blue-grey-6 q-mb-lg'>
      Cerita &amp; Tips Kehamilan, Melahirkan, Menyusui, dan Parenting
    </p>

    <q-card v-for='article in articles' class='q-mb-md' flat :key='article.id'>
      <q-card-section class=''>
        <div class='text-h6 q-mb-sm line-clamp-2'>
          <router-link :to='"/detail/"+ article.id' class='text-grey-8 hide-underline'>
            {{ article.title.rendered }}
          </router-link>
        </div>

        <p class='text-body2 text-blue-grey-8 q-mb-md line-clamp-3' v-html='substr(article.excerpt.rendered)' />

        <div class='row items-center justify-between'>
          <div class='text-subtitle2'>
            <!-- <span class='text-pink-5'>{{ item.author.name }}</span> - -->
            <span class='text-blue-grey-4'>{{ article.date }}</span>
          </div>
          <div>
            <q-btn unelevated round size='sm' color='pink-5' icon='share'></q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scope='file'>
  .hide-underline {
    text-decoration: none;
  }
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>

<script>
export default {
  name: 'PageIndex',

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
    }
  },

  data () {
    return {
      initial: true,
      articles: []
    }
  },

  mounted () {
    this.loadData()
  }
}
</script>
