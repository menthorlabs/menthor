import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";

// FloatingVue.options.themes.tooltip.delay.hide = 999999;

FloatingVue.options.themes.tooltip.delay.show = 0;

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(FloatingVue);
});
