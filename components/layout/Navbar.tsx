"use client";
import Link from "next/link";

import useSticky from "@/hooks/useSticky";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [isActive, setIsActive] = useState(false);
  const fixed =
    "fixed left-0 w-full right-0 top-0 z-40";
  const normal = "bg-transparent relative";
  const sticky = useSticky();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    listNavbar.forEach((item) => {
      const target = document.getElementById(item.item);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`bg-brand/50 h-16 backdrop-blur-sm ${sticky ? fixed : normal}`}>
      <div className="max-w-global mx-auto flex justify-between items-center h-full">
        <div>
          <Link href="#">
            <h1 className="text-xl">AsterixxTech</h1>
          </Link>
        </div>
        <div>
          <ul className="[&>li]:text-light flex justify-between items-center gap-4">
            {listNavbar.map((item, id) => {
              return (
                <li key={id} className="hover:text-brand_super_light animation">
                  <Link href={item.href} className="font-medium">{item.item}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

const listNavbar = [
  {
    item: "home",
    href: "",
  },
  {
    item: "about",
    href: "about",
  },
  {
    item: "about",
    href: "about",
  },
  {
    item: "about",
    href: "about",
  },
  {
    item: "about",
    href: "about",
  },
];
