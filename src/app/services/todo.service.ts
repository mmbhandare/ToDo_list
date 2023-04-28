import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
todoList :Array<string> =["HTML","CSS","JS","BOOTSTRAP 3"]
  constructor(private _snackBarService:SnackbarService) { }
//we make a Api call to get data
  getAllTodos():Array<string>{
    return this.todoList
  }
  addToDoTtem(todo:string){
    //api call to add item in DB
    this.todoList.push(todo)
    //alert ('${todo} is added successfuly')
    this._snackBarService.onOpenSnackbar('${todo} is added in List')
  }
}
