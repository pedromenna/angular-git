import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    if (this.username && this.password) { // Certifique-se que os campos não estão vazios
      this.authService.login(this.username, this.password).subscribe(success => {
        if (success) {
          this.router.navigate(['/items']);
        } else {
          alert('Login failed: Incorrect username or password');
        }
      });
    } else {
      alert('Please fill in both username and password.');
    }
  }
}
