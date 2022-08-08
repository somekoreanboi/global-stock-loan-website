import { Component, OnInit } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class NavbarComponent implements OnInit {

    location: any;
    routerSubscription: any;

    constructor(private router: Router) {
    }

    ngOnInit(){
        this.recallJsFuntions();
    }

    recallJsFuntions() {
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            this.location = this.router.url;
        });
    }
    
    saasLandingNavItem = [
        {
            id: 'home',
            title: 'Home',
        },
        {
            id: 'about',
            title: '상품 소개',
        },
        {
            id: 'features',
            title: '신청 방법',
        },
        {
            id: 'pricing',
            title: '타 증권사 비교표',
        },
        {
            id: 'faq',
            title: 'FAQ',
        },
        {
            id: 'feedback',
            title: '이용자 후기',
        },
        {
            id: 'contact',
            title: 'Contact',
        }
    ];

}