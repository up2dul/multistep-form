import { Container, MultiSelect, NativeSelect, Textarea, Title } from '@mantine/core';

const sourceSelect = [
  'Family',
  'Friends',
  'Facebook',
  'Instagram',
  'Linkedin',
  'Twitter',
  'Website',
  'Other'
];

export function StepThird() {
  return (
    <Container mt={30} size='xs'>
      <Title order={2} mb={25}>
        🧑 Tell us more about you
      </Title>
      <NativeSelect
        mb={25}
        data={['Newbie', 'Beginner', 'Intermediate', 'Advanced', 'Expert']}
        label='Expertise level in web development'
        placeholder='Pick one'
        withAsterisk
      />
      <NativeSelect
        mb={25}
        data={['Frontend', 'Backend', 'Full stack', "I don't know yet"]}
        label='Focus on web development'
        placeholder='Pick one'
        withAsterisk
      />
      <NativeSelect
        mb={25}
        data={['Fresh graduate', '1 year', '2-4 years', 'More than 4 years']}
        label='Work experience'
        placeholder='Pick one'
        description="Select Fresh graduate if you don't have work experience"
        withAsterisk
      />
      <MultiSelect
        mb={25}
        data={[
          'Autodidact',
          'Bootcamp',
          'Formal education',
          'Mentorship',
          'Self-learning',
          'Other'
        ]}
        label='How did you learn to code and programming before?'
        description='You can choose more than 1'
        nothingFound='Nothing found'
        withAsterisk
        searchable
      />
      <MultiSelect
        mb={25}
        data={sourceSelect}
        label='Where did you know about this bootcamp?'
        description='You can choose more than 1'
        nothingFound='Nothing found'
        withAsterisk
        searchable
      />
      <Textarea
        mb={25}
        label="What's your motivation to joining in this bootcamp?"
        description='Explain briefly and clearly'
        withAsterisk
      />
      <Textarea mb={25} label='Do you have any question or feedback about this bootcamp?' />
    </Container>
  );
}
