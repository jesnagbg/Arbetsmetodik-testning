import { Button, Container, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

type SearchFieldProps = {
  handleSearch: (word: string) => void;
};

/**
 * A component for searching word definitions.
 * It includes an input field for the word and a submit button.
 *
 * @param {SearchFieldProps} props
 * @returns A Container component containing a form with an input field and a submit button.
 */
const SearchField = ({ handleSearch }: SearchFieldProps) => {
  const form = useForm({
    initialValues: {
      word: '',
    },
    validate: {
      word: (value) => (value ? null : 'Please enter a word'),
    },
  });

  const handleSubmit = () => {
    if (form.validate().hasErrors) {
      console.log('Form has errors');
      return;
    }
    handleSearch(form.values.word);
    form.reset();
  };

  return (
    <Container>
      <TextInput
        py={10}
        style={{ width: 400 }}
        label="Enter a word"
        radius={'md'}
        error={form.errors.word}
        {...form.getInputProps('word')}
      />
      <Button fullWidth onClick={handleSubmit}>
        Get definition
      </Button>
    </Container>
  );
};

export default SearchField;
