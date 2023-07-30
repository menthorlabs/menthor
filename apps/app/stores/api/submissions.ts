import { defineStore } from "pinia";

export type SubmissionParams = {
  Content: string;
  SubmissionType: "Content" | "Image";
  SubmissionStatus:
    | "Approved"
    | "Rejected"
    | "Pending"
    | "Draft"
    | "ChangesRequested";
  LessonUrl: string;
  Lesson_Id: string;
  Id?: string;
};

export const useSubmissionsStore = defineStore("submissions", {
  state: (): {
    submission: SubmissionParams | null;
    submissions: SubmissionParams[] | null;
  } => ({
    submission: null,
    submissions: null,
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
    async getSubmissions() {
      try {
        const { _data } = await this.$api(`/submissions`);
        this.submissions = _data;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async createSubmission(payload: SubmissionParams) {
      try {
        await this.$api(`/submissions`, {
          method: "POST",
          body: payload,
        });
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async updateSubmission(payload: SubmissionParams) {
      try {
        await this.$api(`/submissions/${this.submission?.Id}`, {
          method: "PATCH",
          body: payload,
        });
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
  },
});
