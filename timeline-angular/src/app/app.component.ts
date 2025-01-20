import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from '../data/content.json'
@Component({
    selector: 'app-root',
    imports: [CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'timeline-angular';
    activeTab: string = 'child'
    timelineItems: any[] = []
    onTabClick(tab: string, event: any) {
        this.timelineItems = data.filter((item:any) => item.for === event.target.id)
        this.activeTab = tab
    }
    ngOnInit() {
        this.timelineItems = data.filter((item:any) => item.for === 'child')
    }
}
