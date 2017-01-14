import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MyApp } from './app.component';
import { HomePage, MapPage, AboutPage } from '../pages/pages';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    AboutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCSfLel6Kl7PB1TOq1Zr94VFWpt-36K0sM'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    AboutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
