import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  public addition(form: FormGroup) {
    return form.get('operand1')?.value + form.get('operand2')?.value
  }

  public division(form: FormGroup) {
    return form.get('operand1')?.value / form.get('operand2')?.value
  }

  public remainder(form: FormGroup) {
    return form.get('operand1')?.value % form.get('operand2')?.value;
  }

  public highestPrimeNumber(form: FormGroup) {
    let a, b;
    if (form.get('operand1')?.value < form.get('operand2')?.value) {
      a = form.get('operand1')?.value;
      b = form.get('operand2')?.value
    } else {
      a = form.get('operand2')?.value;
      b = form.get('operand1')?.value
    }
    return this.findHighestPrimeNumber(a, b);
  }

  // function for find Highest prime number
  public findHighestPrimeNumber(a: number, b: number): number {
    let highestPrime = 0;

    for (let num = a; num <= b; num++) {
      let isPrime = true;

      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime && num > highestPrime) {
        highestPrime = num;
      }
    }
    return highestPrime;
  }
}
