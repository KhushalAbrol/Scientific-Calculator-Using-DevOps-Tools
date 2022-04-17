import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Testing input as  5", () => {
    const cal = fixture.componentInstance;
    cal.add(5);
    expect(cal.value1).toEqual(5);
  })
  
  it("Testing input as 59", () => {
    const cal = fixture.componentInstance;
    cal.add(5);
    cal.add(9);
    expect(cal.value1).toEqual(59);
  })
  
  it("Testing Root of 625", () => {
    const cal = fixture.componentInstance;
    cal.add(6);
    cal.add(2);
    cal.add(5);
    cal.root()
    expect(cal.value1).toEqual(25);
  })
  
  it("Testing Factorial of 6", () => {
    const cal = fixture.componentInstance;
    cal.add(6);
    cal.fact()
    expect(cal.value1).toEqual(720);
  })
  
  it("Testing Exponential of 9 to power 2", () => {
    const cal = fixture.componentInstance;
    cal.add(9);
    cal.exp()
    cal.add(2)
    cal.calculate()
    expect(cal.value1).toEqual(81);
  })
  
  it("Testing Log of 50", () => {
    const cal = fixture.componentInstance;
    cal.add(5);
    cal.add(0);
    cal.ln();
    expect(cal.value1).toEqual(3.912023005428146);
  })
  
});
