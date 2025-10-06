import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

// Text size
export const useUiStore = defineStore("ui", () => {
  const textSize = ref("base");
  const textSizeClass = computed(() =>
    textSize.value === "sm" ? "fs-6" : textSize.value === "lg" ? "fs-4" : "fs-5"
  );

  function setTextSize(size) {
    if (["sm", "base", "lg"].includes(size)) textSize.value = size;
  }

  function cycleTextSize() {
    const order = ["sm", "base", "lg"];
    const i = order.indexOf(textSize.value);
    textSize.value = order[(i + 1) % order.length];
  }

  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("ui");
    if (saved) {
      const s = JSON.parse(saved);
      if (s.textSize) textSize.value = s.textSize;
    }
    watch(textSize, () => {
      localStorage.setItem("ui", JSON.stringify({ textSize: textSize.value }));
    });
  }

  return { textSize, textSizeClass, setTextSize, cycleTextSize };
});
