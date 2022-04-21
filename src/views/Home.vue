<template lang="pug">
#home
  b-container
    .titleText|Mary’s Doggies
    //- b-row.content
    b-card.overflow-hidden(no-body)
      b-row(no-gutters)
        b-col(md='6')
          b-card-body
              b-card-text
                |我們在Mary’s Doggies的主要任務，是替獲救的小狗們找到一個永遠有愛的家園，讓牠們重新擁有快樂的生活。
        b-col(md='6')
          b-card-img.rounded-0(src='../assets/home.jpg' alt='Image')
    b-card.overflow-hidden(no-body)
      b-row(no-gutters)
        b-col.lgImg(md='6')
          b-card-img.rounded-0(src='../assets/rescue.jpg' alt='Image')
        b-col(md='6')
          b-card-body
              b-card-text
                |而要達成這個目標，必須具有完整的過程，其中包含五項重要步驟：救援／醫療／中途寄養／訓練，最終目標是為找到牠們找到一個家。
        b-col.smImg(md='6')
          b-card-img.rounded-0(src='../assets/rescue.jpg' alt='Image')
    b-card.overflow-hidden(no-body)
      b-row(no-gutters)
        b-col(md='6')
          b-card-body
              b-card-text
                |我們投入了大量的時間、金錢和所有傷口疾病的醫療護理，以確保每隻狗都能做好充分準備，成為一名新進的優秀家庭成員。<br>謝謝大家一直以來對我們的支持及鼓勵，幫助這些狗狗們一路前進直達幸福。
        b-col(md='6')
          b-card-img.rounded-0(src='../assets/yulee/Yulee01.jpg' alt='Image')
    hr
    .subtitle you can help us
    .helpus
      router-link(to='/donate')
        .iconbox
          b-icon.icon.mr-2(icon='heart-fill')
          |捐贈
      router-link(to='/adoption')
        .iconbox
          b-icon.icon.mr-2(icon='pencil-square')
          |領養
</template>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import url('https://fonts.googleapis.com/css2?family=Modak&display=swap');
#home {
  text-align: center;
  .card {
    border: none;
    margin: 8rem 0;
  }
  .card-body {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .card-text {
    font-size: 1.3rem;
    color: $daccent;
    line-height: 2.5rem;
    font-weight: 700;
    text-align: left;
  }
  .helpus {
    display: flex;
    justify-content: center;
  }
  .iconbox {
    font-size: 2rem;
    color: $dark2;
    background-color: $secondary;
    padding: 15px;
    margin: 1rem 2rem;
    border-radius: 10px;
    transition: .3s;
    &:hover {
      box-shadow: 5px 5px 10px rgb(227, 227, 227);
    }
  }
  a:hover {
    text-decoration: none;
  }
}
.container {
  margin: 3rem auto;
}
.titleImg {
  margin: 4rem auto;
}
.titleText{
  font-family: 'Modak', cursive;
  font-size: calc(60px + 3vw);
  color: $accent;
  position: relative;
  line-height: 5rem;
  user-select: none;
  margin: 3.5rem 0;
}
.subtitle{
  font-size: 3.5rem;
  color: $daccent;
  position: relative;
  line-height: 5rem;
  user-select: none;
  margin: 5rem 0;
  font-weight: 700;
  font-style: italic;
}
.lgImg {
  display: none;
}
.text {
  margin: 1rem 0 auto;
  color: $dark2;
  line-height: 2.2rem;
  font-size: 1.1rem;
}
.rescueImg {
  margin-bottom: 5rem;
}
.homeImg {
  margin: 2rem 0;
  object-fit: cover;
}
@media (min-width:768px) {
  .content {
    padding: 4rem 5rem;
  }
  .text {
    margin: 2rem 0 auto;
  }
  .lgImg {
    display: block;
  }
  .smImg {
    display: none;
  }
}
@media (min-width:992px) {
  .text {
    margin: 0 auto;
    font-size: 1.2rem;
    line-height: 2.3rem;
  }
  #home .col-12 {
    display: flex;
    justify-content: center;
}
}
</style>
