import { defineStore } from "pinia";

type CourseParams = {
  Progress: number;
  CurrentLessonUrl: string;
  ContentUrl: string;
  Done: boolean;
};

export const useCoursesStore = defineStore("courses", {
  state: (): {
    course: CourseParams | null;
    courses: CourseParams[] | null;
  } => ({
    course: null,
    courses: null,
  }),
  actions: {
    async getCourse(id: string) {
      try {
        const { _data } = await this.$api(`/course/${id}`);
        this.course = _data;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async getCourses() {
      try {
        const { _data } = await this.$api(`/course`);
        this.courses = _data;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async createCourse(payload: CourseParams) {
      try {
        await this.$api(`/course`, {
          method: "POST",
          body: payload,
        });
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async updateCourse(payload: CourseParams & { id: string }) {
      try {
        await this.$api(`/course/${payload.id}`, {
          method: "PUT",
          body: payload,
        });
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
  },
});
