import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Group, Radio, Stack, TextInput, Title } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

import { useFormStore, useStepStore } from '@/store';
import { birthDateProps, secondSchema, secondTextList } from '@/utils';
import { StepperLayout } from '@/components';

export function StepSecond() {
  const { setPrevStep, setNextStep } = useStepStore((state) => state);

  const {
    firstForm: { firstName },
    secondForm,
    setSecondForm
  } = useFormStore((state) => state);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    control
  } = useForm({
    defaultValues: secondForm || {},
    resolver: yupResolver(secondSchema)
  });

  const onSubmit = (data) => {
    console.log('second step:', data);
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
            <Radio.Group
              label='Gender'
              orientation='vertical'
              error={errors.gender?.message}
              withAsterisk>
              <Radio value='male' label='Male' {...register('gender')} />
              <Radio value='female' label='Female' {...register('gender')} />
            </Radio.Group>
            <Controller
              name='dateBirth'
              control={control}
              render={({ field }) => (
                <DatePicker {...birthDateProps} {...field} error={errors.dateBirth?.message} />
              )}
            />
          </Group>

          {secondTextList.map((props, idx) => (
            <TextInput
              key={idx}
              {...props}
              {...register(props.name)}
              error={errors[props.name]?.message}
            />
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
