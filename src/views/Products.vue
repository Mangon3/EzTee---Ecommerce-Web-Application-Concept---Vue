<template>
  <main class="container" style="padding-top: 6rem">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1>Products</h1>
      <RouterLink to="/delivery" class="btn btn-light position-relative">
        <i class="bi bi-cart"></i>
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          {{ cart.items.length }}
        </span>
      </RouterLink>
    </div>

    <!-- Search bar -->
    <div class="row mb-4">
      <div class="col-md-8">
        <input
          v-model="q"
          class="form-control search-box"
          placeholder="Search products…"
        />
      </div>
      <div class="col-md-4 d-grid">
        <button class="btn search-box" @click="onSearch">Search</button>
      </div>
    </div>

    <!-- Results -->
    <div class="row g-4">
      <div
        v-for="p in filteredProducts"
        :key="p.id"
        class="col-12 col-sm-6 col-md-4"
      >
        <div class="card h-100 product-card">
          <img :src="p.image" class="card-img-top" :alt="p.name" />
          <div class="card-body">
            <h5 class="card-title">{{ p.name }}</h5>
            <p class="card-text">{{ p.description }}</p>
            <p class="card-price">$ {{ p.price.toFixed(2) }}</p>

            <div class="d-flex justify-content-between align-items-center mt-3">
              <button class="btn qty-btn" @click="cart.decreaseQuantity(p.id)">
                -
              </button>
              <span>{{ getQuantity(p.id) }}</span>
              <button class="btn qty-btn" @click="cart.addToCart(p)">+</button>
            </div>
          </div>
        </div>
      </div>
      <p
        v-if="filteredProducts.length === 0"
        class="text-muted"
        style="color: #fff !important; font-size: inherit"
      >
        No products found.
      </p>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "@/stores/cartStore";

const cart = useCartStore();

// IMPORTANT: Product list
const products = ref([
  {
    id: 1,
    name: "Classic Tee",
    description: "100% cotton",
    price: 29.99,
    image: "/src/assets/images/product1.avif",
  },
  {
    id: 2,
    name: "Graphic Tee",
    description: "Bold printed design",
    price: 34.49,
    image: "/src/assets/images/product2.avif",
  },
  {
    id: 3,
    name: "Sport Tee",
    description: "Breathable and light",
    price: 24.49,
    image: "/src/assets/images/product3.avif",
  },
]);

const q = ref("");
const route = useRoute();

// Load query from route if present
watch(
  () => route.query.q,
  (newQ) => {
    if (newQ) q.value = newQ;
  },
  { immediate: true }
);

const filteredProducts = computed(() =>
  !q.value
    ? products.value
    : products.value.filter(
        (p) =>
          p.name.toLowerCase().includes(q.value.toLowerCase()) ||
          p.description.toLowerCase().includes(q.value.toLowerCase())
      )
);

function onSearch() {}

function getQuantity(id) {
  const item = cart.items.find((i) => i.id === id);
  return item ? item.quantity : 0;
}
</script>

<style scoped>
h1 {
  font-family: "Montserrat", sans-serif;
  color: #fff;
}

/* Search */
input {
  border: none;
  border-bottom: 2px solid #fff !important;
}

.search-box {
  background-color: #000 !important;
  border-radius: 0;
  color: #fff !important;
  font-size: inherit;
}

.btn.search-box {
  border: 2px solid #fff;
}

.search-box::placeholder {
  color: #ccc;
}

.search-box:focus {
  outline: none;
  box-shadow: none;
  border-color: #7e7e7e !important;
  color: #fff;
}

.search-box.btn:hover {
  background-color: #111 !important;
  border-color: #7e7e7e !important;
}

/* Product cards */
.product-card {
  background-color: #222;
  border-radius: 0;
  color: #fff;
}

.product-card .card-title,
.product-card .card-text,
.product-card .card-price {
  color: #fff;
}

.product-card .card-price {
  font-weight: bold;
  margin-bottom: 0;
}

.product-card img {
  width: 100%;
  height: auto;
  object-fit: contain;
  background-color: #000;
  padding: 0;
  border-radius: 0;
  display: block;
}

/* Quantity buttons */
.qty-btn {
  background: none !important;
  border: none !important;
  color: #fff !important;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0 10px;
}

.qty-btn:hover {
  color: #ccc !important;
}

.qty-btn:active {
  color: #888 !important;
}
</style>
