<template>
  <main class="container-fluid p-0">
    <!-- Carousel -->
    <div
      id="heroCarousel"
      class="carousel slide carousel-fade mt-5"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      <div class="carousel-inner">
        <!-- Slide 1 -->
        <div class="carousel-item active">
          <div class="position-relative hero-slide">
            <img
              src="/src/assets/images/home1.jpg"
              class="w-100 h-100 object-fit-cover"
              alt="EzTee hero 1"
            />
            <div class="overlay-dark"></div>

            <div
              class="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between text-white"
            >
              <div class="d-flex align-items-center h-100 m-5">
                <div class="p-4">
                  <h1 class="display-5 fw-semibold">Welcome to EzTee</h1>
                  <p class="lead">
                    Custom tees made simple, stylish, and affordable.
                  </p>
                </div>
              </div>
              <div class="d-flex justify-content-center mb-4 gap-3">
                <RouterLink class="modern-btn" to="/products"
                  >Browse Best Sellers</RouterLink
                >
                <RouterLink class="modern-btn" to="/feedback"
                  >Tell Us What You Need</RouterLink
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item">
          <div class="position-relative hero-slide">
            <img
              src="/src/assets/images/home2.jpg"
              class="w-100 h-100 object-fit-cover"
              alt="EzTee hero 2"
            />
            <div class="overlay-dark"></div>
            <div
              class="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between text-white"
            >
              <div class="d-flex align-items-center h-100 m-5">
                <div class="p-4">
                  <h1 class="display-5 fw-semibold">
                    Designs that Tell Your Story
                  </h1>
                  <p class="lead">
                    Premium fabrics, crisp prints, and fast delivery.
                  </p>
                </div>
              </div>
              <div class="d-flex justify-content-center mb-4 gap-3">
                <RouterLink class="modern-btn" to="/products"
                  >Browse Best-Sellers</RouterLink
                >
                <RouterLink class="modern-btn" to="/feedback"
                  >Tell Us What You Need</RouterLink
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item">
          <div class="position-relative hero-slide">
            <img
              src="/src/assets/images/home3.jpg"
              class="w-100 h-100 object-fit-cover"
              alt="EzTee hero 3"
            />
            <div class="overlay-dark"></div>
            <div
              class="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between text-white"
            >
              <div class="d-flex align-items-center h-100 m-5">
                <div class="p-4">
                  <h1 class="display-5 fw-semibold">
                    Made for Comfort. Built to Last.
                  </h1>
                  <p class="lead">
                    From classic fits to bold statements, your perfect tee
                    starts here.
                  </p>
                </div>
              </div>
              <div class="d-flex justify-content-center mb-4 gap-3">
                <RouterLink class="modern-btn" to="/products"
                  >Browse Best-Sellers</RouterLink
                >
                <RouterLink class="modern-btn" to="/feedback"
                  >Tell Us What You Need</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
        aria-label="Previous"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
        aria-label="Next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </main>

  <hr class="my-3" />

  <!-- News / why choose us / quick search -->
  <section class="home-meta py-5 text-white bg-black">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-0">
        <!-- News -->
        <div class="col border-end border-secondary">
          <div class="card h-100 bg-transparent border-0 shadow-none">
            <div class="card-body">
              <h5 class="card-title" :class="ui.textSizeClass">Latest News</h5>

              <!-- News carousel -->
              <div
                id="newsCarousel"
                class="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-interval="4000"
              >
                <div class="carousel-inner fixed-news-height">
                  <!-- News item 1 -->
                  <div class="carousel-item active">
                    <div class="p-3 border rounded bg-dark">
                      <h6 class="fw-semibold mb-1">New Collection Launch</h6>
                      <p class="small mb-0">
                        Discover our Autumn 2025 collection, featuring
                        sustainable fabrics and bold designs.
                      </p>
                    </div>
                  </div>
                  <!-- News item 2 -->
                  <div class="carousel-item">
                    <div class="p-3 border rounded bg-dark">
                      <h6 class="fw-semibold mb-1">Express Shipping</h6>
                      <p class="small mb-0">
                        We now offer 48-hour express shipping across Australia
                        for all custom orders.
                      </p>
                    </div>
                  </div>
                  <!-- News item 3 -->
                  <div class="carousel-item">
                    <div class="p-3 border rounded bg-dark">
                      <h6 class="fw-semibold mb-1">Community Spotlight</h6>
                      <p class="small mb-0">
                        EzTee partnered with local schools to design unique
                        sports tees for their teams.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Controls -->
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#newsCarousel"
                  data-bs-slide="prev"
                  aria-label="Previous"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#newsCarousel"
                  data-bs-slide="next"
                  aria-label="Next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Why choose us -->
        <div class="col border-end border-secondary">
          <div class="card h-100 bg-transparent border-0 shadow-none">
            <div class="card-body">
              <h5 class="card-title" :class="ui.textSizeClass">
                Why choose us
              </h5>
              <ul class="mb-0">
                <li>Fast delivery</li>
                <li>Secure checkout</li>
                <li>Local support</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Quick search -->
        <div class="col">
          <div class="card h-100 bg-transparent border-0 shadow-none">
            <div class="card-body">
              <h5 class="card-title" :class="ui.textSizeClass">Quick search</h5>
              <form class="row g-2" @submit.prevent="onQuickSearch">
                <div class="col-8">
                  <input
                    v-model="q"
                    class="form-control search-box"
                    placeholder="Search…"
                  />
                </div>
                <div class="col-4 d-grid">
                  <button class="btn search-box" type="submit">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUiStore } from "@/stores/uiStore";

const router = useRouter();
const q = ref("");
function onQuickSearch() {
  router.push({ path: "/products", query: { q: q.value } });
}

const ui = useUiStore();
</script>

<style scoped>
/* Hero/header */
main h1,
main .lead,
main .modern-btn {
  font-family: "Montserrat", sans-serif;
}

/* Button */
main .modern-btn {
  font-family: "Poppins", sans-serif;
  font-size: inherit;
  font-weight: 500;
  border: 2px solid #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 30px;
  padding: 0.6rem 1.4rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
}

main .modern-btn:hover {
  background: rgba(0, 0, 0, 0.507);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.137);
  text-decoration: none;
}

main .modern-btn:active {
  transform: translateY(1px) scale(0.97);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2) inset;
  background: rgba(0, 0, 0, 0.7);
}

/* Carousel */
.hero-slide {
  height: calc(100vh - 5.5rem);
}
.object-fit-cover {
  object-fit: cover;
}
.overlay-dark {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
}

.fixed-news-height .carousel-item > div {
  min-height: 150px;
  max-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Second section (news/why/quick search) */
section.home-meta {
  font-family: "Montserrat", sans-serif;
  background-color: #222;
}

section.home-meta .card-title {
  font-weight: 600;
}

section.home-meta .card-text,
section.home-meta li {
  font-weight: 400;
}

/* Shared style for input and button */
.search-box {
  background-color: #000 !important;
  border: 2px solid #ccc !important;
  border-radius: 0;
  color: #fff !important;
  font-size: inherit;
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
</style>
