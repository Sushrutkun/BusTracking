import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="w-full rounded-sm h-[30vh] flex items-center justify-center">
      <div className="w-full  border-2 border-blue-400 flex flex-col gap-2 items-center justify-center bg-white h-full rounded">
        <div className="flex gap-2 p-2 border-b flex-row items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            fill="none"
            viewBox="0 0 22 21"
            id="sourceR"
            y="107"
          >
            <path
              d="M16.5 6.954c.2-.7.8-1.1 1.5-.9.7.2 1.1.8.9 1.5-.2.7-.9 1.3-1.6 1.2-.6-.2-.9-1.1-.8-1.8Zm-8 8.3H6.4c-.2.1-.4.3-.4.5 0 .3.2.5.5.5h2.1c.2 0 .4-.2.4-.5s-.2-.5-.5-.5Zm13.2-.4-1.3-2.9c-.1-.2-.2-.3-.3-.5l-1.9-1.8c-.2-.2-.5-.2-.7 0-.1.1-.1.1-.1.2l-1.4 1.4v1.1c.2-.1.5-.2.6-.4l.9-.9.2 2.5-1.7 1.5v3.8c.3 0 .5-.2.5-.5v-2.1c0-.1.1-.3.2-.4l1.1-1 .1 2v.2l.5 2.6c0 .3.3.5.6.4.3-.1.5-.3.4-.6l-.5-2.6-.4-5.6.9.9s.1.1.1.2l1.3 2.9c.1.3.4.4.7.3.2-.2.3-.5.2-.7Zm-6.7-2.3v6.7c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5v-.5H4v.5c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5v-8.8l.1-2.1.2-4.8c.1-1.6 1.4-2.8 3-2.8h8.3c1.6 0 2.8 1.2 3 2.7v.2l.1 3.9.1 1.1c.1 1.2.1 2.1.1 2.6l.1 1.3Zm-13.4-9.8h11.8c-.3-.6-1-1-1.7-1H3.3c-.7 0-1.4.4-1.7 1Zm0 9h11.9c.3 0 .5-.2.5-.5l-.3-7.5H1.3l-.3 7.5c0 .3.3.5.6.5Zm1.4 7H1v.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-.5Zm11 0h-2v.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-.5Zm0-1v-5H1v5h13Zm-9-2.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5Zm-1 0c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Zm9 0c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5Zm-1 0c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5Z"
              fill="#3E3E52"
            />
          </svg>
          <input className="" placeholder="FROM" type="text" />
        </div>
        <div className="flex p-2 gap-2 border-b flex-row items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            fill="none"
            viewBox="0 0 22 20"
            id="destinationR"
            x="72"
            y="83"
          >
            <path
              d="M11.5 13c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5Zm0 2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5Zm-8-2c-.8 0-1.5.7-1.5 1.5S2.7 16 3.5 16 5 15.3 5 14.5 4.3 13 3.5 13Zm0 2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5Zm12.9-9.7c.2-.7.8-1.1 1.5-.9.7.2 1.1.8.9 1.5-.2.7-.9 1.3-1.6 1.2-.6-.2-1-1.1-.8-1.8ZM15 11.6v-1.4c0-.6-.1-1.5-.1-2.7L14.7 3c0-.1 0-.2-.1-.2-.1-1.5-1.4-2.7-3-2.7H3.3C1.7.1.3 1.4.3 3L.2 7.6 0 9.7v8.8c0 .8.7 1.5 1.5 1.5h1c.8 0 1.5-.7 1.5-1.5V18h7v.5c0 .8.7 1.5 1.5 1.5h1c.8 0 1.5-.7 1.5-1.5v-6.9ZM3.3 1h8.3c.7 0 1.4.4 1.7 1H1.6c.3-.6 1-1 1.7-1Zm-2.2 9.5L1.3 3h12.4l.3 7.5c0 .3-.2.5-.5.5H1.6c-.3 0-.6-.2-.5-.5Zm1.9 8c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5V18h2v.5Zm11 0c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5V18h2v.5ZM11 17H1v-5h13v5h-3Zm10.6-6.9c0 .3-.2.5-.5.5h-1.8c-.4 0-.8-.2-1-.4l-.8-.7-.1 2.5 1.7 1.7c.3.3.5.7.5 1.2l-.2 3.2c0 .3-.2.5-.5.5s-.5-.2-.5-.5l.2-3.2c0-.1 0-.3-.2-.4l-1.1-1.1v.5c0 .5-.3 1-.8 1.2l-.5.1v-1.1c.2-.1.3-.2.3-.4l.2-4.2-.5.5V8.6l.8-.8.1-.1c.2-.1.5-.1.6.1.1.1.1.1.1.2L19 9.4c.1.1.2.1.3.1h1.8c.2.1.5.3.5.6Z"
              fill="#3E3E52"
            />
          </svg>
          <input className="" placeholder="TO" type="text" />
        </div>
        <Button className="bg-red-600">Seach Buses</Button>
      </div>
    </div>
  );
}
