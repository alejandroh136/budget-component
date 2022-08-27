import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Budget } from './models/budget';

/*const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};*/


let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');
//headers = headers.set('Authorization', `Bearer ${this.token}`); if we are using jwt Token


@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private arrayLength = 0;
  private apiUrl = "http://localhost:5000/tasks";
  constructor(private http:HttpClient) { }
  getBudgetList(customerId:number): Observable<Budget[]>{
    return this.http.get<Budget[]>(this.apiUrl);
  }
  deleteBudget(budget:Budget){
    return this.http.delete(this.apiUrl+'/'+budget.id,{observe:'response'});
  }
  addNewBudget(budget:Budget){
    return this.http.post(this.apiUrl, budget,{observe:'response'});
  }
  updateLength(len:number){
    this.arrayLength = len;
  }
  getNextId(){
    return this.arrayLength;
  }
}
