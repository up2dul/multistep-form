import { Container, Group, NumberInput, Select, TextInput, Title } from '@mantine/core';

export function StepSecond() {
  return (
    <Container mt={30} size='xs'>
      <Title order={2} mb={25}>
        👋 Hi Thomas, <br /> Let us know about your info and contact
      </Title>
      <Group grow>
        <Select
          mb={25}
          label='Gender'
          placeholder='Pick one'
          data={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' }
          ]}
          withAsterisk
        />
        <NumberInput mb={25} label='Age' placeholder='18 - 27' withAsterisk />
      </Group>
      <TextInput
        mb={25}
        label='City and Country'
        placeholder='e.g. Bandung, Indonesia'
        withAsterisk
      />
      <NumberInput
        mb={25}
        label='Phone number'
        placeholder='e.g. +62-888-1234-1234'
        description='Preferably that is used for Telegram/WhatsApp'
        withAsterisk
        hideControls
      />
      <TextInput
        mb={25}
        label='Email address'
        placeholder='e.g. thomas82@gmail.com'
        description='Must be an active email'
        withAsterisk
      />
      <TextInput
        mb={25}
        label='Personal website'
        placeholder='e.g. https://thomas82.com'
        description='Optional, but it would be better if you had one'
      />
      <TextInput mb={25} label='Github URL' placeholder='e.g. https://github.com/thomas82' />
      <TextInput mb={25} label='Linkedin URL' placeholder='e.g. https://linkedin.com/in/thomas82' />
    </Container>
  );
}
