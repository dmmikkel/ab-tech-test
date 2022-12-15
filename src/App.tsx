import { useState } from 'react';
import AddressStep, { AddressStepValues } from './components/AddressStep';
import ConfirmStep, { ConfirmStepValues } from './components/ConfirmStep';
import DoneStep from './components/DoneStep';
import MoreStep, { MoreStepValues } from './components/MoreStep';
import StepIndicator from './components/StepIndicator';

function App() {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState<AddressStepValues | undefined>();
  const [more, setMore] = useState<MoreStepValues | undefined>();
  const [confirm, setConfirm] = useState<ConfirmStepValues | undefined>();

  return (
    <div className="flex flex-col items-center my-8">
      <img
        src="/logo.png"
        alt="Arkitektsbedriftene logo"
        className="w-full h-auto max-w-sm px-8 mb-16"
      />
      <h2 className="mx-8 mb-8 text-2xl text-center">
        Egenerklæring for selvbygger
      </h2>
      {step < 4 && (
        <div className="flex gap-4 mb-8">
          <StepIndicator
            number={1}
            isCompleted={step > 1}
            isCurrentStep={step === 1}
          />
          <StepIndicator
            number={2}
            isCompleted={step > 2}
            isCurrentStep={step === 2}
          />
          <StepIndicator
            number={3}
            isCompleted={step > 3}
            isCurrentStep={step === 3}
          />
        </div>
      )}
      <div className="w-full max-w-lg">
        {step === 1 && (
          <AddressStep
            initialValues={address}
            onDone={(v) => {
              setAddress(v);
              setStep(2);
            }}
          />
        )}
        {step === 2 && (
          <MoreStep
            initialValues={more}
            municipality={address?.municipality ?? ''}
            onDone={(v) => {
              setMore(v);
              setStep(3);
            }}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <ConfirmStep
            address={address!}
            more={more!}
            onDone={(v) => {
              setConfirm(v);
              setStep(4);
            }}
            onBack={() => setStep(2)}
          />
        )}
        {step === 4 && (
          <DoneStep
            address={address!}
            more={more!}
            confirm={confirm!}
          />
        )}
      </div>
    </div>
  );
}

export default App;
