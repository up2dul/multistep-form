import { Container, Title } from '@mantine/core';

export function StepCompleted() {
  return (
    <Container mt={30} size='s'>
      <Title order={2} mb={25}>
        ✅ All completed, <br />
        Make sure you&apos;ve filled in the form correctly. <br />
        And then, you can submit it.
      </Title>
    </Container>
  );
}
