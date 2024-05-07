import '@styles/globals.css';
import { Children } from 'react';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "ChatGPT Prompt Generator",
    description: 'Discover and share AI prompts'
}

const layout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default layout