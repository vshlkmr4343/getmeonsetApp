import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SignInService } from 'src/app/sign-in/sign-in.service';
import { SignUpService } from 'src/app/sign-up/sign-up.service';
import { MessageService } from '../message.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  isHighlited: any;
  type = 'User';
  private selectedItem: any;
  gigId: string;
  receiverId: string;
  showListMsg: boolean;
  showMsgDetails: boolean;
  showSendMsgForm: boolean;
  usersId: string;
  userIsAuthenticated: boolean;
  userDetails: { isLoggedin: string; sudoLoggedin: string; currentUser: string; email: string; usersId: string; id: string; fullName: string; adminusersId: string; profileComplitted: string; };
  isLoggedIn: string;
  receiverArray: any;
  messageLists: any;
  public messageData = {
    moduleId: 2,
  };
  submitted = false;
  replySubmitted = false;
  reportToAdminSubmitted = false;
  messageUserDetails: any = [];
  gigUserDetails: any = [];
  messageDetails: any = [];
  sendMessageDetails: any = [];
  receiverDetails: any = [];
  isSendMsg = -1;
  filterOption: any;
  messageText: any;
  messageSubject: any;
  disputText: any;
  receiverName: any = '';
  activeReceiverId: any;
  activeGigId: string = '';
  activeReceiverArray: any = [];
  activeMessageId: any;
  activeMsgSubject = '';
  gigsUserArrayDetails: any = [];
  gigUserDetail: any
  constructor(
    private storage: Storage,
    private signupService: SignUpService,
    private signinService: SignInService,
    private router: Router,
    private messagesService: MessageService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    //  this.selectedItem= 'Gig'
    this.isHighlited = 'User'
    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.has('type')) {
        this.type = paramMap.get('type');
        this.isHighlited = this.type;
      }
    })

    this.signinService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userDetails = this.signinService.getAuthData();
        this.usersId = this.userDetails.usersId;
        this.isLoggedIn = this.userDetails.isLoggedin;
      });
    this.signupService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userDetails = this.signupService.getAuthData();
        this.usersId = this.userDetails.usersId;
        this.isLoggedIn = this.userDetails.isLoggedin;
      });
    this.isLoggedIn = localStorage.getItem("isLoggedin");
    if (this.isLoggedIn) {
      this.userIsAuthenticated = true;
      this.userDetails = this.signinService.getAuthData();
      this.usersId = this.userDetails.usersId;
    }
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("usersId")) {
        this.receiverId = paramMap.get("usersId");
        this.gigId = paramMap.get("gigsId");
        this.showSendMsgForm = false;
        this.showListMsg = true;
        this.showMsgDetails = false;
        if (this.gigId != null) {
        }
        if (this.receiverId != this.usersId) {
          this.showSendMsgForm = true;
          this.showListMsg = false;
          this.showMsgDetails = false;
          this.messagesService.getUserProfileInfo(this.receiverId)
            .subscribe(dataArray => {
              this.receiverArray = dataArray;
              this.receiverArray = this.receiverArray.data.userDetails;

            })
        } else {
          this.getAllUserMessages(this.usersId, this.module);
        }
      }
    });

    this.getUserGigs();

  }

  module() {
    if (this.type == 'Gig') {
      this.messageData.moduleId = 2
    }
    else if (this.type == 'User') {
      this.messageData.moduleId = 1
    }
    return this.messageData.moduleId
  }

  getAllUserMessages(usersId, moduleId, gigId = '') {
    this.showListMsg = true;
    this.showSendMsgForm = false;
    this.showMsgDetails = false;
    this.messagesService.getAllUserMessages(usersId, this.module(), gigId)
      .subscribe(
        data => {
          if (this.type == 'User') {
            this.messageLists = data;
            this.messageLists = this.messageLists.data.messages;
          }
          if (this.type == 'Gig') {
            // this.messageLists = data;
            // this.messageLists = this.messageLists.data.messages;
            this.messageLists = [];
          }

        },
        error => {
        });
  }

  // select(item){
  //   this.selectedItem =item;
  // }
  highlight(item, usersId, module) {
    this.isHighlited = item;
    if (item == 'User') {
      this.type = 'User';
      this.getAllUserMessages(this.usersId, this.module);
    }
    if (item == 'Gig') {
      this.type = 'Gig';
      this.getAllUserMessages(this.usersId, this.module);
    }
  }

  chat() {
    this.router.navigateByUrl('/messages/chat')
  }

  getMessageDetails(senderId, receiverId, messageId) {
    this.messageUserDetails = [];
    if (senderId != this.usersId) {
      this.activeReceiverId = senderId;
    } else {
      this.activeReceiverId = receiverId;
    }
    this.activeMessageId = messageId;
    console.log(this.activeReceiverId + '===' + this.activeMessageId)
    this.showListMsg = false;
    this.showSendMsgForm = false;
    this.showMsgDetails = true;
    this.messagesService.getUserProfileInfo(this.activeReceiverId)
      .subscribe(data => {
        this.activeReceiverArray = data;
        this.activeReceiverArray = this.activeReceiverArray.data.userDetails;
        // console.log('Profile Info') ;
        console.log(this.activeReceiverArray);
      })
    this.messagesService.getMessageDetails(this.activeMessageId)
      .subscribe(
        data => {
          this.messageUserDetails = data;
          this.activeMsgSubject = this.messageUserDetails.data.msgSubject
          this.messageUserDetails = this.messageUserDetails.data.messages;
          console.log(this.messageUserDetails);

        },
        error => {

        });
  }



  getMessages(usersId, receiverId, gigId = '', inx = 0) {
    this.receiverId = receiverId;
    this.addActiveClasss(receiverId);
    this.messagesService.getMessages(usersId, receiverId, gigId)
      .subscribe(
        data => {
          this.messageDetails = data;
          this.messageDetails = this.messageDetails.data.messages;

          // this.messageDetails.push(temp) ;
          //this.receiverName = this.messageUserDetails[inx].fullName ;
        },
        error => {

        });
  }

  addActiveClasss(usersId) {
    this.messageUserDetails.forEach((item, index) => {
      if (item.usersId == usersId) {
        this.messageUserDetails[index].active = true
      } else {
        this.messageUserDetails[index].active = false
      }
    });
  }

  getUserGigs() {
    console.log('getUserGigs:', this.usersId)
    this.messagesService.getUserGigs(this.usersId)
      .subscribe(
        response => {

          this.gigUserDetails = response.data.gigs;
          this.gigsUserArrayDetails = response.data.gigs
          this.gigUserDetail = this.gigUserDetails[0].gigId

          // console.log("get user details", this.gigUserDetails)
          // if (this.gigUserDetails.length > 0) {
          //   let firstGigId = response.data.gigs[0].gigId;
          //   //console.log(firstGigId+'==='+this.gigUserDetails.length) ;
          //   if (firstGigId != '' && this.gigUserDetails.length > 0) {
          //     this.getGigMessageUsers(firstGigId);
          //   }
          // }

        },
        error => {

        });
  }

  getGigMessageUsers(gigId = '') {
    console.log(gigId);
    // this.spinnerService.show();
    // this.messagesService.getGigMessageUsers(gigId)
    //   .subscribe(
    //     response => {
    //       this.messageUserDetails = response.data.users;
    //       this.spinnerService.hide();
    //     },
    //     error => {
    //       this.spinnerService.hide();
    //     });
    this.messageLists = [];
    this.activeGigId = gigId;
    this.showListMsg = true;
    this.showSendMsgForm = false;
    this.showMsgDetails = false;
    this.messagesService.getAllUserMessages(this.usersId, 2, gigId)
      .subscribe(
        data => {
          this.messageLists = data;
          this.messageLists = this.messageLists.data.messages;
        },
        error => {

        });
  }

  getUserMessage() {
    this.signinService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userDetails = this.signinService.getAuthData();
        this.usersId = this.userDetails.usersId;
        this.isLoggedIn = this.userDetails.isLoggedin;
      });
    this.signupService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userDetails = this.signupService.getAuthData();
        this.usersId = this.userDetails.usersId;
        this.isLoggedIn = this.userDetails.isLoggedin;
      });
    this.isLoggedIn = localStorage.getItem("isLoggedin");
    if (this.isLoggedIn) {
      this.userIsAuthenticated = true;
      this.userDetails = this.signinService.getAuthData();
      this.usersId = this.userDetails.usersId;
    }
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.receiverId = paramMap.get("id");
        this.messagesService.getMessageUsers(this.usersId)
          .subscribe(data => {
            this.messageUserDetails = data;
            this.messageUserDetails = this.messageUserDetails.data.users;
            console.log(this.messageUserDetails);
            if (this.messageUserDetails.receiverId) {
              this.receiverId = this.messageUserDetails.receiverId;
            }
            this.messagesService.getUserProfileInfo(this.receiverId)
              .subscribe(dataArray => {
                this.receiverArray = dataArray;

                this.receiverArray = this.receiverArray.data.userDetails;
                let temp = {
                  id: this.receiverArray.uId,
                  usersId: this.receiverArray.usersId,
                  email: this.receiverArray.email,
                  fullName: this.receiverArray.fullName,
                  status: this.receiverArray.status,
                  profileImage: this.receiverArray.profileImage,
                }

                let userExits = this.messageUserDetails.find((item) => { return item.usersId == this.receiverArray.usersId }
                )
                if (!userExits && this.receiverId != this.usersId) {
                  this.messageUserDetails.push(temp);
                }

                if (this.messageUserDetails[0].usersId) {
                  this.getMessages(this.usersId, this.messageUserDetails[0].usersId);
                } else {
                  this.getMessages(this.usersId, this.receiverId);
                }

              })
          })
      }
    });
  }

  filterMessage(event: any) {
    this.filterOption = event.target.value;
    if (this.filterOption == 1) {
      this.getUserGigs();
    }
    if (this.filterOption == 2) {
      //this.getUserMessage();
      this.getAllUserMessages(this.usersId, this.module);
    }
  }

  backToDetails() {
    this.showSendMsgForm = false;
    this.showListMsg = true;
    this.showMsgDetails = false;
  }

}
