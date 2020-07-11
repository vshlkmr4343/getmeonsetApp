import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MessagesPageRoutingModule } from './messages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { ChatComponent } from './chat/chat.component';
import { GigChatComponent } from './gig-chat/gig-chat.component'

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    MessagesPageRoutingModule
  ],

  declarations: [ListComponent,ChatComponent,GigChatComponent]
})
export class MessagesPageModule {}
