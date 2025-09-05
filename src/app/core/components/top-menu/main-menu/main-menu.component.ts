import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule, MenubarModule, ToastModule, RouterModule],
  templateUrl: './main-menu.component.html',
  providers: [MessageService]
})
export class MainMenuComponent implements OnInit { 
  items: MenuItem[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
      //! MANS 
      {
        label: 'Mens',
        icon: 'pi pi-file',
        items: [
          {
            label: 'Clothes',
            icon: 'pi pi-plus',
            routerLink: '/mens',
            command: () => {
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
            }
          },
          {
            label: 'Boots',
            icon: 'pi pi-print',
            routerLink: '/mens',
            command: () => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
            }
          }
        ]
      },
      //! WOMANS
      {
        label: 'Womans',
        icon: 'pi pi-cloud',
        items: [
          {
            label: 'Clothes',
            icon: 'pi pi-cloud-download',
            routerLink: '/womans',
            command: () => {
              this.messageService.add({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
            }
          },
          {
            label: 'Boots',
            icon: 'pi pi-cloud-upload',
            routerLink: '/womans',
            command: () => {
              this.messageService.add({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
            }
          }
        ]
      },
      //! ACCESORIES
      {
        label: 'Accesories',
        icon: 'pi pi-file',
        items: [
          {
            label: 'Mans',
            icon: 'pi pi-plus',
            routerLink: '/accessories',
            command: () => {
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
            }
          },
          {
            label: 'Womans',
            icon: 'pi pi-print',
            routerLink: '/accessories',
            command: () => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
            }
          }
        ]
      },
      //! CONTACT 
      {
        label: 'Contact',
        icon: '',
        comand: () => {
          this.messageService.add({ severity: 'info', summary: 'Shared Results', detail: 'Exported to cloud', life: 3000 });
        }
      },
      //* ORDER 
      {
        label: 'Order',
        icon: 'pi pi-search',
        command: () => {
          this.messageService.add({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
        }
      },
    ];
  }
}
