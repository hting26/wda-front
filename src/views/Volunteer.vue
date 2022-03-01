<template lang="pug">
b-container#volunteer
  h3.pageTitle.text-center 招募志工
  b-row
    b-col(cols='12' lg='4')
      b-card.card(img-top img-src='../assets/Volunteer1.png')
        b-card-body
          h5
            |FLIGHT GUARDIAN /<br>護犬大使
          b-card-text(style='white-space: pre-line')
            |Every month we need flight guardians to help fly our rescued dogs to their loving forever homes abroad in San Francisco, Los Angeles, Seattle in United States and Vancouver and Toronto in Canada. We will take care of all the necessary paperwork. Our volunteers and adopting families abroad will be at the airport to meet you and the doggies on arrival at the airport. The process is very simple! All we will need from you is your passport copy and itinerary in order for us to process the dogs’ paperwork. All expenses will be taken care by us. Please help us so the doggies can have a chance to be in a loving home and we have space to rescue another dog in desperate need.每一個月我們都需要護犬大使幫忙帶我們救援的狗，飛向它們在美國的舊金山/洛杉磯/西雅圖與加拿大溫哥華/多倫多的認養家庭!我們會處理所有的出國手續與費用.在台灣義工都會在機場與您們見面.所有的狗都會由義工安排到入機艙! 國外的認養家庭與國外的義工都會在您到達的時候去接機帶狗! 您只要幫忙我們把出口文件攜帶給國外的海關與義工.沒有增加任何費用.對您所攜帶的行李也沒有影響! 所有的費用都會由我們支付!請幫忙這些找到幸福的狗能夠早日幸福啟航. 這樣我們才有空間可以救援後面更多的狗
          b-btn 申請領養
    b-col(cols='12' lg='4')
      b-card.card(img-top img-src='../assets/Volunteer2.png')
        b-card-body
          h5
            |VOLUNTEER / 日常志工
          b-card-text(style='white-space: pre-line')
            |We welcome you to volunteer your spare time to help our doggies while we get them ready for their forever homes. Any help is welcome like walking, bathing, playing or just sitting quietly next to them. We also need help with transporting them to the vets for checkups and helping at the airport before they fly to their forever homes.我們急需有義工可以協助我們的狗加強訓練與社會化!為送養前的準備工作!如果您有時間.歡迎來帶他們遛狗，幫忙洗狗，與他們遊戲或互動!!或是只要靜靜地坐下來陪它們也可以!我們也需要出國前的護送人員!帶他們去醫院做最後一次的檢診!然後陪他們到機場登上幸福的班機飛向他們永遠的家
          b-btn 申請領養
    b-col(cols='12' lg='4')
      b-card.card(img-top img-src='../assets/Volunteer3.png')
        b-card-body
          h5
            |FOSTER HOMES / 中途協助
          b-card-text(style='white-space: pre-line')
            |We are constantly very full and overwhelmed with the number of homeless dogs needing a safe place to be until we have space to bring them home and get them ready for their homes. If you would like to be a foster family, we prefer that you have some basic knowledge with dogs so that you can assist and train them during their rehabilitation period. We don’t want to give up the chance of rescuing any dogs because our home is full. Therefore, being a foster family you will be helping us and the doggies in a huge and rewarding way.由於到處都有無家可歸的流浪狗.我們經常整個場地都是滿滿的狗.所以必須有人可以先行中途，直到我的地方有空間後，才能接回家加以訓練!進行為找家的先前作業!如果你願意成為我們的中途家庭. 希望您有基本的一些養狗經驗與常識!才能將狗在安置的過程能夠順利~因為我的場地已經狗滿為患.但是我還是不想放棄任何一隻狗可以救援的機會!所以邀請您成為中途之家來幫忙這些我無法安置的狗.為他們的將來鋪出一條希望的路—這是對狗最大的貢獻也是一種福報!!希望您能共襄盛舉!!謝謝您!!
          b-btn 申請領養
</template>

<script>
</script>

<style lang="scss">
#volunteer {
  .pageTitle {
    color: $accent;
    margin-bottom: 3rem;
  }
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
}
</style>
