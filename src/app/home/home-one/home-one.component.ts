import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FirstTimeService } from '../first-time.service';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.css']
})
export class HomeOneComponent implements OnInit {
  userForm: FormGroup;
  endPointUrl: string;
  sum: Object[] = [];
  isUpdate: boolean;
  constructor(private _bulider: FormBuilder, private _service: FirstTimeService) { }

  ngOnInit() {
    this.isUpdate = false;
    this.userForm = this._bulider.group({
      firstName: [''],
      lastName: [''],
      age: [''],
      phoneNumber: [''],
      id: [null],
    });
    this.endPointUrl = 'http://localhost:3000/Home';
    this.getUsers()
  }
  private getUsers() {
    this._service.getData(this.endPointUrl).subscribe((item) => {
      this.sum = item;
    })
  }
  save(modal) {
    if (modal.id) {
      this._service.updateData(this.endPointUrl + '/' + modal.id, modal).subscribe((item) => {
        console.log(item);
        this.reset();
        this.getUsers()
      }, (er) => {
        console.log(er);
      })
    } else {
      this._service.postData(this.endPointUrl, modal).subscribe((item) => {
        console.log(item);
        this.reset();
        this.getUsers()
      }, (er) => {
        console.log(er);
      })
    }

  }
  editUser(modal) {
    this.isUpdate = true;
    this.userForm.patchValue(modal)
  }
  reset() {
    this.userForm.reset();
    this.isUpdate = false;
  }
  deleteUser(modal) {
    this._service.deleteData(this.endPointUrl + '/' + modal.id).subscribe((item) => {
      console.log(item);
      this.getUsers();
    })
  }
}
