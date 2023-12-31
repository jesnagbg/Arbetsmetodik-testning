import { Meaning, WordDefinition } from '../types/WordDefinitionTypes';
import classes from './DefinitionCard.module.css';

interface NymsListProps {
  title: string;
  words: string[];
}

/**
 * Displays a list of synonyms or antonyms with a title.
 *
 * @param {NymsListProps} props
 * @returns A Box component with a title and a list of words if there are any, otherwise null.
 */
const NymsList = ({ title, words }: NymsListProps) => {
  if (words.length === 0) {
    return null;
  }

  return (
    <div>
      <h4 style={{ display: 'inline' }}>{title}: </h4>
      {words.map((word, index) => (
        <span
          style={{
            backgroundColor: 'white',
            marginRight: '5px',
            padding: '2px',
          }}
          key={index}
        >
          {word}{' '}
        </span>
      ))}
    </div>
  );
};

/**
 * Renders a section displaying the definition, examples, synonyms, and antonyms of a word.
 *
 * @param {Meaning} meaning
 * @returns A Box component with the word's definition, example sentences, and lists of synonyms and antonyms.
 */
const MeaningSection = (meaning: Meaning) => {
  return (
    <div>
      <div>
        <h3>{meaning.partOfSpeech}</h3>
      </div>
      {meaning.definitions.slice(0, 3).map((definition, index) => (
        <div key={index}>
          <ul>
            <li>{definition.definition}</li>
            <p style={{ fontStyle: 'italic' }}>{definition.example}</p>
          </ul>
          <NymsList title="Synonyms" words={definition.synonyms} />
          <NymsList title="Antonyms" words={definition.antonyms} />
        </div>
      ))}
    </div>
  );
};

/**
 * Displays the word, its origin, phonetic spelling, and an audio player for pronunciation.
 *
 * @param {WordDefinition} wordDefinition
 * @returns A Box component with the word's title, origin, phonetic spelling, and audio players for each phonetic pronunciation.
 */
const TitleSection = (wordDefinition: WordDefinition) => {
  const firstPhonetic = wordDefinition.phonetics?.[0];

  return (
    <div className={classes.titleSection}>
      <div>
        <h2 style={{ textTransform: 'capitalize' }}>{wordDefinition.word}</h2>
        <p>{wordDefinition.phonetic}</p>
      </div>
      {firstPhonetic?.audio && (
        <div>
          <audio controls data-testid="word-audio">
            <source src={firstPhonetic.audio} type="audio/mpeg" />
          </audio>
        </div>
      )}
    </div>
  );
};

/**
 * Assembles the complete definition card for a word, including its title section and meaning sections.
 *
 * @param {WordDefinition} wordDefinition
 * @returns A Container component with the word's title section and its meaning sections.
 */
const DefinitionCard = (wordDefinition: WordDefinition) => {
  return (
    <div className={classes.defCardContainer}>
      <TitleSection {...wordDefinition} />
      {wordDefinition?.meanings.map((meaning, index) => (
        <MeaningSection key={index} {...meaning} />
      ))}
      <hr style={{ marginTop: '40px' }} />
    </div>
  );
};

export default DefinitionCard;
