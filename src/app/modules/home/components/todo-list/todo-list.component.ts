import { Component, DoCheck, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

  public taskList: Array<TaskList> = [];

  constructor() { }

  ngDoCheck(): void {
    // todos os valores checados vao para baixo e os nao checados vao para cima
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
  }

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

  public validationInput(event: string, index: number) {

    if (!event.length) {
      const confirm = window.confirm("Task está vazia, deseja deletar?");

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

}
