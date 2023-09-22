'use client'

import { useState } from 'react'
import { ArrowLongRightIcon, CheckIcon } from '@heroicons/react/24/solid'

export default function Form() {
    const [emailSent, setEmailSent] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        const data = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const jsonData = JSON.stringify(data)
        const endpoint = '/api/send'

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsonData,
        }
        const response = await fetch(endpoint, options)
        const resData = await response.json()
        console.log(resData)
        if (response.status === 200) {
            console.log('message sent')
            setEmailSent(true)
        }
    }

    return (
        <div>
            <form
                autoComplete="off"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
            >
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label
                            for="firstName"
                            className="text-black mb-2 text-sm block font-normal"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            required
                            min-length={2}
                            max-maxLength={200}
                            className="bg-[#f6f6f6] border border-black placeholder-[#999999] text-black text-sm w-full p-2"
                        />
                    </div>
                    <div>
                        <label
                            for="lastName"
                            className="text-black mb-2 text-sm block font-normal"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            min-length={2}
                            max-maxLength={200}
                            className="bg-[#f6f6f6] border border-black placeholder-[#999999] text-black text-sm w-full p-2"
                        />
                    </div>
                </div>
                <div>
                    <label
                        for="email"
                        className="text-black mb-2 text-sm block font-normal"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        min-length={2}
                        max-maxLength={200}
                        className="bg-[#f6f6f6] border border-black placeholder-[#999999] text-black text-sm w-full p-2"
                    />
                </div>
                <div>
                    <label
                        for="subject"
                        className="text-black mb-2 text-sm block font-normal"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        required
                        min-length={2}
                        max-maxLength={200}
                        className="bg-[#f6f6f6] border border-black placeholder-[#999999] text-black text-sm w-full p-2"
                    />
                </div>
                <div>
                    <label
                        for="message"
                        className="text-black mb-2 text-sm block font-normal"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        required
                        min-length={10}
                        max-maxLength={1000}
                        className="bg-[#f6f6f6] border border-black placeholder-[#999999] text-black text-sm w-full p-2"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-3 w-full rounded-full border border-[#4bbd04] bg-transparent px-6 py-3 hover:bg-[#4bbd04] hover:text-[#f6f6f6] sm:w-fit"
                >
                    Get In Touch{' '}
                    <ArrowLongRightIcon className="h-7 w-7 inline" />
                </button>
                {emailSent && (
                    <p className="text-[#4bbd04] text-sm mt-2">
                        <CheckIcon className="h-7 w-7 inline" /> Email sent!
                    </p>
                )}
            </form>
        </div>
    )
}
