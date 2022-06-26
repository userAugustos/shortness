import { ISystemFields } from "./assets";

export interface IUser extends ISystemFields{
	id: string,
	name: string,
	avatarUrl: string
}