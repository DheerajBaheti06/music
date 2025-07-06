"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Mail, Linkedin, Github } from "lucide-react";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";

// Custom tooltip for icons
const IconTooltip = ({
  icon,
  name,
  designation,
  url,
}: {
  icon: React.ReactNode;
  name: string;
  designation: string;
  url: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="relative flex flex-col items-center w-full">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex justify-center"
      >
        <button
          className="bg-black rounded-full p-4 border-2 border-white hover:scale-110 transition duration-300 flex items-center justify-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseMove={handleMouseMove}
          aria-label={name}
          type="button"
        >
          {icon}
        </button>
      </a>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 260, damping: 10 },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
          >
            <div className="font-bold text-white text-base">{name}</div>
            <div className="text-white text-xs">{designation}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const contacts = [
  {
    name: "Email",
    designation: "dheeraj baheti",
    icon: <Mail className="w-8 h-8 text-white" />,
    url: "mailto:bahetidheeraj7@gmail.com",
  },
  {
    name: "LinkedIn",
    designation: "linkedin.com/dheeraj-baheti1",
    icon: <Linkedin className="w-8 h-8 text-white" />,
    url: "https://www.linkedin.com/in/dheeraj-baheti1",
  },
  {
    name: "GitHub",
    designation: "github.com/dheerajbaheti06",
    icon: <Github className="w-8 h-8 text-white" />,
    url: "https://github.com/Dheerajbaheti06",
  },
];

export default function ContactsPage() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10">
      
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="my-20"></div>
        <CardContainer>
          <CardBody className=" bg-neutral-900 rounded-2xl shadow-xl p-8 md:p-12 w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold text-center text-white mb-8">
              Contact & Links
            </h1>
            <div className="flex flex-row gap-12 w-full justify-center">
              {contacts.map((contact) => (
                <CardItem
                  key={contact.name}
                  className="flex flex-col items-center"
                >
                  <IconTooltip
                    icon={contact.icon}
                    name={contact.name}
                    designation={contact.designation}
                    url={contact.url}
                  />
                  <span className="mt-3 text-lg font-medium text-white">
                    {contact.name}
                  </span>
                </CardItem>
              ))}
            </div>
          </CardBody>
        </CardContainer>
      
    </div>
  );
}
