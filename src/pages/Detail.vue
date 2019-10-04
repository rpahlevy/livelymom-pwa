<template>
  <q-page class='q-pa-md'>
    <h1 class='text-h4 text-center q-mb-sm'>{{ article.title.rendered }}</h1>
    <p v-html='article.content.rendered' />
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
  name: 'PostDetail',

  methods: {
    loadData: function () {
      this.$q.loading.show()
      this.$axios.get('/posts/' + this.$route.params.id)
        .then(response => {
          console.log(response)
          if (response.status && response.status === 200) {
            this.article = response.data
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
      article: {}
    }
  },

  mounted () {
    this.loadData()
  }
}
</script>
