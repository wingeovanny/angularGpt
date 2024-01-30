import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-image-tunning-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-tunning-page.component.html',
  styleUrl: './image-tunning-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ImageTunningPageComponent {}
