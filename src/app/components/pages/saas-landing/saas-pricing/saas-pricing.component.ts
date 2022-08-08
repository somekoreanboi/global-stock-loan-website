import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-saas-pricing',
    templateUrl: './saas-pricing.component.html',
    styleUrls: ['./saas-pricing.component.scss']
})
export class SaasPricingComponent implements OnInit {

    singlePricingBox = [
        {
            title: '타 증권사',
            featuresList: [
                {
                    itemIcon: "las la-times",
                    item: "한도 130~170%"
                },
                {
                    itemIcon: "las la-times",
                    item: "금리 6.3~10%"
                },
                {
                    itemIcon: "las la-times",
                    item: "담보 유지 비율 150~1705%"
                },
                {
                    itemIcon: "las la-times",
                    item: "대출 가능 종목수 상이"
                }
            ],
            buttonText: 'Purchase',
            buttonLink: '#'
        },
        {
            title: '글로벌 스탁론',
            price: '',
            featuresList: [
                {
                    itemIcon: "las la-check",
                    item: "한도 250%"
                },
                {
                    itemIcon: "las la-check",
                    item: "금리 4.8%~7.5%"
                },
                {
                    itemIcon: "las la-check",
                    item: "담보 유지 비율 140%"
                },
                {
                    itemIcon: "las la-check",
                    item: "대출 가능 종목수 1600개"
                },
            ],
            buttonText: 'Purchase',
            buttonLink: '#'
        },
    ];

    constructor() {}

    ngOnInit() {}

    sectionTitle: sectionTitleContent[] = [
        {
            title: '해외 주식 담보 대출 비교 보고서',
            paragraphText: '타 증권사와 글로벌 스탁론을 비교해보세요'
        }
    ]

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}