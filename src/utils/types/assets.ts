import { IUser } from "./user";

export interface ISystemFields {
	id: number | string,
	createdAt: Date,
	createdBy: IUser,
	updatedAt: Date,
	updatedBy: IUser,
	publishedAt: Date,
	publishedBy: IUser,
	scheduledIn: unknown
}

export type Slug = string