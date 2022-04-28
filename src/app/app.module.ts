import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
// import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

// const environmentConfig: any = environment.logger;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
//     LoggerModule.forRoot({
//       level: NgxLoggerLevel[environmentConfig.level],
//       serverLogLevel: NgxLoggerLevel[environmentConfig.serverLevel],
//       serverLoggingUrl: environmentConfig.serverUrl,
//     } as any)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
