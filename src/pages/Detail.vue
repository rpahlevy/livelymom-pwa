<template>
  <q-page class='q-pa-md'>
    <h1 class='text-h4 text-center q-mb-sm'>Detail</h1>
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
    substr: function (str) {
      return str.length > 120 ? str.substr(0, 117) + '...' : str
    }
  },

  data () {
    return {
    }
  },

  mounted () {
    // console.log(this.$axios)
  }
}
</script>
