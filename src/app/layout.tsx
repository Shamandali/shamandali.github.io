import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import StyledComponentsRegistry from '../lib/AntdRegistry';
import { ConfigProvider } from 'antd';
import theme from '../../theme/themeConfig';
import MainLayout from '@/components/MainLayout';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Check-point',
  description: 'Check-point'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            <MainLayout>{children}</MainLayout>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
