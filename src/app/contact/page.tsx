/* eslint-disable @next/next/no-img-element */

import BreadCrumbs from '@/shared/components/BreadCrumbs'
import Container from '@/shared/components/Container'
import React from 'react'
import { ContactForm } from './components/ContactForm'

export default function Page() {
    const breadcrumbs = {
        title: 'Contact Us',
        breadCrumbs: [
            { title: 'Home', to: '/' },
            { title: 'Contact Us', to: '/contact' }
        ]
    }
    return (
        <div className="bg-[#F3F3F3]">
            <BreadCrumbs title={breadcrumbs.title} items={breadcrumbs.breadCrumbs} />

            <Container className="min-h-[120vh] flex items-center justify-center">
                <div className="relative bg-white p-8 w-full flex rounded-md shadow-md items-center">
                    <div className="w-1/2  overflow-y-auto flex flex-col justify-between p-8 text-black">
                        <ContactForm />
                    </div>
                    <div className="w-1/2  flex items-center p-8 ">
                        <img
                            src={"/contact/contact.png"}
                            alt="Hero"
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                </div>
            </Container >
        </div>
    )
}
