import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from 'react';

type TEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
interface IUserInput {
  (
    defaultValue?: string,
    placeholder?: string,
    onChangeCallback?: ((value: string) => string) | null,
    props?: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  ): {
    props: {
      value: string;
      placeholder: string;
      onChange: (event: TEvent) => void;
    };
    onClear: () => void;
  };
}

const useInput: IUserInput = (
  defaultValue = '',
  placeholder = '',
  onChangeCallback = null,
  props
) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: TEvent) => {
    const { value } = e.target;

    if (onChangeCallback) {
      setValue(onChangeCallback(value));
    } else {
      setValue(value);
    }
  };

  const onClear = () => {
    setValue('');
  };

  return {
    props: {
      ...props,
      value,
      onChange,
      placeholder,
    },
    onClear,
  };
};

export default useInput;
