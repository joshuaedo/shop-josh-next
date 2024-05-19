import { PageHead } from '@/components/layout/head';
import { Page } from '@/components/common/page';
import { buttonVariants } from '@/components/common/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

interface NotFoundPageProps {}

const NotFoundPage = ({}: NotFoundPageProps) => {
  const { images, siteName } = siteConfig;
  return (
    <Page>
      <PageHead
        title={`404 on ${siteName}`}
        description='Page not found'
        image={images[2]}
      />
      <div className='bg-gray-100 mt-8 flex items-center justify-center h-[80svh]'>
        <div className='bg-gray-200 flex items-center justify-center w-[80%] md:w-[70%] lg:w-[60%] h-[70svh] md:h-[60svh]'>
          <div className='flex flex-col items-center gap-2 lg:gap-4'>
            <p className='text-lg lg:text-xl lowercase'>Page not found.</p>
            <div className='flex gap-2 lg:gap-4'>
              <Link
                href={'/'}
                className={cn(
                  'text-xs md:text-sm',
                  buttonVariants()({ variant: 'outline' })
                )}
              >
                Go back to bedroom
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default NotFoundPage;
