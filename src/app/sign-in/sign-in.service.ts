import { Injectable } from '@angular/core';
import { SignInModel } from './sign-in-model';
import { environment } from 'src/environments/environment';
import { UtilityService } from '../utility/utility.service';
import { Subject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
@Injectable({
	providedIn: 'root'
})
export class SignInService {
	private subject = new Subject<any>();
	private keepAfterNavigationChange = false;
	private isAuthenticated = false;
	private token: string;
	private tokenTimer: any;
	private userId: string;
	authStatusListener = new Subject<boolean>();

	constructor(
		private storage: Storage,
		private utility: UtilityService) { }
	login(user: SignInModel) {
		let data = user;
		data['api_key'] = environment.API_KEY_VALUE;
		return this.utility.requestHttp(environment.API_URL + 'user/signIn', data);
	}

	userLoginByAdmin(usersId) {
		const data = {
			api_key: environment.API_KEY_VALUE,
			usersId: usersId,
		};
		return this.utility.requestHttp(environment.API_URL + 'user/userLoginByAdmin', (data));
	}

	getAuthStatusListener() {
		return this.authStatusListener.asObservable();
	}

	getIsAuth() {
		return this.isAuthenticated;
	}

	logout() {
		this.token = null;
		this.isAuthenticated = false;
		this.authStatusListener.next(false);
		this.userId = null;
		this.clearAuthData()
		const data = {
			api_key: environment.API_KEY_VALUE,
		};
		return this.utility.requestHttp(environment.API_URL + 'user/logout', data);
	}

	private clearAuthData() {
		return this.storage.remove('userData').then(data=>{
        localStorage.removeItem("isLoggedin");
        localStorage.removeItem("sudoLoggedin");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("usersId");
        localStorage.removeItem("email");
        localStorage.removeItem("id");
        localStorage.removeItem("adminid");
        localStorage.removeItem("fullName");
        localStorage.removeItem("profileComplitted");
		}) 
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
		  fullName: fullName,
		  adminusersId: adminusersId,
		  profileComplitted: profileComplitted,
		};
	  }

}
