import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignInService } from './sign-in.service';
import { UtilityService } from '../utility/utility.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.page.html',
	styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
	loginForm: FormGroup;
	submitted = false;
	usersDetails: any = [];
	constructor(
		private storage: Storage,
		private signInService: SignInService,
		private utility: UtilityService,
		private router: Router) { }

	ngOnInit() {
		this.loginForm = new FormGroup({
			email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
			password: new FormControl(null, { validators: [Validators.required, Validators.minLength(6)] })
		})
	}

	onLogin() {
		this.submitted = true;
		if (this.loginForm.invalid) {
			return;
		}
		this.signInService.login(this.loginForm.value).subscribe(data => {
			this.usersDetails = data;
			if (this.usersDetails.message) {
				this.utility.showToast("Invalid user email or password.");
			}
			else {
				this.storage.set('userData', this.usersDetails.data.userData).then(dataxyz => {
					const email = this.usersDetails.data.userData.email;
					const usersId = this.usersDetails.data.userData.usersId;
					const id = this.usersDetails.data.userData.uId;
					const fullName = this.usersDetails.data.userData.fullName;
					const usersTypeId = this.usersDetails.data.userData.usersTypeId;
					localStorage.setItem('isLoggedin', 'true');
					localStorage.setItem('currentUser', JSON.stringify(this.usersDetails.data.userData));
					localStorage.setItem('email', email);
					localStorage.setItem('usersId', usersId);
					localStorage.setItem('id', id);
					localStorage.setItem('fullName', fullName);
					if (usersTypeId.length > 0) {
						localStorage.setItem('profileComplitted', 'true');
					}
					this.signInService.authStatusListener.next(true);
					this.router.navigate(["/gigs/Crew"]);
					this.utility.showToast("Login successfully");

				})

			}


		})
	}

	get f() { return this.loginForm.controls; }

}
