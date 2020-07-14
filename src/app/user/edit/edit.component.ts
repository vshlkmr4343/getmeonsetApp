import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import { UtilityService } from 'src/app/utility/utility.service';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Observable, of, forkJoin, merge } from 'rxjs';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { RACE_ARRAY, PHYSICAL_CHARACTERISTICS_ARRAY } from 'src/app/app.service';
import { SignInService } from 'src/app/sign-in/sign-in.service';
import { UserService } from '../user.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { mapTo, filter, map } from 'rxjs/operators';
import * as _ from 'underscore';
import { FilePath } from '@ionic-native/file-path/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { Router } from '@angular/router';

class ImageSnippet {
  constructor(public src: any, public file: File) { }
}

interface FileReaderEventTarget extends EventTarget {
  result: string
}

interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
  getMessage(): string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})

export class EditComponent implements OnInit {
  @ViewChild('videoPlayer', {static:true}) videoplayer: ElementRef;
  private id: string;
  merge: Observable<any>;
  editform: FormGroup;
  talenteditform: FormGroup;
  creweditform: FormGroup;
  selectedFile: ImageSnippet;
  usersDetails: any = [];
  usersTypeArr: any = [];
  usersAddressDetails: any;
  profileImage: any;
  usersImages = [];
  fullBodyPic: any;
  usersId: any;
  usersType: any;
  email: any;
  phone: any;
  editUsersDetails: any = [];
  user: any;
  submitted = false;
  talentSubmitted = false;
  crewSubmitted = false;
  userTalentTab = false;
  userProducerTab = false;
  userCrewTab = false;
  closeEmailLink = false;
  closePhoneLink = false;

  countryName: string;
  stateName: string;
  cityName: string;
  latitude: string;
  longitude: string;
  street: string;
  zip: string;
  locationName: string;
  fullAddress: any;

  istalentPosted = 0;
  talentTab = false;
  crewTab = false;
  verifyEmailArr: any = [];
  verifyPhoneArr: any = [];

  otpEmailVerifiedArr: any = [];
  otpPhoneVerifiedArr: any = [];
  isPhoneVerify = false;
  isEmailVerify = false;
  
