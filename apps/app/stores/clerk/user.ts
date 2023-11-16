import { defineStore } from "pinia";
import type { UpdateUserParams, SetProfileImageParams } from "@clerk/types";
import { useCookies } from "@vueuse/integrations/useCookies";

export type user = {
  profileImageUrl: string;
  primaryEmailAddress: {
    emailAddress: string;
  };
  fullName: string;
  firstName: string;
  lastName: string;
  username: string;
  publicMetadata: {
    badges: string;
    isCreator: boolean;
  };
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
  getters: {
    badges(state) {
      if (!state.user?.publicMetadata) return [];

      return state.user?.publicMetadata?.badges;
    },
  },
  actions: {
    setUser() {
      const userData = this.$clerk.user
        ? this.$clerk.user
        : this.$clerk.client.sessions[0]?.user;

      if (!userData) return;

      this.user = userData;
      const userCookie = useCookies([]);
      userCookie.set("m-user", userData);

      console.log("set user");
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
