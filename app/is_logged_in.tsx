'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { magicAuth } from '@/lib/magic-client';

import Loading from '@/components/loading/loading';
import { Siemreap } from 'next/font/google';

export default function IsLoggedIn({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const handleIsLoggedIn = async () => {
    //   const isLoggedIn = await magicAuth.user?.isLoggedIn();
    //   // FIXME: there would be router flicker in this approach
    //   setIsLoading(false);
    //   if (!isLoggedIn) {
    //     router.push('/login');
    //   }
    // };
    // handleIsLoggedIn();
    setIsLoading(false);
  }, []);

  return isLoading ? <Loading /> : <>{children}</>;
}
