import { defineStore } from "pinia";
// import { useUser } from "@clerk/clerk-js";
import type { UpdateUserParams, SetProfileImageParams } from "@clerk/types";

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
  state: (): {
    user: user | null;
    modalOpened: boolean;
    triggerPictureInput: boolean;
  } => ({
    user: null,
    modalOpened: false,
    triggerPictureInput: false,
  }),
  actions: {
    setUser() {
      const userData = this.$clerk.user
        ? this.$clerk.user
        : this.$clerk.client.sessions[0].user;
      this.user = userData;
      const userCookie = useCookie("m-user");
      userCookie.value = userData;
    },
    async updateUser() {
      await this.$clerk.user.update<UpdateUserParams>({
        first_name: this.user?.firstName,
        last_name: this.user?.lastName,
      });
      this.setUser();
    },
    async setProfileImage(file: File | null) {
      await this.$clerk.user.setProfileImage<SetProfileImageParams>({ file });
      this.setUser();
    },
  },
});
