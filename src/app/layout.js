import './globals.css';
import { UserProvider } from '../context/UserContext';

export const metadata = {
  title: 'Google Sign-In App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
