import { Anchor, Space, Text } from '@mantine/core';
import { IoCodeSlash } from 'react-icons/io5';

import { useStyle } from '@/hooks';

export function Footer() {
  const { classes } = useStyle();

  return (
    <footer className={classes.footer}>
      <Text color='dark.3'>
        The data you enter will not be sent anywhere, this is just example registration form.
      </Text>
      <Space h='xs' />
      <Anchor href='https://github.com/up2dul/multistep-form' target='_blank'>
        <IoCodeSlash />
      </Anchor>
    </footer>
  );
}
