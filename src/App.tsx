import {Box, Text, Title} from '@mantine/core';
import {useState} from 'react';
import './App.css';
import SearchField from './components/SearchField';

const fetchWordDefinition = async (word: string) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  );
  const parsedResponse = await response.json();
  console.log(parsedResponse);
  return await parsedResponse;
};

interface WordDefinition {
  word: string;
  // Add other properties that the API response includes
}

//TODO: Create a component that displays the definition of a word

function App() {
  const [wordData, setWordData] = useState<
    WordDefinition[] | null
  >(null);

  const handleSearch = async (word: any) => {
    console.log('Handle search:' + word);
    const response = await fetchWordDefinition(word);
    console.log('Response:' + response);
    setWordData(response);
  };

  return (
    <Box>
      <Title order={1}>Welcome to Mantine + Vite</Title>

      <SearchField handleSearch={handleSearch} />

      {wordData && (
        <Box>
          {wordData.map((entry, index) => (
            <Text key={index}>{entry.word}</Text>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default App;
