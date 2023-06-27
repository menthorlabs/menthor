import { defineStore } from "pinia";

export type RootState = {
  opened: boolean;
};

export const useEnrollmentModalStore = defineStore("enrollmentModal", {
  state: (): RootState => ({
    opened: false,
  }),
});
