type ButtonProps = {
  text: string | JSX.Element;
  action?: (param?: any) => void;
  secundary?: boolean;
};

export const Button = ({ action, text, secundary }: ButtonProps) => {
  return (
    <div
      className={`bg-${secundary ? "red-600" : 'cyan-500'} flex rounded py-4 px-8 cursor-pointer items-center justify-center text-center`}
      onClick={action}
    >
      {text}
    </div>
  );
};
