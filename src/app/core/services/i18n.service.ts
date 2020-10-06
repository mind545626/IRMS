import {Injectable, ApplicationRef} from '@angular/core';

import {config} from '@app/core/smartadmin.config';
import {JsonApiService} from "@app/core/services/json-api.service";
import { Subject } from 'rxjs';
import {languages} from "@app/shared/i18n/languages.model";
import {BehaviorSubject} from "rxjs/Rx";



@Injectable()
export class I18nService {

  public state;
  public data:{};
  public currentLanguage$ = new BehaviorSubject<any>(null);


  constructor(private jsonApiService:JsonApiService, private ref:ApplicationRef) {
    this.state = new Subject();

    this.initLanguage(config.defaultLocale || 'us');
    this.fetch(this.currentLanguage$.value.key)
  }

  private fetch(locale: any) {
    this.jsonApiService.fetch( `/langs/${locale}.json` )
      .subscribe((data:any)=> {
        this.data = data;
        this.state.next(data);
        this.ref.tick()
      })
  }

  private initLanguage(locale:string) {
    let language = languages.find((it)=> {
      return it.key == locale
    });
    if (language) {
      this.currentLanguage$.next(language);
    } else {
      throw new Error(`Incorrect locale used for I18nService: ${locale}`);

    }
  }

  setLanguage(language){
    this.currentLanguage$.next(language);
    this.fetch(language.key)
  }


  subscribe(sub:any, err:any) {
    return this.state.subscribe(sub, err)
  }

  public getTranslation(phrase:string):string {
    return this.data && this.data[phrase] ? this.data[phrase] : phrase
  }

}
