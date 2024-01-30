import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent } from '../../components/chat-bubbles/chat-message/chat-message.component';
import { MyMessageComponent } from '../../components/chat-bubbles/my-message/my-message.component';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [CommonModule, ChatMessageComponent, MyMessageComponent],
  templateUrl: './orthography-page.component.html',
  styleUrl: './orthography-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {}
