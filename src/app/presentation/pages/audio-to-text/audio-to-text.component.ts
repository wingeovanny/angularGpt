import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-audio-to-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-to-text.component.html',
  styleUrl: './audio-to-text.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AudioToTextComponent {}
