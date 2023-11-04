import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

// pages
// import LandingPage from "../views/Landing.vue";
import AuthPage from "../views/Auth.vue";

// panel

import DashboardPage from "../views/Dashboard.vue";
import ProfilePage from "../views/Profile.vue";
import CustomerRegistrationPage from "../views/CustomerRegistration.vue";
import InvoiceRegistration from "@/views/InvoiceRegistration.vue";
import SelectInvoiceType from "../components/panel/invoiceType/SelectInvoiceType.vue";
import InvoicesList from "@/views/InvoicesList.vue";
import InvoiceUpdating from "@/views/InvoiceUpdating.vue";
import StatusInvoices from "@/components/panel/statusInvoices/statusInvoices.vue";

// components

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "auth",
    component: AuthPage,
  },

  // dashboard

  {
    path: "/panel",
    name: "dashboard",
    component: DashboardPage,

    children: [
      {
        path: "profile",
        name: "profile",
        component: ProfilePage,
      },

      {
        path: "customerRegistration",
        name: "customerRegistration",
        component: CustomerRegistrationPage,
      },
      {
        path: "invoiceRegistration",
        name: "invoiceRegistration",
        component: InvoiceRegistration,
      },
      {
        path: "selectInvoiceType",
        name: "selectInvoiceType",
        component: SelectInvoiceType,
      },
      {
        path: "invoicesList",
        name: "invoicesList",
        component: InvoicesList,
      },
      {
        path: "invoiceUpdating",
        name: "invoiceUpdating",
        component: InvoiceUpdating,
      },
      {
        path: "statusInvoices",
        name: "statusInvoices",
        component: StatusInvoices,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
