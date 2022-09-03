import { Container, Group, NumberInput, Radio, TextInput, Title } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

export function StepSecond() {
  return (
    <Container mt={30} size='xs'>
      <Title order={2} mb={25}>
        👋 Hi Guntur, <br /> Let us know about your info and contact
      </Title>
      <Group mb={25} grow>
        <Radio.Group label='Gender' orientation='vertical' withAsterisk>
          <Radio value='male' label='Male' />
          <Radio value='female' label='Female' />
        </Radio.Group>
        <DatePicker label='Birth date' placeholder='Pick date' dropdownType='modal' withAsterisk />
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
        placeholder='e.g. guntur@gmail.com'
        description='Must be an active email'
        withAsterisk
      />
      <TextInput
        mb={25}
        label='Personal website'
        placeholder='e.g. https://guntur.com'
        description='Optional, but it would be better if you had one'
      />
      <TextInput mb={25} label='Github URL' placeholder='e.g. https://github.com/guntur' />
      <TextInput mb={25} label='Linkedin URL' placeholder='e.g. https://linkedin.com/in/guntur' />
    </Container>
  );
}
