import { Employee } from "./Employee";
import { Tenant } from "./Tenant";

export interface Invoice
{
    id?: number;
    name?: string;
    status?: boolean;
    electric?: number;
    water?: number;
    internet?: number;
    other?: number;
    electricCost?: number;
    waterCost?: number;
    internetCost?: number;
    otherCost?: number;
    tenant?: Tenant;
    employee?: Employee;
}