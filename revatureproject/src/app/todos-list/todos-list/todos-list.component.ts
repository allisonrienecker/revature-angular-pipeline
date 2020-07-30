import { Component, OnInit } from '@angular/core';
import {ITodos} from './todos';
import { TodosService } from 'src/app/services/todos.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

 // to create a task line
 task = new FormGroup({
  title: new FormControl('')
});

  // to perform filter on a created line
  todos: ITodos[];
  filteredTodos: ITodos[];
  attributeListFilter = '';

  constructor(private todoServ: TodosService) { }

  // search/filter funcntion
  get listFilter(): string{
    return this.attributeListFilter;
  }

  set listFilter(temp: string){
    this.attributeListFilter = temp;
    this.filteredTodos = this.attributeListFilter ?
    this.performFilter(this.attributeListFilter) : this.todos;
  }

  performFilter(filterBy: string): ITodos[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.todos.filter((todo: ITodos) =>
    todo.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  // create a task function
  postTodoEc2(todoSub: FormGroup) {
    const form = JSON.stringify(todoSub.value);
    // you must subscribe to json to bring the new task line as a response to the browser
    this.todoServ.postTodo(form).subscribe(
      () => {
        // console.log('post success');
      }
    );
  }
    // this populate the table body with todos list, it is a todos data; must be passed on in the ngOniti() to load the page
    getTodosEc22() {
      const todosObservable = this.todoServ.getTodos();
      todosObservable.subscribe((todosData: ITodos[]) => {
        this.todos = todosData;
        this.filteredTodos = this.todos; //removed from constructor to here to initiate the automatic page load when filtered
          });
    }
    //this is necessary to load the table data on the page, it taking the getTodosEc22() from above
  ngOnInit(): void {
    this.getTodosEc22();
  }

      // getTodosEc2() {
    //   this.todoServ.getTodos().subscribe(
    //     response => {
    //       // console.log(response);
    //     }
    //   );
    // }
}
