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
import { TaskService } from '../../../service/task.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    HttpClientModule,
    NzGridModule, NzCardModule, NzTableModule,NzDividerModule,NzIconModule,NzToolTipModule,NzPaginationModule,CommonModule,NzFlexModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  params:any
  paginate:any
  data:any
  constructor(private service: TaskService){


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
