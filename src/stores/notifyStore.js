import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useNotifyStore = defineStore("notify", () => {
  const message = ref("Free express shipping this week. Ends Friday!");
  const level = ref("info");
  const visible = ref(true);
  const bsClass = computed(() => {
    return level.value === "success"
      ? "alert-success"
      : level.value === "warning"
      ? "alert-warning"
      : level.value === "danger"
      ? "alert-danger"
      : "alert-info";
  });

  function show(msg, lvl = "info") {
    message.value = msg;
    level.value = lvl;
    visible.value = true;
  }

  function hide() {
    visible.value = false;
  }

  return { message, level, visible, bsClass, show, hide };
});
