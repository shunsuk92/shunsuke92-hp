interface ButtonProps {
  children: any;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const { children, onClick } = props;

  return (
    <button
      className={`transition bg-slate-200 hover:bg-slate-200/80 active:scale-95 text-slate-700 hover:text-slate-800 font-medium rounded py-2 px-4 `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
