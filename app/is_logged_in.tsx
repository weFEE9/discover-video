'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { magicAuth } from '@/lib/magic-client';

export default function IsLoggedIn({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    console.log('useEffect');

    if (!magicAuth) return;

    const handleIsLoggedIn = async () => {
      const isLoggedIn = await magicAuth.user?.isLoggedIn();
      console.log('isLoggedIn', isLoggedIn);
      if (!isLoggedIn) {
        router.push('/login');
      }
    };

    handleIsLoggedIn();
  }, [magicAuth]);

  return <>{children}</>;
}
