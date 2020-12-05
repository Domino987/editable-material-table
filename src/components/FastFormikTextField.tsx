import { TextField } from '@material-ui/core';
import type { TextFieldProps } from '@material-ui/core';
import { useField } from 'formik';
import * as React from 'react';
import { debounce } from 'throttle-debounce';

const INPUT_DELAY = 300;

type IProps = Omit<
  Omit<Omit<TextFieldProps, 'value'>, 'onChange'>,
  'onBlur'
> & { name: string };

function FastFormikTextField({
  name,
  children,
  helperText,
  error: fieldError,
  ...props
}: IProps) {
  const [{ value, onChange, ...fieldProps }, { error, touched }] = useField(
    name
  );
  const [innerValue, setInnerValue] = React.useState('');

  React.useEffect(() => {
    if (value !== undefined && value !== null) {
      setInnerValue(value as string);
    } else {
      setInnerValue('');
    }
  }, [value]);

  const onChangeCallbackRef = React.useRef(onChange);

  onChangeCallbackRef.current = onChange;

  const debouncedHandleOnChange = React.useMemo(
    () =>
      debounce(INPUT_DELAY, (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChangeCallbackRef.current) {
          onChangeCallbackRef.current(event);
        }
      }),
    [onChangeCallbackRef]
  );

  const handleOnChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.persist();
      const newValue = event.currentTarget.value;
      setInnerValue(newValue);
      debouncedHandleOnChange(event);
    },
    [debouncedHandleOnChange]
  );

  return (
    <TextField
      {...props}
      {...fieldProps}
      value={innerValue}
      onChange={handleOnChange}
      helperText={touched && error ? error : helperText}
      error={Boolean(touched && error) || fieldError}
    >
      {children}
    </TextField>
  );
}

export { FastFormikTextField };
