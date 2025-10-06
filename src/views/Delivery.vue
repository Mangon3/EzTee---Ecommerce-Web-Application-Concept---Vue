<template>
  <main class="container" style="padding-top: 6rem">
    <h1 class="mb-4">Checkout</h1>

    <!-- Progress bar -->
    <div class="progress mb-4" style="height: 30px; background-color: #000">
      <div
        class="progress-bar progress-bar-striped"
        role="progressbar"
        :style="{
          width: progressPercent + '%',
          backgroundColor: '#fff',
          color: '#000',
        }"
      >
        Step {{ step }} of 6
      </div>
    </div>

    <!-- Step 1: cart review -->
    <div v-if="step === 1">
      <h3>Cart Review</h3>
      <table class="table table-bordered align-middle text-center cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th style="width: 200px">Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.id">
            <td>{{ item.name }}</td>
            <td>${{ item.price.toFixed(2) }}</td>
            <td>
              <div
                class="d-flex justify-content-center align-items-center gap-2"
              >
                <button
                  class="btn qty-btn"
                  @click="cart.decreaseQuantity(item.id)"
                >
                  -
                </button>
                <span>{{ item.quantity }}</span>
                <button class="btn qty-btn" @click="cart.addToCart(item)">
                  +
                </button>
              </div>
            </td>
            <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
      <p v-if="cartItems.length === 0" class="text-muted">
        Your cart is empty.
      </p>
      <p v-if="errors.cart" class="text-danger">{{ errors.cart }}</p>
      <h5 class="text-end">Cart Total: ${{ cartTotal.toFixed(2) }}</h5>
    </div>

    <!-- Step 2: delivery method -->
    <div v-if="step === 2">
      <h3>Delivery Method</h3>
      <div class="delivery-options">
        <div
          v-for="option in deliveryOptions"
          :key="option.value"
          class="delivery-option"
          :class="{ selected: delivery === option.value }"
          @click="delivery = option.value"
        >
          <div class="d-flex justify-content-between w-100">
            <strong>{{ option.label }}</strong>
            <span>{{ option.time }}</span>
            <span>{{
              option.fee > 0 ? `$${option.fee.toFixed(2)}` : "Free"
            }}</span>
          </div>
        </div>
      </div>
      <h5 class="text-end">
        Delivery Fee:
        {{ deliveryFee > 0 ? `$${deliveryFee.toFixed(2)}` : "Free" }}
      </h5>
      <h4 class="text-end">
        Total: ${{ (cartTotal + deliveryFee).toFixed(2) }}
      </h4>
      <p v-if="errors.delivery" class="text-danger">{{ errors.delivery }}</p>
    </div>

    <!-- Step 3: customer info -->
    <div v-if="step === 3">
      <h3>Customer Information</h3>
      <form class="row g-3">
        <div class="col-md-6">
          <input
            v-model.trim="customer.name"
            class="form-control custom-input"
            placeholder="Name"
            :class="{ 'is-invalid': errors.name }"
          />
          <div v-if="errors.name" class="invalid-feedback">
            {{ errors.name }}
          </div>
        </div>
        <div class="col-md-6">
          <input
            v-model.trim="customer.email"
            class="form-control custom-input"
            placeholder="Email"
            :class="{ 'is-invalid': errors.email }"
          />
          <div v-if="errors.email" class="invalid-feedback">
            {{ errors.email }}
          </div>
        </div>
        <div class="col-md-6">
          <input
            v-model.trim="customer.phone"
            class="form-control custom-input"
            placeholder="Phone"
            :class="{ 'is-invalid': errors.phone }"
          />
          <div v-if="errors.phone" class="invalid-feedback">
            {{ errors.phone }}
          </div>
        </div>
        <div class="col-12">
          <input
            v-model.trim="customer.address"
            class="form-control custom-input"
            placeholder="Address"
            :class="{ 'is-invalid': errors.address }"
          />
          <div v-if="errors.address" class="invalid-feedback">
            {{ errors.address }}
          </div>
        </div>
      </form>
    </div>

    <!-- Step 4: payment -->
    <div v-if="step === 4" class="step-4">
      <h3>Payment</h3>
      <p>Select your payment method (placeholder for security)</p>
      <div class="payment-option">
        <input type="radio" id="card" v-model="payment" value="card" />
        <label for="card">Credit Card</label>
      </div>
      <div class="payment-option">
        <input type="radio" id="paypal" v-model="payment" value="paypal" />
        <label for="paypal">PayPal</label>
      </div>
      <p v-if="errors.payment" class="text-danger">{{ errors.payment }}</p>
    </div>

    <!-- Step 5: confirmation -->
    <div v-if="step === 5" class="step-5">
      <h3>Confirmation</h3>
      <p><strong>Name:</strong> {{ customer.name }}</p>
      <p><strong>Email:</strong> {{ customer.email }}</p>
      <p><strong>Phone:</strong> {{ customer.phone }}</p>
      <p><strong>Address:</strong> {{ customer.address }}</p>
      <p><strong>Delivery:</strong> {{ delivery }}</p>
      <p><strong>Payment:</strong> {{ payment }}</p>
      <h5>Cart Items:</h5>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }} (x{{ item.quantity }}) - ${{
            (item.price * item.quantity).toFixed(2)
          }}
        </li>
      </ul>
      <h4>Total: ${{ (cartTotal + deliveryFee).toFixed(2) }}</h4>
    </div>

    <!-- Step 6: order complete -->
    <div v-if="step === 6" class="order-complete text-center">
      <h2>Order Complete!</h2>
      <p>
        Thank you, {{ customer.name }}. Your order has been placed successfully.
      </p>
      <h4>Total Paid: ${{ (cartTotal + deliveryFee).toFixed(2) }}</h4>
      <button class="btn next-btn mt-3" @click="resetOrder">
        Back to Shop
      </button>
    </div>

    <!-- Navigation buttons -->
    <div class="d-flex justify-content-between mt-4" v-if="step < 6">
      <button class="btn back-btn" :disabled="step === 1" @click="prevStep">
        Back
      </button>
      <button class="btn next-btn" @click="nextStep" v-if="step < 5">
        Next
      </button>
      <button class="btn place-btn" v-if="step === 5" @click="submitOrder">
        Place Order
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "vue-router";

