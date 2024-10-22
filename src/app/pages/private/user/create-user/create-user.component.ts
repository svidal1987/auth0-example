import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { HttpClientModule } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UserService } from '../../../../service/user.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzGridModule, NzCardModule, NzTableModule,NzDividerModule,NzIconModule,NzToolTipModule,NzPaginationModule,NzFlexModule,NzFormModule,NzInputModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  validateForm: FormGroup<{
    firtname: FormControl<string>;
    lastname: FormControl<string>;
    email: FormControl<string>;
    domicilio: FormControl<string>;
    // celular: FormControl<string>;
    // rol: FormControl<string>;
    // area: FormControl<string>;
    // confirm: FormControl<string>;
  }>;


  constructor(private service: UserService,private fb: NonNullableFormBuilder,private location: Location) {
    this.validateForm = this.fb.group({
      firtname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      domicilio: ['', [ Validators.required]],
      // celular: ['', [ Validators.required]],
      // rol: ['', [ Validators.required]],
      // area: ['',[Validators.required]],

      // confirm: ['', [this.confirmValidator]],
    });
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    this.service.addUser(this.validateForm.value).subscribe(
      {
        next: (data) => { console.log(data)},
        error: (error) => {}
      }
    )
  }
  

  back(){
    this.location.back()
  }
  

}
