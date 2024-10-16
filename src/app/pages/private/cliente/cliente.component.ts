import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [NzTableModule,NzDividerModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent{
  params:any
  paginate:any
  data:any
  constructor(private service: UserService){


    this.params = {
      "page":0,"perPage":5,
      "filter":{},
      "sort":{"_id": "desc"}
    } 
    this.search()
  }

  search(){
    this.service.getUser(this.params).subscribe({
      next:(data)=>{
        console.log(data)
        if(data.data){
          this.data = data.data
          this.paginate = data
        }
        
      },
      error: (err)=>{
        console.log(err)
      },
    })
  }

}
