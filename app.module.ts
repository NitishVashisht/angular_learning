import { AuthorsService } from './authors.service';
import { AuthorsComponent } from './authors/authors.component';
import { CourseService } from './course.service';
import { CourseComponent } from './course.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CourseService,AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
