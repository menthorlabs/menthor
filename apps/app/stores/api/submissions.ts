import { defineStore } from "pinia";

export type SubmissionStatus =
  | "Approved"
  | "Rejected"
  | "Pending"
  | "Draft"
  | "ChangesRequested";

export type SubmissionParams = {
  Content: string;
  SubmissionType: "Content" | "Image";
  SubmissionStatus: SubmissionStatus;
  LessonUrl: string;
  Lesson_Id: string;
  Id?: string;
};

export const useSubmissionsStore = defineStore("submissions", {
  state: (): {
    submission: SubmissionParams | null;
    submissions: SubmissionParams[] | null;
    uploadUrl: { fileName: string; url: string } | null;
  } => ({
    submission: null,
    submissions: null,
    uploadUrl: null,
  }),
  getters: {
    hasSubmission(state) {
      return !!state.submission;
    },
  },
  actions: {
    async getSubmission(id: string) {
      try {
        const response = await this.$api(`/submissions/${id}`);
        this.submission = response[0];
        return response[0];
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async createSubmission() {
      try {
        const response = await this.$api(`/submissions`, {
          method: "POST",
          body: this.submission,
        });
        if (!this.submission) return;
        this.submission.Id = response.submissionId;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async updateSubmission() {
      try {
        await this.$api(`/submissions/${this.submission?.Id}`, {
          method: "PATCH",
          body: this.submission,
        });
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async requestUrl() {
      try {
        const response = await this.$api(
          `/submissions/request-url/${this.submission?.Id}`
        );

        this.uploadUrl = response.url;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async uploadFileOnUrl(file: File) {
      if (!this.uploadUrl?.url) return;

      try {
        const formData = new FormData();
        formData.append("image", file);
        const response = await $fetch(this.uploadUrl.url, {
          method: "PUT",
          body: formData,
          headers: {
            "Content-Type": file.type,
          },
        });

        return response;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    getStatusName(status: SubmissionStatus) {
      const statusMap: Record<SubmissionStatus, string> = {
        Pending: "Enviado",
        Draft: "Pendente",
        Approved: "Aprovado",
        ChangesRequested: "Envie novamente",
        Rejected: "Rejeitado",
      };

      return statusMap[status];
    },
  },
});
