import { Instagram } from "~/components/icons/instagram";
import { Tiktok } from "~/components/icons/tiktok";
import { Youtube } from "~/components/icons/youtube";
import Image from "~/lib/image";
import { cn } from "~/lib/utils";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "relative h-[482px] w-full shrink-0 overflow-hidden text-white lg:aspect-[5916/5408] lg:h-auto",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[46%] bg-[#040f27]"
      />

      <Image
        alt=""
        aria-hidden="true"
        className="absolute top-0 -left-px h-[482px] w-[392px] max-w-none lg:hidden"
        imageClassName="object-fill"
        priority={false}
        src="/design-system/footer-mobile.webp"
      />
      <Image
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden size-full lg:block"
        imageClassName="object-fill"
        priority={false}
        src="/design-system/footer.webp"
      />

      <Image
        alt=""
        aria-hidden="true"
        className="absolute bottom-[112px] left-1/2 z-10 h-[60px] w-[286px] -translate-x-1/2 opacity-90 lg:bottom-[144px] lg:left-[215px] lg:h-[84px] lg:w-[400px]"
        imageClassName="object-fill"
        src="/design-system/glow-effect-under-logo-footer.svg"
      />

      <div className="absolute right-4 bottom-5 left-4 z-20 flex flex-col items-center lg:right-[120px] lg:bottom-14 lg:left-[120px] lg:flex-row lg:justify-between">
        <div className="flex items-end justify-center gap-6 lg:items-center lg:gap-8">
          <div className="flex w-[84px] flex-col items-center text-center lg:w-[190px] lg:flex-row lg:gap-4 lg:text-left">
            <Image
              alt="Open House Fasilkom UI logo"
              className="h-[52px] w-[50px] shrink-0 lg:h-[92px] lg:w-[88px]"
              imageClassName="object-contain"
              src="/design-system/logo-no-bg.svg"
            />
            <p className="font-league-spartan mt-1 text-[9px] leading-3 font-bold lg:mt-0 lg:text-[14px] lg:leading-5">
              Open House Fasilkom UI 2026
            </p>
          </div>

          <div className="flex w-[150px] flex-col items-center lg:w-[266px]">
            <span className="mb-1 text-[9px] leading-3 font-bold lg:text-[12px] lg:leading-4">
              Supported By:
            </span>
            <Image
              alt="Fakultas Ilmu Komputer Universitas Indonesia"
              className="h-[52px] w-[133px] lg:h-[104px] lg:w-[266px]"
              imageClassName="object-contain"
              src="/design-system/fasilkom.svg"
            />
          </div>
        </div>

        <div className="mt-3 flex flex-col items-center lg:mt-0 lg:items-end">
          <a
            className="text-[10px] leading-4 font-semibold transition-opacity hover:opacity-80 lg:text-[16px] lg:leading-6"
            href="mailto:ohfasilkomui2026@gmail.com"
          >
            ohfasilkomui2026@gmail.com
          </a>
          <div
            aria-label="Open House Fasilkom UI social media"
            className="mt-1.5 flex items-center gap-3 lg:mt-3 lg:gap-5"
          >
            <Instagram
              className="text-white"
              fill="fill-white"
              size="size-[18px] lg:size-6"
            />
            <Tiktok
              className="text-white"
              fill="fill-white"
              size="size-[16px] lg:size-5"
            />
            <Youtube
              className="text-white"
              fill="fill-white"
              size="h-[16px] w-[21px] lg:h-5 lg:w-[27px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
