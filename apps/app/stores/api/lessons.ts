import { defineStore } from "pinia";

type LessonParams = {
  Progress: number;
  TimeTrack: string;
  ContentUrl: string;
  Done: boolean;
  Course_Id: string;
};

export const useLessonsStore = defineStore("lessons", {
  state: (): {
    lesson: LessonParams | null;
    lessons: LessonParams[] | null;
  } => ({
    lesson: null,
    lessons: null,
  }),
  actions: {
    async getLesson(id: string) {
      try {
        const { _data } = await this.$api(`/lesson/${id}`);
        this.lesson = _data;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async getLessons() {
      try {
        const { _data } = await this.$api(`/lesson`);
        this.lessons = _data;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async createLesson(payload: LessonParams) {
      try {
        await this.$api(`/lesson`, {
          method: "POST",
          body: payload,
        });
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async updateLesson(payload: LessonParams & { id: string }) {
      try {
        await this.$api(`/lesson/${payload.id}`, {
          method: "PUT",
          body: payload,
        });
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
  },
});
