import { Component } from '@angular/core';
// import { NGXLogger } from 'ngx-logger';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scientific_calculator';
  value: string = "0";
  value1: number = 0;
  value2: number = 0;
  operation: String = "";
  expOprn: boolean = false;
  first: boolean = false;
  performed: boolean = false;

//   constructor(private logger: NGXLogger) { }
  constructor() { }

  add(x: number) {
    if(this.performed){
      this.value1 = x;
      this.performed = false;
      return;
    }
    if (this.expOprn && this.first) {
      this.first = false;
      this.value1 = 0;
    }
    this.value1 = (this.value1 * 10) + x;''

//     this.logger.info("add() called")
  }

  calculate() {
    if (this.expOprn) {
      this.value1 = Math.pow(this.value2, this.value1);
      this.value = this.value1.toString();
    } else {
      this.value1 = 0;
      this.value = this.value1.toString();
    }
    this.expOprn = false;
    this.performed = true;
    
//     this.logger.info("calculated() called")
  }

  cancel() {
    this.value1 = 0;
    this.value2 = 0;
    this.value = this.value1.toString();
//     this.logger.info("cancel() called")

  }

  exp() {
    this.value2 = this.value1
    this.expOprn = true;
    this.first = true;
//     this.logger.info("exp() called")
  }

  fact() {
    if(Number.isInteger(this.value1)){
      this.value1 = this.factorial(this.value1);
    }else if(this.value1>800){
      this.value = "Infinity";
      this.value1 = 0;
    }else {
      this.value = "Invalid Number";  
    }
    this.performed = true;
//     this.logger.info("fact() called")
  }

  factorial(n: number): any {
    if (n == 0 || n == 1)
      return 1;
    return this.factorial(n - 1) * n;
  }

  root() {
    this.value1 = Math.sqrt(this.value1);
    this.performed = true;
    this.value = this.value1.toString();
//     this.logger.info("root() called")
  }

  ln() {
    this.value1 = Math.log(this.value1);
    this.performed = true;
    this.value = this.value1.toString();
//     this.logger.info("ln() called")

  }
}
