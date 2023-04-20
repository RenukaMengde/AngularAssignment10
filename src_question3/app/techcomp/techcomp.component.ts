import { Component } from '@angular/core';

@Component({
  selector: 'app-techcomp',
  templateUrl: './techcomp.component.html',
  styleUrls: ['./techcomp.component.css']
})
export class TechcompComponent {
  public techList : string[] = ["Angular", "Node Js", "Android", "Big Data" ];

  public GetTech()
  {
    return this.techList;
  }
}
