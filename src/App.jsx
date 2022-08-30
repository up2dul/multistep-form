import { useState } from 'react';
import { Button, Container, Group, Stepper } from '@mantine/core';
import { StepFirst, StepSecond } from './components';

function App() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Container my={60}>
      <Stepper active={active} breakpoint='sm'>
        <Stepper.Step label='First step' description='Your name and gender'>
          <StepFirst />
        </Stepper.Step>
        <Stepper.Step label='Second step' description='Create an account'>
          <StepSecond />
        </Stepper.Step>
        <Stepper.Step label='Third step' description='Your details'>
          Step 3
        </Stepper.Step>
        <Stepper.Step label='Final step' description='Get full access'>
          Step 4 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
      </Stepper>

      <Group position='center' mt={50}>
        <Button variant='default' onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next</Button>
      </Group>
    </Container>
  );
}

export default App;
