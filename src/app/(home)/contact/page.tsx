import { FAQ } from "@/components/home/faq";
import { Button } from "@/components/ui/button";
import { MessageCircleMoreIcon, MoveUpRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";

const ContactPage = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="text-center pt-20 pb-10 mt-10">
          <p className="text-lg uppercase text-green-600">Support</p>
          <h1 className="text-3xl font-semibold py-2">
            Hello! How can we halp you?
          </h1>
          <div>
            <p>Secarchbar</p>
          </div>
        </div>
        <div className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="border w-full lg:max-w-lg  h-52 flex flex-col justify-between rounded-lg p-6">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl font-semibold">Issue</h1>
                <p className="text-muted-foreground">
                  Found a bug? We&apos;d love to hear about it in our GitHub
                  issues.
                </p>
              </div>
              <div>
                <Button asChild className=" rounded-lg font-medium">
                  <Link href="https://github.com/">
                    Create Issue <FaGithub className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="border w-full lg:max-w-lg  h-52 flex flex-col justify-between rounded-lg p-6">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl font-semibold">Feature requests</h1>
                <p className="text-muted-foreground">
                  Want to suggest a new feature? Share it with us and the
                  community.
                </p>
              </div>
              <div>
                <Button asChild className=" rounded-lg font-medium">
                  <Link href="https://github.com/">
                    Request Feature <FaGithub className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="border w-full lg:max-w-lg  h-52 flex flex-col justify-between rounded-lg p-6">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl font-semibold">Ask the Community</h1>
                <p className="text-muted-foreground">
                  Join our GitHub discussions or our Discord server to browse
                  for help and best practices.
                </p>
              </div>
              <div className="flex gap-x-2">
                <Button asChild className=" rounded-lg font-medium">
                  <Link href="https://github.com/">
                    Ask a question
                    <MessageCircleMoreIcon className="size-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className=" rounded-lg font-medium"
                  variant={"outline"}
                >
                  <Link href="https://github.com/">
                    Join Discord <FaDiscord className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="border w-full mt-4 h-52 flex flex-col justify-between rounded-lg p-6">
            <div className="flex sm:flex-row flex-col justify-between px-2 md:pt-5 py-1.5 md:py-5">
              <div className=" w-full md:w-1/2 sm:pb-">
                <h1 className="text-xl font-semibold">
                  Can&apos;t find what you&apos;re looking for?
                </h1>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl/2 font-semibold pb-1.5">
                    The AstroCollab Support Team is ready to help.
                  </h3>
                  <p className="text-muted-foreground text-sm/2">
                    Response time for support tickets will vary depending on
                    plan type and severity of the issue.
                  </p>
                </div>
                <div className="flex gap-x-2 pt-4">
                  <Button
                    asChild
                    className=" rounded-lg font-medium"
                    size={"sm"}
                  >
                    <Link href="#">Contact Enterprise Sale</Link>
                  </Button>
                  <Button
                    asChild
                    className=" rounded-lg font-medium border-none shadow-none"
                    size={"sm"}
                    variant={"link"}
                  >
                    <Link href="#">
                      Open ticket <MoveUpRightIcon className="size-3 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
};

export default ContactPage;
