import { Building } from "./Building";

export interface Room
{
    id?: number;
    name?: string;
    status?: boolean;
    area?: number;
    building?: Building;
    description?: string;
}