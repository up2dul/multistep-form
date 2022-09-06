import { Group } from '@mantine/core';

export function StepperLayout({ children }) {
  return (
    <Group position='center' mt={50}>
      {children}
    </Group>
  );
}
