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
        "relative h-[482px] w-full shrink-0 overflow-hidden text-white xl:aspect-[5916/5408] xl:h-auto",
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
        className="absolute top-0 left-1/2 h-[482px] w-[392px] max-w-none -translate-x-1/2 xl:hidden"
        imageClassName="object-fill"
        priority={false}
        src="/design-system/footer-mobile.webp"
      />
      <Image
        alt=""
        aria-hidden="true"
        className="absolute top-0 -left-6 hidden h-full w-[calc(100%+48px)] max-w-none xl:block"
        imageClassName="object-fill"
        priority={false}
        src="/design-system/footer.webp"
      />

      <Image
        alt=""
        aria-hidden="true"
        className="ambassador-footer-glow absolute bottom-[68px] left-[108px] z-10 h-[30px] w-[140px] -translate-x-1/2 opacity-90 xl:bottom-[48px] xl:left-[164px] xl:h-[46px] xl:w-[220px]"
        imageClassName="object-fill"
        src="/design-system/glow-effect-under-logo-footer.svg"
      />

      <div className="absolute right-4 bottom-5 left-4 z-20 flex flex-col items-center xl:right-[120px] xl:bottom-14 xl:left-[120px] xl:flex-row xl:justify-between">
        <div className="flex items-end justify-center gap-6 xl:items-center xl:gap-8">
          <div className="flex w-[84px] flex-col items-center text-center xl:w-[190px] xl:flex-row xl:gap-4 xl:text-left">
            <Image
              alt="Open House Fasilkom UI logo"
              className="h-[52px] w-[50px] shrink-0 xl:h-[92px] xl:w-[88px]"
              imageClassName="object-contain"
              src="/design-system/logo-no-bg.svg"
            />
            <p className="font-league-spartan mt-1 text-[9px] leading-3 font-bold xl:mt-0 xl:text-[14px] xl:leading-5">
              Open House Fasilkom UI 2026
            </p>
          </div>

          <div className="flex w-[150px] flex-col items-center xl:w-[266px]">
            <span className="mb-1 text-[9px] leading-3 font-bold xl:text-[12px] xl:leading-4">
              Supported By:
            </span>
            <Image
              alt="Fakultas Ilmu Komputer Universitas Indonesia"
              className="h-[52px] w-[133px] xl:h-[104px] xl:w-[266px]"
              imageClassName="object-contain"
              src="/design-system/fasilkom.svg"
            />
          </div>
        </div>

        <div className="mt-3 flex flex-col items-center xl:mt-0 xl:items-end">
          <a
            className="text-[10px] leading-4 font-semibold transition-opacity hover:opacity-80 xl:text-[16px] xl:leading-6"
            href="mailto:ohfasilkomui2026@gmail.com"
          >
            ohfasilkomui2026@gmail.com
          </a>
          <div
            aria-label="Open House Fasilkom UI social media"
            className="mt-1.5 flex items-center gap-3 xl:mt-3 xl:gap-5"
          >
            <Instagram
              className="text-white"
              fill="fill-white"
              size="size-[18px] xl:size-6"
            />
            <Tiktok
              className="text-white"
              fill="fill-white"
              size="size-[16px] xl:size-5"
            />
            <Youtube
              className="text-white"
              fill="fill-white"
              size="h-[16px] w-[21px] xl:h-5 xl:w-[27px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
