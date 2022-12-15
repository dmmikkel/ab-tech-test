import { useState } from 'react';
import Button from './Button';
import Card from './Card';
import TextInput from './TextInput';

export type MoreStepValues = {
  gnr: string;
  bnr: string;
  festnr: string;
  seksjonsnr: string;
  bygningsnr: string;
  bolignr: string;
};

export type MoreStepProps = {
  initialValues: MoreStepValues | undefined;
  municipality: string;
  onDone: (values: MoreStepValues) => void;
  onBack: () => void;
};

const MoreStep = ({
  initialValues,
  municipality,
  onDone,
  onBack,
}: MoreStepProps) => {
  const [gnr, setGnr] = useState(initialValues?.gnr ?? '');
  const [bnr, setBnr] = useState(initialValues?.bnr ?? '');
  const [festnr, setFestnr] = useState(initialValues?.festnr ?? '');
  const [seksjonsnr, setSeksjonsnr] = useState(initialValues?.seksjonsnr ?? '');
  const [bygningsnr, setBygningsnr] = useState(initialValues?.bygningsnr ?? '');
  const [bolignr, setBolignr] = useState(initialValues?.bolignr ?? '');

  const handleSubmit = () => {
    onDone({
      gnr,
      bnr,
      festnr,
      seksjonsnr,
      bygningsnr,
      bolignr,
    });
  };

  return (
    <Card className="grid grid-cols-6 gap-4 p-8">
      <div className="col-span-6">
        <h2 className="text-lg font-bold">Mer informasjon</h2>
        <p className="my-2 text-sm text-gray-600">
          Fyll ut de relevante feltene for eiendommen / byggestedet.
        </p>
        <p className="my-2 text-sm text-gray-600">
          Du kan finne informasjon om en eiendom hos{' '}
          <a
            href="https://seeiendom.kartverket.no/"
            className="inline-flex text-blue-600 hover:underline hover:text-blue-800"
            target="_blank"
          >
            <span>Kartverket</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          .
        </p>
      </div>
      <div className="col-span-6">
        <TextInput
          label="Kommune"
          value={municipality}
          disabled
        />
      </div>
      <div className="col-span-3">
        <TextInput
          label="Gårdsnummer"
          value={gnr}
          onChange={setGnr}
        />
      </div>
      <div className="col-span-3">
        <TextInput
          label="Bruksnummer"
          value={bnr}
          onChange={setBnr}
        />
      </div>
      <div className="col-span-3">
        <TextInput
          label="Festenummer"
          value={festnr}
          onChange={setFestnr}
        />
      </div>
      <div className="col-span-3">
        <TextInput
          label="Seksjonsnummer"
          value={seksjonsnr}
          onChange={setSeksjonsnr}
        />
      </div>
      <div className="col-span-3">
        <TextInput
          label="Bygningsnummer"
          value={bygningsnr}
          onChange={setBygningsnr}
        />
      </div>
      <div className="col-span-3">
        <TextInput
          label="Bolignummer"
          value={bolignr}
          onChange={setBolignr}
        />
      </div>
      <div className="flex justify-between mt-4 col-span-full">
        <Button
          text="Forrige"
          variant="secondary"
          onClick={onBack}
        />
        <Button
          text="Neste"
          onClick={handleSubmit}
        />
      </div>
    </Card>
  );
};

export default MoreStep;
