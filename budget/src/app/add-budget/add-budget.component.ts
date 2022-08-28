import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../services/budget.service';
import { Budget } from '../services/models/budget';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['../app.component.css']
})
export class AddBudgetComponent implements OnInit {
  monthlyAmount:number = 0;
  warningLimit:number = 0;
  //enableEdit = false;
  constructor(private budgetService: BudgetService, private router:Router) { }

  ngOnInit(): void {
  }

  onClickSubmit(){

    let budget:Budget = {id:this.budgetService.getNextId(),customerId:1,accountType:"checking",monthlyLimit:this.monthlyAmount,warningLimit:this.warningLimit, remainder:this.monthlyAmount};
    console.log(budget);
    this.budgetService.addNewBudget(budget).subscribe((res)=>{
      console.log(res)
    });
    this.router.navigate(['budget']);
  }
}
