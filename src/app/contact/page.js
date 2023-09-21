"use client";

import { useState } from "react";
import Form from "../components/Form";
import Link from "next/link";

export default function Contact() {
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div>
      <h1>This is the Contact page.</h1>
      <Form />
      <Link href="mailto:hailey.sellars@gmail.com">Get in Touch</Link>
    </div>
  );
}
