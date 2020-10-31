import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Todo } from '../modelos/Todo';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo: Todo;
@Output() deleteTodo: EventEmitter<Todo>= new EventEmitter(); 
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  //set dynamic classes
  setClasses(){
   let classes = {
     'todo': true,
     'is-complete': this.todo.completed, //if this.todo.completed true display  is-complete style from css file
   } 
   return classes;
  }
  //onToggle
  onToggle(todo){
  // toggle in UI
  todo.completed = !todo.completed
// toggle on server
  this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo))
  }

  //onDelet
  onDelete(todo){
  // console.log('onDelet')  
  this.deleteTodo.emit(todo)
  }

  onEdit(savebtn,mydiv,myeditinput,editbtn){
    //UI changes
     mydiv.classList.toggle("displaynone");
     myeditinput.classList.toggle("displaynone");
     savebtn.classList.toggle("displaynone");
     editbtn.classList.toggle("displaynone");
  }

  onSave(mydiv,savebtn,myeditinput,todo,editbtn){
//UI changes
    mydiv.classList.toggle("displaynone");
    myeditinput.classList.toggle("displaynone");
    savebtn.classList.toggle("displaynone");
    editbtn.classList.toggle("displaynone");
//Server changes
    todo.title = myeditinput.value
    this.todoService.edittodo(todo).subscribe(todo => console.log(todo))

  }


}
