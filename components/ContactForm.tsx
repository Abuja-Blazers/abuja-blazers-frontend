'use client'

import { useForm } from "@tanstack/react-form";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

export function ContactForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="flex flex-col gap-20 px-10"
    >
      <form.Field
        name="name"
        validators={{
          onChange: ({ value }) => (!value.trim() ? "Name is required" : undefined),
        }}
      >
        {(field) => (
          <Input
            label="Your Name"
            name={field.name}
            placeholder="Enter your full name"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            error={field.state.meta.errors[0]}
          />
        )}
      </form.Field>

      <form.Field
        name="email"
        validators={{
          onChange: ({ value }) =>
            !value.trim()
              ? "Email is required"
              : !/\S+@\S+\.\S+/.test(value)
                ? "Invalid email"
                : undefined,
        }}
      >
        {(field) => (
          <Input
            label="Email"
            name={field.name}
            type="email"
            placeholder="Enter your email"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            error={field.state.meta.errors[0]}
          />
        )}
      </form.Field>

      <form.Field name="phone">
        {(field) => (
          <Input
            label="Phone Number (Optional)"
            name={field.name}
            type="tel"
            placeholder="Enter your phone number"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      </form.Field>

      <form.Field
        name="subject"
        validators={{
          onChange: ({ value }) => (!value.trim() ? "Subject is required" : undefined),
        }}
      >
        {(field) => (
          <Input
            label="Subject"
            name={field.name}
            placeholder="What is this about?"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            error={field.state.meta.errors[0]}
          />
        )}
      </form.Field>


      <form.Field
        name="message"
        validators={{
          onChange: ({ value }) => (!value.trim() ? "Message is required" : undefined),
        }}
      >
        {(field) => (
          <Textarea
            label="Message"
            name={field.name}
            placeholder="Write your message..."
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            error={field.state.meta.errors[0]}
          />
        )}
      </form.Field>

      <button type="submit" className="btn rounded py-10 px-20 uppercase bg-stc-200 border-[.6px] border-stc-900 text-grey-400 font-button font-bold max-w-fit">
        Send Message
      </button>
    </form>
  );
}