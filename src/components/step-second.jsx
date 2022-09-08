import { useForm } from 'react-hook-form';
import { Button, Container, Group, Radio, Stack, TextInput, Title } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

import { useFormStore, useStepStore } from '@/store';
import { secondDateProps, secondTextList } from '@/utils';
import { StepperLayout } from '@/components';

let count = 0;

export function StepSecond() {
  const { setPrevStep, setNextStep } = useStepStore((state) => state);

  console.log('rendered:', ++count);

  const {
    firstForm: { firstName },
    secondForm,
    setSecondForm
  } = useFormStore((state) => state);

  const { register, handleSubmit, getValues } = useForm({ defaultValues: secondForm || {} });

  const dateRegister = register('birthDate');

  const onSubmit = (data) => {
    console.log('second:', data);
    setSecondForm(data);
    setNextStep();
  };

  const handleBlur = () => {
    const data = getValues();
    setSecondForm(data);
  };

  return (
    <Container mt={30} size='xs'>
      <Title order={2} mb={25}>
        👋 Hi {firstName}, <br /> Let us know about your info and contact
      </Title>

      <form onBlur={handleBlur} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing='xl'>
          <Group grow>
            <Radio.Group label='Gender' orientation='vertical' withAsterisk>
              <Radio value='male' label='Male' {...register('gender')} />
              <Radio value='female' label='Female' {...register('gender')} />
            </Radio.Group>
            <DatePicker {...secondDateProps} onBlur={dateRegister.onBlur} ref={dateRegister.ref} />
          </Group>

          {secondTextList.map((props, idx) => (
            <TextInput key={idx} {...props} {...register(props.name)} />
          ))}
        </Stack>

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
