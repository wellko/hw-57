export interface User {
	id:string,
	name:string,
	mail:string,
	active:boolean,
	role:string
}

export interface UserMutation {
	name:string,
	mail:string,
	active:boolean,
	role:string
}