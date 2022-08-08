import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-saas-features',
    templateUrl: './saas-features.component.html',
    styleUrls: ['./saas-features.component.scss']
})
export class SaasFeaturesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: "글로벌 스탁론만의 특징",
            paragraphText: '타 증권사에서는 만나보실 수 없는, 글로벌 스탁론만의 독보적인 장점을 누려보세요'
        }
    ]
    singleSaasFeatures: FeaturesContent[] = [
        {
            icon: 'las la-lightbulb',
            title: '국내 최대 한도 1.5배',
            paragraph: '증권사의 해외주식 담보대출은 최대70%를 넘지 않습니다. 하지만 글로벌 스탁론은 내 주식포함 250%까지 넉넉한 한도를 제공합니다!'
        },
        {
            icon: 'las la-bullhorn',
            title: '이자율 6.5%',
            paragraph: '증권사의 해외주식 담보대출 금리는 평균 7% 이상입니다. 하지만 글로벌 스탁론은  최저 4.8%의 낮은 금리를 제공합니다.'
        },
        {
            icon: 'las la-angle-double-down',
            title: '담보 유지 비율 140%',
            paragraph: '국내 증권사들은 해외주식이 리스크가 높다는 이유로 담보유지비율을 최저 150%에서 최대 170%까지 요구합니다. 담보유지비율이 높으면 주식 가격이 하락하면 추가로 담보금을 납부해야 합니다.'
        },
        {
            icon: 'las la-laptop-code',
            title: '온라인 (무방문, 무서류)',
            paragraph: '모든 과정은 온라인으로 이루어지며 신분증,공동인증서,본인명의 휴대전화만 있으면 5분내 증권계좌에 입금됩니다.'
        },
    ]

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class FeaturesContent {
    icon : string;
    title : string;
    paragraph : string;
}