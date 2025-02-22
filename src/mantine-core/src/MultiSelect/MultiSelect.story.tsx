import React from 'react';
import { Stack } from '../Stack';
import { TextInput } from '../TextInput';
import { MultiSelect } from './MultiSelect';

export default { title: 'MultiSelect' };

const data = ['React', 'Angular', 'Vue', 'Svelte'];

export function ReadOnly() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect data={data} clearable defaultValue={['React']} readOnly searchable />
    </div>
  );
}

export function FilledVariant() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect data={data} clearable defaultValue={['React']} variant="filled" />
    </div>
  );
}

export function EmptyGroup() {
  return (
    <MultiSelect
      label="Your favorite Rick and Morty character"
      placeholder="Pick all that you like"
      data={[
        { value: 'rick', label: 'Rick', group: 'Used to be a pickle' },
        { value: 'morty', label: 'Morty', group: '' },
        { value: 'beth', label: 'Beth', group: 'Never was a pickle' },
        { value: 'summer', label: 'Summer', group: 'Never was a pickle' },
      ]}
    />
  );
}

export function SizeXSLineHeight() {
  return (
    <Stack style={{ padding: 20 }}>
      <TextInput
        error="Font styles should be identical"
        size="xs"
        placeholder="Placeholder Textinput"
      />

      <MultiSelect
        error="Placeholder should be centered correctly"
        size="xs"
        data={['One', 'Two', 'Three']}
        placeholder="Placeholder Multiselect"
      />
    </Stack>
  );
}
