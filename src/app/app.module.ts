import {NgModule} from '@angular/core'
import {AppComponent} from './app.component'
import {BrowserModule} from '@angular/platform-browser'
import {UiElementsModule, UiInputsModule, UiWidgetsModule, ThemeService} from 'geonetwork-ui'
import {CommonModule} from '@angular/common'

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    UiWidgetsModule,
    UiElementsModule,
    UiInputsModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    ThemeService.applyCssVariables('#e73f51', '#c2e9dc', '#212029', '#fdfbff')
  }
}
