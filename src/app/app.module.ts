import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpeakerService } from './Speaker.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { SettingsComponent } from './settings/settings.component';

const ROUTES =
[ { path: ''
  , component: HomeComponent
  }
, { path: 'settings'
  , component: SettingsComponent
  }
, { path: '**'
  , component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    SpeakerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
