import { Component, numberAttribute } from '@angular/core';
import { NewPostFormComponent } from '../new-post-form/new-post-form.component';
import { Post } from '../../models/post';
import { PostItemComponent } from '../post-item/post-item.component';

@Component({
  selector: 'app-post-feed',
  standalone: true,
  imports: [NewPostFormComponent, PostItemComponent],
  templateUrl: './post-feed.component.html',
  styleUrl: './post-feed.component.css'
})
export class PostFeedComponent {

  feedList : Post[] = [{name:'Yolo', message:'Sup?!', votes: 0}];

  creatorMode : boolean = false;

  minVotes: number = -5;

  createPost(){
    this.creatorMode = true;
    console.log('creator MODE OK');
  }

  debugging = 1;

  savePost(p: Post):void{

    if (this.debugging == 1){
        this.feedList.push({name:"Bimb", message: "foodies", votes: 0});
      
    }
    else
    {
      if (p.message != undefined){
        p.votes = 0; //zero so it displays properly to the users
        this.feedList.push(p);
      }
    }
    this.creatorMode = false;
  }

  downVote(p: Post): void{
    let index: number = this.feedList.findIndex(post => post === p);
    let voteCount = this.feedList[index].votes - 1; // for immediate results
    this.feedList[index].votes = voteCount;

    this.sortList();
    
    // delete post if it is frequently downvoted
    if (voteCount < this.minVotes) { this.feedList = this.feedList.filter(post => post != p); }

  }

  upVote(p: Post): void {
    let index: number = this.feedList.findIndex(post => post === p);
    this.feedList[index].votes = this.feedList[index].votes + 1; // for immediate results

    this.sortList();
  }

  sortList():void{
    this.feedList = this.feedList.sort((a, b) => a.votes + b.votes);
  }
}
