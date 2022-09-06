import { useForm } from 'react-hook-form';
import { Button, Container, TextInput, Title } from '@mantine/core';

import { useFormStore, useStepStore } from '@/stores';
import { firstTextList } from '@/utils';
import { StepperLayout } from '@/components';

export function StepFirst() {
  const { setNextStep } = useStepStore((state) => state);

  const { firstForm, setFirstForm } = useFormStore((state) => state);

  const { register, handleSubmit } = useForm({ defaultValues: firstForm || {} });

  const onSubmit = (data) => {
    setFirstForm(data);
    setNextStep();
  };

  return (
    <Container mt={30} size='xs'>
      <Title order={2} mb={25}>
        👀 What&apos;s your name?
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        {firstTextList.map((props, idx) => (
          <TextInput key={idx} mb={25} {...props} {...register(props.name)} />
        ))}
        <StepperLayout>
          <Button type='submit'>Next</Button>
        </StepperLayout>
      </form>
    </Container>
  );
}
