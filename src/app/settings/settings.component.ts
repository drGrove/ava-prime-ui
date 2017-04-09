import { Component, OnInit, Inject } from '@angular/core';

import {SpeakerService} from '../Speaker.service';

@Component({
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
  voices: any;
  languages: string[];
  synth: any;
  settings: any;
  phrase: string;
  voice: string;

  constructor(private speaker: SpeakerService) {
  }

  ngOnInit(): void {
    let this_ = this;
    setTimeout(() => {
      this_.voices = this_.speaker.getVoices();
    }, 500)
  }

  /**
   * Say something
   * @param {string} phrase - The phrase to say
   * @param {string} voice - the voice to use
   */
  say(phrase: string, voice: string): void {
    this.speaker.setVoice(voice);
    this.speaker.speak(phrase);
  }
}
