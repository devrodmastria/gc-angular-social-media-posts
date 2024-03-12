import { Component, EventEmitter, Output } from '@angular/core';
import { PostFeedComponent } from '../post-feed/post-feed.component';
import { Post } from '../../models/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-post-form',
  standalone: true,
  imports: [FormsModule, PostFeedComponent],
  templateUrl: './new-post-form.component.html',
  styleUrl: './new-post-form.component.css'
})
export class NewPostFormComponent {
  
  // save post via emitter
  // savePost():void{}
  
  postItem: Post = {} as Post;

  @Output() createPost = new EventEmitter<Post>();

  createEmitter(): void {
    this.createPost.emit({...this.postItem});
  }
}
