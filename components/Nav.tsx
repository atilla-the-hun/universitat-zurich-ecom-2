"use client";

import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  return (
    <div
      className={
        "px-4 py-2 flex items-center h-20 z-50 bg-card border-b border-border"
      }
    >
      <div className="flex items-center">
        <Link href="https://www.uzh.ch/de.html" target="_blank" rel="noopener noreferrer">
          <Image
            src="/uzh_logo_d_pos.svg"
            alt="UZH Logo"
            width={240}
            height={60}
            className="h-[60px] w-auto"
          />
        </Link>
      </div>
    </div>
  );
};
