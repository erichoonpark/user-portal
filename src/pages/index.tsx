import { AuthLayout } from '@components/layout/auth-layout';
import { SEO } from '@components/common/seo';
import { IndexMain } from '@components/index/index-main';
import { LoginFooter } from '@components/login/login-footer';
import type { ReactElement, ReactNode } from 'react';
import Link from 'next/link';

export default function Login(): JSX.Element {
  return (
    <div className='grid min-h-screen grid-rows-[1fr,auto]'>
      <SEO
        title='Minka - Applicant Portal'
        description='Gain the skills you need and find your dream job.'
       />
      <IndexMain />
      <LoginFooter />
    </div>
  );
}

Login.getLayout = (page: ReactElement): ReactNode => (
  <AuthLayout>{page}</AuthLayout>
);
