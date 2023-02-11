<template>
  <el-carousel indicator-position="outside" height:700px class="carousel_size">
    <el-carousel-item >
      <img src="https://github.com/haramisuky/spa_test/blob/master/src/assets/img/pon1.jpg?raw=true" style height="300px" width="400px" >
    </el-carousel-item>
    <el-carousel-item img v-bind:src="imgSrc2">
      <img src="https://github.com/haramisuky/spa_test/blob/master/src/assets/img/uni1.jpg?raw=true" style height="300px" width="400px" >
    </el-carousel-item>
    <el-carousel-item img v-bind:src="imgSrc3">
      <img src="https://github.com/haramisuky/spa_test/blob/master/src/assets/img/chima1.jpg?raw=true" style height="300px" width="400px" >
    </el-carousel-item>
  </el-carousel>

  <!-- <carousel>
      <slide>
        <img src="../assets/img/pon1.jpg" alt="スライド1">
      </slide>
      <slide>
        <img src="../assets/img/uni1.jpg" alt="スライド2">
      </slide>
      <slide>
        <img src="../assets/img/chima1.jpg" alt="スライド3">
      </slide>
  </carousel> -->
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel';
export default {
  data(){
      return {
        imgSrc1: require('@/assets/img/pon1.jpg'),
        imgSrc2: require('@/assets/img/uni1.jpg'),
        imgSrc3: require('@/assets/img/chima1.jpg')
      }
    },
  // components: {
  //   Carousel,
  //   Slide
  // }
}
</script>


<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .carousel_size {
    width: 500px;
    text-align: center;
    margin: auto;
    
  }
</style>