const router = useRouter();

const step = ref(1);
const delivery = ref("");
const payment = ref("");
const customer = ref({
  name: "",
  email: "",
  phone: "",
  address: "",
});
const errors = ref({});

const cart = useCartStore();
const cartItems = computed(() => cart.items);

const cartTotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

const deliveryOptions = [
  { value: "standard", label: "Standard", time: "3-5 days", fee: 9.95 },
  { value: "express", label: "Express", time: "1-2 days", fee: 19.95 },
  { value: "pickup", label: "Pickup", time: "Same day", fee: 0 },
];

const deliveryFee = computed(() => {
  const option = deliveryOptions.find((o) => o.value === delivery.value);
  return option ? option.fee : 0;
});

const progressPercent = computed(() => (step.value / 6) * 100);

function validateStep() {
  errors.value = {};

  if (step.value === 1 && cartItems.value.length === 0) {
    errors.value.cart =
      "Your cart is empty. Please add items before continuing.";
  }

  if (step.value === 2 && !delivery.value) {
    errors.value.delivery = "Please select a delivery method";
  }

  if (step.value === 3) {
    if (!customer.value.name) errors.value.name = "Name is required";

    if (!customer.value.email) {
      errors.value.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(customer.value.email)) {
        errors.value.email = "Invalid email format";
      }
    }

    if (!customer.value.phone) {
      errors.value.phone = "Phone is required";
    } else {
      const phoneRegex = /^[0-9]{8,12}$/;
      if (!phoneRegex.test(customer.value.phone)) {
        errors.value.phone = "Phone must be 8-12 digits";
      }
    }

    if (!customer.value.address) errors.value.address = "Address is required";
  }

  if (step.value === 4 && !payment.value) {
    errors.value.payment = "Please select a payment method";
  }

  return Object.keys(errors.value).length === 0;
}

