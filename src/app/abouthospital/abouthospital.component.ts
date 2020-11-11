import { Component, OnInit } from '@angular/core';
// import { Script } from 'vm';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-abouthospital',
  templateUrl: './abouthospital.component.html',
  styleUrls: ['./abouthospital.component.css']
})
export class AbouthospitalComponent implements OnInit {
  doctorsList;
  doctors = [];
  btnStatus: boolean = true;
  Remaining: number;
  s;
  constructor(private gs: GlobalService) { }

  ngOnInit() {
   //calling Api
    this.gs.doctorslist().subscribe((data) => {
      console.log("1", data)
      this.doctorsList = data.data
      console.log("data", this.doctorsList)
      //method call to Show doctor's list
      this.loadmore()
    })
  }


  
//Load more Doctors list
  currentindex = 0;
  showlist = 3
  loadmore() {
    this.Remaining = this.doctorsList.length - this.currentindex + 1
    for (let i = 0; i < this.showlist; i++) {
      if (this.currentindex < this.doctorsList.length) {
        this.doctors.push(this.doctorsList[this.currentindex])

        this.currentindex++
      }
      else {
        this.btnStatus = false
      }
    }

  }
}
