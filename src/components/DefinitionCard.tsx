import { Box, Container, Divider, Text, Title } from '@mantine/core';
import { Meaning, WordDefinition } from '../types/WordDefinitionTypes';

interface WordListProps {
  title: string;
  words: string[];
}

const NymsList = ({ title, words }: WordListProps) => {
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

const TitleSection = (definition: WordDefinition) => {
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
          {definition.word}
        </Title>
        <Text>{definition.origin}</Text>
        <Text>{definition.phonetic}</Text>
      </Box>
      {definition?.phonetics?.map(
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

const DefinitionCard = (definition: WordDefinition) => {
  return (
    <Container py={20}>
      <TitleSection {...definition} />
      {definition?.meanings.map((meaning, index) => (
        <MeaningSection key={index} {...meaning} />
      ))}
      <Divider mt={20} />
    </Container>
  );
};

export default DefinitionCard;
