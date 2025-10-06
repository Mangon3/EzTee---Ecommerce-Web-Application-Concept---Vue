<template>
  <button
    v-show="visible"
    type="button"
    id="backToTop"
    class="btn btn-info text-white rounded-circle"
    @click="scrollTop"
  >
    <i class="bi bi-arrow-up"></i>
  </button>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const visible = ref(false);

function onScroll() {
  visible.value = window.scrollY > 200;
}
function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<style scoped>
#backToTop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1050;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  transition: background-color 0.3s ease;
}

#backToTop:hover {
  background-color: rgba(0, 0, 0, 1);
}
</style>
