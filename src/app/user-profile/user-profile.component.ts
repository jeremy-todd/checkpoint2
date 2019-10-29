import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from '../interfaces/iuser';
import { UserProfileService } from '../services/user-profile.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  user: IUser;
  constructor(
    private formBuilder: FormBuilder,
    private UserProfileService: UserProfileService,
    private UserService: UserService
  ) { }

  ngOnInit() {
    
    this.userProfileForm = this.formBuilder.group({
      firstName: "Jeremy",
      lastName: "Todd",
      dob: "2019-05-11",
      address: "7501 84th Street",
      city: "Lubbock",
      state: "TX",
      zip: 79424,
      favFood: "Mexican",
      favMovie: "The Sandlot",
      favArtist: "John Williams",
      hobbies: "Golf"
    });
  }

  onSubmit(){
    //UserProfileService.post(this.form).subscribe(data => (this.form = data));
    this.UserProfileService.post(this.userProfileForm.value).subscribe(console.log);
  }

  deleteMe() {
    //this.UserService.deleteUser();
    console.log("Delete has been clicked.");
  }
}
