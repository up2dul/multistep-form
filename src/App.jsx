import { useEffect } from 'react';
import { Container, Stepper } from '@mantine/core';

import { useStepStore } from '@/store';
import { useStyle } from '@/hooks';
import { StepCompleted, StepFirst, StepSecond, StepThird, Footer } from '@/components';

function App() {
  const { step } = useStepStore((state) => state);

  const { classes } = useStyle();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  return (
    <main className={classes.main}>
      <Container pt={60} pb={120}>
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

      <Footer />
    </main>
  );
}

export default App;
