import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, CalculatorComponent],
    imports: [ReactiveFormsModule, FormsModule]
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'test_task'`, () => {
    expect(component.title).toEqual('test_task');
  });
});
