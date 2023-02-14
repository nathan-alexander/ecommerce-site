import { Link } from '@remix-run/react'
export default function Index() {
    return (
        <div className='flex flex-col lg:flex-row items-stretch h-screen'>
            <div className='h-1/2 md:h-screen hover:h-8/12 w-100 lg:w-1/2 lg:hover:w-8/12 transition-ease duration-500 bg-passportleft bg-no-repeat bg-cover bg-left-top w-100 h-100 flex items-center justify-center'>
                <div className='lg:absolute text-white lg:text-5xl text-justify text-shadow-lg'>
                    FASHION
                    <span className='absolute text-justify text-white block text-xs'>
                        <Link to='/fashion'>SHOP NOW</Link>
                    </span>
                </div>
            </div>
            <div className='h-1/2 md:h-screen lg:w-1/2 w-100 lg:hover:w-8/12 transition-ease duration-500 bg-passportright bg-no-repeat bg-cover bg-right md:bg-bottom w-100 h-100 flex items-center justify-center'>
                <div className='lg:absolute text-white lg:text-5xl text-justify text-shadow-lg'>
                    DIGITAL
                    <span className='lg:absolute text-justify text-white block text-xs'>
                        <Link to='/digital'>SHOP NOW</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
