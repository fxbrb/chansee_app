import { Component} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage {

  constructor(
    public afAuth: AngularFireAuth, 
    public router: Router,
  ) {}

  logout(){
    this.afAuth.signOut();
    this.router.navigateByUrl('login')
  }

}
