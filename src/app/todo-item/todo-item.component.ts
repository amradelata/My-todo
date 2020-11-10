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
  saveallowed = false

  ngOnInit(): void {
    
  }

  //set dynamic classes
  setClasses(){
    
   let classes = {
     'todo': true,
     'is-complete': this.todo.completed, //if this.todo.completed = true display  is-complete style from css file
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

  onEdit(mydiv,savebtn,myeditinput,todo,editbtn,cancelBtn,deletBtn){
    //UI changes
     mydiv.classList.toggle("displaynone");
     myeditinput.classList.toggle("displaynone");
     cancelBtn.classList.toggle("displaynone");
     deletBtn.classList.toggle("displaynone");
     editbtn.classList.toggle("displaynone");
     savebtn.classList.toggle("displaynone");

      myeditinput.addEventListener('keyup', ()=>{
        if(myeditinput.value.length === 0 || myeditinput.value === todo.body){
          savebtn.classList.remove("displayblock");
        }else{
         savebtn.classList.add("displayblock");
        }

      } )
        myeditinput.select();
  }




onCancel(mydiv,savebtn,myeditinput,todo,editbtn,cancelBtn,deletBtn){
//UI changes
myeditinput.classList.toggle("displaynone");
cancelBtn.classList.toggle("displaynone");
deletBtn.classList.toggle("displaynone");
mydiv.classList.toggle("displaynone");
editbtn.classList.toggle("displaynone");
savebtn.classList.add("displaynone");
savebtn.classList.remove("displayblock");
myeditinput.value = todo.body

}

  onSave(mydiv,savebtn,myeditinput,todo,editbtn,cancelBtn,deletBtn){
//UI changes
    mydiv.classList.toggle("displaynone");
    myeditinput.classList.toggle("displaynone");
    savebtn.classList.remove("displayblock");
    savebtn.classList.add("displaynone");
    editbtn.classList.toggle("displaynone");
    deletBtn.classList.toggle("displaynone");
    cancelBtn.classList.toggle("displaynone");

    console.log(savebtn)


          //Server changes
      todo.body = myeditinput.value
      this.todoService.edittodo(todo).subscribe(todo => console.log(todo))
  


  }


}