  addtionalImagesArray: any = [];
  tattoosDescriptionChecked = false;
  equipmentOwnedDescriptionChecked = false;
  isVerifyPhone: any;
  isVerifyEmail: any;
  otp: any;
  isOtpVerified: any;
  isPhoneOtpVerified: any;
  emailVerify: any;
  phoneVerify: any;
  otpPhone: any;
  otpEmail: any;
  accountTypeId: any;
  uploadedFile: any;
  url: any ;
  myFiles: any = [];
  userVideos: any = [] ;
  loading:boolean = false
  loadVideo:boolean = false
  raceArray = RACE_ARRAY;
  physicalCharacteristicsArray = PHYSICAL_CHARACTERISTICS_ARRAY;
  equipmentOwnedArray = [
    { value: '1', label: '1', selected: false },
    { value: '2', label: '2', selected: false },
  ];
  selectedEquipmentOwnedArray = [];
  jobInterestedInArray = [
    { value: '1', label: 'AD department', selected: false },
    { value: '2', label: 'Production department', selected: false },
    { value: '3', label: 'Camera department', selected: false },
    { value: '4', label: 'G & E department', selected: false },
    { value: '5', label: 'HMU department', selected: false },
    { value: '6', label: 'Wardrobe department', selected: false },
    { value: '7', label: 'Sound department', selected: false },
    { value: '8', label: 'Art department', selected: false },
    { value: '9', label: 'Transportation department', selected: false },
  ];
  selectedJobInterestedInArray = [];
  experiencedInArray = [
    { value: '1', label: 'AD department', selected: false },
    { value: '2', label: 'Production department', selected: false },
    { value: '3', label: 'Camera department', selected: false },
    { value: '4', label: 'G & E department', selected: false },
    { value: '5', label: 'HMU department', selected: false },
    { value: '6', label: 'Wardrobe department', selected: false },
    { value: '7', label: 'Sound department', selected: false },
    { value: '8', label: 'Art department', selected: false },
    { value: '9', label: 'Transportation department', selected: false },
  ];
  selectedExperiencedInArray = [];
  willingToTravelArray = [
    { value: '1', label: 'Yes on production dime', selected: false },
    { value: '2', label: 'Yes on own dime', selected: false },
    { value: '3', label: 'No', selected: false },
    { value: '4', label: 'Possibly', selected: false },
  ];
  selectedWilingToTravelArray = [];
  unionArray = [
    { value: '1', label: 'Union', selected: false },
    { value: '2', label: 'Non union', selected: false },
    { value: '3', label: 'Both', selected: false },
  ];
  selectedUnionArray = [];
  dropdownList = [
    { "id": 3, "itemName": "Talent" },
    { "id": 4, "itemName": "Producer" },
    { "id": 5, "itemName": "Crew" },
    { "id": 6, "itemName": "Vendor" }
  ];
  dropdownSettings = {
    singleSelection: false,
    text: "Select Account",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class"
  };
  imagedata: any;
  moreImagedata: any;
  showVerifiedPhone: boolean;
  referralCode = 123456;
  event: any;
  showTab = 'editTab';
  vendorEditform: FormGroup;
  vendorTab = false;
  vendorSubmitted = false;
  selectedequipmentRentalArray = [];
  equipmentRentalArray = [
    { value: '1', label: 'Camera Rentals', selected: false },
    { value: '2', label: 'Grip/Electric Rentals', selected: false },
    { value: '3', label: 'Production Supplies', selected: false },
    { value: '4', label: 'Vehicles/Trailers', selected: false }
  ];
  emailNotifications: any;
  constructor(
    private router: Router,
    private document: DocumentViewer,
    private transfer: FileTransfer,
    private storage: Storage,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private file: File,
    private userService: UserService,
    private signinService: SignInService,
    private fb: FormBuilder,
    private camera: Camera,
    private utility: UtilityService,
    private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.showVerifiedPhone = false;
    this.editform = this.fb.group({
      accountType: [''],
      fullName: ['', [Validators.required]],
      isEmailPublic: [''],
      isPhonePublic: [''],
      isAddressPublic: [''],
      usersRating: [''],
      usersBio: [''],
      websiteLink: [''],
      gender: ['', [Validators.required]],
      fullAddress: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phone: ['', [Validators.required, Validators.maxLength(14)]],
      profileImage: [''],
      resume: [''],
      // image: [''],
      countryName: [''],
      stateName: [''],
      cityName: [''],
      latitude: [''],
      longitude: [''],
      street: [''],
      locationName: [''],
      imdbLink: this.fb.array([]),
    })
    this.creweditform = this.fb.group({
      //dayRate: ['', [Validators.required]],
      jobInterstedIn: [''],
      equipmentOwned: [''],
      equipmentOwnedDescription: [''],
      experiencedIn: ['']
    })
    this.talenteditform = this.fb.group({
      fullBodyImage: [''],
      age: ['', [Validators.required]],
      race: ['', [Validators.required]],
      physicalCharacteristics: ['', [Validators.required]],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      hairColor: ['', [Validators.required]],
      tattoos: [''],
      piercings: [''],
      tattoosDescription: [''],
      willingToTravel: [''],
      union: [''],
    })
    this.vendorEditform = this.fb.group({
      accounting: ['', [Validators.required]],
      audio: ['', [Validators.required]],
      catering: ['', [Validators.required]],
      distribution: ['', [Validators.required]],
      insurance: ['', [Validators.required]],
      legal: ['', [Validators.required]],
      postProduction: ['', [Validators.required]],
      propsRental: ['', [Validators.required]],
      security: ['', [Validators.required]],
      stagesStudios: ['', [Validators.required]],
      talentCasting: ['', [Validators.required]],
      transportation: ['', [Validators.required]],
      travelAccommodations: ['', [Validators.required]],
      wardrobeCostumes: ['', [Validators.required]],
      equipmentRental: ['']
    })
    this.usersDetails = this.signinService.getAuthData();
    this.id = this.usersDetails.usersId;
    this.usersDetails = JSON.parse(this.usersDetails.currentUser);
    this.usersId = this.usersDetails.usersId;
    if (this.usersDetails.email) {
      this.email = this.usersDetails.email;
    }
    if (this.usersDetails.phone) {
      this.phone = this.usersDetails.phone;
    } else {
      this.phone = this.editform.value.phone;
    }
    if (this.usersDetails.tattoos == 1) {
      this.tattoosDescriptionChecked = true;
    }
    if (this.usersDetails.equipmentOwned == 1) {
      this.equipmentOwnedDescriptionChecked = true;
    }
    if (this.usersDetails.usersImages.length > 0) {
     this.usersImages = this.usersDetails.usersImages;
    }
    else {
      this.usersImages[0] = 'https://yapbuzz.com/works/gmos/assets/images/avatar5.png';
    }
    if (this.usersDetails.usersAddress.length > 0) {
      this.fullAddress = this.usersDetails.usersAddress[0].fullAddress;
    }
    this.usersTypeArr = this.usersDetails.usersTypeId;
    this.selectwillingToTravel(this.usersDetails.willingToTravel);
    this.selecteunion(this.usersDetails.union);
    this.selectjobinterested(this.usersDetails.jobInterstedIn);
    this.selectexperienced(this.usersDetails.experiencedIn);
    if (this.usersDetails.socialMediaLinks.length > 0) {
      this.addSelectedImdb(this.usersDetails.socialMediaLinks)
    } else {
      this.addImdb();
    }
    if (this.usersDetails.profileImage) {
      this.profileImage = this.usersDetails.profileImage;
    }
    if (this.usersDetails.fullBodyPic) {
      this.fullBodyPic = this.usersDetails.fullBodyPic;
    }
    else {
      this.fullBodyPic = 'https://yapbuzz.com/works/gmos/assets/images/avatar5.png';
    }
    if (this.usersDetails.isPhonePublic == 1) {
      this.usersDetails.isPhonePublic = true;
    } else {
      this.usersDetails.isPhonePublic = false;
    }
    if (this.usersDetails.isAddressPublic == 1) {
      this.usersDetails.isAddressPublic = true;
    } else {
      this.usersDetails.isAddressPublic = false;
    }
    if (this.usersDetails.isEmailPublic == 1) {
      this.usersDetails.isEmailPublic = true;
    } else {
      this.usersDetails.isEmailPublic = false;
    }
    if (this.usersDetails.referralCode.length > 0) {
      this.referralCode = this.usersDetails.referralCode[0];
    }
    if (this.usersDetails.usersType.length > 1) {
      this.usersType = this.usersDetails.usersType;
      if (this.usersDetails.usersTypeId.indexOf('3') != -1) {
        this.talentTab = true;
      }
      if (this.usersDetails.usersTypeId.indexOf('5') != -1) {
        this.crewTab = true
      }
      if (this.usersDetails.usersTypeId.indexOf('6') != -1) {
        this.vendorTab = true
      }
    } else {
      this.usersType = this.usersDetails.usersType;
      if (this.usersType[0].id == '4') {
        this.crewTab = false;
        this.talentTab = false;
        this.vendorTab = false;
      }
    }

    this.getEmailNotificationSettings()
    localStorage.removeItem("profileVideo");
    this.getAllVideos() ;
  }

