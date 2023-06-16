import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  remove(id: string) {
    this.userService.removeUser(id).subscribe(
      (data) => {},
      (error) => {
        console.error('Erro ao cadastrar usuário:', error);
      }
    );
    window.location.reload();
  }
}
