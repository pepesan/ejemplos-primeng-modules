import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  items: MenuItem[] | undefined;

  constructor(private messageService: MessageService) {
    this.items = [
      {
        label: 'Nav',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-external-link',
            routerLink: '/'
          },
          {
            label: 'About',
            icon: 'pi pi-external-link',
            routerLink: '/about'
          }
        ]
      },
      {
        label: 'Botones',
        items: [
          {
            label: 'Ejemplo',
            icon: 'pi pi-external-link',
            routerLink: '/botones'
          }
        ]
      },
      {
        label: 'Navbar',
        items: [
          {
            label: 'Ejemplo Completo',
            icon: 'pi pi-external-link',
            routerLink: '/navbar'
          }
        ]
      },
      {
        label: 'Data',
        items: [
          {
            label: 'Table',
            icon: 'pi pi-external-link',
            routerLink: '/table'
          },
          {
            label: 'Paginator',
            icon: 'pi pi-external-link',
            routerLink: '/paginator'
          },
          {
            label: 'DataView',
            icon: 'pi pi-external-link',
            routerLink: '/dataview'
          }
        ]
      },
      {
        label: 'Formularios',
        items: [
          {
            label: 'Ejemplo Completo',
            icon: 'pi pi-external-link',
            routerLink: '/form'
          }
        ]
      }
    ];
  }

}
