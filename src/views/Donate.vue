<template lang="pug">
b-container#donate
  //- b-collapse#collapse-3(visible='')
  //-   b-card I should start open!
  h3.pageTitle 物資募集
  b-icon(icon='caret-down', v-b-toggle.collapse-3 variant='accent')
  b-collapse#collapse-3(visible)
    .pageText 瑪莉愛狗協會是非營利的救援組織，已經救援了數千隻狗找到幸福的家!<br>而且也更努力要救更多的流浪狗!不僅為了替他們找到可以遮風避雨的家，也要它們過更好的生活!<br>然而，要持續又長期的救援， 需要一連串的費用與龐大的醫療支出!<br>我們需要大眾的援助，也需要募集每個月所需要的飼料，蚤不到與犬心寶等等狗兒專用的物品,來維持協會的正常運作，做更多的救援!我們竭誠歡迎也期盼您們都夠即時捐出善款，來幫助我們所需要的醫療與每月的物品清單!<br>請大家能夠幫忙宣揚，投入我們的行列，也期待更多的人可以共襄盛舉來完成這浩大工程，感謝您!!
  b-row.mt-5
    b-col.my-2(cols='12' sm='6' lg='3' v-for='product in products' :key='product._id')
      ProductCard(:product='product')
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  data () {
    return {
      products: []
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
  }
}
</style>
