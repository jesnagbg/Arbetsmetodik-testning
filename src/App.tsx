import {Container, Flex, Title} from '@mantine/core';
import {useState} from 'react';
import DefinitionCard from './components/DefinitionCard';
import SearchField from './components/SearchField';
import {WordDefinition} from './types/WordDefinitionTypes';

const fetchWordDefinition = async (word: string) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const parsedResponse = response.json();
    return parsedResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

function App() {
  const [wordData, setWordData] = useState<
    WordDefinition[]
  >([]);

  const handleSearch = async (word: string) => {
    const response = await fetchWordDefinition(word);
    setWordData(response);
  };

  return (
    <Container my={30}>
      <Flex
        gap='lg'
        justify='center'
        align='center'
        direction='column'
        pb={20}>
        <Title
          py={10}
          order={1}>
          Look up a words definition
        </Title>
        <SearchField handleSearch={handleSearch} />
      </Flex>

      {wordData &&
        wordData?.map((word, index) => (
          <DefinitionCard
            key={index}
            {...word}
          />
        ))}
    </Container>
  );
}

export default App;
