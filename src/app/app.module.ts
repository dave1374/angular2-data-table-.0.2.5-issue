import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { MdRippleModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdInputModule  } from '@angular2-material/input';
import { MdCheckboxModule  } from '@angular2-material/checkbox';


import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdRippleModule,
    MdInputModule,
    MdCheckboxModule,

  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
