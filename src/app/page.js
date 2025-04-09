'use client';

import { Container, Typography, Box } from '@mui/material';
import GoogleSignInButton from '../components/GoogleSignInButton';
import { useUser } from '../context/UserContext';
import UserInfo from '../components/UserInfo';

export default function Home() {
  const { user } = useUser();

  return (
    <Container className="flex flex-col items-center justify-center min-h-screen gap-4">
      {user ? (
        <UserInfo />
      ) : (
        <Box className="flex flex-col items-center gap-4">
          <Typography variant="h4">Welcome</Typography>
          <GoogleSignInButton />
        </Box>
      )}
    </Container>
  );
}
