import { useForm } from 'react-hook-form';
import { Button, Container, Stack, TextInput, Title } from '@mantine/core';

import { useFormStore, useStepStore } from '@/store';
import { firstTextList } from '@/utils';
import { StepperLayout } from '@/components';

export function StepFirst() {
  const { setNextStep } = useStepStore((state) => state);

  const { firstForm, setFirstForm } = useFormStore((state) => state);

  const { register, handleSubmit } = useForm({ defaultValues: firstForm || {} });

  const onSubmit = (data) => {
    console.log('first:', data);
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
          {firstTextList.map((props, idx) => (
            <TextInput key={idx} {...props} {...register(props.name)} />
          ))}
        </Stack>

        <StepperLayout>
          <Button type='submit'>Next</Button>
        </StepperLayout>
      </form>
    </Container>
  );
}
