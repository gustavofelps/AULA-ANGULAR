import { Component } from '@angular/core';
@Component({
selector: 'app-menu',
standalone: true,
imports: [],
templateUrl: './menu.component.html',
styleUrl: './menu.component.css'
})
export class MenuComponent { 
    itensMenu = [
        {label: 'inicio', link:''},
        {label: 'Clientes', link:'clientes'},
        {label: 'contas', link:'contas'},
        {label: 'Sobre', link:'sobre'}
    ];
}