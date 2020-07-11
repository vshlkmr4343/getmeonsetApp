import { Injectable } from '@angular/core';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Observable } from 'rxjs';
import { Network } from '@ionic-native/network/ngx';
import { HttpClient } from '@angular/common/http';
import { SignInService } from '../sign-in/sign-in.service';

@Injectable({
	providedIn: 'root'
})
export class UtilityService {

	constructor(
		public loadingController: LoadingController,
		private http: HttpClient,
		private network: Network,
		private platform: Platform,
		private toast: ToastController,
		private actionSheetController: ActionSheetController,
		private camera: Camera) { }

	async  presentLoader(showorhide) {
		const loading = await this.loadingController.create({
			spinner: 'crescent',
			duration: 2000,
			message: 'Please wait...',
			cssClass: 'custom-class custom-loading',
			translucent: true,
		});
		switch (showorhide) {
			case 1: {
				return await loading.present();
				break;
			}
			case 0: {
				return await loading.dismiss();
				break;
			}
			default: {
				break;
			}
		}
	}
	share() {
		if (this.platform.is("cordova")) {
			window['plugins'].socialsharing.share('GMOS', null, '', null)
		}
	}

	async showToast(message) {
		const toast = await this.toast.create({
			message: message,
			duration: 2000
		});
		toast.present();
	}
	async addphoto() {
		const actionSheet = await this.actionSheetController.create({
			header: 'Add photo',
			buttons: [{
				text: 'Camera',
				icon: 'camera',
				handler: () => {
					this.takePicture(this.camera.PictureSourceType.CAMERA);
				}
			}, {
				text: 'Gallery',
				icon: 'images',
				handler: () => {
					this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
				}
			}, {
				text: 'Cancel',
				icon: 'close',
				role: 'cancel',
				handler: () => {
				}
			}]
		});
		await actionSheet.present();
	}


	async  takePicture(sourceType) {
		let base64Image
		const options: CameraOptions = {
			quality: 100,
			targetWidth: 900,
			targetHeight: 600,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			saveToPhotoAlbum: false,
			allowEdit: true,
			sourceType: sourceType,
		}
		this.camera.getPicture(options).then((imageData) => {
			base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
		});
		return await base64Image
	}

	public takePhoto(sourceType): Observable<any> {
		return new Observable((observer) => {
			const options: CameraOptions = {
				quality: 100,
				targetWidth: 900,
				targetHeight: 600,
				destinationType: this.camera.DestinationType.DATA_URL,
				encodingType: this.camera.EncodingType.JPEG,
				mediaType: this.camera.MediaType.PICTURE,
				saveToPhotoAlbum: false,
				allowEdit: true,
				sourceType: sourceType,
			}
			this.camera.getPicture(options).then((imageData) => {
				observer.next('data:image/jpeg;base64,' + imageData);
			}, (err) => {
			});
		})
	}
	//Http Request
	public requestHttp(urlName: any, requestParameter: any, isLoaderAvailable?): Observable<any> {
		//	console.log('Url:' + urlName + '\n\n' + 'Data:',(requestParameter));
		if (this.isNetworkAvailable()) {
			if (isLoaderAvailable) {
				this.presentLoader(0)
			}
			else {
				this.presentLoader(1)
			}
			return new Observable((observer) => {
				this.http.post(urlName, JSON.stringify(requestParameter))
					.subscribe((response) => {
						this.presentLoader(0)
						//console.log('Response:', JSON.stringify(response))
						console.log('Url:' + urlName + '\n\n' + 'Data:', JSON.stringify(requestParameter) + '\n\n' + 'Response:', response);
						observer.next(response);
					}, (error) => {
						console.log('Error', error.error.message)
						this.showToast((error.error.message))
					})

			})
		}
	}

	public requestHttpGet(urlName: any, isLoaderAvailable?): Observable<any> {
		if (this.isNetworkAvailable()) {
			if (isLoaderAvailable) {
				this.presentLoader(0)
			}
			else {
				this.presentLoader(1)
			}
			return new Observable((observer) => {
				this.http.get(urlName)
					.subscribe((response) => {
						this.presentLoader(0)
						console.log('Url:' + urlName + '\n\n' + 'Data:' + '\n\n' + 'Response:', (response));
						observer.next(response);
					}, (error) => {
						console.log('Error', error.error.message)
						this.showToast((error.error.message))
					})

			})
		}
	}
	//Network Availability
	isNetworkAvailable() {
		var isConnected;
		if (this.network.type != 'none') {
			isConnected = true;
		}
		else {
			isConnected = false;
			this.showToast('Oops! network unavailable')
		}
		return isConnected;
	}

