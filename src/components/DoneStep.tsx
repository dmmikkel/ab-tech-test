import { useEffect, useState } from 'react';
import Card from './Card';
import { AddressStepValues } from './AddressStep';
import { ConfirmStepValues } from './ConfirmStep';
import { MoreStepValues } from './MoreStep';
import Spinner from './Spinner';
import StepIndicator from './StepIndicator';

export type DoneStepProps = {
  address: AddressStepValues;
  more: MoreStepValues;
  confirm: ConfirmStepValues;
};

const DoneStep = ({ address, more, confirm }: DoneStepProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const save = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          'https://arkitektbedriftene.free.beeceptor.com/form/save',
          {
            method: 'POST',
            body: JSON.stringify({
              ...address,
              ...more,
              ...confirm,
            }),
          }
        );
        // Add 2s delay to make sure loading state is shown.
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.error(error);
        // Should obviously have error handling.
      }
      setIsLoading(false);
    };
    save();
  }, []);

  return (
    <Card className="flex items-center justify-center p-8 h-96">
      {isLoading && (
        <div className="flex flex-col items-center justify-center">
          <Spinner />
          <p className="mt-4">Sender inn</p>
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-12 h-12 text-white transition-colors border-2 rounded-full border-primary-dark bg-primary-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <p className="mt-4 text-xl text-primary-dark">Skjema er sendt inn.</p>
        </div>
      )}
    </Card>
  );
};

export default DoneStep;
