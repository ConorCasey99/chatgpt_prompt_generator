import '@styles/globals.css';
import { Children } from 'react';

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
                {children}
            </main>
        </body>
    </html>
  )
}

export default layout