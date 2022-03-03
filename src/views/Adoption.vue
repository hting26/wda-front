<template lang="pug">
b-container#donate
  h3.pageTitle 領養 Adoption
  b-icon(icon='caret-down', v-b-toggle.collapse-3 variant='accent')
  b-collapse#collapse-3(visible)
    .pageText 瑪莉愛狗協會是非營利的救援組織，已經救援了數千隻狗找到幸福的家!
  b-row.mt-5
    b-col.my-3(cols='12' xl='6' v-for='dog in dogs' :key='dog._id')
      DogCard(:dog='dog')
</template>

<script>
import DogCard from '../components/DogsCard.vue'

export default {
  components: {
    DogCard
  },
  data () {
    return {
      dogs: []
    }
  },
  methods: {
    showMsgOk () {
      const h = this.$createElement
      // Using HTML string
      const titleVNode = h('div', { domProps: { innerHTML: 'Title from <i>HTML<i> string' } })
      // More complex structure
      const messageVNode = h('div', { class: ['foobar'] }, [
        h('p', { class: ['text-center'] }, [
          ' Flashy ',
          h('strong', 'msgBoxOk'),
          ' message '
        ]),
        h('b-img', {
          props: {
            src: 'https://picsum.photos/id/20/250/250',
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: 'circle'
          }
        })
      ])
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: 'sm',
        centered: true,
        size: 'sm'
      })
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/dogs')
      this.dogs = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得失敗'
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
}
</style>
