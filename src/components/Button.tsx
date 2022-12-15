import classNames from 'classnames';

export type ButtonProps = {
  text: string;
  variant?: 'primary' | 'secondary';
  onClick: () => void;
};

const Button = ({ text, variant, onClick }: ButtonProps) => {
  return (
    <button
      className={classNames('px-4 py-1.5 rounded border', {
        'bg-forestgreen-normal hover:bg-forestgreen-dark text-white border-transparent':
          !variant || variant === 'primary',
        'bg-white hover:bg-gray-50 text-gray-600 border-gray-300 hover:border-gray-400':
          variant === 'secondary',
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
