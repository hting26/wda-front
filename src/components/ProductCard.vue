<template lang="pug">
b-card.card-product(img-top :img-src='product.image')
  b-card-body
    b-card-title {{ product.name }}
    b-card-sub-title.mb-2 {{ '$' + product.price }}
    b-card-text(style='white-space: pre-line') {{ product.description }}
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
      this.$store.dispatch('user/addCart', { product: this.product._id, quantity: 1 })
    }
  }
}
</script>

<style lang="scss">
.card-product {
  border: none;
  .card-title {
    color: $dark2;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
  }
  .card-img-top {
    max-height: 150px;
    object-fit: contain;
  }
  .card-text {
    font-size: 15px;
    text-align: left;
  }
  .btn {
    border: $accent;
    background: $accent;
    color: #fff;
  }
}
</style>