  public selectUnionData() {
    this.selectedUnionArray = [];
    this.unionArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedUnionArray.push(item.value);
      }
    })
  }

  public selecteunion(travles) {
    this.unionArray.map((item, index) => {
      let id = item.value;
      if (typeof travles != 'undefined' && travles.indexOf(item.value) !== -1) {
        this.unionArray[index].selected = true;
        this.selectedUnionArray.push(item.value);
      }
    });
  }

  public selectData() {
    this.selectedWilingToTravelArray = [];
    this.willingToTravelArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedWilingToTravelArray.push(item.value);
      }
    })
  }

  public selectwillingToTravel(travles) {
    this.willingToTravelArray.map((item, index) => {
      let id = item.value;
      if (typeof travles != 'undefined' && travles.indexOf(item.value) !== -1) {
        this.willingToTravelArray[index].selected = true;
        this.selectedWilingToTravelArray.push(item.value);
      }
    });
  }

  public selectjobinterested(travles) {
    this.jobInterestedInArray.map((item, index) => {
      let id = item.value;
      if (typeof travles != 'undefined' && travles.indexOf(item.value) !== -1) {
        this.jobInterestedInArray[index].selected = true;
        this.selectedJobInterestedInArray.push(item.value);
      }
    });
  }

  public selectjobinterestedData() {
    this.selectedJobInterestedInArray = [];
    this.jobInterestedInArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedJobInterestedInArray.push(item.value);
      }
    })
  }

  public selectexperienced(travles) {
    this.experiencedInArray.map((item, index) => {
      let id = item.value;
      if (typeof travles != 'undefined' && travles.indexOf(item.value) !== -1) {
        this.experiencedInArray[index].selected = true;
        this.selectedExperiencedInArray.push(item.value)
      }
    });
  }

  public selectexperiencedData() {
    this.selectedExperiencedInArray = [];
    this.experiencedInArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedExperiencedInArray.push(item.value)
      }
    })
  }

  public selectequipment(travles) {
    this.equipmentOwnedArray.map((item, index) => {
      let id = item.value;
      if (typeof travles != 'undefined' && travles.indexOf(item.value) !== -1) {
        this.equipmentOwnedArray[index].selected = true;
        this.selectedEquipmentOwnedArray.push(item.value)
      }
    });
  }

  public selectequipmentData() {
    this.selectedEquipmentOwnedArray = [];
    this.equipmentOwnedArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedEquipmentOwnedArray.push(item.value)
      }
    })
  }

  public selectEquimentRendalData() {
    this.selectedequipmentRentalArray = [];
    this.equipmentRentalArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedequipmentRentalArray.push(item.value);
      }
    })
  }

  otpPhoneVerified() {
    this.otp = this.otpPhone;
    this.userService.otpPhoneVerified(this.otp, this.usersId)
      .subscribe(
        data => {
          this.otpPhoneVerifiedArr = data;
          this.isPhoneOtpVerified = this.otpPhoneVerifiedArr.data.isOtpVerified;
          if (this.isPhoneOtpVerified == 1) {
            this.phoneVerify = 'is-valid';
            setTimeout(() => {
              this.isPhoneVerify = false;
            }, 500)
          }
          else {
            this.phoneVerify = 'is-invalid';
          }
        },
        error => {
          this.phoneVerify = 'is-invalid';
        });
  }

  get f() { return this.editform.controls; }
  get t() { return this.talenteditform.controls; }
  get c() { return this.creweditform.controls; }
  get d() { return this.vendorEditform.controls; }

  get imdbForms() {
    return this.editform.get('imdbLink') as FormArray
  }

  addImdb() {
    const imdb = this.fb.group({
      link: [],
    })
    this.imdbForms.push(imdb);
  }

  deleteImdb(i) {
    this.imdbForms.removeAt(i)
  }

  addSelectedImdb(imDbArray) {
    imDbArray.forEach((item, index) => {
      const imdb = this.fb.group({
        link: [item.socialMediaLink],
      })
      this.imdbForms.push(imdb);
    })
  }

  verifyPhone() {
    this.userService.verifyPhone(this.phone, this.usersId).subscribe(data => {
      this.verifyPhoneArr = data;
      this.isVerifyPhone = this.verifyPhoneArr.data.isVerifyPhone;
      if (this.isVerifyPhone == 1) {
        this.isPhoneVerify = true;
        this.closePhoneLink = true;
      }
    })
  }

  toggleUser(event) {
    if (event.id == 5) {
      this.crewTab = true;
    }
    if (event.id == 3) {
      this.talentTab = true;
    }
    if (event.id == 6) {
      this.vendorTab = true;
    }
  }

  toggleDeSelectUser(event) {
    if (event.id == 5) {
      this.crewTab = false;
    }
    if (event.id == 3) {
      this.talentTab = false;
    }
    if (event.id == 6) {
      this.vendorTab = false;
    }
  }

  onSelectAll(event) {
    this.crewTab = true;
    this.talentTab = true;
    this.vendorTab = true;
  }

  onDeSelectAll(event) {
    this.crewTab = false;
    this.talentTab = false;
    this.vendorTab = false;
  }

  public getValues(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
      ans.push(i);
    }
    return ans;
  }

  uploadResume(resumeInput: any) {
    if (this.editform.controls.resume.value) {
      const file = resumeInput.files[0];
      const reader = new FileReader();
      this.uploadedFile = file.name;
      const one$ = new Observable(observer => {
        reader.onload = (ev) => {
          this.selectedFile = new ImageSnippet(reader.result, file);
          observer.next();
        }
        reader.readAsDataURL(file);
      });
      one$.subscribe({
        next: value => {
          this.userService.uploadResume(this.selectedFile.src, this.id)
            .subscribe(
              (res) => {
              });
        }
      });
    }
    else {
      return true;
    }
  }

  uploadFile(fileMeta, uploadUrl) {
    const options: FileUploadOptions = {
      fileKey: 'file',
      fileName: fileMeta.fileNameFromPath,
      headers: {
        'Content-Length': fileMeta.size,
        'Content-Type': fileMeta.type,
      },
      httpMethod: 'PUT',
      mimeType: fileMeta.type,
    };
    const fileTransfer: FileTransferObject = this.transfer.create();
    return fileTransfer.upload(fileMeta.path, uploadUrl, options);
  }

  processResumeFile(imageInput: any) {
    if (true) {
      const file: File = imageInput.files[0];
      const reader = new FileReader();
      const one$ = new Observable(observer => {
        reader.addEventListener('load', (event: any) => {
          this.selectedFile = new ImageSnippet(event.target.result, file);
          observer.next();
        });
        // reader.readAsDataURL(file);
      });
      one$.subscribe({
        next: value => {
          //  this.selectedFile = value;
          this.userService.uploadResume(this.selectedFile.src, this.id)
            .subscribe(
              (res) => {
                //this.usersDetails = currentUser;
                this.profileImage = res;
                this.profileImage = this.profileImage.data.image;
                //this.updateLocalStorage(this.profileImage);
              });
        }
      });
    }
    else {
      return true;
    }
  }

  onUpdate(): Observable<boolean> {
    return new Observable((observer) => {
      this.submitted = true;
      if (this.editform.invalid) {
        return
      }
      else {
        if (((!this.creweditform.invalid && this.crewTab) || (!this.talenteditform.invalid && this.talentTab) || (!this.vendorEditform.invalid && this.vendorTab)) || (this.talentTab == false && this.crewTab == false && this.vendorTab == false)) {
          if (this.editform.value.isPhonePublic == true) {
            this.editform.value.isPhonePublic = 1;
          } else {
            this.editform.value.isPhonePublic = 0;
          }

          if (this.editform.value.isAddressPublic == true) {
            this.editform.value.isAddressPublic = 1;
          } else {
            this.editform.value.isAddressPublic = 0;
          }

          if (this.editform.value.isEmailPublic == true) {
            this.editform.value.isEmailPublic = 1;
          } else {
            this.editform.value.isEmailPublic = 0;
          }

          this.editform.value.accountType = this.usersType;
          this.editform.value.fullAddress = this.fullAddress;
          this.editform.value.countryName = this.countryName;
          this.editform.value.stateName = this.stateName;
          this.editform.value.cityName = this.cityName;
          this.editform.value.latitude = this.latitude;
          this.editform.value.longitude = this.longitude;
          this.editform.value.street = this.street;
          this.editform.value.zip = this.zip;
          this.editform.value.locationName = this.locationName;
          this.editform.value.phone = this.editform.value.phone.replace(/\D/g, '');

          if (this.editform.value.imdbLink) {
            if (typeof (this.editform.value.imdbLink) == 'string') {
              this.editform.value.imdbLink = [this.editform.value.imdbLink];
            }
            else {
              this.editform.value.imdbLink = this.editform.value.imdbLink.map((item, index) => {
                return item.link;
              }).join(',');
            }
          }

          this.userService.updateUser(this.id, this.editform.value)
            .subscribe(
              data => {
                this.usersDetails = data;
                this.usersDetails = this.usersDetails.data.userDetails;
                if (this.usersDetails.data) {
                  this.storage.set('userData', this.usersDetails.data.userData);
                }
                localStorage.removeItem("currentUser");
                localStorage.setItem('currentUser', JSON.stringify(this.usersDetails));
                localStorage.removeItem("fullName");
                localStorage.setItem('fullName', this.usersDetails.fullName);
                localStorage.setItem('profileComplitted', 'true');
                this.profileImage = this.usersDetails.profileImage;
                this.fullBodyPic = this.usersDetails.fullBodyPic;
                if (this.usersDetails.usersImages.length > 0) {
                  this.usersImages = this.usersDetails.usersImages;
                }
                else {
                  this.usersImages[0] = 'https://yapbuzz.com/works/gmos/assets/images/avatar5.png';
                }
                if (this.usersDetails.usersAddress.length > 0) {
                  this.fullAddress = this.usersDetails.usersAddress[0].fullAddress;
                }
                if (this.usersDetails.isPhonePublic == 1) {
                  this.usersDetails.isPhonePublic = true;
                } else {
                  this.usersDetails.isPhonePublic = false;
                }
                if (this.usersDetails.isAddressPublic == 1) {
                  this.usersDetails.isAddressPublic = true;
                } else {
                  this.usersDetails.isAddressPublic = false;
                }
                if (this.usersDetails.fullBodyPic) {
                  this.fullBodyPic = this.usersDetails.fullBodyPic;
                }
                else {
                  this.fullBodyPic = 'https://yapbuzz.com/works/gmos/assets/images/avatar5.png';
                }

                if (this.usersDetails.isEmailPublic == 1) {
                  this.usersDetails.isEmailPublic = true;
                } else {
                  this.usersDetails.isEmailPublic = false;
                }
                this.usersType = this.usersDetails.usersType;
                this.usersTypeArr = this.usersDetails.usersTypeId;
                observer.next(true)
              },
              error => {
                this.utility.showToast('Something went wrong please try again.')
              });
        }
      }

    })

  }

  talentUpdate(): Observable<boolean> {
    return new Observable((observer) => {
      this.talentSubmitted = true;
      if (this.talenteditform.invalid) {
        return
      }
      else {
        this.talenteditform.value.willingToTravel = this.selectedWilingToTravelArray;
        this.talenteditform.value.union = this.selectedUnionArray;
        this.userService.updateTalent(this.id, this.talenteditform.value)
          .subscribe(
            data => {
              this.usersDetails = data;
              this.usersDetails = this.usersDetails.data.userDetails;
              if (this.usersDetails.tattoos == 1) {
                this.tattoosDescriptionChecked = true;
              }
              localStorage.removeItem("currentUser");
              localStorage.setItem('currentUser', JSON.stringify(this.usersDetails));
              observer.next(true)
            },
            error => {
              this.utility.showToast('Something went wrong please try again.')
              // this.istalentPosted = 2;
              // setTimeout(() => {
              //   this.istalentPosted = 0;
              // }, 3000)
            });
      }
    })
  }

  crewUpdate(): Observable<boolean> {
    return new Observable((observer) => {
      this.crewSubmitted = true;
      if (this.creweditform.invalid) {
        return
      }
      else {
        this.creweditform.value.experiencedIn = this.selectedExperiencedInArray;
        this.creweditform.value.jobInterestedIn = this.selectedJobInterestedInArray;
        this.userService.updateCrew(this.id, this.creweditform.value)
          .subscribe(
            data => {
              this.usersDetails = data;
              this.usersDetails = this.usersDetails.data.userDetails;
              if (this.usersDetails.equipmentOwned == 1) {
                this.equipmentOwnedDescriptionChecked = true;
              }
              localStorage.removeItem("currentUser");
              localStorage.setItem('currentUser', JSON.stringify(this.usersDetails));
              this.usersType = this.usersDetails.usersType;
              this.usersTypeArr = this.usersDetails.usersTypeId;
              observer.next(true)
            },
            error => {
              this.utility.showToast('Something went wrong please try again.')
              // this.istalentPosted = 2;
              // setTimeout(() => {
              //   this.istalentPosted = 0;
              // }, 3000)
            });
      }

    })
  }

  vendorUpdate(): Observable<boolean> {
    return new Observable((observer) => {
      this.vendorSubmitted = true;
      if (this.vendorEditform.invalid) {
        return;
      }

      this.vendorEditform.value.equipmentRental = this.selectedequipmentRentalArray;
      this.userService.updateVendor(this.id, this.vendorEditform.value)
        .subscribe(
          data => {
            this.usersDetails = data;
            this.usersDetails = this.usersDetails.data.userDetails;
            localStorage.removeItem("currentUser");
            localStorage.setItem('currentUser', JSON.stringify(this.usersDetails));
            this.usersType = this.usersDetails.usersType;
            this.usersTypeArr = this.usersDetails.usersTypeId;
            observer.next(true);
            // this.isvendorPosted = 1;
            // setTimeout(() => {
            //     this.isvendorPosted = 0;
            // }, 2000)
          },
          error => {
            // this.isvendorPosted = 2;
            // setTimeout(() => {
            //     this.isvendorPosted = 0;
            // }, 2000)
          });
    })
  }


  public handleAddressChange(address) {
    let addDetails = this.extract(address);
    this.fullAddress = addDetails.full_address;
    this.countryName = addDetails.detail.country.short_name;
    this.stateName = addDetails.detail.state;
    this.cityName = addDetails.detail.city;
    this.latitude = addDetails.latlng.lat;
    this.longitude = addDetails.latlng.lng;
    this.street = addDetails.detail.street;
    this.zip = addDetails.detail.zip;
    this.locationName = addDetails.detail.location;

    let temObject = {
      countryName: addDetails.detail.country.short_name,
      stateName: addDetails.detail.state,
      cityName: addDetails.detail.city,
      latitude: addDetails.latlng.lat,
      longitude: addDetails.latlng.lng,
      street: addDetails.detail.street,
      zip: addDetails.detail.zip,
      locationName: addDetails.detail.location,
    }
    this.usersAddressDetails = temObject;
  }

  public extract(receivedAddresses) {
    let address_components = receivedAddresses.address_components;
    let address = {
      full_address: receivedAddresses.formatted_address,
      latlng: {
        lat: receivedAddresses.geometry.location.lat(),
        lng: receivedAddresses.geometry.location.lng(),
      },
      detail: {
        location: '',
        street: '',
        city: '',
        state: '',
        department: '',
        country: {
          name: '',
          short_name: '',
        },
        zip: '',
      },
    };
    address_components.forEach((component) => {
      if (component.types.indexOf("street_number") > -1) {
        // set numero
        address.detail['location'] = component.long_name;
      }
      if (component.types.indexOf("route") > -1) {
        // set voie
        address.detail['street'] = component.long_name;
      }
      if (component.types.indexOf("locality") > -1) {
        // set ville
        address.detail['city'] = component.long_name;
      }
      if (component.types.indexOf("administrative_area_level_2") > -1) {
        // set departement
        address.detail['department'] = component.long_name;
      }
      if (component.types.indexOf("administrative_area_level_1") > -1) {
        // set region
        address.detail['state'] = component.long_name;
      }
      if (component.types.indexOf("country") > -1) {
        // set pays
        address.detail['country'] = {
          name: component.long_name,
          short_name: component.short_name,
        }
      }
      if (component.types.indexOf("postal_code") > -1) {
        // set code postal
        address.detail['zip'] = component.long_name;
      }
    });
    return address;
  }

  profileUpdate() {
    console.log('condition Matched!');
    console.log('crewTab',this.crewTab)
    console.log('talentTab',this.talentTab)
    console.log('vendorTab',this.vendorTab)
    let editSubmitArr = [];
    let editOptionArr = [];
    if (this.crewTab == false && this.talentTab == false && this.vendorTab == false) {
      const example = merge(
        this.onUpdate().pipe(mapTo('FIRST!')),
      );
      const subscribe = example.subscribe(val => {
        if (val == 'FIRST!') {
          this.userUpdateAll()
        }
      });
    }
    if (this.crewTab == false && this.talentTab == false && this.vendorTab == true) {
      const example = merge(
        this.onUpdate().pipe(mapTo('FIRST!')),
        this.vendorUpdate().pipe(mapTo('FOURTH!')),
      );
      const subscribe = example.subscribe(val => {
        editSubmitArr.push(val);
        if (editSubmitArr.length == editOptionArr.length) {
          this.userUpdateAll();
        }
      });
    }
    if (this.crewTab == false && this.talentTab == true  && this.vendorTab == false) {
      editOptionArr = ['FIRST!', 'THIRD!'];
      const example = merge(
        this.onUpdate().pipe(mapTo('FIRST!')),
        this.talentUpdate().pipe(mapTo('THIRD!')),
      );
      const subscribe = example.subscribe(val => {
        editSubmitArr.push(val);
        if (editSubmitArr.length == editOptionArr.length) {
          this.userUpdateAll();
        }
      });
    }
    if (this.crewTab == false && this.talentTab == true  && this.vendorTab == true) {
      editOptionArr = ['FIRST!', 'THIRD!'];
      const example = merge(
        this.onUpdate().pipe(mapTo('FIRST!')),
        this.talentUpdate().pipe(mapTo('THIRD!')),
        this.vendorUpdate().pipe(mapTo('FOURTH!')),
      );
      const subscribe = example.subscribe(val => {
        editSubmitArr.push(val);
        if (editSubmitArr.length == editOptionArr.length) {
          this.userUpdateAll();
        }
      });
    }
    if (this.crewTab == true  && this.talentTab == false && this.vendorTab == false) {
      const example = merge(
        this.onUpdate().pipe(mapTo('FIRST!')),
        this.crewUpdate().pipe(mapTo('SECOND!')),
      );
      const subscribe = example.subscribe(val => {
        editSubmitArr.push(val);
        if (editSubmitArr.length == editOptionArr.length) {
          this.userUpdateAll();
        }
      });
    }
    if (this.crewTab == true  && this.talentTab == false && this.vendorTab == true) {
      const example = merge(
        this.onUpdate().pipe(mapTo('FIRST!')),
        this.crewUpdate().pipe(mapTo('SECOND!')),
        this.vendorUpdate().pipe(mapTo('FOURTH!')),
      );
      const subscribe = example.subscribe(val => {
        editSubmitArr.push(val);
        if (editSubmitArr.length == editOptionArr.length) {
          this.userUpdateAll();
        }
      });
    }
    if (this.crewTab == true  && this.talentTab == true  && this.vendorTab == false) {
      editOptionArr = ['FIRST!', 'SECOND!', 'THIRD!'];
      const example = merge(
        this.onUpdate().pipe(mapTo('FIRST!')),
        this.crewUpdate().pipe(mapTo('SECOND!')),
        this.talentUpdate().pipe(mapTo('THIRD!'))
      );

      const subscribe = example.subscribe(val => {
        editSubmitArr.push(val);
        if (editSubmitArr.length == editOptionArr.length) {
          this.userUpdateAll();
        }
      });
    }
    if (this.crewTab == true  && this.talentTab == true  && this.vendorTab == true) {

      editOptionArr = ['FIRST!', 'SECOND!', 'THIRD!'];
      const example = merge(
        this.onUpdate().pipe(mapTo('FIRST!')),
        this.crewUpdate().pipe(mapTo('SECOND!')),
        this.talentUpdate().pipe(mapTo('THIRD!')),
        this.vendorUpdate().pipe(mapTo('FOURTH!'))
      );

      const subscribe = example.subscribe(val => {
        editSubmitArr.push(val);
        if (editSubmitArr.length == editOptionArr.length) {
          this.userUpdateAll();
        }
      });
    }
  }

  getEmailNotificationSettings() {
    this.userService.getUserEmailNotificationMap(this.usersId, this.usersDetails.usersTypeId)
      .subscribe(
        data => {
          this.emailNotifications = data;
          this.emailNotifications = this.emailNotifications.data.emailNotificationSettings;
        },
        error => {
        });
  }

  userUpdateAll() {
    this.utility.showToast('Your profile has been successfully updated.');
    // this.router.navigateByUrl('/gigs/Crew');
    // this.istalentPosted = 1;
    // window.scrollBy({
    //   top: 100,
    //   behavior: 'smooth'
    // });
    // setTimeout(() => {
    //   this.istalentPosted = 0;
    // }, 4000)
  }

  changeTab(item) {
    this.showTab = item
    if(item == 'profileTab'){
      //this.router.navigate['']
    }
  }

  verify() {
    this.showVerifiedPhone = true;
  }

  verifyEmail() {
    // this.isEmailVerify = true;
    // this.closeEmailLink = true;
    this.userService.verifyEmail(this.email, this.usersId).subscribe(data => {
      if (this.isVerifyEmail == 1) {
        this.isEmailVerify = true;
        this.closeEmailLink = true;
      }
    })
  }

  toggleEquipmentOwnedDescription(event) {
    this.equipmentOwnedDescriptionChecked = false;
    if (event.target.value == 1) {
      this.equipmentOwnedDescriptionChecked = true;
    }
  }

  toggletattoosDescription(event) {
    this.tattoosDescriptionChecked = false;
    if (event.target.value == 1) {
      this.tattoosDescriptionChecked = true;
    }
  }

  processFile(imageInput: any, type) {
    switch (type) {
      case 'profileImage':
        this.profileImage = imageInput;
        this.userService.uploadImage(this.imagedata, this.id)
          .subscribe(
            (res) => {
              //this.usersDetails = currentUser;
              let profileImage = res;
              this.profileImage = profileImage.data.image;
              //this.updateLocalStorage(this.profileImage);
            });
        break;
      case 'addtionalPhoto':
        this.usersImages = imageInput
        this.userService.uploadAdditionalImage(this.imagedata, this.id)
          .subscribe(
            (res) => {
              //this.usersDetails = currentUser;
              let profileImage = res;
              this.usersImages = profileImage.data.image;
              //this.updateLocalStorage(this.profileImage);
            });
        break;
      case 'fullBodyImage':
        this.fullBodyPic = imageInput;
        this.userService.uploadFullBodyImage(this.imagedata, this.id).subscribe(res => {
          let profileImage = res;
          this.fullBodyPic = profileImage.data.image;
        })
        break;
      case 'uploadResume':

        // this.userService.uploadResume(imageInput, this.id)
        //   .subscribe(
        //     (res) => {

        //     })
        break;
    }

  }

  takePicture(sourceType, type) {
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
      this.imagedata = base64Image;
      this.addtionalImagesArray.push(base64Image)
      this.processFile(this.imagedata, type)
    }, (err) => {
    });
  }

  async addAddiotionalImages(type) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Add photo',
      buttons: [{
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA, type)
        }
      }, {
        text: 'Gallery',
        icon: 'images',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, type)
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

  deleteAdditionalImages(imageId){
    this.userService.deleteAdditionalImage(imageId,this.usersId).subscribe(res=>{
     this.usersImages = res.data.allImages;

    })
  }

  switchClicked(event, notificationId, mapId) {
    let status = '0';
    if (event.srcElement.checked == true) {
      status = '1';
    }
    let relatedVal = 0;
    if (notificationId == '1' || notificationId == '2') {
      let emailNoti = this.emailNotifications.find((o) => { return o.emailNotificationId == notificationId });
      relatedVal = emailNoti.relatedVal;
    }
    
    this.userService.updateUserEmailNotifications(this.usersId, status, mapId, notificationId, relatedVal)
      .subscribe(
        data => {
          let notification = this.emailNotifications.find((o) => { return o.emailNotificationMapId == mapId });
          notification.status = status;
        },
        error => {
        });
  }

  deleteImage(){
    // console.log(this.imageId) ;
    // this.EditprofileService.deleteAdditionalImage(this.imageId, this.id)
    // .subscribe(
    //     (res) => {
    //         //console.log(res) ;
    //         this.usersImages = res;
    //         //this.usersImages = this.usersImages.data.image;
    //         this.additionalImages = this.usersImages.data.allImages;
    //         this.myModal.hide();
    //     });
  }
  getVideoDetails(e) {
    const file = e.target.files && e.target.files[0];
    if (file) {
      this.loadVideo = true
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
        this.myFiles.push({
          name : file.name ,
          type : file.type ,
          file : this.url
        })
        this.userService.uploadVideo(this.url, this.id)
        .subscribe(
            (res) => {
                //console.log(res) ;
                this.userVideos = res;
                this.loadVideo = false
                //this.usersImages = this.usersImages.data.image;
                this.userVideos = this.userVideos.data.allVideos;
                //console.log("===== User Video =======") ;
                localStorage.removeItem("profileVideo");
                localStorage.setItem('profileVideo', this.userVideos[0].video);
                //console.log(this.userVideos) ;
            },error=>{
                this.loadVideo = false

            });
      }
    }
  }

  getAllVideos(){
    this.userService.getAllVideos(this.usersId)
    .subscribe(
    data => {
        this.userVideos = data ;
        this.userVideos = this.userVideos.data.videos ;
        console.log(this.userVideos) ;
        localStorage.setItem('profileVideo', this.userVideos[0].video);
        console.log('=== Profile Video storeage ===') ;
        console.log(localStorage.getItem('profileVideo')) 

    },
    error => {
    });
}
}
