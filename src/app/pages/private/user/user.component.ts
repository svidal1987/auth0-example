import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NzFlexModule } from 'ng-zorro-antd/flex';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    HttpClientModule,
    NzGridModule, NzCardModule, NzTableModule,NzDividerModule,NzIconModule,NzToolTipModule,NzPaginationModule,CommonModule,NzFlexModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
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
