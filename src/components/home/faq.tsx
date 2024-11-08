"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export const FAQ = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base/7 font-semibold">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <PlusSmallIcon
                            aria-hidden="true"
                            className={`h-6 w-6 ${open ? "hidden" : "block"}`}
                          />
                          <MinusSmallIcon
                            aria-hidden="true"
                            className={`h-6 w-6 ${open ? "block" : "hidden"}`}
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="pr-12">
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: open ? 1 : 0,
                          height: open ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-base/7 text-gray-600">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
