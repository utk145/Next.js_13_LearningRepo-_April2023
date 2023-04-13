import { Poppins } from 'next/font/google';
import './globals.css'
import Header from './components/Header';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
});

export const metadata = {
  title: 'My First Next App @utk',// This will the page title
  description: 'Following the course along :)',
  keywords:
    'next.js, beginner, tutorial, learning, web development, JavaScript, HTML, CSS, My First Next App, course, education, technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main className='container'>
          {children}
        </main>

      </body>
    </html>
  )
}
