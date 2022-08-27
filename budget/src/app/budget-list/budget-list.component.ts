import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { Budget } from '../services/models/budget';
@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  budgetList : Budget[];
  constructor(private budgetService: BudgetService) {
    this.budgetList = [];
   }

  ngOnInit(): void {
    this.budgetService.getBudgetList(1).subscribe((response) =>{
      console.log(response);
      this.budgetList = response;
    })
  }

}
