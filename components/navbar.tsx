"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export const Navbar = () => {
  const navItems = [
    {
      name: "Inicio",
      link: "#",
    },
    {
      name: "Servicios",
      link: "#services",
    },
    {
      name: "Flota",
      link: "#",
    },
    {
      name: "Guías",
      link: "#guides",
    },
    {
      name: "Contacto",
      link: "#contact",
    },
  ];

  const [visible] = useState(true);
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-7xl  fixed top-4 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-between space-x-4",
          visible ? "visible" : "invisible"
        )}
      >
        <Logo />
        <DesktopNav navItems={navItems} />
        <MobileNav navItems={navItems} open={open} setOpen={setOpen} />
      </motion.nav>
    </>
  );
};

const DesktopNav = ({
  navItems,
}: {
  navItems: { name: string; link: string }[];
}) => {
  return (
    <>
      <div className="flex flex-row gap-2 items-center space-x-1">
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 font-medium px-4 py-2 rounded-full transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            )}
          >
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      </div>
      <Button
        asChild
        className="px-8 bg-orange-600 hover:bg-orange-700 text-white rounded-full hidden md:flex"
      >
        <Link href="#calculator">
          Reservar
        </Link>
      </Button>
    </>
  );
};

const MobileNav = ({
  navItems,
  open,
  setOpen,
}: {
  navItems: { name: string; link: string }[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col md:hidden">
      <div className="flex flex-row justify-between items-center w-full">
        <Button
          asChild
          className="w-full px-8 mr-4 block md:hidden"
        >
          <Link href="/login">
            Acceso Clientes
          </Link>
        </Button>

        <button onClick={() => setOpen(!open)} className="relative z-50">
          {open ? <IconX /> : <IconMenu2 />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="flex flex-col gap-2 absolute top-16 left-0 w-full bg-white dark:bg-black p-4 rounded-xl border border-neutral-200 dark:border-white/[0.2] shadow-xl z-[5000]"
          >
            {navItems.map((navItem, idx) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 font-medium px-4 py-2 rounded-full transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                )}
                onClick={() => setOpen(false)}
              >
                <span className="text-sm !cursor-pointer">{navItem.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
