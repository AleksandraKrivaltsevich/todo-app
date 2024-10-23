import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  private url = 'https://jsonplaceholder.typicode.com/todos'; // todo api url

  // public getTodos(): Observable<Todo[]> {}
}
