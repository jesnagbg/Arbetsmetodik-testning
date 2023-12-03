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
          antonyms: ['exception', 'atypicality'],
        },
        {
          definition: 'A representation or model of something.',
          example:
            'The building is a perfect example of medieval architecture.',
          synonyms: ['representation', 'model'],
          antonyms: [],
        },
        {
          definition: 'A pattern or model for making comparisons.',
          example: 'Use the diagram as an example to solve similar problems.',
          synonyms: ['template', 'standard'],
          antonyms: [],
        },
        {
          definition: 'An instance serving to illustrate a rule or precept.',
          example: 'Each example serves a specific didactic purpose.',
          synonyms: ['instance', 'case'],
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
