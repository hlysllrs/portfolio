// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Hailey <hailey.sellars@gmail.com>',
            to: ['hailey.sellars@gmail.com'],
            subject: 'Hello world',
            react: EmailTemplate({ firstName: 'John' }),
        })

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error })
    }
}
