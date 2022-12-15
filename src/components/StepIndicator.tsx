export type StepIndicatorProps = {
  number: number;
  isCompleted: boolean;
  isCurrentStep: boolean;
};

const StepIndicator = ({
  number,
  isCompleted,
  isCurrentStep,
}: StepIndicatorProps) => {
  if (isCompleted) {
    return (
      <div className="flex items-center justify-center w-6 h-6 text-white transition-colors border-2 rounded-full border-primary-dark bg-primary-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div>
    );
  }

  if (isCurrentStep) {
    return (
      <div className="flex items-center justify-center w-6 h-6 transition-colors border-2 rounded-full border-primary-dark">
        <span className="text-xs font-bold text-primary-dark">{number}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-6 h-6 transition-colors border-2 border-gray-400 rounded-full">
      <span className="text-xs font-bold text-gray-600">{number}</span>
    </div>
  );
};

export default StepIndicator;
