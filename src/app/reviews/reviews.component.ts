import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../gem-model';
import { ReviewModel } from '../review-model';

import { AvatarService } from '../avatar.service'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input()
  gem: GemModel;

  newReview: ReviewModel;
        
constructor(private avatarService: AvatarService) { }

  ngOnInit() {
      this.newReview = {
          id: -1,
          createddate: "",
          body: "",
          rating: 5,
          author: ""
          
      }
  }
    
  submitClicked(){
      if(!this.gem.reviews){
          this.gem.reviews = [];
      }
      
      this.gem.reviews.push(this.newReview);
       this.newReview = {
          id: -1,
          createddate: "",
          body: "",
          rating: 5,
          author: ""
          
      }     
}
}
