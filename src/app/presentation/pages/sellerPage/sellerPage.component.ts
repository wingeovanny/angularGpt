import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { Message } from '@interfaces/message.interface';
import {
  ChatMessageComponent,
  GptMessageOrthographyComponent,
  MyMessageComponent,
  TextMessageBoxComponent,
  TextMessageBoxEvent,
  TextMessageBoxFileComponent,
  TextMessageBoxSelectComponent,
  TextMessageEvent,
  TypingLoaderComponent,
} from '@components/index';
import { OpenAiService } from 'app/presentation/services/openai.service';
@Component({
  selector: 'app-seller-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    GptMessageOrthographyComponent,
    MyMessageComponent,
    TypingLoaderComponent,

    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent,
  ],
  templateUrl: './sellerPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SellerPageComponent {
  public messages = signal<Message[]>([]);
  public isLoading = signal(false);
  public openAiService = inject(OpenAiService);

  handleMessage(prompt: string) {
    this.isLoading.set(true);

    this.messages.update((prev) => [
      ...prev,
      {
        isGpt: false,
        text: prompt,
      },
    ]);

    this.openAiService.seller(prompt).subscribe((resp) => {
      this.isLoading.set(false);

      this.messages.update((prev) => [
        ...prev,
        {
          isGpt: true,
          text: resp.message,
          info: resp,
        },
      ]);
    });
  }
}
