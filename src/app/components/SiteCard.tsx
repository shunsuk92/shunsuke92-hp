import Image from 'next/image';

export interface SiteCardProps {
  name: string;
  logoUrl: string;
  url?: string;
  width: string;
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
