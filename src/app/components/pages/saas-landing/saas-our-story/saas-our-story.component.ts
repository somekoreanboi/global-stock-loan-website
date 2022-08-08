import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-saas-our-story',
    templateUrl: './saas-our-story.component.html',
    styleUrls: ['./saas-our-story.component.scss']
})
export class SaasOurStoryComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    videoContent: Content[] = [
        {
            title: '안내 영상',
            videoLink: 'https://video.wixstatic.com/video/86f2cb_32096200751647078343bf1f33e023fe/720p/mp4/file.mp4'
        }
    ]

}
class Content {
    title : string;
    videoLink : string;
}