import { Room } from "./Room";

export interface Tenant
{
    id?: number,
    name?: string,
    avatar?: string,
    gender?: boolean,
    phoneNumber?: string,
    email?: string,
    indentityCard?: string,
    job?: string,
    hometown?: string,
    room?: Room
}