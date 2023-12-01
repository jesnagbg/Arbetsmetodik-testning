import { useState } from 'react';
import classes from './App.module.css';
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

  const handleSearch = async (word: string) => {
    const response = await fetchWordDefinition(word);
    setWordData(response);
  };

  return (
    <div className={classes.outerContainer}>
      <div>
        <h1>Dictionary</h1>
        <SearchField handleSearch={handleSearch} />
      </div>

      {/* {wordData &&
        wordData?.map((word, index) => (
          <DefinitionCard key={index} {...word} />
        ))} */}
    </div>
  );
}

export default App;
