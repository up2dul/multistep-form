import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Stack, TextInput, Title } from '@mantine/core';

import { useFormStore, useStepStore } from '@/store';
import { firstSchema, firstTextProps } from '@/utils';
import { StepperLayout } from '@/components';

export function StepFirst() {
  const { setNextStep } = useStepStore((state) => state);

  const { firstForm, setFirstForm } = useFormStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: firstForm || {},
    resolver: yupResolver(firstSchema)
  });

  const onSubmit = (data) => {
    console.log('first step:', data);
    setFirstForm(data);
    setNextStep();
  };

  return (
    <Container mt={30} size='xs'>
      <Title order={2} mb={25}>
        👀 What&apos;s your name?
      </Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing='xl'>
          {firstTextProps.map((props, idx) => (
            <TextInput
              key={idx}
              {...props}
              {...register(props.name)}
              error={errors[props.name]?.message}
            />
          ))}
        </Stack>

        <StepperLayout>
          <Button type='submit'>Next</Button>
        </StepperLayout>
      </form>
    </Container>
  );
}
