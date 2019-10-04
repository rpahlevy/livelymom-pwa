<template>
  <q-layout view="hHh lpR fFf" class="bg-blue-grey-2">

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
    }
  }
}
</script>
