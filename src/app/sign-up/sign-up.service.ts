import { Injectable } from '@angular/core';
import { SignUpModel } from './sign-up-model';
import { environment } from 'src/environments/environment';
import { UtilityService } from '../utility/utility.service';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  authStatusListener = new Subject<boolean>();

  constructor(private utility:UtilityService) { }
  signUp(user: SignUpModel) { 
    let data = user;
    data['api_key'] = environment.API_KEY_VALUE;
    return this.utility.requestHttp(environment.API_URL + 'user/signUp',data);
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getAuthData() {
    const isLoggedin = localStorage.getItem("isLoggedin");
    const sudoLoggedin = localStorage.getItem("sudoLoggedin");
    const currentUser = localStorage.getItem("currentUser");
    const email = localStorage.getItem('email');
    const usersId = localStorage.getItem('usersId');
    const id = localStorage.getItem('id');
    const adminusersId = localStorage.getItem('adminusersId');
    const fullName = localStorage.getItem('fullName');
    const profileComplitted = localStorage.getItem('profileComplitted');
    if (!isLoggedin || !currentUser) {
      return; 
    }
    return {
      isLoggedin: isLoggedin,
      sudoLoggedin: sudoLoggedin,
      currentUser: currentUser,
      email: email,
      usersId: usersId,
      id: id,
      adminusersId: adminusersId,
      fullName: fullName,
      profileComplitted: profileComplitted
    };
  }
}
