import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private AuthService: AuthService,
    private Router: Router,
    private route: ActivatedRoute
  ) {
    if (this.AuthService.currentUserValue) {
      //this.Router.navigateByUrl("/");
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // covenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(loginData) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) { return; }

    console.warn("Submitted", loginData);
    this.AuthService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.Router.navigate(['/profile']);
                },
                error => {
                    this.error = error;
                    this.Router.navigate(['/login'], { queryParams: { error: true } });
                    console.log(error);
                });
  }

}
