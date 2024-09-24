import { registerApplication, start } from "single-spa";

registerApplication({
  name: "vue-app",
  app: () => System.import("vueApp"),
  activeWhen: ["/vue"],
});

registerApplication({
  name: "react-app",
  app: () => System.import("reactApp"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "react-app",
  app: () => System.import("reactApp"),
  activeWhen: ["/react"],
});

start();
