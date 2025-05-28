import 'src/global.css';

import { useEffect } from 'react';

import { usePathname } from 'src/routes/hooks';

import { AuthProvider } from 'src/auth';
import { themeConfig, ThemeProvider } from 'src/theme';

import { SnackBar } from 'src/components/SnackBar';
import { ProgressBar } from 'src/components/ProgressBar';
import { MotionLazy } from 'src/components/animate/MotionLazy';
import { SettingsDrawer, defaultSettings, SettingsProvider } from 'src/components/Settings';

import ApolloProvider from './ApolloProvider';
import { DayjsProvider } from './DayjsProvider';

// ----------------------------------------------------------------------

type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: AppProps) {
  useScrollToTop();

  return (
    <ApolloProvider>
      <DayjsProvider>
        <AuthProvider>
          <SettingsProvider defaultSettings={defaultSettings}>
            <ThemeProvider
              modeStorageKey={themeConfig.modeStorageKey}
              defaultMode={themeConfig.defaultMode}
            >
              <MotionLazy>
                <SnackBar />
                <ProgressBar />
                <SettingsDrawer defaultSettings={defaultSettings} />
                {children}
              </MotionLazy>
            </ThemeProvider>
          </SettingsProvider>
        </AuthProvider>
      </DayjsProvider>
    </ApolloProvider>
  );
}

// ----------------------------------------------------------------------

function useScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
