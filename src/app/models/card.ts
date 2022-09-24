export interface Card {
    name?:string,
    title:string,
    phone:string,
    email?:string,
    address?:string
}
// title and phone are required, the others not. so "?" mark used for the others