import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SignInService } from 'src/app/sign-in/sign-in.service';
import { SignUpService } from 'src/app/sign-up/sign-up.service';
import { MessageService } from '../../messages/message.service';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilityService} from '../../utility/utility.service'
@Component({
  selector: 'app-report-admin',
  templateUrl: './report-admin.component.html',
  styleUrls: ['./report-admin.component.scss'],
})
export class ReportAdminComponent implements OnInit {
  reportToAdminForm : FormGroup;
  reportToAdminSubmitted = false;
  sendMessageDetails: any = [];
  receiverId: string;
  usersId: string;
  messageId: string;
  senderId:string
  disputText:any;
  get m() { return this.reportToAdminForm.controls; }
  constructor(private modalController:ModalController,
    private storage: Storage,
    private signupService: SignUpService,
    private signinService: SignInService,
    private router: Router,
    private messagesService: MessageService,
    private route: ActivatedRoute,private formBuilder: FormBuilder,
    private utility :UtilityService) { }

  ngOnInit() {
    this.reportToAdminForm = this.formBuilder.group({
      disputText: ['',[Validators.required]],
    });
    // this.route.paramMap.subscribe((paramMap) => {
    //   this.receiverId = paramMap.get('usersId')
    //   this.messageId = paramMap.get('messageId')
    //   this.senderId = paramMap.get('receiverId')
    // })
  }
  async close() {

    return await this.modalController.dismiss();
  }
  async sendReportToAdmin() {
    this.sendReportToAdmin1()
    return await this.modalController.dismiss();
  }
  sendReportToAdmin1() {
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
