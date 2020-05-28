import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss']
})
export class RegisterPage implements OnInit {

  email: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(public afAuth: AngularFireAuth, public router: Router) {}

  ngOnInit() {

  }

  register() {
    const { email, password, cpassword } = this
    if(password !== cpassword){
      return console.error("Passwords don't match")
    }
    try {
      const res = this.afAuth.createUserWithEmailAndPassword(email, password)
      this.router.navigateByUrl('login')
      console.log(res)
    } catch(error) {
      console.dir(error)
    }   

    
  }

}
