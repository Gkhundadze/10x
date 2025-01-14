import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'timeline-angular';
  timelineItems:any[] = [
    {
        "title": "პაპილომა",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sunt!",
        "date": "0.5",
        "type": "vaccine",
        "selectionImage": "card-images/vaccine.svg",
        "virusImage": "card-images/virus-image.png"
    },
    {
        "title": "პაპილომა",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sunt!",
        "date": "0.5",
        "type": "vaccine",
        "selectionImage": "card-images/vaccine.svg",
        "virusImage": "card-images/virus-image.png"
    },
    {
        "title": "პაპილომა",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sunt!",
        "date": "0.5",
        "type": "vaccine",
        "selectionImage": "card-images/vaccine.svg",
        "virusImage": "card-images/virus-image.png"
    },
    {
        "title": "title 4",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sunt!",
        "date": "0.5",
        "type": "vaccine",
        "selectionImage": "card-images/vaccine.svg",
        "virusImage": "card-images/virus-image.png"
    },
    {
        "title": "title 5",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sunt!",
        "date": "0.5",
        "type": "vaccine",
        "selectionImage": "card-images/vaccine.svg",
        "virusImage": "card-images/virus-image.png"
    },
    {
        "title": "title 6",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sunt!",
        "date": "0.5",
        "type": "vaccine",
        "selectionImage": "card-images/vaccine.svg",
        "virusImage": "card-images/virus-image.png"
    }
]
 


// @HostListener('wheel', ['$event'])
// onWheel(event: WheelEvent): void {
//   const timelineWrapper = document.querySelector('.timeline-wrapper') as HTMLElement;

//   if (timelineWrapper) {
//     // Scroll by delta of the wheel scroll event
//     timelineWrapper.scrollLeft += (event.deltaY * 2); // Scroll horizontally
//   }
// }
ngOnInit() {
  // Any initialization code if needed
}
}
