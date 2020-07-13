import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { SearchGigComponent } from 'src/app/search/search-gig/search-gig.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from 'src/app/utility/utility.service';
import { GigsService } from '../gigs.service';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  isHighlited: any;
  type = 'Crew';
  gigsDetails = [];
  usersId: any;
  gigType: number;
  gigUnion = 2;
  gigPayment = 2;
  config= {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0
  };
  start = 0 ;
  limit = 10;
  totalRowCount:number = 0;
  requestData = {
    limit: this.limit,
    start: this.start,
  }
  noGigFound: number = 0;
  paginationDiv:false;
  isLoggedIn:any ;
  searchForm: any;

  constructor(
    public formBuilder: FormBuilder,
    private menuCtrl: MenuController,
    private storage: Storage,
    private utiliy: UtilityService,
    private gigsService: GigsService,
    private modalController: ModalController,
    private route: ActivatedRoute,
  private router: Router) { }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  ngOnInit() {
    this.isHighlited = 'Talent'
    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.has('type')) {
        this.type = paramMap.get('type');
        this.isHighlited = this.type;
      }
    })

    this.isLoggedIn = localStorage.getItem("isLoggedin");
    this.storage.get('userData').then(data => {
      if (data) {
        this.usersId = data.usersId;
      }
      this.fetchData('', this.type)
    })

    this.searchForm = this.formBuilder.group({
      gigType: this.gigType,
      gigUnion: ['2'],
      gigPayment: ['2'],
      radius: ['101'],
      race: [''],
      physicalCharacteristics: [''],
      cityState: '',
      fullName: '',
      positionsAvailable: [] ,
    });

  }
  getGigType() {
    if (this.type == 'Talent') {
      this.gigType = 2
    }
    else if (this.type == 'Crew') {
      this.gigType = 1;
    }
    else {
      this.gigType = 0;
    }
    return this.gigType;
  }
  fetchData(catagory, type?) {
    switch (catagory) {
      case 'All':
        this.gigsService.getAllGigs().subscribe(response => {
          let gigsResponse = response.data
          this.gigsDetails = gigsResponse.gigs;
          this.noGigFound = 0;
          if (this.gigsDetails.length == 0) { this.noGigFound = 1; }
        },
        error => {
          this.noGigFound = 1;
        })
        break;
      default:
        this.gigsService.fetchData(this.getGigType(), this.usersId)
          .subscribe(
            response => {
              this.gigsDetails = response.data.gigs;
               this.totalRowCount = response.data.totalRow;
               this.noGigFound = 0;
               if (this.gigsDetails.length == 0) { this.noGigFound = 1; }
               this.config = {
                itemsPerPage: this.limit,
                currentPage: 1,
                totalItems: this.totalRowCount
              };
            },
            error => {
              this.noGigFound = 1;
            });
        break;
    }
  }

  pageChange(newPage: number) {
    this.config.currentPage=newPage;
    this.start = (newPage-1) * this.limit;
    this.onSearch(this.searchForm.value);
  }
  async search() {
    const modal = await this.modalController.create({
      component: SearchGigComponent,
      componentProps: {
        gigType: this.gigType,
        gigUnion: this.gigUnion,
        gigPayment: this.gigPayment,
      }
    });
    modal.onDidDismiss()
      .then((filterFormData) => {
        if(filterFormData.data){
         // this.onSearch(filterFormData.data);
         if(filterFormData.data.gigType == 1){
           this.isHighlited = 'Crew';
           this.onSearch(filterFormData.data);
         }
         if(filterFormData.data.gigType == 2){
           this.isHighlited = 'Talent';
           this.onSearch(filterFormData.data);
         }
        }
      });
    return await modal.present();
  }
  onSearch(filterFormData) {
    this.gigsService.searchUsers(filterFormData, this.usersId).subscribe(response => {
      let gigsResponse = response.data
      this.gigsDetails = gigsResponse.gigs;
      this.noGigFound = 0;
      if (this.gigsDetails.length == 0) { this.noGigFound = 1; }
      this.config.totalItems = response.data.gigs.length;
    },
    error => {
      this.noGigFound = 1;
    })
  }

  highlight(item) {
    this.isHighlited = item;
    if (item == 'Crew') {
      this.type = 'Crew';
      this.fetchData('');
    }
    else {
      this.type = 'Talent';
      this.fetchData('');
    }
  }

  // display() {
  //   this.router.navigateByUrl('/gigs/' + this.type + '/display')
  // }

}
