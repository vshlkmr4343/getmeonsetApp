import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GigsModel } from './gigs-model';
import { UtilityService } from '../utility/utility.service';

@Injectable({
	providedIn: 'root'
})
export class GigsService {

	constructor(
		private utility: UtilityService,
		private router: Router,
		private http: HttpClient) {
	}
	getAllGigs() {
		const data = {
			api_key: environment.API_KEY_VALUE,
		};
		return this.utility.requestHttp(environment.API_URL + 'gig/getAllGigs', data);
	}

	getGigInfo(gigsId: any, gigType: any, usersId: any) {
		const data = {
			gigId: gigsId,
			gigType: gigType,
			usersId: usersId,
			api_key: environment.API_KEY_VALUE,
		};
		return this.utility.requestHttp(environment.API_URL + 'gig/getGigInfo', data);
	}

	searchUsers(user: GigsModel, usersId: any) {
		let data = user;
		data['usersId'] = usersId;
		data['api_key'] = environment.API_KEY_VALUE;
		return this.utility.requestHttp(environment.API_URL + 'search/searchGigs', data);
	}

	fetchData(gigType: any, usersId: any) {
		const data = {
			radius: '101',
			gigType: gigType,
			users: [usersId],
			api_key: environment.API_KEY_VALUE,
		};
		return this.utility.requestHttp(environment.API_URL + 'search/searchGigs', data);
	}

	applyGig(formVal, usersId: any, gigsId: any, gigsType: any) {
		let data = formVal;
		data['usersId'] = usersId;
		data['gigsId'] = gigsId;
		data['gigType'] = gigsType;
		data['api_key'] = environment.API_KEY_VALUE;
		return this.utility.requestHttp(environment.API_URL + 'user/applyForGig', data);
	}

	gigApplicationAcceptDecline(usersId: any, gigsId: any, gigAction: any) {
		const data = {
			gigId: gigsId,
			action: gigAction,
			users: [usersId],
			api_key: environment.API_KEY_VALUE,
		};
		return this.utility.requestHttp(environment.API_URL + 'user/gigApplicationAcceptDecline', data);
	}

	addFavorite(gigId, gigType, usersId) {
		const data = {
			api_key: environment.API_KEY_VALUE,
			moduleId: 2,
			relatedId: gigId,
			relatedTypeId: gigType,
			usersId: usersId,
		};
		return this.utility.requestHttp(environment.API_URL + 'favourite/addToFavourite', data);
	}

	removeFavorite(gigId, gigType, usersId) {
		const data = {
			api_key: environment.API_KEY_VALUE,
			moduleId: 2,
			relatedId: gigId,
			relatedTypeId: gigType,
			usersId: usersId,
		};
		return this.utility.requestHttp(environment.API_URL + 'favourite/removeFromFavourite', data);
	}

	getRatingValByUser(usersId: any, gigsId) {
		const data = {
			usersId: usersId,
			relatedId: gigsId,
			api_key: environment.API_KEY_VALUE,
		};
		return this.utility.requestHttp(environment.API_URL + 'rating/getRatingValByUser', data);
	}

	addRating(usersId, ratingBy, ratingVal, gigsId) {
		const data = {
			api_key: environment.API_KEY_VALUE,
			usersId: usersId,
			ratingBy: ratingBy,
			ratingVal: ratingVal,
			relatedId: gigsId,
		};
		return this.utility.requestHttp(environment.API_URL + 'rating/addRating', data);
	}

	updateRatingText(ratingId, ratingText, ratingVal) {
		const data = {
			api_key: environment.API_KEY_VALUE,
			ratingId: ratingId,
			ratingText: ratingText,
			ratingVal: ratingVal,
		};
		return this.utility.requestHttp(environment.API_URL + 'rating/updateRatingText', data);
	}
	
	
	addRatingAndReview(usersId,ratingBy,ratingText,ratingReasonText, ratingVal, gigsId) {
		const data = {
		  api_key: environment.API_KEY_VALUE,
		  usersId: usersId,
		  ratingBy: ratingBy,
		  ratingText: ratingText,
		  ratingReasonText: ratingReasonText,
		  ratingVal: ratingVal,
		  relatedId: gigsId,
		};
		return this.utility.requestHttp(environment.API_URL+'rating/addRatingAndReview',data);
	}

	//Post Gig Services
	postGig(gigData, usersId) {
		let data = gigData;
		data['usersId'] = usersId;
		data['api_key'] = environment.API_KEY_VALUE;
		return this.utility.requestHttp(environment.API_URL + 'gig/postGig', data);
	}
	
	editCrewGig(gigData, usersId) {
		let data = gigData;
		data['usersId'] = usersId;
		data['api_key'] = environment.API_KEY_VALUE;
		return this.utility.requestHttp(environment.API_URL + 'gig/updateGig', data);
	}
	
	talentPostGig(gigData, usersId, roles) {
		let data = gigData;
		data['usersId'] = usersId;
		data['roles'] = roles;
		data['api_key'] = environment.API_KEY_VALUE;
		return this.utility.requestHttp(environment.API_URL + 'gig/postGig', data);
	}

	updateTalentGig(gigData, usersId, roles) {
		let data = gigData;
		data['usersId'] = usersId;
		data['roles'] = roles;
		data['api_key'] = environment.API_KEY_VALUE;
		return this.utility.requestHttp(environment.API_URL + 'gig/updateGig', data);
	}

	addRole(roleData) {
		let data = roleData;
		data['api_key'] = environment.API_KEY_VALUE;
		return this.utility.requestHttp(environment.API_URL + 'gig/addRole', data);
	}

	updateRole(roleData, gigRoleId: any) {
		let data = roleData;
		data['gigRoleId'] = gigRoleId;
		data['api_key'] = environment.API_KEY_VALUE;
		return this.utility.requestHttp(environment.API_URL + 'gig/updateRole', data);
	}

	getRole(roleId: any) {
		const data = {
			roleId: roleId,
			api_key: environment.API_KEY_VALUE,
		};
		return this.utility.requestHttp(environment.API_URL + 'gig/addRole', data);
	}

	deleteRole(gigRoleId: any) {
		const data = {
			gigRoleId: gigRoleId,
			api_key: environment.API_KEY_VALUE,
		};
		return this.utility.requestHttp(environment.API_URL + 'gig/deleteGigRole', data);
	}

}