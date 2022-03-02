<template lang="pug">
b-container#volunteer
  h3.pageTitle.text-center 招募志工
  b-icon(icon='caret-down', v-b-toggle.collapse-3 variant='accent')
  b-collapse#collapse-3(visible)
    .pageText 誠徵義工!!我們需要您的幫忙!如果你願意當義工幫忙流浪狗.請與我聯絡!

  b-card.overflow-hidden(no-body)
    b-row(no-gutters)
      b-col(lg='6')
        b-card-img.rounded-0(src='../assets/Volunteer1.png' alt='Image')
      b-col(lg='6')
        b-card-body(title='FLIGHT GUARDIAN / 護犬大使')
            b-card-text(v-b-tooltip.hover.right="'Every month we need flight guardians to help fly our rescued dogs to their loving forever homes abroad in San Francisco, Los Angeles, Seattle in United States and Vancouver and Toronto in Canada. We will take care of all the necessary paperwork. Our volunteers and adopting families abroad will be at the airport to meet you and the doggies on arrival at the airport. The process is very simple! All we will need from you is your passport copy and itinerary in order for us to process the dogs’ paperwork. All expenses will be taken care by us. Please help us so the doggies can have a chance to be in a loving home and we have space to rescue another dog in desperate need.'"
            variant='danger')
              |每一個月我們都需要護犬大使幫忙帶我們救援的狗，飛向它們在美國的舊金山/洛杉磯/西雅圖與加拿大溫哥華/多倫多的認養家庭!<br>我們會處理所有的出國手續與費用.在台灣義工都會在機場與您們見面.所有的狗都會由義工安排到入機艙! 國外的認養家庭與國外的義工都會在您到達的時候去接機帶狗! <br>您只要幫忙我們把出口文件攜帶給國外的海關與義工.沒有增加任何費用.對您所攜帶的行李也沒有影響! 所有的費用都會由我們支付!<br>請幫忙這些找到幸福的狗能夠早日幸福啟航. 這樣我們才有空間可以救援後面更多的狗
  b-card.overflow-hidden(no-body)
    b-row(no-gutters)
      b-col.smImg(lg='6')
        b-card-img.rounded-0(src='../assets/Volunteer2.png' alt='Image')
      b-col(lg='6')
        b-card-body(title='VOLUNTEER / 日常志工')
            b-card-text(v-b-tooltip.hover.right="'We welcome you to volunteer your spare time to help our doggies while we get them ready for their forever homes. Any help is welcome like walking, bathing, playing or just sitting quietly next to them. We also need help with transporting them to the vets for checkups and helping at the airport before they fly to their forever homes.'"
            variant='danger')
              |由於到處都有無家可歸的流浪狗.我們經常整個場地都是滿滿的狗.所以必須有人可以先行中途，直到我的地方有空間後，才能接回家加以訓練!<br>進行為找家的先前作業!如果你願意成為我們的中途家庭. 希望您有基本的一些養狗經驗與常識!才能將狗在安置的過程能夠順利~因為我的場地已經狗滿為患.但是我還是不想放棄任何一隻狗可以救援的機會!<br>所以邀請您成為中途之家來幫忙這些我無法安置的狗.為他們的將來鋪出一條希望的路—這是對狗最大的貢獻也是一種福報!!希望您能共襄盛舉!!謝謝您!!
      b-col.lgImg(lg='6')
        b-card-img.rounded-0(src='../assets/Volunteer2.png' alt='Image')
  b-card.overflow-hidden(no-body)
    b-row(no-gutters)
      b-col(lg='6')
        b-card-img.rounded-0(src='../assets/Volunteer3.png' alt='Image')
      b-col(lg='6')
        b-card-body(title='FOSTER HOMES / 中途協助')
            b-card-text(v-b-tooltip.hover.right="'We are constantly very full and overwhelmed with the number of homeless dogs needing a safe place to be until we have space to bring them home and get them ready for their homes. If you would like to be a foster family, we prefer that you have some basic knowledge with dogs so that you can assist and train them during their rehabilitation period. We don’t want to give up the chance of rescuing any dogs because our home is full. Therefore, being a foster family you will be helping us and the doggies in a huge and rewarding way.'"
            variant='danger')
              |由於到處都有無家可歸的流浪狗.我們經常整個場地都是滿滿的狗.所以必須有人可以先行中途，直到我的地方有空間後，才能接回家加以訓練!<br>進行為找家的先前作業!如果你願意成為我們的中途家庭. 希望您有基本的一些養狗經驗與常識!才能將狗在安置的過程能夠順利~因為我的場地已經狗滿為患.但是我還是不想放棄任何一隻狗可以救援的機會!<br>所以邀請您成為中途之家來幫忙這些我無法安置的狗.為他們的將來鋪出一條希望的路—這是對狗最大的貢獻也是一種福報!!希望您能共襄盛舉!!謝謝您!!
</template>

<script>
</script>

<style lang="scss">
#volunteer {
  text-align: center;
  .pageTitle {
    color: $accent;
  }
  .pageText {
    width: 67%;
    margin: auto;
    color: $daccent;
    margin-bottom: 3rem;
  }
  .b-icon {
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  .card {
    margin-bottom: 3rem;
  }
  .card-title {
    text-align: center;
    color: $daccent;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
  }
  // .card-img-top {
  //   object-fit: contain;
  // }
  .card-text {
    font-size: 17px;
    text-align: left;
  }
  .btn{
    color: $dark2;
    font-size: 17px;
  }
  .lgImg {
    display: none;
  }
  @media (min-width:992px) {
    .lgImg {
    display: block;
    }
    .smImg {
    display: none;
    }
  }
}
</style>
