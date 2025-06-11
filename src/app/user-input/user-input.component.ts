import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
  // enteredInitialInvestment='0';
  // enteredAnnualInvestment='0';
  // enteredExpectedReturn='5';
  // enteredDuration='10';

  // @Output() calculate = new EventEmitter<{initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number}>()
  
  // onSubmit() {
  //   this.calculate.emit({initialInvestment: +this.enteredInitialInvestment,
  //     annualInvestment: +this.enteredAnnualInvestment,
  //     expectedReturn: +this.enteredExpectedReturn,
  //     duration: +this.enteredDuration
  //    })
  // }

  //USING SIGNALS AND OUTPUT FUNCTION
  // enteredInitialInvestment=signal('0');
  // enteredAnnualInvestment=signal('0');
  // enteredExpectedReturn=signal('5');
  // enteredDuration=signal('10');

  // calculate=output<{initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number}>();
  
  // onSubmit() {
  //   this.calculate.emit({initialInvestment: +this.enteredInitialInvestment(),
  //     annualInvestment: +this.enteredAnnualInvestment(),
  //     expectedReturn: +this.enteredExpectedReturn(),
  //     duration: +this.enteredDuration()
  //    })

    //reset the form
  //   this.enteredInitialInvestment=signal('0');
  //   this.enteredAnnualInvestment=signal('0');
  //   this.enteredExpectedReturn=signal('5');
  //   this.enteredDuration=signal('10');
  // }


  //USING SERVICES
  enteredInitialInvestment=signal('0');
  enteredAnnualInvestment=signal('0');
  enteredExpectedReturn=signal('5');
  enteredDuration=signal('10');

  constructor(private investmentService:InvestmentService){}
  
  onSubmit() {
    this.investmentService.calculateInvestmentResults({initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration()
     });
    this.enteredInitialInvestment=signal('0');
    this.enteredAnnualInvestment=signal('0');
    this.enteredExpectedReturn=signal('5');
    this.enteredDuration=signal('10');
  }

}
