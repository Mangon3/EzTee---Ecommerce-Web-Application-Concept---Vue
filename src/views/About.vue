<template>
  <main class="container" style="padding-top: 6rem">
    <!-- Page header -->
    <header class="mb-5 text-center">
      <h1 class="display-5 fw-bold">About EzTee</h1>
      <p class="lead text-secondary">Our story, mission, and vision</p>
    </header>

    <!-- History section -->
    <section class="mb-5">
      <h2 class="h4 fw-semibold">Our History</h2>
      <p>
        Founded in 2020, EzTee began with a simple vision: making custom tees
        more accessible, stylish, and affordable for everyone. Starting as a
        small online shop, we grew into a trusted brand known for premium
        quality, fast delivery, and customer-first service.
      </p>
      <p>
        Over the years, EzTee has worked with schools, startups, local
        communities, and global clients to create tees that tell their stories.
        From single orders, to bulk custom printing, our journey has been shaped
        by each of the team member's creativity and trust.
      </p>
    </section>

    <!-- Goals section -->
    <section class="mb-5">
      <h2 class="h4 fw-semibold">Our Goals</h2>
      <ul>
        <li>Provide high-quality tees at affordable prices</li>
        <li>Deliver fast, reliable service across Australia</li>
        <li>Support sustainable and eco-friendly production</li>
        <li>Empower communities with creative self-expression</li>
      </ul>
    </section>

    <!-- Buttons -->
    <section class="text-center mt-5">
      <RouterLink to="/products" class="btn btn-light me-3"
        >Browse Products</RouterLink
      >
      <RouterLink to="/feedback" class="btn btn-outline-light"
        >Send Feedback</RouterLink
      >
    </section>
  </main>
</template>

<script setup></script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #fff !important;
  font-family: "Montserrat", sans-serif;
}

p,
li {
  font-family: "Montserrat", sans-serif;
  color: #ddd;
}

.btn {
  font-size: inherit;
}
</style>
