import { Component, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) {
    /* remove do array o elemento de index 'event' 
    e apenas 1 elemento (no caso, o que foi passado) */
    this.taskList.splice(event, 1); 
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você realmente deseja deletar todos os itens?");

    if (confirm) {
      this.taskList = [];
    }
  }

}
