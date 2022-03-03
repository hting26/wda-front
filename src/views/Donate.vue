<template lang="pug">
b-container#donate
  h3.pageTitle 物資募集 Donate
  b-icon(icon='caret-down', v-b-toggle.collapse-3 variant='accent')
  b-collapse#collapse-3(visible)
    .pageText 瑪莉愛狗協會是非營利的救援組織，已經救援了數千隻狗找到幸福的家。<br>而且也努力要救更多的流浪狗，不僅為了替牠們找到可以遮風避雨的家，也要牠們過更好的生活!<br>然而，要持續又長期的救援， 需要一連串的費用與龐大的醫療支出。<br>我們需要大眾的援助，也需要募集每個月所需要的飼料、蚤不到與犬心寶等等狗兒專用的物品，來維持協會的正常運作，做更多的救援。我們竭誠歡迎也期盼您們都夠即時捐出善款，來幫助我們所需要的醫療與每月的物品清單!<br>請大家能夠幫忙宣揚，投入我們的行列，也期待更多的人可以共襄盛舉來完成這浩大工程，感謝您!
  b-row.mt-5
    b-col.my-2(cols='12' sm='6' lg='3' v-for='product in products' :key='product._id')
      ProductCard(:product='product')
  h3.pageTitle.my-3 我要捐款 Donate
  a.href(href='https://www.facebook.com/marysdoggies/').pageText 感謝您的愛心，請點此線上捐款:)
  template
    swiper.swiper(:options='swiperOption')
      swiper-slide
        img(src='../assets/vo1.png')
      swiper-slide
        img(src='../assets/vo2.png')
      swiper-slide
        img(src='../assets/vo3.png')
      swiper-slide
        img(src='../assets/vo4.png')
      swiper-slide
        img(src='../assets/vo5.png')
      .swiper-button-prev(slot='button-prev')
      .swiper-button-next(slot='button-next')
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    ProductCard,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      products: [],
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
  },
  async created () {
    try {
      const { data } = await this.api.get('/products')
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '商品取得失敗'
      })
    }
  }
}
</script>
<style lang="scss">
#donate {
  text-align: center;
  .pageTitle {
    color: $accent;
  }
  .pageText {
    width: 67%;
    margin: auto;
    color: $daccent;
  }
  .b-icon {
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  a {
    text-decoration: none;
  }
  .swiper {
    margin: 3rem 0;
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
  }
}
</style>
