import { defineStore } from "pinia";

export type navigationItem = {
  title: string | null;
  _path: string;
  children: navigationItem[];
};

export type RootState = {
  navigation: navigationItem[];
};

export const useCourseAsideStore = defineStore("courseAside", {
  state: (): RootState => ({
    navigation: [],
  }),

  actions: {
    setNavigation(value: navigationItem[]) {
      this.navigation = value;
    },
  },
});
