import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  reasonInput: string;
  total= 0;

  constructor() {}

  addEx(){
    var reason = this.reasonInput;
    var amount = this.amountInput;
    var newEle = document.createElement('ion-item');
    newEle.innerHTML = reason + " " + amount;
    everyExpense.appendChild(newEle);
    var tE = this.total += +amount;
    totalExpense.innerHTML = "Total Expenses" + " " + tE;
  }

  clear(){
    this.reasonInput = '';
    this.amountInput = '';
    
  }


}
