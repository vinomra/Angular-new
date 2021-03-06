import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ContactformComponent } from './contactform/contactform.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { NewcoursesComponent } from './routes/newcourses/newcourses.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';
import { OffersComponent } from './routes/offers/offers.component';
import { CourselistComponent } from './routes/home/courselist/courselist.component';
import { CourseComponent } from './routes/home/course/course.component';
import {CourseService} from './services/course.service';
import { OverviewComponent } from './routes/home/overview/overview.component';
import { ReviewComponent } from './routes/reviews/review/review.component';
import{ReviewService} from './services/review.service';
import { DiscountPipe } from './pipes/discount.pipe';
import { CousefilterPipe } from './pipes/cousefilter.pipe';
import {EnquiryService} from './services/enquiry.service';
import { ScheduleComponent } from './routes/schedule/schedule.component';

import{TranslateModule,TranslateLoader} from '@ngx-translate/core';
import{TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HighlightDirective } from './directives/highlight.directive';
import { OfferDirective } from './directives/offer.directive';
import {OfferService} from './services/offer.service';


export function createTranslateLoader (http: HttpClient)  {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

const route=[{
path:"",component:HomeComponent},
{path:"offices",component:OfficesComponent},
{path:"offers",component:OffersComponent},
{path:"vclass",component:VirtualclassComponent},
{path:"reviews",component:ReviewsComponent},
{path:"ncourses",component:NewcoursesComponent},
{path:"cdetails/:ccode",component:OverviewComponent},
{path:"schedules",component:ScheduleComponent,outlet:"sidebar"}

]

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    SlideshowComponent,
    ContactformComponent,
    HomeComponent,
    OfficesComponent,
    ReviewsComponent,
    NewcoursesComponent,
    VirtualclassComponent,
    OffersComponent,
    CourselistComponent,
    CourseComponent,
    OverviewComponent,
    ReviewComponent,
    DiscountPipe,
    CousefilterPipe,
    ScheduleComponent,
    HighlightDirective,
    OfferDirective
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(route),HttpClientModule,FormsModule,ReactiveFormsModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [CourseService,ReviewService,EnquiryService,OfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
