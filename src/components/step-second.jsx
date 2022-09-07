import { useForm } from 'react-hook-form';
import { Button, Container, Group, Radio, TextInput, Title } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { IoCalendarNumber } from 'react-icons/io5';

import { useFormStore, useStepStore } from '@/store';
import { secondTextList } from '@/utils';
import { StepperLayout } from '@/components';

export function StepSecond() {
  const { register, handleSubmit } = useForm();

  const { setPrevStep, setNextStep } = useStepStore((state) => state);

  const { firstName } = useFormStore((state) => state.firstForm);

  const onSubmit = (data) => {
    console.log(data);
    setNextStep();
  };

  return (
    <Container mt={30} size='xs'>
      <Title order={2} mb={25}>
        👋 Hi {firstName}, <br /> Let us know about your info and contact
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Group mb={25} grow>
          <Radio.Group label='Gender' orientation='vertical' withAsterisk {...register('gender')}>
            <Radio value='male' label='Male' />
            <Radio value='female' label='Female' />
          </Radio.Group>
          <DatePicker
            icon={<IoCalendarNumber />}
            label='Birth date'
            placeholder='Pick date'
            dropdownType='modal'
            withAsterisk
            {...register('birthDate')}
          />
        </Group>
        {secondTextList.map((props, idx) => (
          <TextInput key={idx} mb={25} {...props} {...register(props.name)} />
        ))}
        <StepperLayout>
          <Button variant='default' onClick={setPrevStep}>
            Back
          </Button>
          <Button type='submit'>Next</Button>
        </StepperLayout>
      </form>
    </Container>
  );
}
