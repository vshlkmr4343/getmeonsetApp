import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { UtilityService } from '../../utility/utility.service';
import { SignInService } from '../../sign-in/sign-in.service';
import { SignUpService } from '../../sign-up/sign-up.service';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common'
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  private isSubmenuOpen = false;
  public appPages = [];

  constructor(   private location:Location,
    private storage: Storage,
    private util: UtilityService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private signService: SignInService,
    private signupService: SignUpService) { }

  ngOnInit() {}
  logout() {
    this.storage.remove('userData').then(data => {
      this.signService.logout().subscribe(data => {
        this.isSubmenuOpen = false;
        this.appPages = this.util.getAllAppsPageWithoutLogin();
        this.util.showToast('Successfully logged out.');
        this.router.navigateByUrl('/common');
      })
    })
}
}
