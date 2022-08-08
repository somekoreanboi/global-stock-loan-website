import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sass-faq',
  templateUrl: './sass-faq.component.html',
  styleUrls: ['./sass-faq.component.scss']
})
export class SassFaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sectionTitle: sectionTitleContent[] = [
    {
        title: '자주 묻는 질문',
        paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]
accordionItem: Content[] = [
    {
        title: '가능한 증권사는 어디인가요?',
        paragraph: "미래에셋증권, 하나증권, 대신증권입니다."
    },
    {
        title: '타 증권사에 주식을 보유하고 있을때는 어떻게 신청하나요?',
        paragraph: `타 증권사에 있는 미국주식을 '타사대체출고' 하여 미래에셋증권 또는 대신증권 계좌로 입고시키신 후 신청 가능합니다. (증권사마다 차이는 있으나 소요 시일은 1일 ~ 2일 정도이며 지점 방문 또는 온라인으로 신청이 가능합니다.) 타사대체출고 수수료는 종목당 2천원 ~ 5천원 입니다.`
      },
    {
        title: '미래에셋/ 대신증권 계좌면 다 가능한가요?',
        paragraph: `A. 미래에셋증권 해외주식 계좌라고 해서 무조건 가능한 것은 아닙니다.

        *계좌 신규발급시 반드시 주식(국내/해외)계좌로 발급하셔야 하며 CMA 계좌선택시 대출 불가합니다.
       
       ​
       
       해외주식담보대출 신청이 불가한 계좌는 다음과 같습니다.
       
          - 증권사 신용/대출 약정계좌
          - 국내주식, 미국 ETN 주식 보유계좌
          - CMS 자동이체 약정계좌`
      },
    {
        title: '대출 한도는 얼마까지 가능한가요?',
        paragraph: '대출 한도는 계좌당 최대 3억이며 보유자산의 1.5배 이내입니다.단, 실제 한도 부여는 고객님의 DSR(총부채원리금상환비율)에 따라 달라질 수 있습니다.',
      },
    {
        title: '신청가능 시간이 궁금합니다.',
        paragraph: "평일(업무일) 오전 08시 부터 17시 40분까지 신청하실 수 있습니다."
    },
    {
        title: '대출신청시 필요한 준비물은 무엇이 있나요?',
        paragraph: "공동인증서, 신분증, 본인명의 휴대폰 3가지만 있으면 신청가능합니다"
    },
    {
      title: '대출 이용중인 계좌에서 주식 입고나 출고가 가능한가요?',
      paragraph: "주식출고는 불가 하며 주식 입고는 대출가능종목에 한해 자사 계좌로부터의(미래에셋증권)입고만 가능합니다."
  },
  {
    title: ' 계좌에 대출/매수가능종목과 대출/매수불가종목이 함께 있는 경우 어떻게 되나요?',
    paragraph: "대출가능종목만 보유자산으로 인정되어 해당 자산의 1.5배 대출금액이 계산됩니다."
},
{
  title: '어떠한 경우에 반대매매가 발생하나요?',
  paragraph: `계좌 평가금액이 대출금액의 140% 이하일때 반대매매가 발생합니다. 예) 1천만원 대출 -> 1천 4백만원(140%) 이하일때 반대매매 실행

  반대매매는 익일 정규시장 개시 30분전 까지 담보비율이 140%미만인 경우 실행됩니다.
 따라서, 다음날 정규시장 개시 30분전까지 담보비율 부족금액 만큼 현금 및 주식을 계좌에 입금시키는 경우 반대매매가 실행되지 않습니다. `
},
{
  title: '현금인출 담보비율이 무슨 의미인가요?',
  paragraph: "대출 이용중인 계좌에서 현금을 인출하시려고 경우 대출금액의 160% 이상인 금액부터 출금이 가능합니다.예) 1천만원 대출 -> 1천 6백만원(160%) 이상인 금액만 인출가능"
},
{
  title: '보유중인 대출/매수가능종목이 대출/매수불가종목으로 변동되는 경우 어떻게 되나요?',
  paragraph: "담보금액으로 인정되지만 현금인출가능 담보비율에서는 제외되므로 현금인출 금액이 작아질 수 있습니다.또한 해당 종목은 추가 매수 할 수 없으며 매도만 가능합니다."
},
]

}
class sectionTitleContent {
title : string;
paragraphText : string;
}
class Content {
title : string;
paragraph : string;
}

