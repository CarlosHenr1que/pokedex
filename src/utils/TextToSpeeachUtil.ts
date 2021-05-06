import {ReactNativeTts} from 'react-native-tts';

export interface ITextToSpeech {
  isReady: () => Promise<'success'>;
  speak: (text: string) => Promise<string | number>;
  stop: () => Promise<boolean>;
}

export default class TextToSpeechUtil implements ITextToSpeech {
  private readonly textToSpeach: ReactNativeTts;

  constructor(textToSpeachtts: ReactNativeTts) {
    this.textToSpeach = textToSpeachtts;
  }

  async isReady(): Promise<'success'> {
    return this.textToSpeach.getInitStatus();
  }

  async speak(text: string): Promise<string | number> {
    return this.textToSpeach.speak(text);
  }

  async stop(): Promise<boolean> {
    return this.textToSpeach.stop();
  }
}
