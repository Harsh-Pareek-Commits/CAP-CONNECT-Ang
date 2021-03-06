import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  // faGoogle = faGooglePlusG;
  submitted = false;
  constructor(private authService: AuthServiceService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) { }
  ngOnInit(): void {
    sessionStorage.clear();
    console.log("Local cleared");
    this.initForm();

  }
  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]

    })
  }
  get control() {

    return this.loginForm.controls;
  }
  loginProcess() {
    this.submitted = true;
    console.log("LOGIN PROCESS");
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        result => {

          sessionStorage.setItem('token', result.token);
          sessionStorage.setItem('userId', result.id);
          sessionStorage.setItem('userType', result.userType)
          this.authService.loggedIn.next(true)
          this.toastr.success('Login Success');
          console.log(sessionStorage.getItem('token'))
          if (sessionStorage.getItem('userType') === "3") {
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['/admin/dashboard']);
          }

        }, (error) => {
          console.log(error)
          this.toastr.error('Invalid Credential');

        }

      )
    }
  }
}

// export class LoginComponent implements OnInit {

//   loginForm!: FormGroup;
//   constructor() {
    
//    }

//   ngOnInit(): void {
//   }

// }
