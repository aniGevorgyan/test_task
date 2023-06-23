import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CalculatorService} from "../../shared/service/calculator.service";
import {ICalculation} from "../../shared/interface/calculation.interface";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent implements OnInit {
  public calculation: ICalculation = {
    operand1: 0,
    operand2: 0,
    operation: '',
    result: 0,
  };
  public calculationResult: ICalculation[] = [];
  public form: FormGroup = new FormGroup({
    operand1: new FormControl('', Validators.required),
    operand2: new FormControl('', Validators.required),
    operation: new FormControl('', Validators.required),
  });

  constructor(private calculateService: CalculatorService) {
  }

  public ngOnInit() {
    // if there is data in localStorage
    if (localStorage.getItem('calculationList')) {
      this.calculationResult = JSON.parse(localStorage.getItem('calculationList') ?? '');
    }
  }

  public calculate() {
    localStorage.removeItem('calculationList');
    let result: number = 0;

    switch (this.form.get('operation')?.value) {
      case '+':
        result = this.calculateService.addition(this.form);
        break;
      case '/':
        result = this.calculateService.division(this.form);
        break;
      case '%':
        result = this.calculateService.remainder(this.form);
        break;
      case 'prime':
        result = this.calculateService.highestPrimeNumber(this.form);
        break;
    }

    this.calculation = {
      operand1: this.form.get('operand1')?.value,
      operand2: this.form.get('operand2')?.value,
      operation: this.form.get('operation')?.value,
      result: result
    };
    this.calculationResult.push(this.calculation);
    localStorage.setItem('calculationList', JSON.stringify(this.calculationResult));
    this.form.reset();
  }
}
