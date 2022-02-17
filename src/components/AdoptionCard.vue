<template lang="pug">
b-card.card-adoption(img-top :img-src='dog.image')
  b-card-body
    b-card-title {{ dog.name }}
    b-card-text(style='white-space: pre-line') {{ dog.description }}
    b-btn(@click='apply') 申請領養
      b-icon.ml-1(icon='heart' style="width: 14px;")
</template>

<script>
export default {
  props: {
    dog: {
      type: Object,
      required: true
    }
  }
  // methods: {
  //   addCart () {
  //     this.$store.dispatch('user/addCart', { product: this.product._id, quantity: 1 })
  //   }
  // }
}
</script>

<style lang="scss">
.card-adoption {
  border: none;
  // width: 190px;
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
}
</style>
