import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Md Arbaaz Hussain – Full Stack Developer',
  description:
    'Full Stack Developer skilled in building scalable and responsive web applications using React, Redux Toolkit, Node.js, Express, MongoDB, WebRTC, and more.',
  keywords: [
    'Md Arbaaz Hussain',
    'Full Stack Developer',
    'JavaScript',
    'React',
    'Redux Toolkit',
    'Node.js',
    'Express.js',
    'MongoDB',
    'WebRTC',
    'HLS',
    'REST APIs',
    'Tailwind CSS',
    'shadcn UI',
    'Frontend Developer',
    'Backend Developer',
    'MERN Stack',
    'Portfolio',
    'Clean Code',
    'Real-time Apps',
    'Media Streaming',
    'Socket.IO',
  ],
  authors: [{ name: 'Md Arbaaz Hussain' }],
  creator: 'Md Arbaaz Hussain',
  openGraph: {
    title: 'Md Arbaaz Hussain – Full Stack Developer Portfolio',
    description:
      'Explore the portfolio of Md Arbaaz Hussain, a full stack developer building real-time and scalable applications with modern JavaScript technologies.',
    url: 'https://arbaaz-hussain-5.github.io',
    siteName: 'Md Arbaaz Hussain Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Md Arbaaz Hussain – Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md Arbaaz Hussain – Full Stack Developer',
    description:
      'Explore the portfolio of Md Arbaaz Hussain, showcasing modern full stack web development using React, Node.js, and more.',
    creator: '@yourTwitterHandle',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
