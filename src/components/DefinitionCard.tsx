import {Box, Text} from '@mantine/core';
import {WordDefinition} from '../types/WordDefinitionTypes';

const DefinitionCard = (definition: WordDefinition) => {
  return (
    <Box>
      <Text>{definition.word}</Text>
      <Text>{definition.phonetic}</Text>
    </Box>
  );
};

export default DefinitionCard;
