import { Injectable } from '@angular/core';

function window_(): any {
  return window;
}

@Injectable()
export class WindowRef {
  get nativeWindow(): any {
    return window_();
  }
}
