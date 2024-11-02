import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';

@Component({
  selector: 'app-cla',
  templateUrl: './cla.component.html',
  styleUrls: ['./cla.component.css']
})
export class ClaComponent {
  viewDate: Date =new Date();
  view: CalendarView=CalendarView.Week;
  CalendarView =CalendarView;
  events: any[] = []; 
  activeDayIsOpen =false;
  
  
  constructor()
  {
    const event1={
      title: "mobilité:stage pfe cloud paris ",
      start: new Date("2024-04-18T10:30"),
      end:new Date("2024-04-18T11:30"),
  
    }
    this.events.push(event1);
  }
  
  
  setView (view:CalendarView){
    this.view=view;
  }
  
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (
      (isSameMonth(date, this.viewDate) &&
        ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0))
    ) {
      this.activeDayIsOpen = false;
    } else {
      this.activeDayIsOpen = true;
    }
    this.viewDate = date;
  }
  
  
}
