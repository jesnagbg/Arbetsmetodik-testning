import { Box, Container, Divider, Text, Title } from '@mantine/core';
import { Meaning, WordDefinition } from '../types/WordDefinitionTypes';

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
    <Box>
      <Text span>{title}: </Text>
      {words.map((word, index) => (
        <Text span key={index} c={'grey'}>
          {word}{' '}
        </Text>
      ))}
    </Box>
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
    <Box py={10}>
      <Text fw={700} size="lg">
        {meaning.partOfSpeech}
      </Text>
      {meaning.definitions.slice(0, 3).map((definition, index) => (
        <Box key={index}>
          <Box py={10}>
            <Text>{definition.definition}</Text>
            <Text fs="italic">{definition.example}</Text>
          </Box>

          <NymsList title="Synonyms" words={definition.synonyms} />
          <NymsList title="Antonyms" words={definition.antonyms} />
        </Box>
      ))}
    </Box>
  );
};

/**
 * Displays the word, its origin, phonetic spelling, and an audio player for pronunciation.
 *
 * @param {WordDefinition} wordDefinition
 * @returns A Box component with the word's title, origin, phonetic spelling, and audio players for each phonetic pronunciation.
 */
const TitleSection = (wordDefinition: WordDefinition) => {
  return (
    <Box
      py={10}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Title order={2} style={{ textTransform: 'capitalize' }}>
          {wordDefinition.word}
        </Title>
        <Text>{wordDefinition.origin}</Text>
        <Text>{wordDefinition.phonetic}</Text>
      </Box>
      {wordDefinition?.phonetics?.map(
        (phonetic, index) =>
          phonetic.audio && (
            <Box key={index}>
              <audio controls>
                <source src={phonetic.audio} type="audio/mpeg" />
              </audio>
            </Box>
          )
      )}
    </Box>
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
    <Container py={20}>
      <TitleSection {...wordDefinition} />
      {wordDefinition?.meanings.map((meaning, index) => (
        <MeaningSection key={index} {...meaning} />
      ))}
      <Divider mt={20} />
    </Container>
  );
};

export default DefinitionCard;
