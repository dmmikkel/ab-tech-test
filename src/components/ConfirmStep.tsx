import { isValid } from 'date-fns';
import { parse } from 'date-fns/esm';
import { useState } from 'react';
import { z } from 'zod';
import { extractError } from '../utils/zodIssue';
import { AddressStepValues } from './AddressStep';
import Button from './Button';
import Card from './Card';
import { MoreStepValues } from './MoreStep';
import TextInput from './TextInput';

const permissionDateSchema = z
  .string()
  .regex(/^\d{2}\.\d{2}\.\d{4}$/, 'Må være i format dd.mm.åååå.')
  .refine((str) => {
    const date = parse(str, 'dd.MM.yyyy', new Date());
    return isValid(date);
  }, 'Ugyldig dato. Formatet er dd.mm.åååå.');

const fullNameSchema = z
  .string()
  .min(1, 'Må fylles ut.')
  .max(100, 'Maks 100 tegn.');

const permissionDataSchema = z.object({
  permissionDate: permissionDateSchema,
  fullName: fullNameSchema,
  confirm: z.boolean().refine((b) => b, 'Du må bekrefte for å gå videre.'),
});

export type ConfirmStepValues = z.infer<typeof permissionDataSchema>;

export type ConfirmStepProps = {
  address: AddressStepValues;
  more: MoreStepValues;
  onDone: (values: ConfirmStepValues) => void;
  onBack: () => void;
};

const ConfirmStep = ({ address, more, onDone, onBack }: ConfirmStepProps) => {
  const [issues, setIssues] = useState<z.ZodIssue[] | null>(null);
  const [permissionDate, setPermissionDate] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [fullName, setFullName] = useState('');
  const handleSubmit = () => {
    const data: ConfirmStepValues = {
      permissionDate,
      fullName,
      confirm,
    };
    const result = permissionDataSchema.safeParse(data);
    if (!result.success) {
      setIssues(result.error.issues);
      return;
    }
    setIssues(null);
    onDone(result.data);
  };

  const confirmErrorMessage = extractError('confirm', issues);

  return (
    <Card className="grid grid-cols-6 gap-4 p-8">
      <div className="col-span-6">
        <h2 className="text-lg font-bold">Oppsummering</h2>
        <p className="my-2 text-sm text-gray-600">
          Se over utfylt data og bekreft.
        </p>
      </div>

      <dl className="grid grid-cols-2 col-span-6 gap-4 p-4 mb-8 border rounded bg-blue-50">
        <div className="col-span-full xs:col-span-1">
          <dt className="text-sm font-bold text-gray-600">Adresse</dt>
          <dd className="text-sm text-gray-800">
            {address.street}
            <br />
            {address.postalCode} {address.postalCity}
          </dd>
        </div>
        <div className="col-span-full xs:col-span-1">
          <dt className="text-sm font-bold text-gray-600">Kommune</dt>
          <dd className="text-sm text-gray-800">{address.municipality}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold text-gray-600">Bnr.</dt>
          <dd className="text-sm text-gray-800">{more.bnr}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold text-gray-600">Gnr.</dt>
          <dd className="text-sm text-gray-800">{more.gnr}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold text-gray-600">Festenr.</dt>
          <dd className="text-sm text-gray-800">{more.festnr}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold text-gray-600">Seksjonsnr.</dt>
          <dd className="text-sm text-gray-800">{more.seksjonsnr}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold text-gray-600">Bygningsnr.</dt>
          <dd className="text-sm text-gray-800">{more.bygningsnr}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold text-gray-600">Bolignr.</dt>
          <dd className="text-sm text-gray-800">{more.bolignr}</dd>
        </div>
      </dl>

      <div className="col-span-6">
        <TextInput
          label="Dato for personlig
          ansvarsrett som
          selvbygger"
          value={permissionDate}
          errorMessage={extractError('permissionDate', issues)}
          inputClassName="max-w-[10rem]"
          onChange={setPermissionDate}
        />
      </div>
      <div className="col-span-6">
        <TextInput
          label="Ditt fulle navn (tiltakshaver)"
          value={fullName}
          errorMessage={extractError('fullName', issues)}
          onChange={setFullName}
        />
      </div>
      <div className="col-span-6">
        <div className="flex items-start">
          <input
            type="checkbox"
            id="confirm"
            checked={confirm}
            onChange={(e) => setConfirm(e.target.checked)}
            className="mt-1 mr-2"
          />
          <label
            htmlFor="confirm"
            className="ml-2 text-sm"
          >
            Det bekreftes herved at mitt ansvarsområde er utført i samsvar med
            tillatelsen og bestemmelser gitt i eller med hjemmel i plan- og
            bygningsloven. Jeg er kjent med reglene om straff og sanksjoner i
            plan- og bygningsloven kap 32, og at det kan medføre reaksjoner
            dersom det er gitt uriktige opplysninger.
          </label>
        </div>
        {confirmErrorMessage && (
          <div className="py-1 mt-4 text-xs text-red-600 truncate whitespace-nowrap">
            {confirmErrorMessage}
          </div>
        )}
      </div>
      <div className="flex justify-between mt-4 col-span-full">
        <Button
          text="Forrige"
          variant="secondary"
          onClick={onBack}
        />
        <Button
          text="Send inn"
          onClick={handleSubmit}
        />
      </div>
    </Card>
  );
};

export default ConfirmStep;
