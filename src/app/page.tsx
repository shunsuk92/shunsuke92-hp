'use client';

import { Avatar } from '@/app/components/Avatar';
import { GitHubIcon } from '@/app/components/GitHubIcon';
import { IconButton } from '@/app/components/IconButton';
import { MailIcon } from '@/app/components/MailIcon';
import { SiteCard, SiteCardProps } from '@/app/components/SiteCard';

export default function Home() {
  const sites: SiteCardProps[] = [
    { name: 'chatmemo', logoUrl: '/chatmemo.svg', url: 'https://chat-memo.com' },
    {
      name: 'convertible',
      logoUrl: '/convertible.svg',
      url: 'https://convertible92.com',
    },
    {
      name: 'coming soon',
      logoUrl: '/comingsoon.svg',
    },
    {
      name: 'coming soon2',
      logoUrl: '/comingsoon.svg',
    },
  ];

  const linkContact = () => {
    window.location.href = 'mailto:shunsuke92.contact@gmail.com';
  };
  const linkGitHub = () => {
    window.open('https://github.com/shunsuke92', '_blank');
  };
  return (
    <div className='flex flex-col justify-between space-y-20  w-full  md:w-[46rem] px-8 md:px-0 min-h-screen max-w-full pt-10 md:pt-20 pb-4'>
      <div className='flex flex-col space-y-20 sm:space-y-40 '>
        <header className='flex items-center justify-center '>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center justify-center space-x-4'>
              <Avatar src='/shunsuke92.png' alt='shunsuke92 icon' />
              <div className='text-slate-200 font-medium text-xl md:text-2xl'>shunsuke</div>
            </div>
            <div className='flex items-center justify-center space-x-3 md:space-x-6'>
              <IconButton onClick={linkContact}>
                <MailIcon />
              </IconButton>
              <IconButton onClick={linkGitHub}>
                <GitHubIcon />
              </IconButton>
            </div>
          </div>
        </header>
        <main className='flex justify-center  max-w-full'>
          <div className='flex items-center justify-start flex-wrap gap-8'>
            {sites.map((site) => (
              <SiteCard key={site.name} {...site} />
            ))}
          </div>
        </main>
      </div>
      <footer className=' flex items-center justify-center w-full space-y-20'>
        <div className='text-slate-400 text-base '>2023 - shunsuke</div>
      </footer>
    </div>
  );
}