	public takeImage(sourceType): Observable<any> {
		return new Observable((observer) => {
			let base64Image
			const options: CameraOptions = {
				quality: 100,
				targetWidth: 900,
				targetHeight: 600,
				destinationType: this.camera.DestinationType.DATA_URL,
				encodingType: this.camera.EncodingType.JPEG,
				mediaType: this.camera.MediaType.PICTURE,
				saveToPhotoAlbum: false,
				allowEdit: true,
				sourceType: sourceType,
			}
			this.camera.getPicture(options).then((imageData) => {
				base64Image = 'data:image/jpeg;base64,' + imageData;

				observer.next(base64Image)
			}, (err) => {
			});

		})
	}


	getAppsPagesForMoreData(title) {
		let appPage;
		if (title == 'MORE') {
			appPage = [
				{
					title: 'RULES',
					url: '/common/rules',
				},
				{
					title: 'FAQ',
					url: '/common/faq'
				},
				{
					title: 'HOW IT WORKS',
					url: '/common/how-it-works'
				},
				{
					title: 'ABOUT US',
					url: '/common/about-us'
				},
				{
					title: 'CONTACT US',
					url: '/common/contact-us'
				},
				{
					title: 'PRIVACY POLICY',
					url: '/common/privacy-policy'
				},
				{
					title: 'TERMS OF SERVICE',
					url: '/common/terms-and-condition'
				}
			]
		}
		else {
			appPage = [
				{
					title: 'MY GIGS',
					url: '/user/mygig'
				},
				{
					title: 'FAVORITES',
					url: '/user/favorite'
				},
				{
					title: 'EDIT PROFILE',
					url: '/user/edit'
				},
				{
					title: 'CHANGE PASSWORD',
					url: '/user/change-password'
				},
				{
					title: 'LOG OUT',
					url: '',
				}
			]
		}

		return appPage
	}

	getAllAppsPageData() {
		let appPages = [
			{
				title: 'HOME',
				url: '/gigs/Talent',
			},
			{
				title: 'CASTINGS CALLS',
				url: '/gigs/Talent',
			},
			{
				title: 'CREW GIGS',
				url: '/gigs/Crew',

			},
			{
				title: 'ACTORS',
				url: '/user/list/talent',

			},
			{
				title: 'CREW',
				url: '/user/list/crew',

			},
			{
				title: 'PRODUCER',
				url: '/user/list/producer',

			},
			{
				title: 'VENDOR',
				url: '/user/list/vendor',

			},
			{
				title: 'MESSAGES',
				url: '/messages',
				icon: 'warning'
			},
			{
				title: 'FORUM',
				url: '/user',
				icon: 'open'
			},
			{
				title: 'GEAR RENTAL',
				url: '/user/dashboard',
				icon: 'open'
			},
			{
				title: 'CLSSIFIEDS',
				url: '/user',
				icon: 'open'
			},
			{
				title: 'NOTIFICATIONS',
				url: '/notifications',
				icon: 'warning'
			},
			{
				title: 'MY PROFILE',
				url: '/user',
				icon: 'arrow-forward'
			},
			{
				title: 'MORE',
				url: '/user',
				icon: 'arrow-forward'
			},
		];
		return appPages
	}

	getAllAppsPageWithoutLogin() {
		let appPages = [
			{
				title: 'HOME',
				url: '/gigs/Talent',
			},
			{
				title: 'CASTINGS CALLS',
				url: '/gigs/Talent',
			},
			{
				title: 'CREW GIGS',
				url: '/gigs/Crew',

			},
			{
				title: 'ACTORS',
				url: '/user/list/talent',

			},
			{
				title: 'CREW',
				url: '/user/list/crew',

			},
			{
				title: 'PRODUCER',
				url: '/user/list/producer',

			},
			{
				title: 'VENDOR',
				url: '/user/list/vendor',

			},
			{
				title: 'FORUM',
				url: '/user',
				icon: 'open'
			},
			{
				title: 'GEAR RENTAL',
				url: '/user/dashboard',
				icon: 'open'
			},
			{
				title: 'CLSSIFIEDS',
				url: '/user',
				icon: 'open'
			},
			{
				title: 'MORE',
				url: '/user',
				icon: 'arrow-forward'
			},
		];

		return appPages;
	}
}
