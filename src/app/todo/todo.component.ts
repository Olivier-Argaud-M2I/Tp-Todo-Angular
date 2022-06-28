import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo!: Todo;

  @Output() supprimer = new EventEmitter();
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  suppr(){
    this.supprimer.emit(this.todo.id);
  }

  validerChange(){
    this.update.emit(this.todo);
  }


}
