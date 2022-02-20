<template lang="pug">
b-card.card-adoption(img-top :img-src='dog.image')
  b-card-body
    b-card-title {{ dog.name }}
    b-card-text(style='white-space: pre-line') {{ dog.description }}
    b-btn(@click='apply(dog.index)') 申請領養
  b-modal#modal-apply
    |555
  //- b-modal#modal-apply(
  //-   size="lg"
  //-   centered
  //-   ok-variant='success'
  //-   ok-title='送出'
  //-   cancel-variant='danger'
  //-   cancel-title='取消'
  //-   @ok="submitModal"
  //-   @hidden="resetForm"
  //-   :ok-disabled="modalSubmitting"
  //-   :cancel-disabled="modalSubmitting"
  //- )
</template>

<script>
export default {
  props: {
    dog: {
      type: Object,
      required: true
    }
  },
  methods: {
    // addCart () {
    //   this.$store.dispatch('user/addCart', { product: this.product._id, quantity: 1 })
    // }
    apply (index) {
      // this.form = { ...this.dogs[index], index }
      this.$bvModal.show('modal-apply')
    }
  }
}
</script>

<style lang="scss">
.card-adoption {
  border: none;
  background-color: rgb(248, 244, 239);
  // width: 190px;
  .card-title {
    color: $dark2;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
  }
  .card-img-top {
    // max-height: 550px;
    object-fit: contain;
  }
  .card-text {
    font-size: 17px;
    text-align: left;
  }
  .btn{
    color: $dark2;
    // font-weight: 600;
    font-size: 17px;
  }
}
</style>
