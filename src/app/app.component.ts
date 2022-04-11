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

}
