<script setup>
import { storeToRefs } from 'pinia';
import { RouterView } from 'vue-router';
import HeaderItem from '@/components/header/HeaderItem.vue'
import FooterItem from '@/components/footer/FooterItem.vue'
import { useLoginStatusStore } from './stores/loginStatus.js';

const loginStatusStore = useLoginStatusStore()
const { isLoggedIn } = storeToRefs(loginStatusStore)
</script>

<template>
  <HeaderItem v-if="isLoggedIn" />
  <RouterView :class="isLoggedIn ? 'mainProtected' : 'mainPublic'" />
  <FooterItem v-if="isLoggedIn" />
</template>

<style>
/*FONT-IMPORT*/
@import url("@/assets/font/alegreya_font.scss");

/* GENERAL STYLES */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  width: 100vw;
}
header {
  position: top;
}
.mainProtected {
  width: 100%;
  height: 83vh;
  overflow: hidden;
}
.mainPublic {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* GLOBAL CLASSES */

.mainLogo {
  height: 350px;
  width: 350px;
  background: url("./img/icons/main.png") center/cover no-repeat;
}
.leavesBackground {
  background-color: #253334;
  background-image: url("./src/img/images/background_partial.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
}
.logoSmall {
  background: url("./img/icons/main.png") center/contain no-repeat;
  height: 100px;
  width: 100px;
}
.buttonPublic {
  padding: 20px 0;
  text-align: center;
  background-color: #7c9a92;
  color: #fff;
  border-radius: 15px;
  width: 90%;
  text-decoration: none;
  font-size: 24px;
  border: none;
}
</style>
