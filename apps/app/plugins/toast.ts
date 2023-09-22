export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;
  app.config.globalProperties.$toastItems = reactive([]);
  type button = {
    text: string;
    loading: boolean;
    variant: {
      type: string;
      default: "primary";
    };
    size: {
      type: string;
      default: "base";
    };
    iconLeft: string;
    iconRight: string;
  };
  type toast = {
    title: string;
    description: string;
    variant: {
      type: string;
      default: "danger";
    };
    buttons: button[];
    time: number;
  };

  const addToast = ({ title, description, variant, buttons, time }: toast) => {
    app.config.globalProperties.$toastItems.push({
      title,
      description,
      variant,
      buttons,
      time,
    });
  };

  const addErrorToast = (title: string) => {
    app.config.globalProperties.$toastItems.push({
      title,
      variant: "danger",
      time: 8000,
    });
  };

  const addSuccessToast = (title: string) => {
    app.config.globalProperties.$toastItems.push({
      title,
      variant: "success",
      time: 8000,
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
