import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { PinInput } from '@mantine/labs';

function Demo() {
  return <PinInput length={4} placeholder="⭐️" />;
}

export const placeholder: MantineDemo = {
  type: 'demo',
  component: Demo,
};
