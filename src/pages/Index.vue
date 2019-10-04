<template>
  <q-page class='q-pa-md'>
    <h1 class='text-h4 text-center q-mb-sm'>{{ title }}</h1>
    <p class='text-body1 text-center text-blue-grey-6 q-mb-lg' v-html='description' />

    <q-card v-for='item in items' class='q-mb-md' square bordered :key='item.id'>
      <q-card-section class=''>
        <div class='text-h6 q-mb-sm line-clamp-2'>
          <router-link to='/detail' class='text-grey-8 hide-underline'>
            {{ item.title }}
          </router-link>
        </div>

        <p class='text-body2 text-blue-grey-8 q-mb-md line-clamp-3' v-html='substr(item.content_text)' />

        <div class='row items-center justify-between'>
          <div class='text-subtitle2'>
            <span class='text-pink-5'>{{ item.author.name }}</span> -
            <span class='text-blue-grey-4'>1 hari yang lalu</span>
          </div>
          <div>
            <q-btn round size='sm' color='pink-5' icon='share'></q-btn>
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
    }
  },

  data () {
    return {
      'version': 'https://jsonfeed.org/version/1',
      'user_comment': 'This feed allows you to read the posts from this site in any feed reader that supports the JSON Feed format. To add this feed to your reader, copy the following URL -- https://livelymom.com/feed/json -- and add it your reader.',
      'home_page_url': 'https://livelymom.com',
      'feed_url': 'https://livelymom.com/feed/json',
      'title': 'Lively Mom',
      'description': 'Cerita &amp; Tips Kehamilan, Melahirkan, Menyusui, dan Parenting',
      'items': [
        {
          'id': 'https://livelymom.com/238/5-pertanyaan-penting-saat-pertama-usg',
          'url': 'https://livelymom.com/238/5-pertanyaan-penting-saat-pertama-usg',
          'title': '5 Pertanyaan Penting saat Pertama USG yang Wajib Bunda Ketahui',
          'content_html': '<p>Halo, Bunda! Selamat datang di livelymom.com! Memeriksakan kehamilan untuk pertama kalinya adalah momen yang paling ditunggu oleh Bunda yang sedang mengandung. Bunda dapat mengetahui kondisi si Kecil yang baru saja berkembang. Tapi jangan lupa bun, ada pertanyaan yang mesti Bunda tanyakan ke dokter Bunda. Apa saja pertanyaan penting saat pertama USG? Kecanggihan teknologi yang berupa &#8230; </p>\n<p class=\'link-more\'><a href=\'https://livelymom.com/238/5-pertanyaan-penting-saat-pertama-usg\' class=\'more-link\'>Continue reading<span class=\'screen-reader-text\'> \'5 Pertanyaan Penting saat Pertama USG yang Wajib Bunda Ketahui\'</span></a></p>\n<p>The post <a rel=\'nofollow\' href=\'https://livelymom.com/238/5-pertanyaan-penting-saat-pertama-usg\'>5 Pertanyaan Penting saat Pertama USG yang Wajib Bunda Ketahui</a> appeared first on <a rel=\'nofollow\' href=\'https://livelymom.com\'>Lively Mom</a>.</p>\n',
          'content_text': 'Halo, Bunda! Selamat datang di livelymom.com! Memeriksakan kehamilan untuk pertama kalinya adalah momen yang paling ditunggu oleh Bunda yang sedang mengandung. Bunda dapat mengetahui kondisi si Kecil yang baru saja berkembang. Tapi jangan lupa bun, ada pertanyaan yang mesti Bunda tanyakan ke dokter Bunda. Apa saja pertanyaan penting saat pertama USG? Kecanggihan teknologi yang berupa &#8230; \nContinue reading \'5 Pertanyaan Penting saat Pertama USG yang Wajib Bunda Ketahui\'\nThe post 5 Pertanyaan Penting saat Pertama USG yang Wajib Bunda Ketahui appeared first on Lively Mom.',
          'date_published': '2018-07-20T08:25:02+07:00',
          'date_modified': '2018-07-20T02:59:17+07:00',
          'author': {
            'name': 'Ersinta Elfandari',
            'url': 'https://livelymom.com/author/ersinta-elfandari',
            'avatar': 'https://secure.gravatar.com/avatar/21b9d0b18e86769e6ba6ce25a1477ec4?s=512&d=mm&r=g'
          },
          'tags': [
            'awal kehamilan',
            'pengalaman pribadi',
            'periksa',
            'persiapan kehamilan',
            'trimester pertama',
            'Blog'
          ]
        },
        {
          'id': 'https://livelymom.com/237/perlengkapan-yang-harus-dibawa-saat-melahirkan',
          'url': 'https://livelymom.com/237/perlengkapan-yang-harus-dibawa-saat-melahirkan',
          'title': 'Perlengkapan yang Harus Dibawa saat Melahirkan',
          'content_html': '<p>Halo, Bunda! Selamat datang di livelymom.com! Melahirkan adalah saat yang sangat ditunggu oleh ibu hamil. Sayangnya, kadang momen ini terjadi secara tiba-tiba dan tidak dapat diprediksi. Jangan sampai ada barang yang tertinggal! Berikut adalah daftar perlengkapan yang harus dibawa saat melahirkan. Ketika kontraksi sudah tidak tertahankan, Bunda harus siap pergi ke rumah sakit. Kapanpun itu. &#8230; </p>\n<p class=\'link-more\'><a href=\'https://livelymom.com/237/perlengkapan-yang-harus-dibawa-saat-melahirkan\' class=\'more-link\'>Continue reading<span class=\'screen-reader-text\'> \'Perlengkapan yang Harus Dibawa saat Melahirkan\'</span></a></p>\n<p>The post <a rel=\'nofollow\' href=\'https://livelymom.com/237/perlengkapan-yang-harus-dibawa-saat-melahirkan\'>Perlengkapan yang Harus Dibawa saat Melahirkan</a> appeared first on <a rel=\'nofollow\' href=\'https://livelymom.com\'>Lively Mom</a>.</p>\n',
          'content_text': 'Halo, Bunda! Selamat datang di livelymom.com! Melahirkan adalah saat yang sangat ditunggu oleh ibu hamil. Sayangnya, kadang momen ini terjadi secara tiba-tiba dan tidak dapat diprediksi. Jangan sampai ada barang yang tertinggal! Berikut adalah daftar perlengkapan yang harus dibawa saat melahirkan. Ketika kontraksi sudah tidak tertahankan, Bunda harus siap pergi ke rumah sakit. Kapanpun itu. &#8230; \nContinue reading \'Perlengkapan yang Harus Dibawa saat Melahirkan\'\nThe post Perlengkapan yang Harus Dibawa saat Melahirkan appeared first on Lively Mom.',
          'date_published': '2018-07-17T20:13:07+07:00',
          'date_modified': '2018-08-18T18:23:58+07:00',
          'author': {
            'name': 'Ersinta Elfandari',
            'url': 'https://livelymom.com/author/ersinta-elfandari',
            'avatar': 'https://secure.gravatar.com/avatar/21b9d0b18e86769e6ba6ce25a1477ec4?s=512&d=mm&r=g'
          },
          'tags': [
            'kelahiran',
            'pengalaman pribadi',
            'persiapan melahirkan',
            'pra kelahiran',
            'tips melahirkan',
            'Blog'
          ]
        },
        {
          'id': 'https://livelymom.com/182/hpl-di-usg-berbeda-dengan-kalender-mencapai-satu-bulan',
          'url': 'https://livelymom.com/182/hpl-di-usg-berbeda-dengan-kalender-mencapai-satu-bulan',
          'title': 'HPL di USG Berbeda dengan Kalender Mencapai Satu Bulan',
          'content_html': '<p>Halo, Bunda! Selamat datang di livelymom.com! Dengan kemajuan teknologi yang ada, sekarang Hari Perkiraan Lahir (HPL) dapat dilihat dari hasil USG. Namun bagaimana jika HPL di USG berbeda dengan kalender? Saya sendiri mengalami selisih hingga hampir satu bulan! Simak cerita selengkapnya. Seperti yang telah kita ketahui, kehamilan adalah masa-masa tak terlupakan yang berlangsung selama kurang &#8230; </p>\n<p class=\'link-more\'><a href=\'https://livelymom.com/182/hpl-di-usg-berbeda-dengan-kalender-mencapai-satu-bulan\' class=\'more-link\'>Continue reading<span class=\'screen-reader-text\'> \'HPL di USG Berbeda dengan Kalender Mencapai Satu Bulan\'</span></a></p>\n<p>The post <a rel=\'nofollow\' href=\'https://livelymom.com/182/hpl-di-usg-berbeda-dengan-kalender-mencapai-satu-bulan\'>HPL di USG Berbeda dengan Kalender Mencapai Satu Bulan</a> appeared first on <a rel=\'nofollow\' href=\'https://livelymom.com\'>Lively Mom</a>.</p>\n',
          'content_text': 'Halo, Bunda! Selamat datang di livelymom.com! Dengan kemajuan teknologi yang ada, sekarang Hari Perkiraan Lahir (HPL) dapat dilihat dari hasil USG. Namun bagaimana jika HPL di USG berbeda dengan kalender? Saya sendiri mengalami selisih hingga hampir satu bulan! Simak cerita selengkapnya. Seperti yang telah kita ketahui, kehamilan adalah masa-masa tak terlupakan yang berlangsung selama kurang &#8230; \nContinue reading \'HPL di USG Berbeda dengan Kalender Mencapai Satu Bulan\'\nThe post HPL di USG Berbeda dengan Kalender Mencapai Satu Bulan appeared first on Lively Mom.',
          'date_published': '2018-07-08T08:00:54+07:00',
          'date_modified': '2018-07-11T23:33:14+07:00',
          'author': {
            'name': 'Ersinta Elfandari',
            'url': 'https://livelymom.com/author/ersinta-elfandari',
            'avatar': 'https://secure.gravatar.com/avatar/21b9d0b18e86769e6ba6ce25a1477ec4?s=512&d=mm&r=g'
          },
          'tags': [
            'hari perkiraan lahir',
            'hpl',
            'pengalaman pribadi',
            'perhitungan kalender',
            'perkembangan kehamilan',
            'Blog'
          ]
        }
      ]
    }
  }
}
</script>
