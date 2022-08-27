export interface Budget{
    budget_id:number;
    customerId:number;
    accountType:string;
    monthlyLimit:number;
    warningLimit:number;
    remainder:number;
}