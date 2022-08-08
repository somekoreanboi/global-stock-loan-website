import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-saas-feedback',
    templateUrl: './saas-feedback.component.html',
    styleUrls: ['./saas-feedback.component.scss']
})
export class SaasFeedbackComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: '이용자 후기',
            paragraphText: '글로벌 스탁론을 이용하고 계신 고객님의 이야기를 들어보세요.'
        }
    ]
    singleFeedbackItem: Content[] = [
        {
            feedbackText: '테슬라를 추가로 매수하고 싶었는데 여유자금이 없어 아쉬웠는데, 글로벌 스탁론으로 지난번 하락 때 추가 매수가 가능했어요!',
            userImg: 'assets/img/team/team1.jpg',
            userName: '김XX',
            userDesignation: 'Founder & CEO'
        },
        {
            feedbackText: '증권사에서 해외주식 담보대출을 쓰고 있었는데, 글로벌 스탁론으로 더 낮은 금리에 더 많은 금액으로 갈아탔어요. 당연한 선택이죠!',
            userImg: 'assets/img/team/team3.jpg',
            userName: '홍XX',
            userDesignation: 'Developer'
        },
        {
            feedbackText: '장기로 보유 예정인 주식(엔비디아 5천만원)으로 매도 없이 대출 받아 3천만원 출금했습니다. 중도 상환 수수료도 없으니 언제든 갚을 수 있어 편리해요~',
            userImg: 'assets/img/team/team2.jpg',
            userName: '박XX',
            userDesignation: 'Designer'
        },
        {
            feedbackText: '주변 사람들한테도 홍보하고 있어요. 이정도 금리에 이정도 서비스는 진짜 독보적인거 같아요!',
            userImg: 'assets/img/team/team2.jpg',
            userName: '최XX',
            userDesignation: 'Designer'
        },
    ]

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class Content {
    feedbackText : string;
    userImg : string;
    userName : string;
    userDesignation : string;
}