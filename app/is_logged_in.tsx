'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import { magicAuth } from '@/lib/magic-client';

export default function IsLoggedIn({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleIsLoggedIn = async () => {
      const isLoggedIn = await magicAuth.user?.isLoggedIn();
      // FIXME: there would be router flicker in this approach
      setIsLoading(false);
      if (!isLoggedIn) {
        router.push('/login');
      }
    };

    handleIsLoggedIn();
  }, []);

  return isLoading ? <div>Loading...</div> : <>{children}</>;
}
