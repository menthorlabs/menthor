import { defineStore } from "pinia";
// import { useUser } from "@clerk/clerk-js";
import type { UpdateUserParams } from "@clerk/types";

export type user = {
  profileImageUrl: string;
  primaryEmailAddress: {
    emailAddress: string;
  };
  fullName: string;
  firstName: string;
  lastName: string;
  username: string;
};

export const useUserStore = defineStore("user", {
  state: (): { user: user | null; modalOpened: boolean } => ({
    user: null,
    modalOpened: false,
  }),
  actions: {
    setUser() {
      this.user = this.$clerk.user;
    },
    async updateUser() {
      const response = await this.$clerk.user.update<UpdateUserParams>({
        username: this.user?.username,
      });
      this.setUser();
      console.log(response);
    },
  },
});
