import { defineStore } from "pinia";

type CourseParams = {
  TimeTrack: number;
  CurrentLessonUrl?: string;
  ContentId: string;
  Done: boolean;
  Lessons?: string[];
  Id?: string;
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
        const response = await this.$api(`/course/${id}`);
        this.course = response[0] || null;
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    async getCourses() {
      try {
        const response = await this.$api(`/course`);
        this.courses = response;
        return response;
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
    async updateCourseLessons(lessonId: string) {
      try {
        const lessons = new Set(this.course?.Lessons);
        lessons.add(lessonId);

        await this.$api(`/course/${this.course?.Id}`, {
          method: "PATCH",
          body: {
            lessons: [...lessons],
          },
        });

        if (this.course) {
          this.course.Lessons = [...lessons];
        }
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
  },
});
