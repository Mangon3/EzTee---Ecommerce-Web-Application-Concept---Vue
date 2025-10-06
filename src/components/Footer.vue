<template>
  <footer class="bg-dark text-white mt-5">
    <div class="container py-5">
      <div class="row gy-4">
        <!-- About -->
        <div class="col-12 col-md-4">
          <h5 class="footer-logo">EzTee</h5>
          <p class="small mb-0 text-secondary">
            EzTee makes custom tees simple and stylish - bringing together
            creativity, quality, and affordability.
          </p>
        </div>

        <!-- Quick links -->
        <div class="col-6 col-md-4">
          <h6 class="footer-heading">Pages</h6>
          <ul class="list-unstyled small">
            <li>
              <RouterLink class="link-light text-decoration-none" to="/"
                >Home</RouterLink
              >
            </li>
            <li>
              <RouterLink class="link-light text-decoration-none" to="/products"
                >Products</RouterLink
              >
            </li>
            <li>
              <RouterLink class="link-light text-decoration-none" to="/about"
                >About Us</RouterLink
              >
            </li>
            <li>
              <RouterLink class="link-light text-decoration-none" to="/contacts"
                >Contact</RouterLink
              >
            </li>
          </ul>
        </div>

        <!-- Contact & social -->
        <div class="col-6 col-md-4">
          <h6 class="footer-heading">Get in Touch</h6>
          <p class="small mb-1 text-secondary">Mon - Fri: 9:00 - 17:00</p>
          <p class="small mb-2">
            Email:
            <a
              href="mailto:info@eztee.com"
              class="link-light text-decoration-none"
            >
              info@eztee.com
            </a>
          </p>
          <div class="d-flex gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="link-light"
              aria-label="Facebook"
            >
              <i class="bi bi-facebook fs-5"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="link-light"
              aria-label="Instagram"
            >
              <i class="bi bi-instagram fs-5"></i>
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              class="link-light"
              aria-label="Twitter"
            >
              <i class="bi bi-twitter fs-5"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom line -->
      <div
        class="border-top border-secondary mt-4 pt-3 small text-center text-secondary"
      >
        &copy; 2025 EzTee. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer-logo {
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 1.75rem; /* same as navbar */
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff !important;
}

.footer-logo:hover {
  color: #dbdbdb !important;
}

.footer-heading {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: inherit;
  margin-bottom: 1rem;
}
</style>
