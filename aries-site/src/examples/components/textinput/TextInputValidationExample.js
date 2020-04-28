import React, { useState } from 'react';
import { Box, Form, FormField, TextInput } from 'grommet';

export const TextInputValidationExample = () => {
  const [value, setValue] = useState('');
  const defaultErrorMessage = 'Type something to resolve this error.';
  const [message, setMessage] = useState(defaultErrorMessage);
  return (
    <Box width="small">
      <Form>
        <FormField
          name="required-field"
          label="Label"
          htmlFor="required-field"
          error={message}
        >
          <TextInput
            name="required-field"
            id="required-field"
            placeholder="Placeholder text"
            onChange={event => {
              if (event.target.value.length > 0) {
                setMessage('');
              } else {
                setMessage(defaultErrorMessage);
              }
              setValue(event.target.value);
            }}
            value={value}
          />
        </FormField>
      </Form>
    </Box>
  );
};