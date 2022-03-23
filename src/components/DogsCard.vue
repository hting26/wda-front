<template lang="pug">
#dogscard
  b-card.dogCard(img-top :img-src='dog.image')
    b-card-body(@click='more')
      b-card-title {{ dog.name }}
      b-card-text(style='white-space: pre-line') {{ dog.description }}
    b-card-footer
      b-btn.mx-2(@click='more') 閱讀更多
      b-btn.applyBtn.mx-2(@click='apply') 申請領養
  b-modal.modalMore(
    :id="'modal-more'+ dog._id"
    hide-footer
    scrollable
    :title="dog.name"
    text-center
    no-stacking
  )
    img.moreImg(:src='dog.image' style='width: 100%;')
    p(style="white-space: pre-line; margin:2rem 0;") {{ dog.description }}
    b-btn.applyBtn(@click='apply'  style='') 申請領養
  b-modal(
    title="申請領養"
    @ok="submitApply"
    :id="'modal-apply'+ dog._id"
    :ok-disabled="modalSubmitting"
    :cancel-disabled="modalSubmitting"
    @hidden="resetForm"
    ok-variant='accent'
    cancel-variant='light'
    ok-title='送出'
    cancel-title='取消'
    )
    div.my-3
      img.mx-auto.img-fluid.d-block.mb-3(:src='dog.image' style='width: 230px')
      h6.text-center {{ dog.name }}
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
        placeholder='請介紹一下自己並詳細說明欲領養的動機'
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
        dog: '',
        status: '已送出'
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
        this.form = {
          name: '',
          phone: '',
          description: '',
          dog: ''
        }
        this.$bvModal.hide('modal-apply' + this.dog._id)
        this.modalSubmitting = false
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
    // more (index) {
    //   const thisId = this.dogs[index]._id
    //   this.$bvModal.show('modal-more' + thisId)
    // },
    more () {
      this.$bvModal.show('modal-more' + this.dog._id)
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
        description: '',
        dog: ''
      }
    }
  }
}
</script>

<style lang="scss">
.dogCard {
  border: none;
  box-shadow: 0px 5px 15px rgb(223, 223, 223);
  transition: .5s;
    &:hover {
    transform: scale(1.015);
  }
  .card-title {
    color: $dark2;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
  }
  .card-body {
    cursor: pointer;
  }
  .card-img-top {
    object-fit: cover;
    max-height: 390px;
  }
  .card-text {
    font-size: 17px;
    text-align: left;
    color: $dark2;
    line-height: 1.7rem;
    // 多行文字省略號
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
  }
  .btn{
    color: $dark2;
    font-size: 17px;
  }
  .card-footer {
    background: none;
    border: none;
    cursor: default;
  }
}
#dogscard .applyBtn {
  background-color: $accent;
  color: #fff;
  border: $primary;
  &:hover {
    background-color: #e6a83e;
    color: #fff;
  }
  &:focus {
    background-color: $accent;
    color: #fff;
    border: $primary;
  }
}.btn-accent {
  color: #fff;
}
.modal-header {
  background-color: $primary;
  text-align: center;
  color: $accent;
  }
* {
  transition: .5s;
}
</style>
