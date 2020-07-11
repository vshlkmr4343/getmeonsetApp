import { Component, OnInit , ViewChild ,NgZone} from '@angular/core';
import { ModalController,IonContent  } from '@ionic/angular';
import { ReportAdminComponent } from 'src/app/utility/report-admin/report-admin.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SignInService } from 'src/app/sign-in/sign-in.service';
import { SignUpService } from 'src/app/sign-up/sign-up.service';
import { MessageService } from '../message.service';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilityService} from '../../utility/utility.service'
import { Content } from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
// @ViewChild('content', { static: true }) private content: any;
 @ViewChild('content',{static:false}) private content: any;
//@ViewChild('content', {read:IonContent,static: true }) content: IonContent;
  isHighlited: any;
  type = 'User';
  private selectedItem: any;
  gigId: string;
  receiverId: string;
  messageId: string;
  senderId:string
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
  sendMsgForm : FormGroup;
  reportToAdminForm : FormGroup;
  replyMsgForm: FormGroup;
  refreshchatinterface : any
  get f() { return this.sendMsgForm.controls; }
  get m() { return this.reportToAdminForm.controls; }
  get o() { return this.replyMsgForm.controls; }

  constructor(private modalController:ModalController, private storage: Storage,
    private signupService: SignUpService,
    private signinService: SignInService,
    private router: Router,
    private messagesService: MessageService,
    private route: ActivatedRoute,private formBuilder: FormBuilder,
    private utility :UtilityService,
    public zone : NgZone) { }



  ngOnInit() { 
    this.sendMsgForm = this.formBuilder.group({
      messageSubject: ['',[Validators.required]],
      messageText: ['',[Validators.required]]
    });
    this.reportToAdminForm = this.formBuilder.group({
      disputText: ['',[Validators.required]],
    });

    this.replyMsgForm = this.formBuilder.group({
      replyMsg: ['',[Validators.required]],
    });
     //  this.selectedItem= 'Gig'
     this.isHighlited = 'User'
     this.route.paramMap.subscribe((paramMap) => {
       if (paramMap.has('type')) {
         this.type = paramMap.get('type');

         this.isHighlited = this.type;
        
       }
       this.receiverId = paramMap.get('usersId')
       this.messageId = paramMap.get('messageId')
       this.senderId = paramMap.get('receiverId')
     })
     this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.has('id')) {
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
     this.getMessageDetails(this.senderId, this.receiverId, this.messageId);

      /// this.scrollToBottom();
     
     
  }

  // ionViewDidEnter(){
  // this.scrollToBottom();
  // }
  // ionViewWillEnter(){
  //   this.scrollToBottom();
  // }

  ionViewLoad(){
    this.scrollToBottom();
  }

  scrollToBottom(){
    this.refreshchatinterface = setInterval(()=>{
      this.content.scrollToBottom(300);
    },3000);

    // setTimeout(()=>{
    //   this.content.scrollToBottom(300);
    // },1000);
  }

  async report(){
    const modal = await this.modalController.create({
      component: ReportAdminComponent
    });
    return await modal.present();
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
    console.log("activeReceiverArray Data",this.activeReceiverId);
    console.log(this.activeReceiverId + '===' + this.activeMessageId)
    this.showListMsg = false;
    this.showSendMsgForm = false;
    this.showMsgDetails = true;

    this.messagesService.getUserProfileInfo(this.activeReceiverId)
      .subscribe(data => {
        this.activeReceiverArray = data;
        this.activeReceiverArray = this.activeReceiverArray.data.userDetails;
      })
    this.messagesService.getMessageDetails(this.activeMessageId)
      .subscribe(
        data => {
          this.messageUserDetails = data;
          this.activeMsgSubject = this.messageUserDetails.data.msgSubject
          this.messageUserDetails = this.messageUserDetails.data.messages;

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

  saveRelyMessage() {
    this.replySubmitted = true ;
    console.log(this.replyMsgForm) ;
    if (this.replyMsgForm.invalid) {
        return ;
    }
    console.log(this.replyMsgForm.value.replyMsg+'==='+this.usersId) ;
    this.messagesService.saveReplyMessage(this.usersId, this.activeReceiverId, this.activeMessageId, this.replyMsgForm.value.replyMsg, this.activeGigId)
    .subscribe(
      data => {
        this.sendMessageDetails = data;
        this.sendMessageDetails = this.sendMessageDetails.data;
        this.isSendMsg = 1 ;
        this.replyMsgForm.reset();  
        this.replySubmitted = false ;
        this.getMessageDetails(this.usersId, this.activeReceiverId, this.activeMessageId)
      // this.content.scrollToBottom(300)
      },
      error => {
        this.isSendMsg = 0 ;
      });
      // let dimensions = this.content.getContentDimensions();
      // this.content.scrollTo(0, dimensions.scrollBottom, 0);

      // console.log("scroll isss", this.content.scrollToBottom())
      // this.content.scrollToBottom(300)
  }

saveMessage() {
  this.submitted = true ;
  console.log(this.sendMsgForm) ;
  if (this.sendMsgForm.invalid) {
      return ;
  }
  let moduleId = 1 ;
  let gigId = '' ;
  if(this.gigId != null) {
    gigId = this.gigId
    moduleId = 2 ;
  }
  this.messagesService.saveMessage(this.usersId,this.receiverId,this.sendMsgForm.value, moduleId, gigId)
    .subscribe(
      data => {
        this.sendMessageDetails = data;
        this.sendMessageDetails = this.sendMessageDetails.data;
        this.isSendMsg =1 ;
        // let tempMsg ={
        //   senderDetails : this.sendMessageDetails.senderDetails.senderDetails ,
        //   createdAt : this.sendMessageDetails.responseData.createdAt ,
        //   messageText : this.sendMessageDetails.responseData.messageText ,
        // }
        // this.messageDetails.push(tempMsg) ;
        this.sendMsgForm.reset();  
        this.getAllUserMessages(this.usersId, moduleId, gigId) ;
        this.submitted = false ;
        this.showSendMsgForm = false ;
        this.showListMsg = true ;
      },
      error => {
        this.isSendMsg = 0 ;
      });
}

sendReportToAdmin() {
  this.reportToAdminSubmitted = true ;
  if (this.reportToAdminForm.invalid) {
      return ;
  }
  this.messagesService.messageDisputByUser(this.usersId,this.receiverId,this.reportToAdminForm.value)
    .subscribe(
      data => {
        this.sendMessageDetails = data;
        this.sendMessageDetails = this.sendMessageDetails.data.isDisputeMessage;
        if( this.sendMessageDetails == 1)
        {
          this.reportToAdminForm.reset();  
          this.reportToAdminSubmitted = false ;
         // this.btnClose.nativeElement.click();
          //this.router.navigate(["/"]);
          this.utility.showToast("Report to admin messages successfully send");
        }
      },
      error => {
        this.utility.showToast("Report to admin messages not send");
      });
}
}
