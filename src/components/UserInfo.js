'use client';

import { Button, Avatar, Typography, Box } from '@mui/material';
import { useUser } from '../context/UserContext';

const UserInfo = () => {
  const { user, setUser } = useUser();

  return (
    <Box className="flex flex-col items-center gap-4">
      <Avatar src={user.picture} sx={{ width: 80, height: 80 }} />
      <Typography variant="h6">{user.name}</Typography>
      <Typography>{user.email}</Typography>
      <Button variant="outlined" color="error" onClick={() => setUser(null)}>
        Sign Out
      </Button>
      <Button
        variant="contained"
        onClick={() => (window.location.href = 'https://linktr.ee/adityahongal')}
      >
        Go to Portfolio
      </Button>
    </Box>
  );
};

export default UserInfo;
