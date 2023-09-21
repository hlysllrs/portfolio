'use client'

import styles from './Form.module.scss'

export default function Form() {
  function handleChange() {}

  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error('HTTP error! Status: ' + response.status)
      }
      const responseData = await response.json()
      console.log(responseData)
    } catch (error) {
      console.error(
        'there was a problem with the fetch operation ' + error.message
      )
    }
    console.log(data)
  }

  return (
    <div className={styles.contactForm}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label for="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          required
          min-length={2}
          max-maxLength={200}
        />
        <label for="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          required
          min-length={2}
          max-maxLength={200}
        />
        <label for="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          required
          min-length={2}
          max-maxLength={200}
        />
        <label for="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          required
          min-length={2}
          max-maxLength={200}
        />
        <label for="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          required
          min-length={10}
          max-maxLength={1000}
        />
        <button type="submit">{`Get In Touch ->`}</button>
      </form>
    </div>
  )
}
