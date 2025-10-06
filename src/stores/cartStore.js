// src/stores/cartStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]);

  // Add quantity
  function addToCart(product) {
    const existing = items.value.find((i) => i.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      // Product data
      items.value.push({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }
  }

  // Decrease quantity
  function decreaseQuantity(id) {
    const existing = items.value.find((i) => i.id === id);
    if (existing) {
      if (existing.quantity > 1) {
        existing.quantity--;
      } else {
        items.value = items.value.filter((i) => i.id !== id);
      }
    }
  }

  function removeFromCart(id) {
    items.value = items.value.filter((i) => i.id !== id);
  }

  function clearCart() {
    items.value = [];
  }

  return { items, addToCart, decreaseQuantity, removeFromCart, clearCart };
});
