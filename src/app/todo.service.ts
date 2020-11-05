
import { getLocaleExtraDayPeriods } from '@angular/common';
import { Injectable } from '@angular/core';

import { from,throwError,Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Todo } from './modelos/Todo'
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //to limit the array item to 5 opjects do this after the url ?_limit=5
  todoUrl = "https://crud-database.herokuapp.com/tweets"

  constructor(private http:HttpClient) {}
  // Get Todos


     getTodos() : Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todoUrl)
    .pipe(
      catchError(this.errorHandeler)// handle the error
    );
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

  errorHandeler(error: HttpErrorResponse){ //error function
     return throwError(
    'Something bad happened; please try again later.');

  }
    
}
