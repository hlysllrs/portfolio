import * as React from 'react'

export const EmailTemplate = ({ firstName, subject, message }) => (
    <div>
        <h1>
            Hi, {firstName}! Thanks for contacting me regarding the {subject}.
        </h1>
        <p>{message}</p>
    </div>
)

export default EmailTemplate
