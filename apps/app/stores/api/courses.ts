import { defineStore } from "pinia";

type CourseParams = {
  TimeTrack?: number;
  CurrentLessonId?: string;
  ContentId?: string;
  Done?: boolean;
  Lessons?: string[];
  Id?: string;
  EnrollStatus?: "course" | "discord" | "share";
};

export const useCoursesStore = defineStore("courses", {
  state: (): {
    course: CourseParams | null;
    courses: CourseParams[] | null;
  } => ({
    course: null,
    courses: null,
  }),
  getters: {
    isEnrolled(state): boolean {
      return !!state.course?.ContentId;
    },
  },
  actions: {
    async getCourse(id: string) {
      const sessionStore = useSessionStore();
      if (!sessionStore.isConnected()) return;
      try {
        const response = await this.$api(`/courses/${id}`);
        this.course = response[0] || null;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async getCourses() {
      const sessionStore = useSessionStore();
      if (!sessionStore.isConnected()) return;
      try {
        const response = await this.$api(`/courses`);
        this.courses = response;
        return response;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async createCourse(payload: CourseParams) {
      const sessionStore = useSessionStore();
      if (!sessionStore.isConnected()) return;
      try {
        this.course = payload;
        await this.$api(`/courses`, {
          method: "POST",
          body: payload,
        });
      } catch (e) {
        this.course = null;
        throw new Error((e as Error).message);
      }
    },
    async updateCourse(payload: CourseParams) {
      const sessionStore = useSessionStore();
      if (!sessionStore.isConnected()) return;
      if (!this.course) return;

      const lastState = Object.freeze({ ...this.course });
      this.course = { ...this.course, ...payload };
      try {
        await this.$api(`/courses/${this.course.Id}`, {
          method: "PATCH",
          body: payload,
        });
      } catch (e) {
        this.course = lastState;
        throw new Error((e as Error).message);
      }
    },
    async updateCourseLessons(lessonId: string) {
      const sessionStore = useSessionStore();
      if (!sessionStore.isConnected()) return;
      const lessons = new Set(this.course?.Lessons);
      try {
        lessons.add(lessonId);
        if (this.course) {
          this.course.Lessons = [...lessons];
        }

        await this.$api(`/courses/${this.course?.Id}`, {
          method: "PATCH",
          body: {
            lessons: [...lessons],
          },
        });
      } catch (e) {
        lessons.delete(lessonId);
        if (this.course) {
          this.course.Lessons = [...lessons];
        }
        throw new Error((e as Error).message);
      }
    },
  },
});
