<template lang="pug">
b-card.card-adoption(img-top :img-src='dog.image')
  b-card-body
    b-card-title {{ dog.name }}
    b-card-text(style='white-space: pre-line') {{ dog.description }}
    b-btn(@click='apply') 申請領養
  b-modal(
    title="申請領養"
    @ok="submitApply"
    :id="'modal-apply'+ dog._id"
    :ok-disabled="modalSubmitting"
    :cancel-disabled="modalSubmitting"
    @hidden="resetForm"
    )
    div.my-3
      img.mx-auto.img-fluid.d-block.mb-3(:src='dog.image' style='width: 150px')
      h6.text-center 狗狗名字： {{ dog.name }}
    b-form-group(
      label='申請人姓名'
      label-for='input-name'
      description='必填欄位'
      invalid-feedback='申請人姓名必填'
      :state='state.name'
    )
      b-form-input#input-name(
        v-model='form.name'
        type='text'
        required
      )
    b-form-group(
      label='連絡電話'
      label-for='input-phone'
      description='必填欄位'
      invalid-feedback='連絡電話必填'
      :state='state.phone'
    )
      b-form-input#input-phone(
        v-model='form.phone'
        type='text'
        required
      )
    b-form-group(
      label='詳細說明'
      label-for='input-description'
      description='必填欄位'
      invalid-feedback='詳細說明必填'
      :state='state.description'
    )
      b-form-textarea#input-description(
        v-model='form.description'
        rows="6"
        required
      )
</template>

<script>
import validator from 'validator'
export default {
  data () {
    return {
      form: {
        name: '',
        phone: '',
        description: '',
        dogName: 'dog.name',
        dog: 'dog._id'
      },
      modalSubmitting: false
    }
  },
  props: {
    dog: {
      type: Object,
      required: true
    }
  },
  computed: {
    state () {
      return {
        name: this.form.name.length === 0 ? null : true,
        phone: this.form.phone === 0 ? null : validator.isNumeric(this.form.phone),
        description: this.form.description.length === 0 ? null : true
      }
    }
  },
  methods: {
    async submitApply (event) {
      event.preventDefault()
      if (!this.state.name || !this.state.phone || !this.state.description) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '缺少必填欄位'
        })
        return
      }
      this.modalSubmitting = true

      try {
        await this.api.post('/adoptions', this.form, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '申請已送出'
        })
        this.$bvModal.hide('modal-apply' + this.dog._id)
        console.log('999')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '申請送出失敗'
        })
      }
    },
    apply () {
      this.$bvModal.show('modal-apply' + this.dog._id)
      this.form.dog = this.dog._id
    },
    resetForm (event) {
      if (this.modalSubmitting) {
        event.preventDefault()
        return
      }
      this.form = {
        name: '',
        phone: '',
        description: ''
      }
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
