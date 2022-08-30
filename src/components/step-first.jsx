import { Container, Select, TextInput, Title } from '@mantine/core';

export function StepFirst() {
  return (
    <Container mt={30} size='xs'>
      <Title order={2} mb={20}>
        👀 Let us know bit about you
      </Title>
      <TextInput mb={20} label='First name' placeholder='e.g. Thomas' withAsterisk />
      <TextInput mb={20} label='Last name' placeholder='e.g. Basir' />
      <Select
        label='Your gender'
        placeholder='Pick one'
        data={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' }
        ]}
        withAsterisk
      />
    </Container>
  );
}
