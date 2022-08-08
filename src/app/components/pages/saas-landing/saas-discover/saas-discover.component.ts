import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-saas-discover',
    templateUrl: './saas-discover.component.html',
    styleUrls: ['./saas-discover.component.scss']
})
export class SaasDiscoverComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: '신청 방법',
            paragraphText: '대출 신청, 어떻게 하면 될까요?'
        }
    ]
    overviewContent = [
        {
            number: '01',
            title: '해외 주식 증권 계좌 보유',
            paragraph: '미래에셋, 대신증권, 하나투자가 지원되며, 타 증권사 계좌의 경우에는 타사 대체 출고를 받으셔야합니다.',
            // featuresList: [
            //     {
            //         itemIcon: "las la-check",
            //         item: "Unique Design"
            //     },
            //     {
            //         itemIcon: "las la-check",
            //         item: "Unimited Video Call"
            //     },
            //     {
            //         itemIcon: "las la-check",
            //         item: "Add Favourite contact"
            //     },
            //     {
            //         itemIcon: "las la-check",
            //         item: "Camera Filter"
            //     },
            //     {
            //         itemIcon: "las la-check",
            //         item: "Many Features"
            //     },
            //     {
            //         itemIcon: "las la-check",
            //         item: "Bold Price"
            //     },
            //     {
            //         itemIcon: "las la-check",
            //         item: "Full Responsive"
            //     }
            // ],
            img: 'assets/img/overview/overview11.jpg'
        },
        {
            number: '02',
            title: '대출 신청',
            paragraph: '캐피탈 홈페이지 접속 [공동 인증서, 신분증, 본인 명의 휴대전화]',
            // featuresList: [
            //     {
            //         itemIcon: "las la-check",
            //         item: "Unique Design"
            //     },
            //     {
            //         itemIcon: "las la-check",
            //         item: "Unimited Video Call"
            //     },
            //     {
            //         itemIcon: "las la-check",
            //         item: "Add Favourite contact"
            //     },
            //     {
            //         itemIcon: "las la-check",
            //         item: "Camera Filter"
            //     },
            //     {
            //         itemIcon: "las la-check",
            //         item: "Many Features"
            //     },
            //     {
            //         itemIcon: "las la-check",
            //         item: "Bold Price"
            //     },
            //     {
            //         itemIcon: "las la-check",
            //         item: "Full Responsive"
            //     }
            // ],
            img: 'assets/img/overview/overview12.png'
        },
        {
            number: '03',
            title: '입금/매매',
            paragraph: '증권계좌 입금, 온라인 질권(자동) 설정 / 계좌 운용 규칙에 따른 매수 가능 종목 매매',
            featuresList: [
                {
                    itemIcon: "las la-check",
                    item: "모든 과정은 온라인으로 이루어집니다."
                },
                {
                    itemIcon: "las la-check",
                    item: "대출 가능 종목 이외 보유 종목은 담보평가금에서 제외됩니다."
                },
                {
                    itemIcon: "las la-check",
                    item: "대출/매수 가능 종목은 매일 변경되며, 대출 실행 전 확인 후 진행해주시기 바랍니다."
                },
                {
                    itemIcon: "las la-check",
                    item: "대출 실행 가능 시간은 영업일 08:00 ~ 17:40입니다."
                },
                {
                    itemIcon: "las la-check",
                    item: "대출 기간중 보유 종목이 매수불가 신규 편입 되었을 때는 해당 주식에 대한 추가 매수는 불가능하지만 매도든 언제든 가능합니다."
                },
            ],
            img: 'assets/img/overview/overview13.webp'
        }
    ];

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}