import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    copyrightText: Text[] = [
        {
            text: 'Global Stock Loan is Owned by Corise Technology'
        }
    ]

}
class Text {
    text : string;
}