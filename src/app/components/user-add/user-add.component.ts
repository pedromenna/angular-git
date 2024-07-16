import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class UserAddComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) { }

  addUser(): void {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    const newUser: User = new User(this.username, this.password);

    this.userService.createUser(newUser).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
