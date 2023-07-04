import { defineStore } from "pinia";
// import { useUser } from "@clerk/clerk-js";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    modalOpened: false,
  }),
  actions: {
    setUser() {
      console.log(this.$clerk.user);
      this.user = this.$clerk.user;
    },
    async updateUser() {
      await this.$clerk.user.update({
        unsafeMetadata: { test: "test" },
      });
    },
  },
});
