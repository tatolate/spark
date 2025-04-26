<script>
export default{};
</script>
<template>
    <header>
        <div class="icon_title">
        <a href="#"><img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt=""></a>
        <h1 style="margin-left: 10px;">React使おうぜ</h1>
        </div>
        <div class="menu">
        <div class="Maker">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            作品情報
            </button>
            <ul class="dropdown-menu">
            <li class="dropdown-item">作成者</li>
            </ul>
        </div>
        </div>
    </header>
</template>

<style scoped>
  @keyframes noise{
    0% {background-position-y: 0px;}
    100% {background-position-y: -420px;}
  }
  header{
    position: relative;
    height: 75px;
    background-color: skyblue;
  }

   header .icon_title{
    position: absolute;
    top: 10px;
    left: 0;
    display: flex;
    align-items: center;
  }

  header .icon_title img{
    width: 50px;
    height: 50px;
    margin-left: 20px;
  }

  header .menu{
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
</style>