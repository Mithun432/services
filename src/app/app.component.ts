import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TaskservicesService } from './taskservices.service';
import { TaskkkComponent } from './taskkk/taskkk.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule,TaskkkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task10';
}
