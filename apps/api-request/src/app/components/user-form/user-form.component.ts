import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  userForm: FormGroup | undefined;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      parkingSpotNumber: [''],
      licensePlateCar: [''],
      brandCar: [''],
      modelCar: [''],
      colorCar: [''],
      responsibleName: [''],
      apartment: [''],
      block: [''],
    });
  }

  onSubmit(): void {
    // @ts-ignore
    const formData = this.userForm.value;
    console.log(formData);
    this.userService.addUser(formData).subscribe(
      (response) => {
        alert('Cadastrado com sucesso');
      },
      (error) => {
        alert('Erro ao cadastrar verifique se campos estão vazios');
        console.error('Erro ao cadastrar usuário:', error);
      }
    );
  }
}
