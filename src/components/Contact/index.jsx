import { IconCloudUp, IconPhoneCall } from "@tabler/icons-react";

import "./style.css";

export default function Contact() {
  return (
    <section
      className="overflow-hidden py-[90px] tablet:pb-[50px]"
      id="contact"
    >
      <div className="m-auto max-w-[1130px] px-8 py-0 tablet:max-w-[650px]">
        <div className="ml-auto w-full max-w-[770px] tablet:max-w-full">
          <div>
            <h4 className="m-0 mb-14 inline-flex items-center gap-1 rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white">
              <IconPhoneCall
                className="mx-auto -ml-1"
                strokeWidth="1.8"
                size={16}
              />
              <span>Contact</span>
            </h4>
            <h1 className="mb-8 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-[44px] small:leading-[1]">
              Let's Work <span className="text-theme">Together!</span>
            </h1>
            <p className="mb-8 hidden text-sm text-red-600">
              * Marked fields are required to fill.
            </p>
            <form method="POST">
              <div className="relative mb-5 hidden rounded-lg border border-green-600 p-4 text-green-600">
                Your message was sent successfully.
              </div>
              <div className="grid grid-cols-2 gap-x-5 gap-y-10">
                <div className="mobile:col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <label className="mb-0.5 block text-xs uppercase text-white">
                      full name
                      <sup className="left-1 top-0 text-xs text-red-600">*</sup>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="text-md mt-2 block w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                    />
                  </div>
                </div>
                <div className="mobile:col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <label className="mb-0.5 block text-xs uppercase text-white">
                      email
                      <sup className="left-1 top-0 text-xs text-red-600">*</sup>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Email Address"
                      className="text-md mt-2 block w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                    />
                  </div>
                </div>
                <div className="mobile:col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <label className="mb-0.5 block text-xs uppercase text-white">
                      phone
                      <sup className="left-1 top-0 text-[10px] text-zinc-500">
                        (optional)
                      </sup>
                    </label>
                    <input
                      type="tel"
                      placeholder="Your Email Address"
                      className="text-md mt-2 block w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                    />
                  </div>
                </div>
                <div className="mobile:col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <label className="mb-0.5 block text-xs uppercase text-white">
                      subject
                      <sup className="left-1 top-0 text-xs text-red-600">*</sup>
                    </label>
                    <select className="text-md -ml-1 mt-2 block w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500">
                      <option defaultValue>Select a subject</option>
                      <option>Subject 1</option>
                      <option>Subject 2</option>
                      <option>Subject 3</option>
                      <option>Subject 4</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <label className="mb-0.5 block text-xs uppercase text-white">
                      your budget
                      <sup className="left-1 top-0 text-[10px] text-zinc-500">
                        (optional)
                      </sup>
                    </label>
                    <input
                      type="number"
                      placeholder="A range budget for your project"
                      className="text-md mt-2 block w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <label className="mb-0.5 block text-xs uppercase text-white">
                      message
                    </label>
                    <textarea
                      type="number"
                      placeholder="Write your message here ..."
                      rows="8"
                      className="text-md mt-2 block w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <div>
                      <label className="mb-0.5 inline-flex items-center gap-2 overflow-hidden text-xs uppercase text-white">
                        <IconCloudUp
                          className="mx-auto"
                          strokeWidth="1.8"
                          size={16}
                        />
                        <span className="z-10">add an attachment</span>
                        <input
                          type="file"
                          className="absolute left-40 text-zinc-500"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <button
                      className="inline-flex cursor-pointer items-center justify-center rounded-[30px] border-2 border-theme bg-theme px-14 py-3 text-center font-medium uppercase text-zinc-900 transition-all hover:border-theme hover:bg-transparent hover:text-theme"
                      type="submit"
                    >
                      send message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
