import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import DefinitionCard from '../components/DefinitionCard';
import { mockWordDefinition } from '../mockups/mockWordDefinition';

describe('DefinitionCard Component', () => {
  beforeEach(() => {
    // Render the DefinitionCard component before each test with the mocked data
    render(<DefinitionCard {...mockWordDefinition} />);
  });

  it('displays the word title and phonetic information', () => {
    // Check that the word title and phonetic information are displayed
    expect(screen.getByText(mockWordDefinition.word)).toBeInTheDocument();
    expect(screen.getByText(mockWordDefinition.phonetic)).toBeInTheDocument();
  });

  it('displays an audio player if available', () => {
    // Check that the audio player is displayed
    const audioPlayer = screen.getByTestId('word-audio') as HTMLAudioElement;
    expect(audioPlayer).toBeInTheDocument();

    // Check that the audio player has a source element
    const sourceElement = audioPlayer.querySelector(
      'source'
    ) as HTMLSourceElement;
    expect(sourceElement).not.toBeNull();

    // Check that the audio player has the correct source
    if (sourceElement) {
      expect(sourceElement.getAttribute('src')).toBe(
        mockWordDefinition.phonetics[0].audio
      );
    }
  });

  it('displays meanings, examples, synonyms, and antonyms', () => {
    // Check that the meanings are rendered
    mockWordDefinition.meanings.forEach((meaning) => {
      expect(screen.getByText(meaning.partOfSpeech)).toBeInTheDocument();

      // Check that the first three definitions are rendered
      const definitionsToTest = meaning.definitions.slice(0, 3);
      definitionsToTest.forEach((definition) => {
        expect(screen.getByText(definition.definition)).toBeInTheDocument();

        // If there is an example of the definition, check that it is rendered
        if (definition.example) {
          expect(screen.getByText(definition.example)).toBeInTheDocument();
        }

        // Check that the synonyms and antonyms are rendered
        definition.synonyms.forEach((synonym) => {
          expect(screen.getByText(synonym)).toBeInTheDocument();
        });
        definition.antonyms.forEach((antonym) => {
          expect(screen.getByText(antonym)).toBeInTheDocument();
        });
      });
    });
  });

  it('displays no more than three definitions for each "part of speech"', () => {
    mockWordDefinition.meanings.forEach((meaning) => {
      if (meaning.definitions.length > 3) {
        const fourthDefinition = meaning.definitions[3];
        expect(
          screen.queryByText(fourthDefinition.definition)
        ).not.toBeInTheDocument();
      }
    });
  });
});
