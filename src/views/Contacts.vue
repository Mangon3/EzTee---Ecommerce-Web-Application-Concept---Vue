<template>
  <main class="container text-white" style="padding-top: 6rem">
    <h1 class="mb-4">Contacts</h1>

    <div class="row g-4 align-items-start">
      <!-- Left column -->
      <div class="col-12 col-md-6 border-md-end pe-md-4">
        <h5 class="fw-semibold">Our Office</h5>
        <p class="mb-2 text-secondary">
          The Glen Shopping Centre<br />
          Shop MM013/235 Springvale Rd<br />
          Glen Waverley VIC 3150<br />
          Mon - Fri: 9:00 - 17:00
        </p>

        <!-- Map -->
        <div class="ratio ratio-4x3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.3053924909277!2d145.16269011201646!3d-37.87654017184297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63fa7c2f32169%3A0x7c71dcdb0e9aa492!2sUNIQLO%20The%20Glen!5e0!3m2!1sen!2sau!4v1758743402233!5m2!1sen!2sau"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- Right column -->
      <div class="col-12 col-md-6 ps-md-4">
        <!-- Follow us -->
        <div class="mb-4">
          <h5 class="fw-semibold">Follow Us</h5>
          <div class="d-flex gap-3 mt-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="link-light"
              aria-label="Facebook"
            >
              <i class="bi bi-facebook fs-3"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="link-light"
              aria-label="Instagram"
            >
              <i class="bi bi-instagram fs-3"></i>
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              class="link-light"
              aria-label="Twitter"
            >
              <i class="bi bi-twitter fs-3"></i>
            </a>
          </div>
        </div>

        <!-- Contact info -->
        <div>
          <h5 class="fw-semibold">Contact Us</h5>
          <p class="mb-1">
            <i class="bi bi-telephone me-2"></i>
            +61 400 123 456
          </p>
          <p class="mb-0">
            <i class="bi bi-envelope me-2"></i>
            <a
              href="mailto:info@eztee.com"
              class="link-light text-decoration-none"
            >
              info@eztee.com
            </a>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
h1,
h5 {
  font-family: "Montserrat", sans-serif;
  color: #fff;
}

h5 {
  font-size: inherit;
}

p,
a {
  font-family: "Montserrat", sans-serif;
  color: #fff;
}

.text-secondary {
  color: #bbb !important;
}

@media (min-width: 768px) {
  .border-md-end {
    border-right: 2px solid #fff;
  }
}
</style>
