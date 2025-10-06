<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
    <div class="container-fluid">
      <!-- Left: Logo -->
      <RouterLink class="navbar-brand brand-logo" to="/">EzTee</RouterLink>

      <!-- Center: main nav (desktop) -->
      <div class="d-none d-lg-flex mx-auto">
        <ul class="navbar-nav gap-3">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About Us</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/feedback" class="nav-link">Feedback</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contacts" class="nav-link">Contacts</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Right: icons -->
      <div class="d-flex align-items-center icon-group">
        <!-- Search -->
        <RouterLink to="/products" class="nav-link p-0" title="Search">
          <i class="bi bi-search nav-icon"></i>
        </RouterLink>

        <!-- Products -->
        <RouterLink to="/products" class="nav-link p-0" title="Products">
          <i class="bi bi-bag nav-icon"></i>
        </RouterLink>

        <!-- Text size toggle -->
        <button
          class="btn p-0 border-0 text-white"
          type="button"
          title="Toggle Text Size"
          @click="ui.cycleTextSize"
        >
          <i class="bi bi-type nav-icon"></i>
        </button>

        <!-- Mobile menu -->
        <button
          class="btn p-0 border-0 text-white"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNav"
          aria-controls="offcanvasNav"
          title="Menu"
        >
          <i class="bi bi-list nav-icon-lg"></i>
        </button>
      </div>
    </div>
  </nav>

  <!-- Offcanvas menu -->
  <div
    class="offcanvas offcanvas-end text-bg-dark"
    tabindex="-1"
    id="offcanvasNav"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Menu</h5>
      <button
        type="button"
        class="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/products">Products</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About Us</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/feedback">Feedback</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/contacts">Contacts</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useUiStore } from "@/stores/uiStore";
const ui = useUiStore();
</script>

<style scoped>
.navbar-brand.brand-logo {
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 1.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff !important;
}
.navbar-brand.brand-logo:hover {
  color: #dbdbdb !important;
}
.navbar-nav .nav-link {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #fff !important;
}
.navbar-nav .nav-link:hover {
  color: #ccc !important;
}

.icon-group {
  gap: 2rem;
}
.nav-icon {
  font-size: 1.7rem;
}
.nav-icon-lg {
  font-size: 2.1rem;
}

.nav-item:first-child {
  margin-left: 6em;
}
</style>
