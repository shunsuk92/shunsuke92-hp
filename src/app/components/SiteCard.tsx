import Image from 'next/image';

export interface SiteCardProps {
  name: string;
  logoUrl: string;
  url?: string;
  width:
    | 'w-0'
    | 'w-px'
    | 'w-0.5'
    | 'w-1'
    | 'w-1.5'
    | 'w-2'
    | 'w-2.5'
    | 'w-3'
    | 'w-3.5'
    | 'w-4'
    | 'w-5'
    | 'w-6'
    | 'w-7'
    | 'w-8'
    | 'w-9'
    | 'w-10'
    | 'w-11'
    | 'w-12'
    | 'w-14'
    | 'w-16'
    | 'w-20'
    | 'w-24'
    | 'w-28'
    | 'w-32'
    | 'w-36'
    | 'w-40'
    | 'w-44'
    | 'w-48'
    | 'w-52'
    | 'w-56'
    | 'w-60'
    | 'w-64'
    | 'w-72'
    | 'w-80'
    | 'w-96';
}

export function SiteCard(props: SiteCardProps) {
  const { name, logoUrl, url, width } = props;
  return (
    <a
      href={url}
      target='_blank'
      className={`${
        url ? '' : 'pointer-events-none'
      } relative transition bg-slate-200 active:scale-95 flex items-center justify-center grow md:grow-0 w-56 h-40 md:h-56 rounded-lg`}
    >
      {url && (
        <span className='transition absolute w-full h-full hover:bg-slate-200/20 rounded-lg scale-105'></span>
      )}
      <Image
        src={logoUrl}
        alt={`${name} logo`}
        width={0}
        height={0}
        className={`absolute pointer-events-none ${width} h-auto`}
        priority
      />
    </a>
  );
}
