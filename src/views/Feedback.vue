<template>
  <main class="container" style="padding-top: 6rem">
    <h1 class="h3 mb-4">Feedback / Query</h1>

    <!-- Feedback form -->
    <form
      class="row g-3 needs-validation"
      novalidate
      @submit.prevent="onSubmit"
    >
      <!-- Name -->
      <div class="col-md-6">
        <label for="name" class="form-label">Full name *</label>
        <input
          id="name"
          v-model="name"
          class="form-control"
          placeholder="..."
          required
        />
        <div class="invalid-feedback">Please enter your name.</div>
      </div>

      <!-- Email -->
      <div class="col-md-6">
        <label for="email" class="form-label">Email *</label>
        <input
          id="email"
          v-model="email"
          type="email"
          class="form-control"
          placeholder="..."
          required
        />
        <div class="invalid-feedback">Please provide a valid email.</div>
      </div>

      <!-- Phone -->
      <div class="col-md-6">
        <label for="phone" class="form-label">Phone *</label>
        <input
          id="phone"
          v-model.trim="phone"
          type="tel"
          inputmode="numeric"
          class="form-control"
          placeholder="..."
          maxlength="12"
          pattern="[0-9]{8,12}"
          required
        />
        <div class="form-text text-secondary">
          Digits only, 8-12 characters.
        </div>
        <div class="invalid-feedback">Phone number must be 8-12 digits.</div>
      </div>

      <!-- Topic -->
      <div class="col-md-6">
        <label for="topic" class="form-label">Topic</label>
        <select id="topic" v-model="topic" class="form-select">
          <option value="">General</option>
          <option>Orders</option>
          <option>Technical</option>
        </select>
      </div>

      <!-- Message -->
      <div class="col-12">
        <label for="msg" class="form-label">Your message *</label>
        <textarea
          id="msg"
          v-model="msg"
          class="form-control"
          rows="5"
          placeholder="..."
          minlength="10"
          required
        ></textarea>
        <div class="invalid-feedback">Please write at least 10 characters.</div>
      </div>

      <!-- Privacy -->
      <div class="col-12">
        <div class="form-check">
          <input
            v-model="agree"
            class="form-check-input"
            type="checkbox"
            id="agree"
            required
          />
          <label class="form-check-label" for="agree">
            I agree to the privacy policy *
          </label>
          <div class="invalid-feedback">You must agree before submitting.</div>
        </div>
      </div>

      <!-- Submit -->
      <div class="col-12">
        <button class="modern-btn" type="submit">Submit</button>
      </div>
    </form>

    <!-- Thank you message -->
    <div
      v-if="submitted"
      class="mt-4 p-3 border border-light rounded"
      id="thankyou"
    >
      <h5 class="text-white">Thank you for your feedback!</h5>
      <p class="mb-1"><strong>Name:</strong> {{ summary.name }}</p>
      <p class="mb-1"><strong>Email:</strong> {{ summary.email }}</p>
      <p class="mb-1"><strong>Phone:</strong> {{ summary.phone }}</p>
      <p class="mb-1"><strong>Topic:</strong> {{ summary.topic }}</p>
      <p class="mb-0"><strong>Message:</strong> {{ summary.msg }}</p>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const topic = ref("");
const msg = ref("");
const agree = ref(false);

const submitted = ref(false);
const summary = ref({});

function onSubmit(e) {
  const form = e.target.closest("form");
  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
    form.classList.add("was-validated");
    return;
  }

  // Message summary
  summary.value = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    topic: topic.value || "General",
    msg: msg.value,
  };

  submitted.value = true;

  // Reset form
  name.value = "";
  email.value = "";
  phone.value = "";
  topic.value = "";
  msg.value = "";
  agree.value = false;
  form.classList.remove("was-validated");
}
</script>

<style scoped>
body {
  background-color: #000;
  color: #fff;
  font-family: "Montserrat", sans-serif;
}

h1,
.form-label,
label {
  color: #fff !important;
  font-family: "Montserrat", sans-serif;
}

/* Input + select + textarea */
.form-control,
.form-select,
textarea {
  background: transparent !important;
  border: none;
  border-bottom: 2px solid #555;
  border-radius: 0;
  color: #fff !important;
  padding-left: 0;
  box-shadow: none !important;
  font-size: inherit;
}

.form-control:focus,
.form-select:focus,
textarea:focus {
  border-bottom: 2px solid #fff;
  outline: none;
  box-shadow: none;
}

.form-control::placeholder,
textarea::placeholder {
  color: #777;
}

/* Dropdown */
.form-select {
  background-color: transparent !important;
  color: #fff !important;
}

.form-select option {
  background-color: #000;
  color: #fff;
}

/* Checkbox */
.form-check-input {
  background-color: transparent;
  border: 2px solid #fff;
}

.form-check-input:checked {
  background-color: #fff;
}

/* Submit button */
.modern-btn {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  border: 2px solid #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 0;
  padding: 0.5rem 1.2rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
}

.modern-btn:hover {
  background: #fff;
  color: #000;
}

#thankyou {
  border-color: #1b8131 !important;
}

#thankyou h5,
#thankyou p {
  font-size: inherit;
  color: #fff;
}
</style>
