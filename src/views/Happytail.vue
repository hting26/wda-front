<template lang="pug">
b-container#happytail
  h3.pageTitle.text-center 快樂時光 Happy Tail
  b-row.my-5
    template
      swiper.swiper(:options='swiperOption')
        swiper-slide
          img(src='../assets/yulee/Yulee0.jpg')
        swiper-slide
          img(src='../assets/yulee/Yulee00.jpg')
        swiper-slide
          img(src='../assets/yulee/Yulee01.jpg')
        swiper-slide
          img(src='../assets/yulee/Yulee02.jpg')
        swiper-slide
          img(src='../assets/yulee/Yulee03.jpg')
        swiper-slide
          img(src='../assets/yulee/Yulee04.jpg')
        swiper-slide
          img(src='../assets/yulee/Yulee05.jpg')
        .swiper-button-prev(slot='button-prev')
        .swiper-button-next(slot='button-next')
    b-card.my-3
      b-card-title.text-center  Yulee
      b-card-text 小Yulee 出現在我們一個長期義工的家附近。她獨自坐在垃圾堆裡，周圍沒有其它狗的蹤影。我們的義工和家人每週都會到那個地方，從來都沒有看過Yulee 。我們不知道她是自己走進垃圾堆還是被遺棄的。Yulee 才三個月大，我們無法理解幼小的她為什麼會獨自出現在那麼鄉下的地方。我們推測她可能被人類當作孤兒般遺棄在這這裡。Yulee 是一個可愛健康的孩子，對人卻還是有些許防備。或許她獨自流浪久了，需要一些時間適應與狗群和人類相處的生活。她擁有非常好的學習能力，我們相信她很快就會找到永遠的家。
      b-card-text 非常開心向大家宣布協會的小女孩Yulee已經找到新家人愛她一輩子，這個女孩是在水溝中被撿出來，如果沒有被發現，本來注定要孤單流浪度過餘生。而現在她已經成為有光明生活的幸運女神。請各位捐款協助支付Yulee的旅行費用共NT$14,100，我們持續需要各位的支持，讓我們有能力幫助更多很棒的狗狗們。
  b-row.my-5
      template
        swiper.swiper(:options='swiperOption')
          swiper-slide
            img(src='../assets/yulee/Yulee0.jpg')
          swiper-slide
            img(src='../assets/yulee/Yulee00.jpg')
          swiper-slide
            img(src='../assets/yulee/Yulee01.jpg')
          swiper-slide
            img(src='../assets/yulee/Yulee02.jpg')
          swiper-slide
            img(src='../assets/yulee/Yulee03.jpg')
          swiper-slide
            img(src='../assets/yulee/Yulee04.jpg')
          swiper-slide
            img(src='../assets/yulee/Yulee05.jpg')
          .swiper-button-prev(slot='button-prev')
          .swiper-button-next(slot='button-next')
      b-card.my-3
        b-card-title.text-center  Yulee
        b-card-text 小Yulee 出現在我們一個長期義工的家附近。她獨自坐在垃圾堆裡，周圍沒有其它狗的蹤影。我們的義工和家人每週都會到那個地方，從來都沒有看過Yulee 。我們不知道她是自己走進垃圾堆還是被遺棄的。Yulee 才三個月大，我們無法理解幼小的她為什麼會獨自出現在那麼鄉下的地方。我們推測她可能被人類當作孤兒般遺棄在這這裡。Yulee 是一個可愛健康的孩子，對人卻還是有些許防備。或許她獨自流浪久了，需要一些時間適應與狗群和人類相處的生活。她擁有非常好的學習能力，我們相信她很快就會找到永遠的家。
        b-card-text 非常開心向大家宣布協會的小女孩Yulee已經找到新家人愛她一輩子，這個女孩是在水溝中被撿出來，如果沒有被發現，本來注定要孤單流浪度過餘生。而現在她已經成為有光明生活的幸運女神。請各位捐款協助支付Yulee的旅行費用共NT$14,100，我們持續需要各位的支持，讓我們有能力幫助更多很棒的狗狗們。

</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 4000,
          disableOninteraction: false
        },
        breakpoints: {
          1200: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          }
        }
      }
    }
  }
}
</script>
<style lang="scss">
#happytail {
  color: $dark2;
  .pageTitle {
    color: $accent;
    margin-bottom: 3rem;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }
  .carousel-item img {
    // width: 200px;
    height: 400px;
    overflow: hidden;
    object-fit: cover;
  }
  @media (min-width:768px) {
    .carousel-item img {
      height: 500px;
      overflow: hidden;
      object-fit: cover;
    }
  }
}
</style>
