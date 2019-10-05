<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">Ups... Halaman tidak ditemukan</p>
    <q-btn
      color="pink-5"
      style="padding:0 2rem;"
      to="/"
      label="Kembali"
    />
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
