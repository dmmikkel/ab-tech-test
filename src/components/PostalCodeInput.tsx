import { PostalCodeRecord, postalCodes } from '../data/postalCodes';
import TextInput from './TextInput';

export type PostalCodeInputProps = {
  value: string;
  errorMessage?: string;
  onChange: (value: string, record: PostalCodeRecord | undefined) => void;
};

const PostalCodeInput = ({
  value,
  errorMessage,
  onChange,
}: PostalCodeInputProps) => {
  return (
    <TextInput
      label="Postnummer"
      value={value}
      errorMessage={errorMessage}
      autocomplete="postal-code"
      inputClassName="max-w-[8rem] xs:max-w-none"
      onChange={(value) => onChange(value, postalCodes[value])}
    />
  );
};

export default PostalCodeInput;
