import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tasks.component.html'
})
export class TasksComponent {

  tasks: any[] = [];
  title = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  add() {
    this.api.createTask({ title: this.title }).subscribe(() => {
      this.title = '';
      this.load();
    });
  }

  delete(id: number) {
    this.api.deleteTask(id).subscribe(() => {
      this.load();
    });
  }

  logout() {
    localStorage.removeItem('token');
    location.href = '/login';
  }
}