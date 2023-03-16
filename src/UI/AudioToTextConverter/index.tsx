import React, { FC, memo, useState } from 'react';

const SpeechRecognition =
  // @ts-ignore
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'ru-RU';

const AudioToTextConverter: FC = () => {
  const [transcription, setTranscription] = useState('');
  const [isListening, setIsListening] = useState(false);

  recognition.onresult = (event: any) => {
    const result = event.results[0][0].transcript;
    setTranscription(result);
  };

  const startListening = () => {
    recognition.start();
    setIsListening(true);
  };

  const stopListening = () => {
    recognition.stop();
    setIsListening(false);
  };

  return (
    <div>
      <button
        onClick={() => (isListening ? stopListening() : startListening())}
      >
        {isListening ? 'Остановить' : 'Начать'} запись
      </button>
      <p>{transcription}</p>
    </div>
  );
};

export default memo(AudioToTextConverter);
