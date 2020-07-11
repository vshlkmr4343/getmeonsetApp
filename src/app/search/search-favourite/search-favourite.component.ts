import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../../user/user.service'
import { UtilityService } from '../../utility/utility.service'
import { SignInService } from '../../sign-in/sign-in.service'
import { SignUpService } from '../../sign-up/sign-up.service'
@Component({
  selector: 'app-search-favourite',
  templateUrl: './search-favourite.component.html',
  styleUrls: ['./search-favourite.component.scss'],
})
export class SearchFavouriteComponent implements OnInit {
  public searchData = {
    moduleId: "2",
    date: '',
    radious: '101',
    gigActive: "1",
    status: "1",
  };
  myFavoritesArray = [];
  usersId: any;
  userDetails: any;
  constructor(private modal: ModalController,
    private userService: UserService,
    private signinService: SignInService,
    private utility: UtilityService) { }




  ngOnInit() { }
  async close() {
    return await this.modal.dismiss();
  }
  async onsearch() {
    if (this.searchData) {
      return await this.modal.dismiss(this.searchData);
    }

  }

  clearData() {
    this.searchData = {
      moduleId: "2",
      date: '',
      radious: '101',
      gigActive: "1",
      status: "1",
    };
  }
  fetchData() {
    this.userService.favouriteList(this.usersId, this.searchData).subscribe((response) => {
      this.myFavoritesArray = response.data.favourites;

    })
  }
}
