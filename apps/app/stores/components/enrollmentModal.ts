import { defineStore } from "pinia";

export type Enrollment = {
  opened: boolean;
};

export const useEnrollmentModalStore = defineStore("enrollmentModal", {
  state: (): Enrollment => ({
    opened: false,
  }),
});
