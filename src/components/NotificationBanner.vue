<template>
  <div
    v-if="n.visible"
    class="alert text-center border-0 rounded-0"
    :class="n.bsClass"
    style="margin-top: 56px"
  >
    <div class="container d-flex justify-content-between align-items-center">
      <span>{{ n.message }}</span>
      <button class="btn btn-sm btn-outline-dark" @click="n.hide()">
        Dismiss
      </button>
    </div>
  </div>
</template>

<script setup>
import { useNotifyStore } from "@/stores/notifyStore";
const n = useNotifyStore();
</script>
