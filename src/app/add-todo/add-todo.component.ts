import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Todo } from '../modelos/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any>= new EventEmitter(); 
  body: string
  

  constructor() { }

  ngOnInit(): void {
  }
  //set dynamic classes
  setClasses(){

   let letterNumber = /[0-9a-zA-Z]/g;
   let classes = {
     
     'rde': this.body === undefined || this.body.length < 2 || !this.body.match(letterNumber)  //if input value is valide show style from css file
   } 
   return classes;
  }
  onSubmit(){
  // const myId = Math.random();
  let letterNumber = /[0-9a-zA-Z]/g;
  if(this.body === undefined || this.body.length < 2 || !this.body.match(letterNumber) ){
    return 
  }else{
    const todo ={
    id:Math.floor((Math.random() * 400) + 200),
    body:this.body,
    completed: false,
    }
    this.addTodo.emit(todo);
    console.log(todo)
    this.body = ""//rest the input
  }



  }
  

}
