import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';
import { PostFeedComponent } from '../post-feed/post-feed.component';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [PostFeedComponent],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})
export class PostItemComponent {
  @Input() displayPost = {} as Post;
  @Input() minimumVotes = {} as number;
  
  @Output() upEvent = new EventEmitter<Post>;
  @Output() downEvent = new EventEmitter<Post>;

  emitUpVote():void{
    this.upEvent.emit(this.displayPost);
  }
  emitDownVote():void{
    this.downEvent.emit(this.displayPost);
  }

}
