import React, { useState } from 'react';
import { FormField, Box } from 'grommet';
import { MaskedInput } from 'aries-core';

const maskEmail = [
  {
    regexp: /^[\w\-_.]+$/,
    placeholder: 'example',
  },
  { fixed: '@' },
  {
    regexp: /^[\w]+$/,
    placeholder: 'my',
  },
  { fixed: '.' },
  {
    regexp: /^[\w]+$/,
    placeholder: 'com',
  },
];

export const MaskedEmailExample = () => {
  const [email, setEmail] = useState('');

  return (
    <FormField label="Email" htmlFor="masked-email">
      <MaskedInput
        id="masked-email"
        mask={maskEmail}
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
    </FormField>
  );
};
