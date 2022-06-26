import { ILesson } from "./lessons";

export interface ITeacher {
	name: string;
	bio: string,
	avatarUrl: string,
	Lessons: Array<ILesson>
}