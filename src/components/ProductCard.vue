<template lang="pug">
b-card.card-product(img-top :img-src='product.image')
  b-card-body
    b-card-title
      router-link(:to='"/product/" + product._id') {{ product.name }}
    b-card-sub-title {{ '$' + product.price }}
    b-card-text(style='white-space: pre') {{ product.description }}
    b-btn(@click='addCart') 加入物資籃
      b-icon.ml-1(icon='heart' style="width: 14px;")
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addCart () {
      this.$store.dispatch('user/addCart', { product: this.$route.params.id, quantity: this.quantity })
    }
  }
}
</script>

<style lang="scss">
.card-product {
  border: none;
  // width: 190px;
  .card-title a {
    color: $dark2;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
  }
  .card-img-top {
    max-height: 330px;
    object-fit: contain;
  }
}
</style>
