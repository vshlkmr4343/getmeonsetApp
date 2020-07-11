import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UtilityService } from '../utility/utility.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private utilityService:UtilityService) { }

  getMessageUsers(isLoggedIn) {
    const data = {
        api_key: environment.API_KEY_VALUE,
        usersId: isLoggedIn,
        messageType: 1
    };
    return this.utilityService.requestHttp(environment.API_URL + 'message/getMessageUsers', data);
}

getUserProfileInfo(receiverId) {
    const data = {
        api_key: environment.API_KEY_VALUE,
        usersId: receiverId,
    };
    return this.utilityService.requestHttp(environment.API_URL + 'user/getUserProfileInfo', data);
}
saveMessage(usersId, receiverId, massageText, moduleId, gigId = '') {
    let data = massageText;
    data['usersId'] = usersId;
    data['receiverId'] = receiverId;
    data['relatedId'] = gigId;
    data['relatedTypeId'] = '';
    data['moduleId'] = moduleId;
    data['api_key'] = environment.API_KEY_VALUE;
    return this.utilityService.requestHttp(environment.API_URL + 'message/saveMessage', data);
}

saveReplyMessage(usersId, receiverId, messageId, messageText, gigId) {
    const data = {
        messageText: messageText,
        api_key: environment.API_KEY_VALUE,
        usersId: usersId,
        relatedId: gigId,
        receiverId: receiverId,
        messageId: messageId,
        moduleId: 1
    };
    return this.utilityService.requestHttp(environment.API_URL + 'message/saveReplyMessage', data);
}

getUserGigs(usersId) {
    const data = {
        api_key: environment.API_KEY_VALUE,
        usersId: usersId,
        myGigsType: ""
    };
    return this.utilityService.requestHttp(environment.API_URL + 'user/getUserGigs', data,1);
}

getGigMessageUsers(gigId) {
    const data = {
        api_key: environment.API_KEY_VALUE,
        gigId: gigId,
        myGigsType: ""
    };
    return this.utilityService.requestHttp(environment.API_URL + 'message/getGigMessageUsers', data);
}

getMessages(usersId, receiverId, gigId) {
    const data = {
        api_key: environment.API_KEY_VALUE,
        usersId: usersId,
        receiverId: receiverId,
        gigId: gigId,
        messageType: '',
        archiveMessage: "",
    };
    return this.utilityService.requestHttp(environment.API_URL + 'message/getMessages', data);
}

getAllUserMessages(usersId, messageType, gigId) {
    const data = {
        api_key: environment.API_KEY_VALUE,
        usersId: usersId,
        receiverId: '',
        gigId: gigId,
        messageType: messageType,
        archiveMessage: "",
    };
    return this.utilityService.requestHttp(environment.API_URL + 'message/getAllUserMessages', data);
}

getMessageDetails(messageId) {
    const data = {
        api_key: environment.API_KEY_VALUE,
        messageId: messageId,
    };
    return this.utilityService.requestHttp(environment.API_URL + 'message/getUserMessageDetails', data);
}

messageDisputByUser(usersId, relatedId, disputText) {
    let data = disputText;
    data['usersId'] = usersId;
    data['relatedId'] = relatedId;
    data['isDisput'] = 1;
    data['api_key'] = environment.API_KEY_VALUE;
    return this.utilityService.requestHttp(environment.API_URL + 'message/messageDisputByUser', data);
  }
}
