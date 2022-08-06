import { Employee } from "./Employee";
import { Tenant } from "./Tenant";

export interface Contract
{
    id?: number;
    createDate?: Date;
    startDate?: Date;
    endDate?: Date;
    costPerMonth?: number;
    tenant: Tenant;
    employee: Employee;
}