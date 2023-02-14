import type { MetaFunction } from '@remix-run/node'
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    Link,
} from '@remix-run/react'
import styles from './styles/app.css'

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'New Remix App',
    viewport: 'width=device-width,initial-scale=1',
})

export function links() {
    return [
        { rel: 'stylesheet', href: styles },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap',
        },
    ]
}

function Document({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-screen flex flex-col'>
            <header className='bg-white h-32'>
                <div className='mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                    <h1 className='text-3xl font-bold text-gray-900 text-center'>
                        <Link to='/'>GLOBAL PASSPORT</Link>
                    </h1>
                </div>
            </header>
            <main>
                <div className='h-screen mx-auto'>
                    {/* Replace with your content */}
                    <div className='px-0 md:px-0'>
                        <Outlet />
                    </div>
                    {/* /End replace */}
                </div>
            </main>
            <footer>
                <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                    <div className=' text-sm text-gray-500'>
                        <p>
                            &copy; 2023{' '}
                            <a
                                href='https://remix.run'
                                className='text-gray-900 underline'
                            >
                                Remix
                            </a>
                            . All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default function App() {
    return (
        <Document>
            <Layout>
                <Outlet />
            </Layout>
        </Document>
    )
}
