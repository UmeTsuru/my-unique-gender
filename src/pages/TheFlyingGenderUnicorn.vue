<template>
  <div>
    <!-- <h1 class="text-left font-bold text-6xl pb-8 pt-12 rainbow-text md:text-center">
      飞起来的 <br> 性别独角兽
    </h1> -->

    <!-- {{ $t('message.hello') }} -->

    <div class="flex flex-col justify-between items-stretch pages ">
      <div class="lg:row-span-3 relative flex-1" ref="captureTarget">
        <div class="svg-container absolute z-0"> </div>
        <div class="blur-background flex items-center justify-center">
          <img src="../assets/unicorn.svg" alt="unicorn" class="p-4 w-48 h-48 object-contain">
        </div>

        <!-- 捕获并下载的按钮 -->
        <!-- <button @click="captureAndDownload">Capture and Download</button> -->

      </div>

      <div class="card-wrapper overflow-auto px-4 z-10 ">
        <!-- 性别认同 / 性别身份 -->
        <div v-show="currentPage === 1" class="scale-90">
          <GenderIdentityVue />
        </div>

        <!-- 性别表达气质 -->
        <div v-show="currentPage === 2" class="scale-90">
          <GenderExpressionVue />
        </div>

        <div v-show="currentPage === 3" class="scale-90">
          <PhysioCharVue />
        </div>

        <!-- 性 / 情欲倾向的认同 / 身份 -->
        <div v-show="currentPage === 4" class="scale-90">
          <sexualIdentityVue />
        </div>

        <!-- 生理上的吸引 -->
        <div v-show="currentPage === 5" class="scale-90">
          <phyBeAttractedVue />
        </div>

        <!-- 亲密关系上的吸引 -->
        <div v-show="currentPage === 6" class="scale-90">
          <emoBeAttractedVue />
        </div>
      </div>

      <div class="flex justify-between items-center  ">
        <button @click="prevPage" class="p-4 m-4  click-btn rounded-full bg-transparent">
          <img src="../assets/svg/left.svg" />
        </button>
        <div class="steps rounded-full">
          <div class="flex justify-between backdrop-blur-xl items-center h-full rounded-full gap-1">
            <template v-for="(color, index) in rainbowColor">
              <button class="step-btn transition-all duration-300" v-if="index < rainbowColor.length - 1"
                :class="currentPage === index + 1 ? 'flex-1' : ''"
                :style="{ 'background-image': `linear-gradient(to right, ${color}, ${currentPage === index + 1 ? rainbowColor[index + 1] : color})` }"></button>
            </template>

          </div>
        </div>
        <button @click="nextPage" class="p-4 m-4 rounded-full click-btn bg-transparent">
          <img src="../assets/svg/right.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

import GenderIdentityVue from './TFGU/gIdentity/GenderIdentity.vue';
import GenderExpressionVue from './TFGU/gExpression/GenderExpression.vue';
import PhysioCharVue from "./TFGU/pCharactor/PhysioChar.vue";
import sexualIdentityVue from "./TFGU/sIdentity/SexualIdentity.vue";
import phyBeAttractedVue from "./TFGU/pBeAttracted/PhyBeAttracted.vue";
import emoBeAttractedVue from "./TFGU/eBeAttracted/EmoBeAttracted.vue";

const currentPage = ref(1)
const rainbowColor = reactive(['#ff9292', '#ffd6a7', '#fffb8f', '#c9ffaf', '#90f8ff', '#90bcff', '#9390ff'])

const nextPage = () => currentPage.value < 6 ? (currentPage.value += 1) : null

const prevPage = () => currentPage.value > 1 ? (currentPage.value -= 1) : null;


// 使用 ref 创建一个引用，以指向我们想要捕获的 DOM 元素
const captureTarget = ref(null);

// const captureAndDownload = async () => {
//   if (!captureTarget.value) return;

//   const canvas = await html2canvas(captureTarget.value);
//   const imgData = canvas.toDataURL("image/png");
//   const link = document.createElement("a");
//   link.href = imgData;
//   link.download = "screenshot.png";
//   document.body.appendChild(link); // 在某些浏览器中可能需要将链接添加到body
//   link.click();
//   document.body.removeChild(link); // 下载后从body移除链接
// };

</script>

<style lang="scss" scoped>
.divide-line {
  border-bottom: dashed rgb(205, 205, 205);
}

.rainbow-text {
  width: max-content;
  background-size: 10%;
  // background-image: radial-gradient(to right, #d80b05, #f29c1d, #e6fc35, #00bd26, #002097, #770d87);
  background-image: linear-gradient(217deg, rgba(216, 11, 5, 0.8), rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, rgba(0, 189, 38, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(119, 13, 135, 0.8), rgba(0, 0, 255, 0) 70.71%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

.svg-container {
  top: 50%;
  left: 50%;
  width: 248px;
  height: 180px;
  border-radius: 50%;
  background-image: conic-gradient(from 180deg at 50% 50%, #FFCA55 -24.22deg, #FF685D 19.49deg, #FF64F0 60.23deg, #5155FF 137.93deg, #54EDFF 212.82deg, #5BFF7B 256.57deg, #FDFF59 294.74deg, #FFCA55 335.78deg, #FF685D 379.49deg);
  transform: translate(-50%, -50%);
}

.blur-background {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(36px);
}

.steps {
  width: 12rem;
  height: 2rem;


  // background-image: linear-gradient(to right, #f00 0%, #f90 20%, #fff500 41%, #00ff29 61%, #0038ff 81%, #8f00ff 101%);
}

.step-btn {
  width: 1rem;
  height: 1rem;
  border: solid 2px #f2f2f2;
  border-radius: 1rem;
  padding: 0;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  box-shadow: 4px 4px 8px 0 rgba(210, 219, 235, 0.6);
}

.pages{
  height: 100vh;
  width: 100vw;
  position: relative;
}
</style>