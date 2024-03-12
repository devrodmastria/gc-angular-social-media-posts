import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { NewPostFormComponent } from './components/new-post-form/new-post-form.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostFeedComponent, NewPostFormComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Social-Media';
}
