import { Component, Input, OnInit } from '@angular/core';
import { Budget } from '../services/models/budget';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.css']
})
export class BudgetItemComponent implements OnInit {
@Input() budget!:Budget;
percent:string = "";
  constructor() { }

  ngOnInit(): void {
    if(this.budget.remainder < 0){
      let percent = 80;
      this.percent = percent + "%";
    }
    else{
      let percent = 100 - (this.budget.remainder / this.budget.monthlyLimit); 
      this.percent = 80 + "%";
    }
    console.log(this.percent);
  }

}
