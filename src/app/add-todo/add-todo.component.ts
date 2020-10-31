import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Todo } from '../modelos/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any>= new EventEmitter(); 
  title: string
  

  constructor() { }

  ngOnInit(): void {
  }
  //set dynamic classes
  setClasses(){
   let classes = {
     
     'rde': this.title === undefined || "" || this.title.length < 3, //if this.todo.completed true display  is-complete style from css file
   } 
   return classes;
  }
  onSubmit(){
  // const myId = Math.random();

  if(this.title === undefined || "" || this.title.length < 3){
    return 
  }else{
    const todo ={
    id:Math.floor((Math.random() * 400) + 200),
    title:this.title,
    completed: false,
    }
    this.addTodo.emit(todo);
    console.log(todo)
    this.title = ""//rest the input
  }



  }
  

}
