import { Component } from '@angular/core';
import { TodoService } from '../../core/services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  constructor(private todoService: TodoService) {}
}
