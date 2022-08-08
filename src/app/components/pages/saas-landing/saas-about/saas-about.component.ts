import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-saas-about',
    templateUrl: './saas-about.component.html',
    styleUrls: ['./saas-about.component.scss']
})
export class SaasAboutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    aboutImage = [
        {
            img: 'assets/img/stock.jpg'
        }
    ]
    aboutContent = [
        {
            title: '상품 소개',
            textList: [
                {
                    title: "해외주식 증권계좌의 예수금 + 주식잔고 대비 최대 150% 까지 대출",
                    paragraph: "(계좌당 최대 3억원)"
                },
                {
                    title: "대상 고객",
                    paragraph: "해외주식증권계좌 평가금액이 100만원 이상인 계좌를 보유한 만 20세이상 (미성년자 대출불가) 미래에셋증권, 하나증권, 대신증권 중 1개사 이상 계좌보유고객 (단, 신용상태 등에 따라 대출이 불가 할 수 있습니다.)"
                },
                {
                    title: "대출 가능 종목",
                    paragraph: "미국(NYSE Nasdaq Amex)홍콩,상해,심천 거래소 상장 ETF,주식 중 약 1,500개"
                },
                {
                    title: "대출 이자율",
                    paragraph: "연 6.5% ~ 7.5% (조달금리 + 가산금리, 시장금리 및 프로모션 여부에 따라 변동 가능)"
                },
                {
                    title: "연체 이자율",
                    paragraph: "약정이자율 +3% (법정 최고 금리 연20% 이내)"
                },
                {
                    title: "상환 방식",
                    paragraph: "만기일시상환(중도상환 가능) \n ＊이자는 매 월 지정일에 납입하여야 합니다"
                },
                {
                    title: "중도상환수수료",
                    paragraph: "없음"
                },
                {
                    title: "대출방법",
                    paragraph: "미래에셋캐피탈 홈페이지에서 신청(https://capital.miraeasset.com) \n ※ 대출관련 문의: 미래에셋캐피탈 1811-6800 / 코라이즈테크놀로지 [RMS사] 1661-9917"
                },
            ]
        }
    ];

}