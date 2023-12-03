import { useState } from 'react';
import classes from './App.module.css';
import DefinitionCard from './components/DefinitionCard';
import SearchField from './components/SearchField';
import { WordDefinition } from './types/WordDefinitionTypes';

const fetchWordDefinition = async (word: string) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
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
  const [wordData, setWordData] = useState<WordDefinition[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSearch = async (word: string) => {
    try {
      const response = await fetchWordDefinition(word);
      // Antag att API:et returnerar en tom array eller ett specifikt felmeddelande om ordet inte finns
      if (response.length === 0) {
        setErrorMessage('Word not found');
      } else {
        setWordData(response);
        setErrorMessage(null); // Rensa tidigare felmeddelanden
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Could not find a definition, please try another word');
    }
  };

  return (
    <div className={classes.outerContainer}>
      <div>
        <h1>Dictionary</h1>
        <SearchField handleSearch={handleSearch} errorMessage={errorMessage} />
      </div>

      {wordData &&
        wordData?.map((word, index) => (
          <DefinitionCard key={index} {...word} />
        ))}
    </div>
  );
}

export default App;
