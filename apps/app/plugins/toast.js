export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;
  app.config.globalProperties.$toastItems = reactive([]);
  const addToast = ({ title, description, variant, buttons, time }) => {
    app.config.globalProperties.$toastItems.push({
      title,
      description,
      variant,
      buttons,
      time,
    });
  };

  const addErrorToast = (title) => {
    app.config.globalProperties.$toastItems.push({
      title,
      variant: "danger",
      time: 5000,
    });
  };

  const addSuccessToast = (title) => {
    app.config.globalProperties.$toastItems.push({
      title,
      variant: "success",
      time: 5000,
    });
  };

  app.provide("toast", {
    show: addToast,
    error: addErrorToast,
    success: addSuccessToast,
  });

  app.config.globalProperties.$toast = addToast;
  app.config.globalProperties.$toastError = addErrorToast;
  app.config.globalProperties.$toastSuccess = addSuccessToast;
});
