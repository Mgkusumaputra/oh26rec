"use client";

import { Button } from "@/components/ui/button";
import { Book, Search, UserRound } from "lucide-react";
import Image from "next/image";

const countdownBlocks = [
  { value: "03", label: "Days" },
  { value: "06", label: "Hours" },
  { value: "10", label: "Minutes" },
];

function CountdownBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex h-[132.42px] w-[120.42px] flex-col items-center md:h-[252.95px] md:w-[236.95px]">
      <div className="relative flex h-[120.42px] w-[120.42px] items-center justify-center md:h-[236.95px] md:w-[236.95px]">
        <Image
          alt="Bola Ubi"
          className="pointer-events-none absolute inset-0 h-full w-full select-none"
          draggable={false}
          src="/design-system/bola-ubi 2.svg"
          width={237}
          height={237}
        />
        <span className="font-league-spartan relative z-10 text-[40px] leading-none font-bold text-white md:text-[76px]">
          {value}
        </span>
      </div>
      <span className="font-league-spartan -mt-0.5 text-[20px] leading-none font-bold text-white md:-mt-1 md:text-[36px]">
        {label}
      </span>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen w-full justify-center overflow-hidden bg-linear-to-b from-[#040F27] from-[13.94%] via-[#0C265E] via-[52.4%] to-[#3F178D] bg-cover">
      <div className="pointer-events-none absolute -top-[11px] -left-[110px] z-0 h-[975px] w-[213.2px] md:-top-12.5 md:-left-43.75 md:h-278.25 md:w-133.25">
        <Image
          alt="Left pillar decoration"
          className="h-full w-full object-contain"
          draggable={false}
          src="/design-system/pilar.svg"
          width={533}
          height={1113}
        />
      </div>
      <div className="pointer-events-none absolute -top-[11px] -right-[110px] z-0 h-[975px] w-[213.2px] scale-x-[-1] md:-top-12.5 md:-right-41.25 md:h-278.25 md:w-133.25">
        <Image
          alt="Right pillar decoration"
          className="h-full w-full object-contain"
          draggable={false}
          src="/design-system/pilar.svg"
          width={533}
          height={1113}
        />
      </div>
      {/* Hero Section */}
      <div className="relative z-10 flex w-full max-w-97.5 flex-col items-center px-4 pt-47.5 pb-16 md:max-w-360 md:px-0 md:pt-75.5 md:pb-0">
        <div className="flex flex-col items-center justify-center gap-8 text-center md:gap-8">
          {/* Text Hero */}
          <div className="flex max-w-89.25 flex-col items-center justify-center gap-4 font-bold text-white md:max-w-205.5 md:gap-5">
            <div className="font-league-spartan flex flex-col gap-0 text-[36px] leading-none md:gap-3 md:text-[60px] md:leading-none">
              <h1>Open Recruitment</h1>
              <h1>Ambassador</h1>
              <h1 className="text-[32px] md:text-[60px]">
                Open House FASILKOM UI 2026
              </h1>
            </div>
            <p className="hidden max-w-89.25 text-[16px] leading-6 md:block md:max-w-205.5 md:text-2xl md:leading-[1.35]">
              Ambassador Open House Fasilkom UI adalah ikon OH Fasilkom UI yang
              bertugas untuk mempromosikan acara OH Fasilkom UI dan Fakultas
              Ilmu Komputer Universitas Indonesia kepada masyarakat.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-start justify-center gap-0">
            {countdownBlocks.map((block, index) => (
              <div className="flex items-start" key={block.label}>
                <CountdownBlock label={block.label} value={block.value} />
                {index < countdownBlocks.length - 1 && (
                  <span className="font-league-spartan hidden w-3.5 pt-10.5 text-center text-[48px] leading-none font-bold text-white md:block md:w-7.25 md:pt-25.5">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-center text-[16px] text-white md:text-xl">
          Pendaftaran dibuka pada 22 Agustus 2026
        </p>
        {/* Button CTA */}
        <div className="mt-8 flex w-full max-w-89.25 flex-col gap-5 md:max-w-93.5">
          <Button
            variant="tertiary"
            className="bg-tertiary-60 h-[42px] md:h-12"
          >
            <UserRound className="h-6 w-6" /> Register
          </Button>
          <div className="flex flex-row gap-4">
            <Button
              variant="ghost"
              className="border-tertiary-50 text-tertiary-50 h-[42px] flex-1 border-2 px-0 md:h-12"
            >
              <Search className="h-6 w-6" />
              Detail
            </Button>
            <Button
              variant="ghost"
              className="border-tertiary-50 text-tertiary-50 h-[42px] flex-1 border-2 px-0 md:h-12"
            >
              <Book className="h-6 w-6" />
              Guidebook
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
