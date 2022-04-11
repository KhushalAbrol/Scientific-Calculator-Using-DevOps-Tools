import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scientific-Calculator-Using-DevOps-Tools';
  value1: number = 0;
  value2: number = 0;
  performed: boolean = false;
  expOprn: boolean = false;


  add(x: number) {
    if(this.performed){
      this.value1 = x;
      this.performed = false;
      return;
    }
    if (this.expOprn) {
      this.value1 = 0;
    }
    this.value1 = (this.value1 * 10) + x;
  }

  calculate() {
    if (this.expOprn) {
      this.value1 = Math.pow(this.value2, this.value1);
    } else {
      this.value1 = 0;
    }
    this.expOprn = false;
    this.performed = true;
  }

  cancel() {
    this.value1 = 0;
    this.value2 = 0;
  }

  exp() {
    this.value2 = this.value1
    this.expOprn = true;
  }

  fact() {
    this.value1 = this.factorial(this.value1);
    this.performed = true;
  }

  factorial(n: number): any {
    if (n == 0 || n == 1)
      return 1;
    return this.factorial(n - 1) * n;
  }

  root() {
    this.value1 = Math.sqrt(this.value1);
    this.performed = true;
  }

}
