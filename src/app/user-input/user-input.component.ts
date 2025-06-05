import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
  enteredInitialInvestment='0';
  enteredAnnualInvestment='0';
  enteredExpectedReturn='5';
  enteredDuration='10';

  @Output() calculate = new EventEmitter<{initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number}>()
  onSubmit() {
    this.calculate.emit({initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration
     })
  }
}
