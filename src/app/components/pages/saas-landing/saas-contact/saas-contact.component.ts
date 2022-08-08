import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-saas-contact',
    templateUrl: './saas-contact.component.html',
    styleUrls: ['./saas-contact.component.scss']
})
export class SaasContactComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'Contact',
            paragraphText: '문의 사항이 있으시다면 이쯕으로 연락해주세요'
        }
    ]
    contactImage: Image[] = [
        {
            img: 'assets/img/app-contact.png'
        }
    ]

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class Image {
    img : string;
}