import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-skeleton',
  templateUrl: './card-skeleton.component.html',
  styleUrls: ['./card-skeleton.component.scss']
})
export class CardSkeletonComponent implements OnInit{

  loaded = false;

  ngOnInit(): void {
    setInterval(() => {
      this.loaded = true;
    }, 3000);
  }


}
