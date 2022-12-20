<template>
  <div class="body">
    <svg
      width="380px"
      height="500px"
      viewBox="0 0 837 1045"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        sketch:type="MSPage"
      >
        <path
          d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
          id="Polygon-1"
          stroke="#007FB2"
          stroke-width="6"
          sketch:type="MSShapeGroup"
        ></path>
        <path
          d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
          id="Polygon-2"
          stroke="#EF4A5B"
          stroke-width="6"
          sketch:type="MSShapeGroup"
        ></path>
        <path
          d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
          id="Polygon-3"
          stroke="#795D9C"
          stroke-width="6"
          sketch:type="MSShapeGroup"
        ></path>
        <path
          d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
          id="Polygon-4"
          stroke="#F2773F"
          stroke-width="6"
          sketch:type="MSShapeGroup"
        ></path>
        <path
          d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
          id="Polygon-5"
          stroke="#36B455"
          stroke-width="6"
          sketch:type="MSShapeGroup"
        ></path>
      </g>
    </svg>

    <div class="wrapper">
      <div class="glitch_word_box">
        <div class="line"></div>
        <h1 id="word" class="glitch_word0">404</h1>
        <br />
        <h1 class="glitch_word0">Page NOT FOUND!</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>您走入了没有内容的荒原，请返回</p>
      <div class="buttons">
        <el-button @click="goHome" type="success" style="margin: 10px"
          >返回主页</el-button
        >
        或
        <el-button @click="goBack" type="success" style="margin: 10px"
          >返回上一页</el-button
        >
        <br />
      </div>
    </div>

    <br />
    <div class="space">
      <div class="blackhole"></div>
      <div class="ship"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
*,
:before,
:after {
  box-sizing: border-box;
}

.body {
  display: flex;
  align-items: center;
  background: #001529;
  min-width: 275px;
  height: 100vh;

  overflow: hidden;
  color: #138ff2;
  font-family: Roboto;
}

.wrapper {
  flex-grow: 2;
  width: 70vw;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  color: #ffffff;
  font-weight: bolder;
  font-size: 4em;
  margin: 0;
  outline: none;
  padding: 0;
  position: center;
}

.glitch_word_box {
  height: 100px;
  line-height: 100px;
  position: relative;
  -webkit-animation-iteration-count: infinite, infinite;
  -moz-animation-iteration-count: infinite, infinite;
  -o-animation-iteration-count: infinite, infinite;
}

.glitch_word_box .glitch_word0 {
  position: absolute;
  width: 100%;
  background: #ef4824;
}

p {
  width: 95%;
  font-size: 1.5em;
  line-height: 1.4;
}

.buttons {
  white-space: nowrap;
  display: inline-block;
}

span {
  display: block;
  text-transform: uppercase;
  color: #138ff2;
  letter-spacing: 1.5px;
  text-align: center;
}

.buttons a {
  display: inline-block;
  padding: 0.8em 1em;
  margin-right: 1em;
  margin-bottom: 1em;
  border: 3px solid #138ff2;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.2em;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
}

.buttons a:hover {
  color: #138ff2;
}

buttons a:hover:before {
  top: 0;
}

buttons a:before {
  content: "";
  background: white;
  height: 100%;
  width: 100%;
  position: absolute;
  top: -100%;
  left: 0;
  transition: 0.3s;
  z-index: -1;
}

.space {
  width: 75px;
  height: calc(50vh + 37.5px);
  border-top-left-radius: 37.5px;
  border-top-right-radius: 37.5px;
  overflow: hidden;
  margin: calc(50vh - 37.5px) auto 0 auto;
  position: relative;
  pointer-events: none;
  -webkit-transform: translateZ(0);
}

.blackhole {
  border: 5px solid #1674d1;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
}

.blackhole:after {
  content: "";
  height: calc(100% + 10px);
  width: calc(100% + 10px);
  border: 5px solid #1674d1;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  left: -5px;
  z-index: 5;
  transform: rotate(45deg);
}

.ship {
  height: 150px;
  width: 55px;
  margin-left: 10px;
  background: url("https://goo.gl/hqeSfZ") center/contain no-repeat;
  animation: blackhole 4s infinite linear;
  position: absolute;
  bottom: -150px;
}

@keyframes blackhole {
  to {
    transform: translateY(-100vh);
  }
}

@media (max-width: 600px) {
  body {
    margin: 0 5vw;
  }
}

#Polygon-1,
#Polygon-2,
#Polygon-3,
#Polygon-4,
#Polygon-4,
#Polygon-5 {
  animation: float 1s infinite ease-in-out alternate;
}

#Polygon-2 {
  animation-delay: 0.2s;
}

#Polygon-3 {
  animation-delay: 0.4s;
}

#Polygon-4 {
  animation-delay: 0.6s;
}

#Polygon-5 {
  animation-delay: 0.8s;
}

@keyframes float {
  100% {
    transform: translateY(20px);
  }
}

@media (max-width: 450px) {
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -190px;
  }
}

@media (max-width: 480px) {
  .screen {
    padding: 15px;
  }
  .contact-info-hype,
  .hypemarketing {
    font-size: 10px;
  }
}

@media (max-width: 800px) {
  button {
    transform: scale(1.4);
  }
}

@media (max-width: 600px) {
  button {
    transform: scale(1);
  }
}
</style>
