import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../modelos/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  error = [];
  loading = false;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loading = true;
    this.todoService.getTodos().subscribe(
      (data) => {
        this.todos = data;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        this.error = err;
      }
    );
  }



  deleteTodo(todo: Todo) {
    //delete from UI
    this.todos = this.todos.filter((t) => t.id != todo.id);
    //delete from server
    this.todoService.deleteTodo(todo).subscribe();
    console.log(todo);
  }
  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((todo) => this.todos.push(todo));
  }
}
