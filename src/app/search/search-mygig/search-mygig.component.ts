import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../../user/user.service'
import { UtilityService } from '../../utility/utility.service'
import { SignInService } from '../../sign-in/sign-in.service'
import { SignUpService } from '../../sign-up/sign-up.service'

@Component({
  selector: 'app-search-mygig',
  templateUrl: './search-mygig.component.html',
  styleUrls: ['./search-mygig.component.scss'],
})
export class SearchMygigComponent implements OnInit {
  usersId: any;
  userDetails: any;
  myGigsArray = [];
 
  constructor(private modal: ModalController,
    private userService: UserService,
    private signinService: SignInService,
    private utility: UtilityService) { }
    selectedGigs:any=  "0";
  ngOnInit() { }
  async close() {
    return await this.modal.dismiss();
  }
  async onsearch() {
    if (this.selectedGigs) {
      console.log("modal selected gig", this.selectedGigs)
      return await this.modal.dismiss(this.selectedGigs);
    }

  }

  filterGigs() {
    this.userService.MyGiglist(this.usersId, this.selectedGigs).subscribe((response) => {
      this.myGigsArray = response.data.gigss
console.log("myGigsArray",response)
    })
  }
  reset() {
    this.selectedGigs = "0"
  }
}
