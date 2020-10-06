import { Component, OnInit } from '@angular/core';
import {languages} from '../languages.model'
import {I18nService} from "@app/core/services/i18n.service";
// import {I18nService} from "../i18n.service";

@Component({
  selector: 'sa-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  public languages: Array<any>;
  public currentLanguage: any;

  constructor(private i18n: I18nService) {
  }

  ngOnInit() {
    this.languages = languages;
  }

  setLanguage(language){
    this.currentLanguage = language;
    this.i18n.setLanguage(language)
  }

}
