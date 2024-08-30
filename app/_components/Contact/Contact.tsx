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
        <div className="w-full lg:w-3/5">
          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors: IContactFormErrors = {};
              if (!values.fullName) {
                errors.fullName = "Full name cannot be empty";
              }
              if (!values.email) {
                errors.email = "Email cannot be empty";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.subject) {
                errors.subject = "Subject cannot be empty";
              }
              if (!values.message) {
                errors.message = "Message cannot be empty";
              }
              return errors;
            }}
            onSubmit={(
              values: IContactFormValues,
              { setSubmitting, resetForm }: FormikHelpers<IContactFormValues>,
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values));
                setSubmitting(false);
                resetForm();
              }, 4000);
            }}
          >
            {({
              values,
              errors,
              touched,
              isSubmitting,
              handleSubmit,
              handleChange,
              handleBlur,
            }) => (
              <form
                onSubmit={handleSubmit}
                className="relative grid grid-cols-2 gap-6 gap-y-8 text-zinc-800 transition-all duration-700 dark:text-zinc-100"
              >
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="full-name"
                    className="mb-3 block cursor-pointer pl-5 font-bold uppercase"
                  >
                    Full name
                    <b className="text-primary-violet ml-2 font-semibold">*</b>
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="fullName"
                    placeholder="John Doe"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="relative h-16 w-full rounded-[30px] border-2 border-zinc-800 bg-white px-8 text-base font-normal text-zinc-800 transition duration-500 dark:border-zinc-400 dark:bg-card-dark"
                  />
                  {errors.fullName && touched.fullName && (
                    <div className="pl-5 pt-2 text-xs font-semibold uppercase text-red-700">
                      {errors.fullName}
                    </div>
                  )}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="mb-3 block cursor-pointer pl-5 font-bold uppercase"
                  >
                    Email address
                    <b className="text-primary-violet ml-2 font-semibold">*</b>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@example.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="relative h-16 w-full rounded-[30px] border-2 border-zinc-800 bg-white px-8 text-base font-normal text-zinc-800 transition duration-500 dark:border-zinc-400 dark:bg-card-dark"
                  />
                  {errors.email && touched.email && (
                    <div className="pl-5 pt-2 text-xs font-semibold uppercase text-red-700">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="subject"
                    className="mb-3 block cursor-pointer pl-5 font-bold uppercase"
                  >
                    Subject
                    <b className="text-primary-violet ml-2 font-semibold">*</b>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Deploy latest version"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="relative h-16 w-full rounded-[30px] border-2 border-zinc-800 bg-white px-8 text-base font-normal text-zinc-800 transition duration-500 dark:border-zinc-400 dark:bg-card-dark"
                  />
                  {errors.subject && touched.subject && (
                    <div className="pl-5 pt-2 text-xs font-semibold uppercase text-red-700">
                      {errors.subject}
                    </div>
                  )}
                </div>
                <div className="relative col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-3 block cursor-pointer pl-5 font-bold uppercase"
                  >
                    Message
                    <b className="text-primary-violet ml-2 font-semibold">*</b>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="relative z-10 w-full rounded-[30px] border-2 border-zinc-800 bg-white p-8 text-base font-normal text-zinc-800 transition duration-500 dark:border-zinc-400 dark:bg-card-dark"
                  />
                  <div className="absolute bottom-[14px] h-20 w-20 md:-bottom-[145px] md:-left-[135px] md:h-60 md:w-60">
                    <Image
                      fill
                      src={dots}
                      alt="Dots Element"
                      className="transition duration-700 dark:opacity-60 dark:invert"
                    />
                  </div>
                  {errors.message && touched.message && (
                    <div className="pl-5 pt-2 text-xs font-semibold uppercase text-red-700">
                      {errors.message}
                    </div>
                  )}
                </div>
                <div className="col-span-2 ml-auto">
                  <ButtonPrimary type="submit" text="Send Message" disabled />
                </div>
                <div className="absolute left-1/2 top-1/2 z-20 flex h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-zinc-200/30 p-8 shadow backdrop-blur xl:h-[110%] xl:w-[110%]">
                  <h2 className="text-center text-2xl font-bold uppercase">
                    Available in next version
                  </h2>
                </div>
              </form>
            )}
          </Formik>
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
