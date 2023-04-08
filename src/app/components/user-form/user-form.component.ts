import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  userForm: FormGroup | undefined;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      name: [''],
      username: [''],
      email: [''],

    });
  }

  onSubmit(): void {
    // @ts-ignore
    const formData = this.userForm.value;

    this.userService.addUser(formData).subscribe(response => {
    console.log('Usuário cadastrado com sucesso:', response);
    }, error => {
    console.error('Erro ao cadastrar usuário:', error);
   });


  }
}



