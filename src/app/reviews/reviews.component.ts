import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../gem-model';
import { ReviewModel } from '../review-model';

import { AvatarService } from '../avatar.service'

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input()
  gem: GemModel;

  newReview: ReviewModel;
        
constructor(private avatarService: AvatarService, private http: HttpClient) { }

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
      this.http.post('http://localhost:62294/gem/addreview', { body: this.newReview.body, author: this.newReview.author, rating: this.newReview.rating}, httpOptions).subscribe((x) => { console.log(x)});

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
