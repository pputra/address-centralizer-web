import React, { useState } from 'react';

type EventTypes = React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLInputElement>;

interface RetVals {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  reset: () => void;
  bind: {
    value: string;
    onChange: (e: EventTypes) => void;
  };
}

export function useInput(initialValue: string): RetVals {
  const [value, setValue] = useState<string>(initialValue);

  return {
    value,
    setValue,
    reset: (): void => setValue(''),
    bind: {
      value,
      onChange: (e: EventTypes): void => {
        setValue((e.target as HTMLFormElement).value);
      },
    },
  };
}