function nextStep() {
  if (validateStep() && step.value < 6) step.value++;
}
function prevStep() {
  if (step.value > 1) step.value--;
}
function submitOrder() {
  if (validateStep()) {
    step.value = 6;
  }
}
function resetOrder() {
  cart.clearCart();
  step.value = 1;
  delivery.value = "";
  payment.value = "";
  customer.value = { name: "", email: "", phone: "", address: "" };
  router.push("/products");
}
</script>

<style scoped>
h1,
h3 {
  font-family: "Montserrat", sans-serif;
  color: #fff;
}

/* Progress bar */
.progress {
  border: 3px solid #fff;
  border-radius: 5px;
  background-color: #000 !important;
  height: 30px;
  font-size: inherit;
}

.progress-bar {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #000 !important;
  background-color: #fff !important;
  transition: width 0.4s ease;
}

/* Step 1 cart table */
.cart-table {
  background: transparent !important;
  color: #fff !important;
  border: none;
}
.cart-table thead,
.cart-table tbody,
.cart-table tr,
.cart-table th,
.cart-table td {
  background: transparent !important;
  color: #fff !important;
}
.cart-table th,
.cart-table td {
  border: 1px solid #555;
}

/* Step 1 quantity buttons */
.qty-btn {
  background: none !important;
  border: none !important;
  color: #fff !important;
  font-weight: bold;
  font-size: inherit;
  padding: 0.25rem 0.6rem;
  transition: color 0.2s ease;
}
.qty-btn:hover {
  color: #ccc !important;
}
.qty-btn:active {
  color: #888 !important;
  background: none !important;
  box-shadow: none !important;
}

/* Step 2 delivery options */
.delivery-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #fff;
}
.delivery-option {
  padding: 1rem;
  background: transparent;
  color: #fff !important;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;
}
.delivery-option.selected {
  background-color: #333;
  border-color: #aaa;
}

/* Step 3 custom inputs */
.custom-input {
  background: transparent !important;
  border: none;
  border-bottom: 2px solid #aaa;
  border-radius: 0;
  color: #fff !important;
  font-size: inherit;
}
.custom-input::placeholder {
  color: #888 !important;
}
.custom-input:focus {
  background: transparent !important;
  border-bottom: 2px solid #fff;
  box-shadow: none;
  color: #fff !important;
}

/* Validation */
.is-invalid {
  border-bottom-color: red !important;
}
.invalid-feedback {
  color: red !important;
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

.text-muted {
  color: #fff !important;
}

/* Totals */
h5.text-end,
h4.text-end {
  color: #fff !important;
}

/* Step 4 payment */
.step-4,
.step-4 * {
  color: #fff !important;
}
.payment-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
}
.payment-option input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #fff;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  background: transparent;
  position: relative;
}
.payment-option input[type="radio"]:checked {
  background-color: #fff;
}
.payment-option input[type="radio"]:checked::after {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #000;
}
.payment-option label {
  cursor: pointer;
}

/* Step 5 confirmation */
.step-5,
.step-5 * {
  color: #fff !important;
}

/* Step 6 order complete */
.order-complete {
  color: #fff;
  margin-top: 2rem;
}
.order-complete h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.order-complete p,
.order-complete h4 {
  margin-top: 0.5rem;
}

/* Navigation buttons */
.back-btn {
  background: transparent !important;
  border: 2px solid #fff !important;
  color: #fff !important;
  border-radius: 0;
  padding: 0.5rem 1.5rem;
  font-size: inherit;
}
.back-btn:hover {
  background: #111 !important;
  color: #fff !important;
}

.next-btn {
  background: #fff !important;
  color: #000 !important;
  border: 2px solid #fff !important;
  border-radius: 0;
  padding: 0.5rem 1.5rem;
  font-size: inherit;
}
.next-btn:hover {
  background: #ddd !important;
  color: #000 !important;
}

.place-btn {
  background: #26b447 !important;
  border: none !important;
  border-radius: 0;
  padding: 0.5rem 1.5rem;
  font-size: inherit;
  color: #fff !important;
}
.place-btn:hover {
  background: #1b8131 !important;
}
</style>