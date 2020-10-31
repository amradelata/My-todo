
import { getLocaleExtraDayPeriods } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { from } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { Todo } from './modelos/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl = "https://jsonplaceholder.typicode.com/todos"

  constructor(private http:HttpClient) {}
  // Get Todos
   getTodos() :Observable<Todo[]>{
    return  this.http.get<Todo[]>(this.todoUrl);
   }
   //Toggle Completed  in the server shek the console
   toggleCompleted(todo: Todo):Observable<any>{
     const url = `${this.todoUrl}/${todo.id}`
   return this.http.put(url, todo, httpOptions)  
   }
   //Delete Todo
   deleteTodo(todo:Todo):Observable<Todo>{
     const url = `${this.todoUrl}/${todo.id}`
     return this.http.delete<Todo>(url, httpOptions)  
   }
    //  addTodo
    addTodo(todo:Todo):Observable<Todo>{
      return this.http.post<Todo>(this.todoUrl, todo, httpOptions)  
      
    }
    //edittodo
   edittodo(todo: Todo):Observable<any>{
     const url = `${this.todoUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)  
   }
    
}
