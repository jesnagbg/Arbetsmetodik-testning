import {
  Box,
  Container,
  Divider,
  Text,
  Title,
} from '@mantine/core';
import {
  Meaning,
  WordDefinition,
} from '../types/WordDefinitionTypes';

const MeaningSection = (meaning: Meaning) => {
  return (
    <Box py={10}>
      <Text
        fw={700}
        size='lg'>
        {meaning.partOfSpeech}
      </Text>
      {meaning.definitions
        .slice(0, 3)
        .map((definition, index) => (
          <Box
            py={10}
            key={index}>
            <Text>{definition.definition}</Text>
            <Text fs='italic'>{definition.example}</Text>
          </Box>
        ))}
    </Box>
  );
};

const DefinitionCard = (definition: WordDefinition) => {
  return (
    <Container py={20}>
      <Box
        py={10}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Box>
          <Title
            order={2}
            style={{textTransform: 'capitalize'}}>
            {definition.word}
          </Title>
          <Text>{definition.origin}</Text>
          <Text>{definition.phonetic}</Text>
        </Box>
        {definition?.phonetics.map((phonetic, index) => (
          <Box key={index}>
            <audio controls>
              <source
                src={phonetic.audio}
                type='audio/mpeg'
              />
            </audio>
          </Box>
        ))}
      </Box>
      {definition?.meanings.map((meaning, index) => (
        <MeaningSection
          key={index}
          {...meaning}
        />
      ))}
      <Divider mt={20} />
    </Container>
  );
};

export default DefinitionCard;
