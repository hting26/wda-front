<template lang="pug">
#home
  b-carousel#carousel-fade(fade, controls,:interval="2000", img-width='1024', img-height='480')
    b-carousel-slide(img-src='../assets/carousel1.jpg' style="width: 1024; height: 480; object-fit: cover;" )
    b-carousel-slide(img-src='../assets/carousel2.jpg' style="width: 1024; height: 480; object-fit: cover;")
    b-carousel-slide(img-src='../assets/carousel3.jpg' style="object-fit: cover;")
    b-carousel-slide(img-src='../assets/carousel4.jpg')
  b-container#home
    //- .titletext|Mary’s Doggies
    b-row.content
      //- b-img.titleImg(src="../assets/marrysDog.png" fluid)
      b-col(cols='12' lg='6')
        b-img.homeImg(src="../assets/home.jpg" fluid)
      b-col.text(cols='12' lg='6')
        | Our mission at Mary’s Doggies is to find loving forever homes for our rescued dogs so that each dog can live a happy life. The complete process involves these 5 important steps: Rescue, Medical, Foster, Train, and eventually finding them a Home. We devote tremendous amount of time, money, and care to ensure that each dog is fully prepared to be your new family member. Thank you everyone for supporting us and helping the doggies along the way.<br><br>
        | 我們在Mary’s Doggies的主要任務，是替獲救的小狗們找到一個永遠有愛的家園，讓牠們重新擁有一個快樂的生活。而要達成這個目標，必須具有完整的過程，其中包含五項重要步驟：救援／醫療／中途寄養／訓練，最終目標是為找到牠們找到一個家。我們投入了大量的時間、金錢和所有傷口疾病的醫療護理，以確保每隻狗都能做好充分準備，成為一名新進的優秀家庭成員。謝謝大家一直以來對我們的支持及鼓勵，幫助這些狗狗們一路前進直達幸福。
    b-img.rescueImg(src="../assets/rescue.jpg" fluid)
</template>
<style lang="scss">
#home {
  text-align: center;
}
.container {
  margin: 5rem auto;
}
.titleImg {
  margin: 4rem auto;
}
.titletext{
  font-family: 'Modak', cursive;
  font-size: 72px;
}
.content {
  padding: 4rem 2rem;
  border-radius: 4rem;
  border: .8rem solid $accent;
  background-color: $primary;
  text-align: left;
  margin: 8rem .5rem;
}
.text {
  margin: 1rem 0 auto;
  color: $dark2;
}
.rescueImg {
  margin: 1rem 0 auto;
}
.homeImg {
  // width: 100px;
  object-fit: cover;
}
@media (min-width:768px) {
  .content {
    padding: 5rem 2rem;
  }
  .text {
    margin: 2rem 0 auto;
  }
}

@media (min-width:992px) {
  .text {
    margin: 0 auto;
  }
}
</style>
<!--
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script> -->
