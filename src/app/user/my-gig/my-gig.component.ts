import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchMygigComponent } from '../../search/search-mygig/search-mygig.component';
import { UserService } from '../user.service'
import { UtilityService } from '../../utility/utility.service'
import { SignInService } from '../../sign-in/sign-in.service'
import { SignUpService } from '../../sign-up/sign-up.service'
@Component({
  selector: 'app-my-gig',
  templateUrl: './my-gig.component.html',
  styleUrls: ['./my-gig.component.scss'],
})
export class MyGigComponent implements OnInit {
  userIsAuthenticated = false;
  usersId: any;
  userDetails: any;
  myGigsArray = [];
  type: any;
  totalItem: any
  config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0
  };
  start = 0;
  limit = 10;
  totalRowCount: number = 0;
  requestData = {
    limit: this.limit,
    start: this.start,
  }
  constructor(private modal: ModalController,
    private userService: UserService,
    private signinService: SignInService,
    private utility: UtilityService) { }
  selectedGigs: any = "0";
  ngOnInit() {
    this.userDetails = this.signinService.getAuthData();
    this.usersId = this.userDetails.usersId;
    this.userService.MyGiglist(this.usersId, this.selectedGigs).subscribe((response) => {
      this.myGigsArray = response.data.gigs;
      this.config = {
        itemsPerPage: this.limit,
        currentPage: 1,
        totalItems: this.totalRowCount
      };
    })
   // this.filterGigs(this.selectedGigs);
  }
  async filter() {
    const modal = await this.modal.create({
      component: SearchMygigComponent
    });
    modal.onDidDismiss()
      .then((selectedGigs) => {
        console.log("searchdata on dismiss modal", selectedGigs.data)
        if (selectedGigs.data) {
          this.selectedGigs = selectedGigs.data
          this.filterGigs(selectedGigs.data);
        }


      });
    return await modal.present();
  }

  filterGigs(selectedGigs) {
    this.userService.MyGiglist(this.usersId, this.selectedGigs).subscribe((response) => {
      this.myGigsArray = response.data.gigs
      console.log("this user id ", this.usersId)
    })
  }
  pageChange(newPage: number) {
    this.config.currentPage = newPage;
    this.start = (newPage - 1) * this.limit;
    // this.onSearch();
  }
}
