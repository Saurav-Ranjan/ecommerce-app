import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snacbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  email = '';
  password = '';
  //sauravs


  constructor(private UserService: UserService,private router: Router,private snackbarService: SnackbarService) {}

  onSubmit() {
    if (this.UserService.login(this.email, this.password)) {
      console.log("abc");
      this.snackbarService.showSuccess('Login successful');
      this.router.navigate(['/home']);
    } else {
      this.snackbarService.showError('Login failed. Please check your email and password.');
    }
  }
}
