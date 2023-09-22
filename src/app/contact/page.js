'use client'

import { useState } from 'react'
import Form from '../components/ContactForm'
import Link from 'next/link'
import { Toast } from 'react-hot-toast'
import Image from 'next/image'

export default function Contact() {
    const [formInput, setFormInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    })

    return (
        <div className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
            <div className="relative">
                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4bbd04] from-40% via-lime-400 via-50% rounded-full h-80 w-80 z-0 blur-2xl absolute top-0 -left-4 transform -translate-x-1/3 translate-y-0"></div>
                <h5 className="text-black text-xl font-semibold my-2">
                    Get In Touch
                </h5>
                <div className="socials flex flex-row gap-2 z-10">
                    <Link
                        href="https://www.linkedin.com/in/hailey-sellars/"
                        target="_blank"
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                            width={40}
                            height={40}
                            alt="LinkedIn Icon"
                        />
                    </Link>
                    <Link href="https://github.com/hlysllrs" target="_blank">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            width={40}
                            height={40}
                            alt="GitHub Icon"
                        />
                    </Link>
                </div>
            </div>
            <Form />
            <Link href="mailto:hailey.sellars@gmail.com">Get in Touch</Link>
        </div>
    )
}
