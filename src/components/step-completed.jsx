import { Button, Container, Text, Title } from '@mantine/core';

import { StepperLayout } from '@/components';
import { useStepStore } from '@/store';

export function StepCompleted() {
  const { setPrevStep } = useStepStore((state) => state);

  return (
    <Container mt={30} size='s'>
      <Title order={2} mb={15}>
        ✅ All completed
      </Title>

      <Text size='lg'>
        Make sure you&apos;ve filled in the form correctly, <br />
        And then you can submit it.
      </Text>

      <StepperLayout>
        <Button variant='default' onClick={setPrevStep}>
          Back
        </Button>
        <Button type='submit'>Submit</Button>
      </StepperLayout>
    </Container>
  );
}
