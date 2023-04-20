<template>
  <div class="h-screen w-full py-20 flex items-end	">
    <div class="mb-2 ">
      <div class="grid grid-cols-4">
        <h1 class="xl:col-span-3 sm:col-span-4 xs:col-span-4 xl:text-7xl md:text-6xl sm:text-5xl font-title font-medium tracking-normal pb-15 ">{{ title1 }}<br> {{ title2}}</h1>
        <div class="xl:col-span-1 sm:col-span-4 xs:col-span-4">
          <hr/>
          <BaseText
              :text="text"
          />
        </div>
      </div>
        <div class="flex flew-row w-full justify-between flex-end pb-20 pt-20">
            <img class="rounded h-30 w-60" src="https://picsum.photos/200">
            <img class="rounded h-30 w-60" src="https://picsum.photos/200">
            <img class="rounded h-30 w-60" src="https://picsum.photos/200">
            <img class="rounded h-30 w-60" src="https://picsum.photos/200">
            <img class="rounded h-30 w-60" src="https://picsum.photos/200">
            <img class="rounded h-30 w-60" src="https://picsum.photos/200">
        </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 w-full flex flex-row justify-center p-4 bg-gray">
      Studio fondé en 2022 à Rennes par Gauthier Dumont, Guillaume Bour & Mathilde Faure, dans le cadre du Master 2 Directeur Artistique et Numérique LISAA de Rennes.
    </div>
  </div>
</template>
<style scoped>
</style>
<script setup lang="ts">
import ProjetImg from "~/components/images/ProjetImg.vue";
defineProps({
  text: {
    type:String
  },
  title1:{
    type:String
  },
  title2:{
    type:String
  }
})
</script>
<style scoped>

@-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
.slider {
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  padding-bottom: 20px;
  overflow: hidden;
  position: relative;
width: 100%;
}
.slider::before, .slider::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  -webkit-animation: scroll 40s linear infinite;
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider .slide {

}
</style>