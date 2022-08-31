import { Container, TextInput, Title } from '@mantine/core';

export function StepFirst() {
  return (
    <Container mt={30} size='xs'>
      <Title order={2} mb={25}>
        👀 What&apos;s your name?
      </Title>
      <TextInput mb={25} label='First name' placeholder='e.g. Thomas' withAsterisk />
      <TextInput mb={25} label='Last name' placeholder='e.g. Basir' />
    </Container>
  );
}
