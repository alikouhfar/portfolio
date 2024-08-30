import { contact } from "@/app/_lib/contact";
import dots from "@/public/dots.png";
import Image from "next/image";
import { FC } from "react";
import { ButtonPrimary, LinkButtonPrimary } from "../Button";
import VerticalLine from "../VerticalLine";
import ContactCard from "./ContactCard";
import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik";

interface IContactFormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface IContactFormErrors {
  [field: string]: string;
}

const Contact: FC = () => {
  const initialValues: IContactFormValues = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };

  async function handleSumbit() {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    alert(data.message);
  }

  return (
    <section className="relative flex w-full flex-wrap justify-center p-3 pb-14">
      <div className="flex w-full max-w-full flex-col gap-16 lg:flex-row lg:items-start lg:gap-0 xl:max-w-container">
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10 lg:w-2/5 lg:grid-cols-1 lg:gap-4">
          {contact.map((data, index) => (
            <ContactCard key={index} contact={data} />
          ))}
        </div>
        <div className="flex h-full w-full items-center justify-center p-10 lg:w-3/5">
          <h2 className="rounded-full border-2 border-zinc-800 p-8 text-center text-xl font-bold uppercase leading-8">
            Contact form will be available in next version
          </h2>
        </div>
      </div>
      <VerticalLine
        linePosition="right-0"
        imagePosition="-left-5 md:-left-12"
      />
    </section>
  );
};

export default Contact;
