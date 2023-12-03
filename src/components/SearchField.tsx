import { useState } from 'react';
import classes from './SearchField.module.css';

type SearchFieldProps = {
  handleSearch: (word: string) => void;
  errorMessage?: string | null;
};

/**
 * A component for searching word definitions.
 * It includes an input field for the word and a submit button.
 *
 * @param {SearchFieldProps} props
 * @returns A Container component containing a form with an input field and a submit button.
 */
const SearchField = ({ handleSearch, errorMessage }: SearchFieldProps) => {
  const [word, setWord] = useState('');
  const [noWordError, setNoWordError] = useState<string | null>(null);

  const error = noWordError || errorMessage;

  const handleSubmit = () => {
    if (!word) {
      setNoWordError('Please enter a word');
      return;
    }

    handleSearch(word);
    setWord('');
    setNoWordError(null);
  };

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      {error && <div className={classes.error}>{error}</div>}
      <button className={classes.button} onClick={handleSubmit}>
        Get definition
      </button>
    </div>
  );
};

export default SearchField;
