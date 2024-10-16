import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';



@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule,NzButtonModule,NzFlexModule,NzIconModule,NzCardModule,NzAvatarModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  title:string =""
  message:string =""

  actions = ["actionLogin", "actionLogout"]
  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document){

    this.auth.idTokenClaims$.subscribe(data => { 
      if( data ){
        this.title = "Usuario autenticado: "+data?.name
        this.message = "Bienvenido a la aplicación de PIII"
        this.actions = [ "actionLogout"]
      }else{
        this.title = "Usuario no autenticado"
        this.message = "Por favor inicia sesión para acceder a la aplicación"
        this.actions = ["actionLogin"]
      }
    })
      

  }

  login() {
    this.auth.loginWithRedirect();
  }
  
  logout() {
    this.auth.logout({ 
      logoutParams: {
        returnTo: this.document.location.origin 
      }
    });
  }
}
