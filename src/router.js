import { createRouter, createWebHistory } from "@ionic/vue-router";
import Home from "@/views/Home.vue";
import AddProduct from "@/views/AddProduct.vue";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: AddProduct
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
