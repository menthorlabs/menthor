import { defineStore } from "pinia";

export const useUploadStore = defineStore("upload", {
  actions: {
    async uploadFileOnUrl(file: File, url: string) {
      try {
        const response = await $fetch(url, {
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": file.type,
          },
        });

        return response;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
  },
});
