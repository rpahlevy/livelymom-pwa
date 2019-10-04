<template>
  <q-page class='q-pt-md'>
    <div class='q-mb-lg q-px-lg'>
      <router-link to="/">
        <q-btn outline size='md' color='pink-5' class='q-mt-md'>
          <q-icon name='arrow_left'></q-icon>
          Kembali
        </q-btn>
      </router-link>
      <h1 class='text-h4 text-grey-9 text-bold q-mb-sm' style='line-height: 1.25'>{{ article.title.rendered }}</h1>
      <p class='text-subtitle1'>{{ article.date }}</p>
    </div>
    <q-card flat style='border-radius: 30px 30px 0 0'>
      <q-card-section class='q-px-lg q-py-lg'>
        <p v-html='article.content.rendered' class='q-mt-sm text-body1 post-content' />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PostDetail',

  data () {
    return {
      article: {}
    }
  },

  mounted () {
    this.loadData()
  },

  methods: {
    loadData: function () {
      this.$q.loading.show()
      this.$axios.get('/posts/' + this.$route.params.id)
        .then(response => {
          // console.log(response)
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
  }
}
</script>
