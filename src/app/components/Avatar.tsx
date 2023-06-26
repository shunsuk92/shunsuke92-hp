import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function Avatar(props: AvatarProps) {
  const { src, alt, width = 40, height = 40 } = props;
  return (
    <Image
      src={src}
      alt={alt}
      className='rounded-full w-10 md:w-12'
      width={width}
      height={height}
    />
  );
}
