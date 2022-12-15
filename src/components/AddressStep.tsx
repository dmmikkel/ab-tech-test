import { useState } from 'react';
import { z } from 'zod';
import { extractError } from '../utils/zodIssue';
import Button from './Button';
import Card from './Card';
import PostalCodeInput from './PostalCodeInput';
import TextInput from './TextInput';

const streetSchema = z
  .string()
  .min(1, 'Må fylles ut.')
  .max(100, 'Maks 100 tegn.');
const postalCodeSchema = z.string().regex(/\d{4}/, 'Ikke gyldig.');

const schema = z.object({
  street: streetSchema,
  postalCode: postalCodeSchema,
  postalCity: z.string(),
  municipality: z.string(),
});

export type AddressStepValues = z.infer<typeof schema>;

export type AddressStepProps = {
  initialValues?: AddressStepValues;
  onDone: (values: AddressStepValues) => void;
};

const AddressStep = ({ initialValues, onDone }: AddressStepProps) => {
  const [issues, setIssues] = useState<z.ZodIssue[] | null>(null);
  const [street, setStreet] = useState(initialValues?.street ?? '');
  const [postalCode, setPostalCode] = useState(initialValues?.postalCode ?? '');
  const [postalCity, setPostalCity] = useState(initialValues?.postalCity ?? '');
  const [municipality, setMunicipality] = useState(
    initialValues?.municipality ?? ''
  );

  const handleSubmit = () => {
    const data: AddressStepValues = {
      street,
      postalCode,
      postalCity,
      municipality,
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      setIssues(result.error.issues);
      return;
    }
    setIssues(null);
    onDone(result.data);
  };

  return (
    <Card className="grid grid-cols-6 gap-4 p-4 xs:p-8">
      <div className="col-span-6">
        <h2 className="text-lg font-bold">Erklæringen gjelder</h2>
        <p className="my-2 text-sm text-gray-600">
          Fyll ut adressen til eiendommen eller byggestedet erklæringen gjelder.
        </p>
      </div>
      <div className="col-span-full">
        <TextInput
          label="Gateadresse"
          value={street}
          autocomplete="street-address"
          errorMessage={extractError('street', issues)}
          onChange={setStreet}
        />
      </div>
      <div className="col-span-6 xs:col-span-2">
        <PostalCodeInput
          value={postalCode}
          errorMessage={extractError('postalCode', issues)}
          onChange={(value, record) => {
            setPostalCode(value);
            setPostalCity(record?.pn ?? '');
            setMunicipality(record?.mn ?? '');
          }}
        />
      </div>
      <div className="col-span-6 xs:col-span-4">
        <TextInput
          label="Poststed"
          value={postalCity}
          disabled={true}
        />
      </div>
      <div className="flex justify-end mt-4 col-span-full">
        <Button
          text="Neste"
          onClick={handleSubmit}
        />
      </div>
    </Card>
  );
};

export default AddressStep;
