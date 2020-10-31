import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  showSpinner = false;

  constructor(private TodoService: TodoService, private cdRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    
  }



}
