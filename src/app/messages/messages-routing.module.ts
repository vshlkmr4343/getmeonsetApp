import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ChatComponent } from './chat/chat.component';
import { GigChatComponent } from './gig-chat/gig-chat.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'chat/:receiverId/:messageId',
    component: ChatComponent
  },
  {
    path: 'gigchat/:usersId/:gigsId',
    component: GigChatComponent
  },
  {
    path: 'gigchat/:usersId',
    component: GigChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesPageRoutingModule {}
