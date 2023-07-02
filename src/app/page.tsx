'use client';

import { Avatar } from '@/app/components/Avatar';
import { GitHubIcon } from '@/app/components/GitHubIcon';
import { IconButton } from '@/app/components/IconButton';
import { MailIcon } from '@/app/components/MailIcon';
import { SiteCard, SiteCardProps } from '@/app/components/SiteCard';

export default function Home() {
  const sites: SiteCardProps[] = [
    { name: 'chatmemo', logoUrl: '/chatmemo.svg', url: 'https://chat-memo.com', width: 'w-48' },
    {
      name: 'biticon',
      logoUrl: '/biticon.svg',
      url: 'https://bit-icon.com',
      width: 'w-36',
    },
    {
      name: 'convertible',
      logoUrl: '/convertible.svg',
      url: 'https://convertible92.com',
      width: 'w-48',
    },
  ];

  const librarys: SiteCardProps[] = [
    {
      name: 'bit-icon',
      logoUrl: '/bit-icon.svg',
      url: 'https://www.npmjs.com/package/bit-icon',
      width: 'w-28',
    },
  ];

  const creativeCodings: SiteCardProps[] = [
    {
      name: 'pointillism',
      logoUrl: '/pointillism.svg',
      url: 'https://www.pointillism.shunsuke92.com/',
      width: 'w-40',
    },
    {
      name: 'collaborative-circles',
      logoUrl: '/collaborative-circles.svg',
      url: 'https://www.collaborative-circles.shunsuke92.com/',
      width: 'w-44',
    },
  ];

  const linkContact = () => {
    window.location.href = 'mailto:shunsuk92@gmail.com';
  };
  const linkGitHub = () => {
    window.open('https://github.com/shunsuke92', '_blank');
  };
  return (
    <div className='flex flex-col justify-between space-y-40  w-full  md:w-[46rem] px-8 md:px-0 min-h-screen max-w-full pt-10 md:pt-20 pb-4'>
      <div className='flex flex-col space-y-20 sm:space-y-32 '>
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
        <main className='flex flex-col justify-center  max-w-full gap-16'>
          <div className='flex flex-col gap-6'>
            <div className='text-4xl text-slate-200 font-medium'>Web Site</div>
            <div className='grid md:flex items-center justify-start flex-wrap gap-8 grid-cols-fill-56'>
              {sites.map((site) => (
                <SiteCard key={site.name} {...site} />
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='text-4xl text-slate-200 font-medium'>Library</div>
            <div className='grid md:flex items-center justify-start flex-wrap gap-8 grid-cols-fill-56'>
              {librarys.map((library) => (
                <SiteCard key={library.name} {...library} />
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='text-4xl text-slate-200 font-medium'>Creative Coding</div>
            <div className='grid md:flex items-center justify-start flex-wrap gap-8 grid-cols-fill-56'>
              {creativeCodings.map((creativeCoding) => (
                <SiteCard key={creativeCoding.name} {...creativeCoding} />
              ))}
            </div>
          </div>
        </main>
      </div>
      <footer className=' flex items-center justify-center w-full space-y-20'>
        <div className='text-slate-400 text-base '>2023 - shunsuke</div>
      </footer>
    </div>
  );
}
