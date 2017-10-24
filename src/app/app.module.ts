import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './search-history/search-history.component';
import { indexComponent } from './index/index.component';
import { HistoryService } from './history/history.service';
import { WikiService } from './wiki/wiki.service';
import { GiphyService } from './giphy/giphy.service';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: indexComponent },
  { path: 'search-history', component: HistoryComponent },
  { path: '**', component: indexComponent }
];

@NgModule({
  declarations: [
    HistoryComponent,
    AppComponent,
    indexComponent
  ],
  imports: [ 
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    JsonpModule
  ],
  providers: [HistoryService, WikiService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 