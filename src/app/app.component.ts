import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { UtilityService } from './utility/utility.service';
import { SignInService } from './sign-in/sign-in.service';
import { SignUpService } from './sign-up/sign-up.service';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

//test change
export class AppComponent implements OnInit {
  public isLoggedIn = false;
  public previousLoggedInEvent = false;
  public selectedIndex = 0;
  private isSubmenuOpen = false;
  public subMenuPages = [];
  public appPages = [];
  public loggedInAppPages = [];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  userIsAuthenticated = false;
  usersId: any;
  adminId: any;
  alertCount: any;
  userDetails: any;
  openClass = false;
  profileComplitted = false;
  sudoLoggedin = false;
  complittedProfile: any;
  baseUrl: any;
  alertRead: any;
  alertDetails: any = [];
  adsDetails: any = [];
  isbasicProfileComplited: false;
  countToExitApp = 0;

  constructor(
    private location:Location,
    private storage: Storage,
    private util: UtilityService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private signService: SignInService,
    private signupService: SignUpService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString('#000000');
      this.statusBar.styleBlackTranslucent()
      this.autoLogin();
      document.addEventListener("backbutton", () => { 
        if(this.router.url == '/gigs/Talent' || this.router.url == '/gigs/Crew' || this.router.url == '/common'){
          this.countToExitApp++
          if(this.countToExitApp == 1){
            this.util.showToast('Are you sure want to exit app?')
          }
          if(this.countToExitApp == 2){
            navigator['app'].exitApp();
          }
        } 
        else{
          this.countToExitApp = 0;
          this.location.back;
        }
       });
    });
  }
  autoLogin() {
    this.storage.get('userData').then(data=>{
      this.router.navigateByUrl('/common');
    })
  }

  ngOnInit() {
    this.appPages = this.util.getAllAppsPageData();
    this.signService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userDetails = this.signService.getAuthData();
        if (this.userDetails.profileComplitted) {
          this.profileComplitted = true;
        }
        else {
          this.profileComplitted = false;
        }
        if (this.userDetails.sudoLoggedin) {
          this.sudoLoggedin = true;
        }
      });
    this.signupService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userDetails = this.signupService.getAuthData();
        this.usersId = this.userDetails.usersId;
      });

    const usersudoLoggedin = localStorage.getItem("sudoLoggedin");
    if (usersudoLoggedin) {
      this.sudoLoggedin = true;
    }
    const isLoggedin = localStorage.getItem("isLoggedin");
    if (isLoggedin) {
      this.userIsAuthenticated = true;
      this.userDetails = this.signService.getAuthData();
      this.usersId = this.userDetails.usersId;
    }
    this.complittedProfile = localStorage.getItem("profileComplitted");
    if (this.complittedProfile) {
      this.profileComplitted = true;
    }
    else {
      this.profileComplitted = false;
    }
    // setInterval(() => {
    //   // var isLoggedinTrue = localStorage.getItem("isLoggedin");
    //   // if (isLoggedinTrue) {
    //   //   this.complittedProfile = localStorage.getItem("profileComplitted");
    //   //   if (this.complittedProfile) {
    //   //     this.profileComplitted = true;
    //   //   }
    //   //   else {
    //   //     this.profileComplitted = false;
    //   //   }
    //   //   // if(localStorage.getItem('fullName')){
    //   //   //   this.userDetails.fullName = localStorage.getItem('fullName');
    //   //   // }
    //   // }
      
 
    // }, 1000);
  }
  check(event) {
    this.isLoggedIn = event.isLoggedIn;
    if(this.isLoggedIn){
      this.userDetails = this.signService.getAuthData();
      this.usersId = this.userDetails.usersId;
    }
  }

  back() {
    this.isSubmenuOpen = false;
  }
  open(title) {
    this.isSubmenuOpen = true;
    let appPage
    this.subMenuPages = this.util.getAppsPagesForMoreData(title);
  }

  logout() {
    this.storage.remove('userData').then(data => {
      this.signService.logout().subscribe(data => {
        this.isSubmenuOpen = false;
        this.appPages = this.util.getAllAppsPageWithoutLogin();
        this.util.showToast('Successfully logged out.');
      })
    })


  }

  redirectToPage(url) {
    this.router.navigateByUrl(url);
  }

  post() {
    this.router.navigateByUrl('/gigs/Talent/create')
  }

  openUrl(title) {
    console.log(title)

  }
}
