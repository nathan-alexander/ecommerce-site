import { Outlet, useFetcher } from '@remix-run/react'
import { useEffect, useRef } from 'react'

function NewsLetterSignup() {
    const newsletter = useFetcher()
    const ref = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (newsletter.type === 'done' && newsletter.data.ok) {
            if (ref.current != null) {
                ref.current.reset()
            }
        }
    }, [newsletter])

    return (
        <div className='h-screen w-screen bg-skybg bg-no-repeat bg-cover flex justify-center items-center'>
            <div className='h-[540px] w-[360px] bg-passport bg-no-repeat bg-cover drop-shadow-2xl'>
                <div className='p-4 rounded-md w-3/4 mt-[275px] mx-auto flex justify-center items-center relative '>
                    <newsletter.Form
                        ref={ref}
                        method='post'
                        action='/resources/subscribe'
                    >
                        <p className='py-4'>
                            <input
                                type='email'
                                name='email'
                                className='bg-inherit w-full p-2 focus:border-b-black outline-none'
                                placeholder='Email'
                            />{' '}
                            <input
                                type='text'
                                name='fname'
                                className='bg-inherit w-full p-2 outline-none'
                                placeholder='First Name'
                            />{' '}
                            <input
                                type='text'
                                name='lname'
                                className='bg-inherit w-full p-2 outline-none'
                                placeholder='Last Name'
                            />{' '}
                            <button
                                className='mt-4 py-4 text-center'
                                type='submit'
                                disabled={newsletter.state === 'submitting'}
                            >
                                Subscribe
                            </button>
                        </p>

                        {newsletter.type === 'done' ? (
                            newsletter.data.ok ? (
                                <p>Thanks for subscribing!</p>
                            ) : newsletter.data.error ? (
                                <p data-error>{newsletter.data.error}</p>
                            ) : null
                        ) : null}
                    </newsletter.Form>
                </div>
            </div>
        </div>
    )
}
export default function Fashion() {
    return (
        <div className='h-screen bg-black text-center'>
            <h1 className='text-white'>COMING SOON</h1>
            <main>
                <NewsLetterSignup />
                <Outlet />
            </main>
        </div>
    )
}
