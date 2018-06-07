import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  errors: boolean = false;
  errorlist: string[];
  sending: boolean = false;
  imagename: string ;

  constructor(private es: EnquiryService) { }

  ngOnInit() {
  }

  sendEnquiry() {
    this.errors = false;
    this.imagename="../assets/Images/PleaseWait.gif";
    this.errorlist = [];
    let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if (this.name == undefined || this.name.length == 0) {
      this.errorlist.push("name must be filled");
    }
    if (this.email == undefined || this.email.length == 0) {
      this.errorlist.push("email must be filled");
    }
    else if(!regex.test(this.email))
    {
      this.errorlist.push("should be in format");
    }

    if (this.message == undefined || this.message.length == 0) {
      this.errorlist.push("message must be filled");
    }
   
    if (this.errorlist.length > 0) {
      this.errors = true;
    }
    else {
      this.sending = true;
      let obj = { name: this.email, email: this.email, message: this.message };

      this.es.sendEnquiry(obj).subscribe((

      ) => {
        this.imagename = "../assets/Images/Messagsent.gif";
        setTimeout(() => {
          this.sending = false;
          this.name = "";
          this.email = "";
          this.message = "";
        }, 2000);
      }, () => {
        alert("Enquiry not sent !!");
        this.sending = false;
        this.name = "";
        this.email = "";
        this.message = "";

      })
    }
  }
}

