import { WordDefinition } from '../types/WordDefinitionTypes';

export const mockWordDefinition: WordDefinition = {
  word: 'example',
  phonetic: '/ˈɛɡzæmpl/',
  phonetics: [
    {
      text: '/ˈɛɡzæmpl/',
      audio:
        '//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3',
    },
  ],
  origin:
    'early 17th century: from Latin exemplum, from eximere "take out, remove"',
  meanings: [
    {
      partOfSpeech: 'noun',
      definitions: [
        {
          definition:
            'A thing characteristic of its kind or illustrating a general rule.',
          example: "It's a good example of a medieval church.",
          synonyms: [
            'illustration',
            'specimen',
            'sample',
            'exemplar',
            'exemplification',
          ],
          antonyms: [],
        },
      ],
    },
    {
      partOfSpeech: 'verb',
      definitions: [
        {
          definition: 'Be illustrative of; typify.',
          example: 'This painting perfectly examples the naturalistic style.',
          synonyms: ['represent', 'typify', 'embody', 'mirror'],
          antonyms: ['contradict'],
        },
      ],
    },
  ],
};
