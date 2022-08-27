export interface Budget{
    id:number;
    customerId:number;
    accountType:string;
    monthlyLimit:number;
    warningLimit:number;
    remainder:number;
}