import { ISystemFields, Slug } from "./assets";
import { IChallenge } from "./challenge";
import { ITeacher } from "./teacher";

export interface ILesson extends ISystemFields {
	title: string,
	slug?: Slug,
	description?: string,
	videoId: string,
	AvaliableAt?: Date,
	challenge?: IChallenge,
	teacher?: ITeacher,
	lessonType: string,
}