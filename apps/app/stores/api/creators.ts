import { defineStore } from "pinia";

export const useCreatorsStore = defineStore("creators", {
  state: (): {
    images: string[];
    filesSize: number;
  } => ({
    images: [],
    filesSize: 0,
  }),
  actions: {
    async getImages() {
      try {
        const response = await this.$api(`/creators/images`);
        if (!response.images) return;

        this.images = response.images;
        this.filesSize = response.filesSize;
        return response;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async signUrl(fileType: string) {
      try {
        const response = await this.$api(`/creators/images/sign-url`, {
          method: "POST",
          body: {
            fileType,
          },
        });

        return response;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async deleteImage(fileName: string) {
      try {
        await this.$api(`/creators/${fileName}`, {
          method: "DELETE",
        });

        if (this.images.length <= 0) return;
        this.images = this.images.filter((e) => e != fileName);
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async addImage(fileName: string) {
      try {
        await this.$api(`/creators/images`, {
          method: "POST",
          body: {
            url: fileName,
          },
        });

        this.images.push(fileName);
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
  },
});
