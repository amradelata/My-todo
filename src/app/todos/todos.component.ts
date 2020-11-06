import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'
import { from } from 'rxjs';
import { take, finalize } from 'rxjs/operators';
import { Todo } from '../modelos/Todo'
// import { indicate } from '../operators'
import { Observable, Subject } from 'rxjs'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  error = [];
  loading = false
  

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.loading = true
    // this.todoService.getTodos().subscribe(data => this.todos =  data,err => this.error = err);
        this.todoService.getTodos().pipe(
      finalize(() => this.loading = false)
    ) .subscribe(data => this.todos =  data,err => this.error = err)
    
  
    
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
