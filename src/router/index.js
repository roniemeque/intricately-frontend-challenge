import VueRouter from "vue-router";
import CompanyData from "./views/companyData.vue";
import CompanyPage from "./views/companyPage.vue";

export const routes = [
  { path: "/:company", component: CompanyPage },
  { path: "/:company/data", component: CompanyData },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
