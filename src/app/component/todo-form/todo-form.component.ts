import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(private _todoservice:TodoService) { }

  ngOnInit(): void {
  }
  onToDoAdd(item:HTMLInputElement){
    let val = item.value;
    console.log(val);
    if(val.length>0){
      this._todoservice.addToDoTtem(val)
    }
 
 item.value = ''
  }
}
