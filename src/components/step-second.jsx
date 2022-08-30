import { Container, PasswordInput, TextInput, Title } from '@mantine/core';

export function StepSecond() {
  return (
    <Container mt={30} size='xs'>
      <Title order={2} mb={20}>
        👋 Hi Thomas, let&apos;s create your account
      </Title>
      <TextInput
        mb={20}
        label='Username'
        placeholder='e.g. thomas82'
        description='Username cannot use spaces'
        withAsterisk
      />
      <TextInput mb={20} label='Email address' placeholder='e.g. thomas82@gmail.com' withAsterisk />
      <PasswordInput
        mb={20}
        label='Create a password'
        placeholder='****'
        description='Min. 8 characters'
        withAsterisk
      />
      <PasswordInput mb={20} label='Confirm password' placeholder='****' withAsterisk />
    </Container>
  );
}
