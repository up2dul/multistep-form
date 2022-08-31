import { Container, MultiSelect, Radio, Textarea, Title } from '@mantine/core';

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
      <Radio.Group
        mb={25}
        orientation='vertical'
        label='Expertise level in web development'
        withAsterisk>
        <Radio value='newbie' label='Newbie' />
        <Radio value='beginner' label='beginner' />
        <Radio value='intermediate' label='intermediate' />
        <Radio value='advanced' label='advanced' />
        <Radio value='expert' label='expert' />
      </Radio.Group>
      <Radio.Group mb={25} orientation='vertical' label='Focus on web development' withAsterisk>
        <Radio value='frontend' label='Frontend' />
        <Radio value='backend' label='Backend' />
        <Radio value='fullstack' label='Full stack' />
        <Radio value='i dont know yet' label="I don't know yet" />
      </Radio.Group>
      <Radio.Group
        mb={25}
        orientation='vertical'
        label='Work experience'
        description="Select Fresh graduate if you don't have work experience"
        withAsterisk>
        <Radio value='fresh graduate' label='Fresh graduate' />
        <Radio value='1 year' label='1 year' />
        <Radio value='2-4 years' label='2-4 years' />
        <Radio value='more than 4 years' label='More than 4 years' />
      </Radio.Group>
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
