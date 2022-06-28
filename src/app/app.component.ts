import { Component } from '@angular/core';
import { Todo } from './model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tpTodo';

  todos:Todo[]=[];

  newTodo(title:string,content:string){
    this.todos.push(new Todo(title,content));
  }

  supprimerTodo(id:string){
    this.todos = this.todos.filter((todo)=>todo.id !== id);
  }

  updateTodo(todo:Todo){
    this.todos.forEach((to)=>{
      if(to.id===todo.id){
        to = todo;
      }
    })
  }
}
