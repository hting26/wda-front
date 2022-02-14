<template lang="pug">
b-container#home
  h2.pagetitle 物資募集
    b-row
      b-col.my-2(cols='12' sm='4' lg='3' v-for='product in products' :key='product._id')
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
</style>
