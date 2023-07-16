import { defineStore } from "pinia";

type SubmissionParams = {
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
};

export const useSubmissionsStore = defineStore("submissions", {
  state: (): {
    submission: SubmissionParams | null;
    submissions: SubmissionParams[] | null;
  } => ({
    submission: null,
    submissions: null,
  }),
  actions: {
    async getSubmission(id: string) {
      try {
        const { _data } = await this.$api(`/submission/${id}`);
        this.submission = _data;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async getSubmissions() {
      try {
        const { _data } = await this.$api(`/submission`);
        this.submissions = _data;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async createSubmission(payload: SubmissionParams) {
      try {
        await this.$api(`/submission`, {
          method: "POST",
          body: payload,
        });
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async updateSubmission(payload: SubmissionParams & { id: string }) {
      try {
        await this.$api(`/submission/${payload.id}`, {
          method: "PUT",
          body: payload,
        });
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
  },
});
