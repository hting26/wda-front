<template lang="pug">
b-container#happytail
  h2.pageTitle.text-center 快樂時光 Happy Tail
  b-row
    b-col(cols='12' xl='6')
      b-carousel#carousel(controls :interval="4000")
        b-carousel-slide(img-src='../assets/carousel1.jpg')
        b-carousel-slide(img-src='../assets/carousel2.jpg')
        b-carousel-slide(img-src='../assets/carousel3.jpg')
        b-carousel-slide(img-src='../assets/carousel4.jpg')
    b-col(cols='12' xl='6')
      b-card
        b-card-title  dog.name
        b-card-text 非常開心向大家宣布協會的小女孩Yulee已經找到新家仁愛她一輩子，這個女孩一開始是在水溝中被撿出來，如果沒有被發現，本來注定要孤單流浪度過餘生。而現在她已經成為有光明生活的幸運女神。請各位捐款協助支付Yulee的旅行費用共NT$14,100，我們持續需要各位的支持，讓我們有能力幫助更多很棒的狗狗們。

</template>
<style lang="scss">
#happytail {
  color: $dark2;
  .pageTitle {
    color: $accent;
  }
  #carousel {
    // width: 400px;
    // height: 400px;
  }
}
</style>
