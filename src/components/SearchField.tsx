import {Box, Button, TextInput} from '@mantine/core';
import {useForm} from '@mantine/form';

type SearchFieldProps = {
  handleSearch: (word: string) => void;
};

const SearchField = ({handleSearch}: SearchFieldProps) => {
  const form = useForm({
    initialValues: {
      word: '',
    },
  });

  const handleSubmit = () => {
    handleSearch(form.values.word);
    console.log('Form values:' + form.values.word);
  };

  return (
    <Box>
      <TextInput
        label='Enter a word'
        {...form.getInputProps('word')}
      />
      <Button onClick={handleSubmit}>Get definition</Button>
    </Box>
  );
};

export default SearchField;
