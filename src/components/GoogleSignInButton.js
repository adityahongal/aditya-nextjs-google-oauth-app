'use client';

import { Button } from '@mui/material';

const GoogleSignInButton = () => {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;

  const handleGoogleLogin = () => {
    const baseUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: 'openid profile email',
      access_type: 'offline',
      prompt: 'consent',
    });

    window.location.href = `${baseUrl}?${params.toString()}`;
  };

  return (
    <Button variant="contained" onClick={handleGoogleLogin}>
      Sign in with Google
    </Button>
  );
};

export default GoogleSignInButton;
