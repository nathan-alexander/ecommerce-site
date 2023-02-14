import { ActionArgs, json } from '@remix-run/node'
import { Form, useActionData, useFetcher } from '@remix-run/react'
import { supabase } from '../../src/supabaseClient'

export async function action({ request }: ActionArgs) {
    const formData = await request.formData()
    const email = formData.get('email')
    const fname = formData.get('fname')
    const lname = formData.get('lname')
    try {
        await subscribe(email, fname, lname)
        return json(
            { error: null, ok: true, subscription: true },
            { status: 200 }
        )
    } catch (error: any) {
        return json({ error: error.message, ok: false })
    }
}

async function subscribe(
    email: FormDataEntryValue | null,
    fname: FormDataEntryValue | null,
    lname: FormDataEntryValue | null
) {
    try {
        const userInformation = {
            email: email,
            fname: fname,
            lname: lname,
        }
        let { error } = await supabase.from('user').insert(userInformation)
        if (error) throw error
    } catch (error) {
        console.log(error)
    }
}

export default function EmailSignup() {
    let actionData = useActionData()
    let state: 'idle' | 'success' | 'error' = actionData?.subscription
        ? 'success'
        : actionData?.error
        ? 'error'
        : 'idle'

    return (
        <div className='p-4 border rounded-md bg-white w-1/4 mx-auto flex justify-center items-center relative'>
            <Form
                method='post'
                className={`${state === 'success' ? 'invisible' : ''}`}
                action='/resources/subscribe'
            >
                <p className='py-4'>
                    <input
                        name='email'
                        type='text'
                        className='border w-full p-2'
                        placeholder='Email'
                    />
                </p>
                <p className='py-4 border text-center'>
                    <button type='submit'>Submit</button>
                </p>
            </Form>

            <div
                className={`absolute inset-0 z-10 self-center flex justify-center items-center ${
                    state !== 'success' ? 'invisible' : ''
                }`}
            >
                <div className='text-center'>
                    <h2>You're subscribed!</h2>
                    <p>Please check your email to confirm your subscription</p>
                </div>
            </div>
        </div>
    )
}
