import {Box, Title} from '@mantine/core';
import {useState} from 'react';
import './App.css';
import DefinitionCard from './components/DefinitionCard';
import SearchField from './components/SearchField';
import {WordDefinition} from './types/WordDefinitionTypes';

const fetchWordDefinition = async (word: string) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  );
  const parsedResponse = await response.json();
  console.log(parsedResponse);
  return await parsedResponse;
};

function App() {
  const [wordData, setWordData] = useState<
    WordDefinition[]
  >([]);

  const handleSearch = async (word: string) => {
    console.log('Handle search:' + word);
    const response = await fetchWordDefinition(word);
    console.log('Response:' + response);
    setWordData(response);
  };

  return (
    <Box>
      <Title order={1}>Look up a words definition</Title>

      <SearchField handleSearch={handleSearch} />

      {wordData && (
        <Box>
          {wordData?.map((word, index) => (
            <DefinitionCard
              key={index}
              {...word}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default App;
