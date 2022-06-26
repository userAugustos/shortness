import { ISystemFields } from "./assets";
import { ILesson } from "./lessons";

export interface ITeacher extends ISystemFields{
	name: string;
	bio: string,
	avatarUrl: string,
	Lessons: Array<ILesson>
}