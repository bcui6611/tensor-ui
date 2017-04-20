import {Component, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'signup-cmp',
  templateUrl: 'signup.component.html',
})

export class SignupComponent implements OnInit {

  ngOnInit(): void {
    console.log('hello `Signup` component');
  }
}
