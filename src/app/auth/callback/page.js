'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../../../context/UserContext';

export default function CallbackPage() {
  const { setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    const getUserData = async () => {
      const code = new URL(window.location.href).searchParams.get('code');

      if (!code) return;

      try {
        // Exchange code for token
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: process.env.REDIRECT_URI,
            grant_type: 'authorization_code',
          }),
        });

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        // Get user info
        const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const userInfo = await userInfoResponse.json();
        setUser(userInfo);
        router.replace('/');
      } catch (error) {
        console.error('Google login error:', error);
      }
    };

    getUserData();
  }, [setUser, router]);

  return <p className="text-center p-10">Signing you in...</p>;
}
