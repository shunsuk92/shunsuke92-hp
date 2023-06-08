interface IconButtonProps {
  children: any;
  onClick?: () => void;
}

export function IconButton(props: IconButtonProps) {
  const { children, onClick } = props;
  return (
    <button
      className='transition bg-slate-700 hover:bg-slate-600 active:scale-95 rounded-full p-1 w-10 md:w-12'
      onClick={onClick}
    >
      {children}
    </button>
  );
}
