import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'
import { from } from 'rxjs';
import { Todo } from '../modelos/Todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe( todos => {     
        this.todos = todos
      });
  }
    deleteTodo(todo:Todo){
     //delete from UI
     this.todos= this.todos.filter(t => t.id != todo.id)
     //delete from server
      this.todoService.deleteTodo(todo).subscribe()
       console.log(todo)
    }
    addTodo(todo:Todo){
      this.todoService.addTodo(todo).subscribe(todo => this.todos.push(todo))
    }

}
