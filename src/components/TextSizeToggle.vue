<template>
  <div class="btn-group btn-group-sm" role="group">
    <button
      class="btn btn-outline-light"
      :class="{ active: ui.textSize === 'sm' }"
      @click="ui.setTextSize('sm')"
    >
      A-
    </button>
    <button
      class="btn btn-outline-light"
      :class="{ active: ui.textSize === 'base' }"
      @click="ui.setTextSize('base')"
    >
      A
    </button>
    <button
      class="btn btn-outline-light"
      :class="{ active: ui.textSize === 'lg' }"
      @click="ui.setTextSize('lg')"
    >
      A+
    </button>
  </div>
</template>

<script setup>
import { useUiStore } from "@/stores/uiStore";
const ui = useUiStore();
</script>
