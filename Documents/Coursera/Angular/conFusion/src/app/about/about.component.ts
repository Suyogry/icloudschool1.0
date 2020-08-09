import { Component, OnInit, Input } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  

  @Input()
  leaders: Leader[];
  constructor(private leaderservice: LeaderService) { }

  ngOnInit(): void {
    this.leaders = this.leaderservice.getLeaders();
    console.log(this.leaders);
  }

}
