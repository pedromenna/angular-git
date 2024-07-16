import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  user: User = new User('', ''); // Inicialização com valores padrão

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam; // Converte o id para número
      if (id) {
        this.userService.getUser(id).subscribe(data => this.user = data);
      }
    }
  }

  save(): void {
    if (this.user.id) {
      this.userService.updateUser(this.user).subscribe(() => this.router.navigate(['/users']));
    } else {
      this.userService.createUser(this.user).subscribe(() => this.router.navigate(['/users']));
    }
  }
}
