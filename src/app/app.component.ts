import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'custumers', url: '/costumers', icon: 'heart' },
    { title: 'Actividades', url: '/actionic', icon: 'mail' },
    { title: 'Menú', url: '/menu', icon: 'restaurant' },
    { title: 'Pedidos', url: '/orders', icon: 'cart' },
    { title: 'Perfil', url: '/profile', icon: 'person' },
    { title: 'Contactanos', url: '/contact', icon: 'mail' } 
  ];
  
  constructor() {}
}
