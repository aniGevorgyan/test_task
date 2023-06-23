import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the sum correctly', () => {
    component.form.patchValue({ operand1: 5, operand2: 3, operation: '+' });
    component.calculate();
    expect(component.calculation.result).toBe(8);
  });

  it('should calculate the sum incorrectly', () => {
    component.form.patchValue({ operand1: 10, operand2: 20, operation: '+' });
    component.calculate();
    expect(component.calculation.result).not.toBe(40);
  });

  it('should calculate division correctly', () => {
    component.form.patchValue({ operand1: 10, operand2: 2, operation: '/' });
    component.calculate();
    expect(component.calculation.result).toBe(5);
  });

  it('should calculate division incorrectly', () => {
    component.form.patchValue({ operand1: 8, operand2: 2, operation: '/' });
    component.calculate();
    expect(component.calculation.result).not.toBe(6);
  });

  it('should calculate modulus correctly', () => {
    component.form.patchValue({ operand1: 10, operand2: 3, operation: '%' });
    component.calculate();
    expect(component.calculation.result).toBe(1);
  });

  it('should calculate modulus incorrectly', () => {
    component.form.patchValue({ operand1: 10, operand2: 3, operation: '%' });
    component.calculate();
    expect(component.calculation.result).not.toBe(3);
  });


  it('should find the highest prime number correctly', () => {
    component.form.patchValue({ operand1: 1, operand2: 10, operation: 'prime' });
    component.calculate();
    expect(component.calculation.result).toBe(7);
  });

  it('button should be disabled when operand1 and operand2 have the same value', () => {
    component.form.patchValue({ operand1: 10, operand2: 10, operation: 'prime' });
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBeTruthy();
  });
});
