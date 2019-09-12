import VueRouter from "vue-router";
import CompanyData from "./views/companyData.vue";
import CompanyPage from "./views/companyPage.vue";
import CompanyTable from "./views/companyTable.vue";

export const routes = [
  { path: "/:company", component: CompanyPage },
  { path: "/:company/data", component: CompanyData },
  { path: "/:company/table", component: CompanyTable },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
