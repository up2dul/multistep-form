import { createStyles } from '@mantine/core';

export const useStyle = createStyles(() => ({
  main: {
    minHeight: '100vh',
    position: 'relative',
    margin: 0,
    padding: 0
  },
  footer: {
    width: '100%',
    position: 'absolute',
    paddingBottom: '10px',
    bottom: 0,
    textAlign: 'center'
  }
}));
