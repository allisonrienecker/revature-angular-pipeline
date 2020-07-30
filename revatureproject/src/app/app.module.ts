import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosListComponent } from './todos-list/todos-list/todos-list.component';
import { TodosService } from './services/todos.service';
import { RouterModule } from '@angular/router';
import { SpecificTaskComponent } from './specific-task/specific-task/specific-task.component';
import { MarkedCompleteComponent } from './marked-complete/marked-complete/marked-complete.component';
import { CreateNewTaskComponent } from './create-new-task/create-new-task/create-new-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task/delete-task.component';
import { UpdateTaskComponent } from './update-task/update-task/update-task.component';
import { UpdateComponent } from './specific-task/update/update.component';
import { CreateComponent } from './specific-task/create/create.component';
import { FindComponent } from './specific-task/find/find.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    SpecificTaskComponent,
    MarkedCompleteComponent,
    CreateNewTaskComponent,
    DeleteTaskComponent,
    UpdateTaskComponent,
    UpdateComponent,
    CreateComponent,
    FindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'alltasks', component: TodosListComponent },
      { path: 'specifictask/:id', component: SpecificTaskComponent },
      { path: 'markedcomplete', component: MarkedCompleteComponent },
      { path: 'newtaskcreated', component: CreateNewTaskComponent },
      { path: 'taskdeleted', component: DeleteTaskComponent },
      { path: 'taskupdated', component: UpdateTaskComponent },
      { path: 'edittask', component: UpdateComponent },
      { path: 'createtask', component: CreateComponent },
      { path: 'findtask', component: FindComponent },
      // {path: 'task/:tasktodo', component: SpecificTaskComponent}
      { path: '**', redirectTo: 'alltasks' }
    ])
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
