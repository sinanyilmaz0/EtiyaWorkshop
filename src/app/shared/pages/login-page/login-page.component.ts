import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private authService:AuthService, private localStorageService: LocalStorageService, private route:Router) {}
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    // girilen bilgiler ile backend isteği atılacak..
    if (!this.loginForm.valid) {
      //! TODO: Add toastr warning
      return;
    }
    // HTTP ISTEĞİ
    this.authService.login(this.loginForm.value).subscribe((response)=>{
      console.log(response)

      this.localStorageService.add("token", response.access_token)
      this.route.navigateByUrl("")
    })
  }
}