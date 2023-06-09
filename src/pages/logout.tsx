import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@lib/context/auth-context';
import { MainContainer } from '@components/home/main-container';
import { SEO } from '@components/common/seo';
import { HomeLayout, ProtectedLayout } from '@components/layout/common-layout';
import { MainLayout } from '@components/layout/main-layout';
import type { ReactElement, ReactNode } from 'react';

export default function Logout(): JSX.Element {
  const router = useRouter();
  const { signOut } = useAuth();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await signOut();
        router.push('/');
      } catch (error) {
        console.error('Logout error:', error);
      }
    };

    handleLogout();
  }, []);

  return (
    <MainContainer>
      <SEO title="Logout" />
      <section></section>
    </MainContainer>
  );
}

Logout.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      {page}
    </MainLayout>
  </ProtectedLayout>
);
