import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { Budget } from '../services/models/budget';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.css']
})
export class AddBudgetComponent implements OnInit {
  monthlyAmount:number = 0;
  warningLimit:number = 0;
  constructor(private budget:BudgetService) { }

  ngOnInit(): void {
  }
  onClickSubmit(){
    let budget:Budget = {budget_id:-1,customerId:1,accountType:"checking",monthlyLimit:this.monthlyAmount,warningLimit:this.warningLimit, remainder:this.monthlyAmount};
    this.budget.addNewBudget(budget).subscribe((res)=>{
      console.log(res);
    });
  }
}
