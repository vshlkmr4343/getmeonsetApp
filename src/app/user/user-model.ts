export class UserModel {
}

export class EditprofileModel {
    name: string;
    email: string;
    password: string;
    cpassword: string;
    firstName: string;
    fullName: string;
    iconHeader: string;
    iconImage: string;
    isAddressPublic: boolean;
    isEmailPublic: boolean;
    isPhonePublic: boolean;
    lastName: string;
    phone: any;
    profileImage: string;
    uId: number;
    userBio: string;
    userRating: string;
    usersTypeIdStr: string;
    usersTypeStr: string;
    websiteLink: string;
  }

  export class ChangepasswordModel {
    uesrsID: number;
    userEmail: string;
    newPassword: string;
    confirmPassword: string;
    token: string;
  }

  export class TalentModel{
    gender:[];
    maxAge: number;
    minAge:number;
    minHeight:number;
    maxHeight:number;
    minWeight:number;
    maxWeight:number;
    hair_color:[];
    tattoos:number;
    piercings:number;
    usersId:string;
  }
  export class CrewModel {
    gender:[];
    radius: string;
    maxAge: number;
    minAge:number;
    usersId:string;
    }
    export class ProducerModel {
      radius: string;
      gender:[];
      maxAge: number;
      minAge:number;
      usersId:string;
      }
      export class MyGigsModel {
        data:{ 
          gigs : [],
        }
        }