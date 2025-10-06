import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";
import Products from "@/views/Products.vue";
import Feedback from "@/views/Feedback.vue";
import Delivery from "@/views/Delivery.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/products", name: "Products", component: Products },
  { path: "/feedback", name: "Feedback", component: Feedback },
  { path: "/contacts", name: "Contacts", component: Contacts },
  { path: "/delivery", name: "Delivery", component: Delivery },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});
