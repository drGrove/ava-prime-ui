import { Injectable } from '@angular/core';

@Injectable()
export class SpeakerService {
  voice: SpeechSynthesisVoice;
  private voices_: any;
  private languages_: any;
  private synth_: any;

  constructor() {
    let this_ = this;
    if ('speechSynthesis' in window) {
      this.synth_ =  window.speechSynthesis;
      this.languages_ = navigator['languages'];
      setTimeout(() => {
        this_.getVoices();
      }, 500);
    }
  }

  /**
   * Get the voices from the browser and bind to service
   */
  getVoices(): void {
    let this_ = this;
    this.voices_ = [];
    if ('speechSynthesis' in window) {
      this.voices_ = this.synth_.getVoices().map(voice => {
        if (this_.languages_.includes(voice.lang)) return voice;
      }).filter(Boolean)
    }

    return this.voices_;
  }

  /**
   * Set the voice of the Speaker
   * @param {string} name - The name of the voice to use
   */
  setVoice(name: string): void {
    this.voice = this.voices_.map(voice => {
      if (voice.name === name) return voice;
    }).filter(Boolean)[0] || null;
  }

  /**
   * Gets the voice of the speaker
   * @returns {SpeechSynthesisVoice} voice used by service
   */
  getVoice(): SpeechSynthesisVoice {
    return this.voice;
  }

  /**
   * speak the words passed to the speaker
   * @param {string} phrase - the words to be spoken
   */
  speak(phrase: string): void {
    let utterance = new SpeechSynthesisUtterance(phrase);
    utterance.voice = this.getVoice();
    this.synth_.speak(utterance);
  }
}
