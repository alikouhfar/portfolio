import { IconCloudUp, IconPhoneCall } from "@tabler/icons-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { supabase } from "../../utils/supabase";
import "./style.css";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function Contact() {
  const { language } = useLanguage();
  const { t } = useTranslation();

  const postMessage = async (values, actions) => {
    console.log("Form submitted with values:", values);
    actions.setSubmitting(false);
    actions.resetForm();
    const { data, error } = await supabase
      .from("messages")
      .insert([
        { fullName: values.fullName },
        { email: values.email },
        { phone: values.phone },
        { subject: values.subject },
        { budget: values.budget },
        { message: values.message },
        { attachment: values.file },
      ])
      .select();
    console.log(data);
  };

  return (
    <section
      className="overflow-hidden py-[60px] tablet:pb-[40px]"
      id="contact"
    >
      <div className="m-auto max-w-[1130px] px-8 py-0 tablet:max-w-[650px]">
        <div className="ml-auto w-full max-w-[770px] tablet:max-w-full">
          <div>
            <h4
              className={`m-0 mb-14 inline-flex items-center rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white ${language === "en" ? "gap-1" : "gap-2"}`}
            >
              <IconPhoneCall
                className="mx-auto -ml-1"
                strokeWidth="1.8"
                size={16}
              />
              <span>{t("contact.tag")}</span>
            </h4>
            <h1 className="mb-8 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-[44px] small:leading-[1]">
              {t("contact.titlePartOne")}
              <span className="text-theme"> {t("contact.titlePartTwo")}</span>
            </h1>
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                phone: "",
                subject: "",
                budget: "",
                message: "",
                file: null,
              }}
              onSubmit={(values, actions) => {
                // Handle form submission
                postMessage(values, actions);
              }}
              validate={(values) => {
                const errors = {};
                if (!values.fullName) {
                  if (language === "en") {
                    errors.fullName = "Full Name cannot be empty";
                  } else {
                    errors.fullName = "نام و نام خانوادگی نمیتواند خالی باشد";
                  }
                } else if (values.fullName.length < 5) {
                  if (language === "en") {
                    errors.fullName = "Full Name must be at least 5 characters";
                  } else {
                    errors.fullName =
                      "نام و نام خانوادگی حداقل باید 5 کارکتر داشته باشد";
                  }
                }

                if (!values.email) {
                  if (language === "en") {
                    errors.email = "Email cannot be empty";
                  } else {
                    errors.email = "ایمیل نمیتواند خالی باشد";
                  }
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email,
                  )
                ) {
                  if (language === "en") {
                    errors.email = "Please enter a valid email";
                  } else {
                    errors.email = "لطفا ایمیل معتبری وارد کنید";
                  }
                }

                if (!values.subject) {
                  if (language === "en") {
                    errors.subject = "Subject should not be empty";
                  } else {
                    errors.subject = "موضوع پیام نمیتواند خالی باشد";
                  }
                }
                return errors;
              }}
            >
              {({
                isSubmitting,
                setFieldValue,
                handleBlur,
                handleChange,
                errors,
                touched,
              }) => (
                <Form>
                  {touched.fullName && errors.fullName ? (
                    <p className="mb-8 text-sm text-red-600">
                      {errors.fullName}
                    </p>
                  ) : null}
                  {touched.email && errors.email ? (
                    <p className="mb-8 text-sm text-red-600">{errors.email}</p>
                  ) : null}
                  {touched.subject && errors.subject ? (
                    <p className="mb-8 text-sm text-red-600">
                      {errors.subject}
                    </p>
                  ) : null}
                  <div className="grid grid-cols-2 gap-x-5 gap-y-10">
                    <div className="mobile:col-span-2">
                      <div className="relative flex w-full flex-wrap items-stretch">
                        <label
                          className="mb-0.5 block text-xs uppercase text-white"
                          htmlFor="full-name"
                        >
                          {t("contact.name.title")}
                          <sup
                            className={`top-0 text-xs text-red-600 ${language === "en" ? "left-1" : "right-1"}`}
                          >
                            *
                          </sup>
                        </label>
                        <Field
                          type="text"
                          id="full-name"
                          name="fullName"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder={t("contact.name.placeholder")}
                          className="text-md mt-2 block h-12 w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                        />
                        <ErrorMessage name="fullName" component="div" />
                      </div>
                    </div>
                    <div className="mobile:col-span-2">
                      <div className="relative flex w-full flex-wrap items-stretch">
                        <label
                          className="mb-0.5 block text-xs uppercase text-white"
                          htmlFor="email"
                        >
                          {t("contact.email.title")}
                          <sup
                            className={`top-0 text-xs text-red-600 ${language === "en" ? "left-1" : "right-1"}`}
                          >
                            *
                          </sup>
                        </label>
                        <Field
                          type="text"
                          id="email"
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder={t("contact.email.placeholder")}
                          className="text-md mt-2 block h-12 w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                        />
                        <ErrorMessage name="email" component="div" />
                      </div>
                    </div>
                    <div className="mobile:col-span-2">
                      <div className="relative flex w-full flex-wrap items-stretch">
                        <label
                          className="mb-0.5 block text-xs uppercase text-white"
                          htmlFor="phone"
                        >
                          {t("contact.phone.title")}
                          <sup
                            className={`top-0 text-[10px] text-zinc-500 ${language === "en" ? "left-1" : "right-1"}`}
                          >
                            ({t("contact.optional")})
                          </sup>
                        </label>
                        <Field
                          type="tel"
                          id="phone"
                          name="phone"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          dir={language !== "en" ? "rtl" : "ltr"}
                          placeholder={t("contact.phone.placeholder")}
                          className="text-md mt-2 block h-12 w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                        />
                        <ErrorMessage name="phone" component="div" />
                      </div>
                    </div>
                    <div className="mobile:col-span-2">
                      <div className="relative flex w-full flex-wrap items-stretch">
                        <label
                          className="mb-0.5 block text-xs uppercase text-white"
                          htmlFor="subject"
                        >
                          {t("contact.subject.title")}
                          <sup
                            className={`top-0 text-xs text-red-600 ${language === "en" ? "left-1" : "right-1"}`}
                          >
                            *
                          </sup>
                        </label>
                        <Field
                          as="select"
                          name="subject"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="text-md mt-2 block h-12 w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                        >
                          <option defaultValue>
                            {t("contact.subject.defaultSubject")}
                          </option>
                          <option value="general">
                            {t("contact.subject.subjectOne")}
                          </option>
                          <option value="collab">
                            {t("contact.subject.subjectTwo")}
                          </option>
                          <option value="job">
                            {t("contact.subject.subjectThree")}
                          </option>
                          <option value="feedback">
                            {t("contact.subject.subjectFour")}
                          </option>
                          <option value="support">
                            {t("contact.subject.subjectFive")}
                          </option>
                          <option value="other">
                            {t("contact.subject.subjectSix")}
                          </option>
                        </Field>
                        <ErrorMessage name="subject" component="div" />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="relative flex w-full flex-wrap items-stretch">
                        <label
                          className="mb-0.5 block text-xs uppercase text-white"
                          htmlFor="budget"
                        >
                          {t("contact.budget.title")}
                          <sup
                            className={`top-0 text-[10px] text-zinc-500 ${language === "en" ? "left-1" : "right-1"}`}
                          >
                            ({t("contact.optional")})
                          </sup>
                        </label>
                        <Field
                          type="number"
                          id="budget"
                          name="budget"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={t("contact.budget.placeholder")}
                          className="text-md mt-2 block h-12 w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                        />
                        <ErrorMessage name="budget" component="div" />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="relative flex w-full flex-wrap items-stretch">
                        <label
                          className="mb-0.5 block text-xs uppercase text-white"
                          htmlFor="message"
                        >
                          {t("contact.message.title")}
                        </label>
                        <Field
                          as="textarea"
                          type="number"
                          id="message"
                          name="message"
                          onChange={handleChange}
                          placeholder={t("contact.message.placeholder")}
                          rows="8"
                          className="text-md mt-2 block w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                        />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="relative flex w-full flex-wrap items-stretch">
                        <div>
                          <label
                            className="mb-0.5 inline-flex items-center gap-2 overflow-hidden text-xs uppercase text-white"
                            htmlFor="attachment"
                          >
                            <IconCloudUp
                              className="mx-auto"
                              strokeWidth="1.8"
                              size={16}
                            />
                            <span className="z-10">
                              {t("contact.attachment")}
                            </span>
                          </label>
                          <Field
                            as="input"
                            type="file"
                            id="attachment"
                            name="attachment"
                            onChange={(event) => {
                              const file = event.currentTarget.files[0];
                              setFieldValue("file", file);
                            }}
                            className={`absolute text-zinc-500 ${language === "en" ? "left-40" : "right-40"}`}
                          />
                          <ErrorMessage name="attachment" component="div" />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="relative flex w-full flex-wrap items-stretch">
                        <button
                          className="inline-flex cursor-pointer items-center justify-center rounded-[30px] border-2 border-theme bg-theme px-14 py-3 text-center font-medium uppercase text-zinc-900 transition-all hover:border-theme hover:bg-transparent hover:text-theme"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {t("contact.send")}
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
