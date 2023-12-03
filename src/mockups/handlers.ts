import { http } from 'msw';
import mockData from './mockResponse.json';

export const handlers = [
  http.get('https://api.dictionaryapi.dev/api/v2/entries/en/example', () => {
    return new Response(JSON.stringify(mockData));
  }),
];
