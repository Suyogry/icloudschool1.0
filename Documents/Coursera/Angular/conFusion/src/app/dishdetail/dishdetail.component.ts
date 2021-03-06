import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location} from '@angular/common'; 
import {DishService} from '../services/dish.service';

import {Dish} from '../shared/dish';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  @Input()
  dish: Dish;
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }
  goBack():void{
    this.location.back();
  }

  //dish = ;
  //allComments= DISH.comments;
}
