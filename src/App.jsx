import { useEffect } from 'react';
import { Container, Stepper } from '@mantine/core';

import { useStepStore } from '@/store';
import { StepCompleted, StepFirst, StepSecond, StepThird } from '@/components';

function App() {
  const { step } = useStepStore((state) => state);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  return (
    <Container my={60}>
      <Stepper active={step} breakpoint='sm'>
        <Stepper.Step label='First step' description='Your name'>
          <StepFirst />
        </Stepper.Step>
        <Stepper.Step label='Second step' description='Your details info'>
          <StepSecond />
        </Stepper.Step>
        <Stepper.Step label='Third step' description='More about you'>
          <StepThird />
        </Stepper.Step>
        <Stepper.Completed>
          <StepCompleted />
        </Stepper.Completed>
      </Stepper>
    </Container>
  );
}

export default App;
