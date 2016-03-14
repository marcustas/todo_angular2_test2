import {Component, CORE_DIRECTIVES} from 'angular2/core';

@Component({
  selector: 'todo',
  templateUrl: './components/todo/todo.html',
  directives: [CORE_DIRECTIVES]
})


export class TodoComponent {
  public todos : string[];
  constructor() {
    this.todos = [];
  }

  add(newtodo: string) : boolean {
    this.todos.push(newtodo);
    return false;
  }

  remove(name: string) : void {
      var index = this.todos.indexOf(name, 0);
      if (index !== undefined) {
          this.todos.splice(index, 1);
      }
  }
}