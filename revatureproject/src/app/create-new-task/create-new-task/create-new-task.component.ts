import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.css']
})
export class CreateNewTaskComponent implements OnInit {

  task = new FormGroup({
    title: new FormControl('')
  });

  constructor(private todoServ: TodosService) { }

  postTodoEc2(todoSub: FormGroup) {
    let form = JSON.stringify(todoSub.value);
    this.todoServ.postTodo(form).subscribe(
      () => {
      }
    );
  }

  ngOnInit(): void {
  }

}
