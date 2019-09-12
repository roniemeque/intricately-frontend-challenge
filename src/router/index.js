import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import CompanyData from "./views/companyData.vue";
import CompanyPage from "./views/companyPage.vue";
import CompanyTable from "./views/companyTable.vue";

export const routes = [
  {
    path: "/:company",
    component: CompanyPage,
    meta: {
      title: "Company Page",
    },
  },
  {
    path: "/:company/data",
    component: CompanyData,
    meta: {
      title: "Company Data",
    },
  },
  {
    path: "/:company/table",
    component: CompanyTable,
    meta: {
      title: "Company Table",
    },
  },
];

const router = new VueRouter({
  //mode: "history", not using hash would require some tweaking in dev server
  routes,
});

export default router;
