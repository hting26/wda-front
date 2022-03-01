<template lang="pug">
b-container#happytail
  h3.pageTitle.text-center 快樂時光 Happy Tail
  b-row
    b-col(cols='12' md='6')
      b-carousel#carousel(controls :interval="4000")
        b-carousel-slide(img-src='../assets/yulee/Yulee0.jpg')
        b-carousel-slide(img-src='../assets/yulee/Yulee00.jpg')
        b-carousel-slide(img-src='../assets/yulee/Yulee01.jpg')
        b-carousel-slide(img-src='../assets/yulee/Yulee02.jpg')
        b-carousel-slide(img-src='../assets/yulee/Yulee03.jpg')
        b-carousel-slide(img-src='../assets/yulee/Yulee04.jpg')
        b-carousel-slide(img-src='../assets/yulee/Yulee05.jpg')
    b-col(cols='12' md='6')
      b-card
        b-card-title  Yulee
        b-card-text 非常開心向大家宣布協會的小女孩Yulee已經找到新家人愛她一輩子，這個女孩是在水溝中被撿出來，如果沒有被發現，本來注定要孤單流浪度過餘生。而現在她已經成為有光明生活的幸運女神。請各位捐款協助支付Yulee的旅行費用共NT$14,100，我們持續需要各位的支持，讓我們有能力幫助更多很棒的狗狗們。
        b-card-text 小Yulee 出現在我們一個長期義工的家附近。她獨自坐在垃圾堆裡，周圍沒有其它狗的蹤影。我們的義工和家人每週都會到那個地方，從來都沒有看過Yulee 。我們不知道她是自己走進垃圾堆還是被遺棄的。Yulee 才三個月大，我們無法理解幼小的她為什麼會獨自出現在那麼鄉下的地方。我們推測她可能被人類當作孤兒般遺棄在這這裡。Yulee 是一個可愛健康的孩子，對人卻還是有些許防備。或許她獨自流浪久了，需要一些時間適應與狗群和人類相處的生活。她擁有非常好的學習能力，我們相信她很快就會找到永遠的家。

</template>
<style lang="scss">
#happytail {
  color: $dark2;
  .pageTitle {
    color: $accent;
    margin-bottom: 3rem;
  }
  #carousel {
    // width: 400px;
    // height: 400px;
  }
  .carousel-item img {
    // width: 200px;
    height: 400px;
    overflow: hidden;
    object-fit: cover;
  }
  @media (min-width:768px) {
    .carousel-item img {
      height: 500px;
      overflow: hidden;
      object-fit: cover;
    }
  }
}
</style>
