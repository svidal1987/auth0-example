import { User } from "./user";

export interface Task {
    _id: string;
    name: String,
    description: String,
    user:User
    
  }

  export interface PaginateTask{
    page: number
    data: Task[]
    total: number
    perPage: number
    totalPage: number
}
