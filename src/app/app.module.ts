import { importProvidersFrom, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {
  EmbeddedTranslateLoader,
  FeatureAuthModule,
  FeatureCatalogModule,
  FeatureRecordModule,
  FeatureSearchModule,
  provideRepositoryUrl,
  SearchFacade,
  SearchService,
  ThemeService,
  TRANSLATE_DEFAULT_CONFIG,
  UiElementsModule,
  UiInputsModule,
  UiSearchModule,
  UiWidgetsModule,
  UtilI18nModule,
} from 'geonetwork-ui';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { EffectsModule } from '@ngrx/effects';
import { SearchComponent } from './components/search.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    UiWidgetsModule,
    UiElementsModule,
    UiInputsModule,
    UiSearchModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
        },
      },
    ),
    FeatureAuthModule,
    FeatureRecordModule,
    FeatureCatalogModule,
    FeatureSearchModule,
    UtilI18nModule,
    TranslateModule.forRoot({
      ...TRANSLATE_DEFAULT_CONFIG,
      loader: {
        provide: TranslateLoader,
        useClass: EmbeddedTranslateLoader,
      },
    }),
  ],
  declarations: [AppComponent, SearchComponent],
  providers: [
    { provide: SearchFacade },
    { provide: SearchService },
    provideRepositoryUrl('http://localhost:8080/geonetwork/srv/api'),
    importProvidersFrom(EffectsModule.forRoot()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private searchFacade: SearchFacade) {
    ThemeService.applyCssVariables('#e73f51', '#c2e9dc', '#212029', '#fdfbff');
    this.searchFacade.init('main');
    this.searchFacade
      .setSortBy(['desc', 'createDate'])
      .setResultsLayout('FEED');
  }
}
