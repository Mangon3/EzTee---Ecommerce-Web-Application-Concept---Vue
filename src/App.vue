<template>
  <div :class="textSizeClass">
    <NotificationBanner />
    <Navbar />
    <RouterView />
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUiStore } from "./stores/uiStore";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import NotificationBanner from "./components/NotificationBanner.vue";
import BackToTop from "./components/BackToTop.vue";

const ui = useUiStore();
const { textSizeClass } = storeToRefs(ui);
</script>
