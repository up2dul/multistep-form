import { useEffect, useState } from 'react';
import { Button, Container, Group, Stepper } from '@mantine/core';
import { StepCompleted, StepFirst, StepSecond, StepThird } from './components';

function App() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  return (
    <Container my={60}>
      <Stepper active={active} breakpoint='sm'>
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

      <Group position='center' mt={50}>
        {active > 0 && (
          <Button variant='default' onClick={prevStep}>
            Back
          </Button>
        )}
        <Button onClick={nextStep}>{active === 3 ? 'Submit' : 'Next'}</Button>
      </Group>
    </Container>
  );
}

export default App;
