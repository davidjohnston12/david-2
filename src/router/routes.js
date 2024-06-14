const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/display", component: () => import("pages/DisplayPage.vue") }, // Added DisplayPage route
    ],
  },
  {
    path: "/:catchAll(.)",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
