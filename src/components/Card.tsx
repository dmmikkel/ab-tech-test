import classNames from 'classnames';

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        'bg-white overflow-hidden shadow-xl rounded-lg',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
