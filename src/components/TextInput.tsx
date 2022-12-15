import classNames from 'classnames';

export type TextInputProps = {
  label: string;
  value: string;
  errorMessage?: string;
  autocomplete?: string;
  inputClassName?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

let textInputId = 0;

const TextInput = ({
  label,
  value,
  errorMessage,
  autocomplete,
  inputClassName,
  disabled = false,
  onChange,
}: TextInputProps) => {
  const id = `text-input-${textInputId++}`;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-bold text-gray-600"
      >
        {label}
      </label>
      <input
        id={id}
        className={classNames(
          'w-full p-1 px-2 bg-white border border-gray-400 rounded disabled:bg-gray-100',
          inputClassName
        )}
        autoComplete={autocomplete}
        disabled={disabled}
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {errorMessage && (
        <div className="py-1 text-xs text-red-600 truncate whitespace-nowrap">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default TextInput;
