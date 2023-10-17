import { ComponentPropsWithoutRef } from 'react';

import Image from 'next/image';

type AvatarProps = {
  size?: 'small' | 'medium' | 'large';
} & ComponentPropsWithoutRef<typeof Image>;

export function Avatar({ src, alt, size = 'medium' }: AvatarProps) {
  const width =
    size === 'small' ? 'w-10 md:w-12' : size === 'medium' ? 'w-12 md:w-14' : 'w-14 md:w-20';

  return <Image src={src} alt={alt} className={`rounded-full ${width}`} width={100} height={100} />;
}
