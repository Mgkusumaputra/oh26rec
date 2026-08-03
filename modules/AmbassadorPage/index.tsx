"use client";

import { Button as UiButton } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/elements/Footer";
import { Book, MessageCircle, Search, UserRound } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const REGISTRATION_START_AT = new Date("2026-08-22T00:00:00+07:00").getTime();

type CountdownValue = {
  days: string;
  hours: string;
  minutes: string;
};

const emptyCountdown: CountdownValue = {
  days: "00",
  hours: "00",
  minutes: "00",
};

function getCountdownValue(): CountdownValue {
  const remainingMilliseconds = Math.max(REGISTRATION_START_AT - Date.now(), 0);
  const totalMinutes = Math.ceil(remainingMilliseconds / 60_000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
  };
}

function useRegistrationCountdown() {
  const [countdown, setCountdown] = useState<CountdownValue>(emptyCountdown);

  useEffect(() => {
    const updateCountdown = () => setCountdown(getCountdownValue());

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1_000);

    return () => window.clearInterval(interval);
  }, []);

  return countdown;
}

const ambassadorFaqs = [
  {
    value: "benefits",
    question: "Apa aja benefit daftar Ambassador?",
    answer:
      "Sebagai Ambassador, kamu akan terlibat langsung dalam promosi OH Fasilkom, berkesempatan membangun relasi dengan teman-teman dari seluruh Indonesia, mendapatkan akses ke program eksklusif seperti webinar dan mentoring, serta memperluas wawasan seputar teknologi, bisnis digital, dan masa depan industri IT.",
  },
  {
    value: "other-activities",
    question: "Bagaimana jika aku memiliki kesibukan lain dan ingin mendaftar?",
    answer:
      "Tetap boleh mendaftar. Rangkaian kegiatan Ambassador akan diinformasikan lebih dahulu agar kamu bisa mengatur waktu dan menyelesaikan tanggung jawab dengan baik.",
  },
  {
    value: "duration",
    question: "Berapa lama program Ambassador ini berjalan?",
    answer:
      "Durasi dan jadwal lengkap program akan disampaikan pada guidebook serta kanal informasi resmi Open House Fasilkom UI.",
  },
  {
    value: "editing",
    question: "Harus bisa ngedit video gak kak??",
    answer:
      "Tidak harus. Kemampuan membuat atau mengedit konten menjadi nilai tambah, tetapi kamu tetap akan mendapat arahan selama program berlangsung.",
  },
  {
    value: "outside-jabodetabek",
    question: "Aku dari luar Jabodetabek, bisa ikut juga gak?",
    answer:
      "Bisa. Program Ambassador terbuka untuk pendaftar dari seluruh Indonesia selama memenuhi persyaratan yang berlaku.",
  },
  {
    value: "fee",
    question: "Apakah program ini berbayar?",
    answer: "Tidak, pendaftaran program Ambassador tidak dipungut biaya.",
  },
  {
    value: "popularity",
    question: "Harus terkenal ya kak?",
    answer:
      "Tidak harus terkenal. Kami mencari peserta yang antusias, bertanggung jawab, dan tertarik memperkenalkan Open House Fasilkom UI kepada lebih banyak orang.",
  },
];

function CountdownBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex h-[132.42px] w-[120.42px] flex-col items-center xl:h-[252.95px] xl:w-[236.95px]">
      <div className="relative flex h-[120.42px] w-[120.42px] items-center justify-center xl:h-[236.95px] xl:w-[236.95px]">
        <Image
          alt="Bola Ubi"
          className="pointer-events-none absolute inset-0 h-full w-full select-none"
          draggable={false}
          src="/design-system/bola-ubi 2.svg"
          width={237}
          height={237}
        />
        <span className="font-league-spartan relative z-10 text-[40px] leading-none font-bold text-white xl:text-[76px]">
          {value}
        </span>
      </div>
      <span className="font-league-spartan -mt-0.5 text-[20px] leading-none font-bold text-white xl:-mt-1 xl:text-[36px]">
        {label}
      </span>
    </div>
  );
}

function AboutStatCard({
  value,
  label,
  side,
}: {
  value: string;
  label: React.ReactNode;
  side: "left" | "right";
}) {
  return (
    <div className="relative h-[79.55px] w-[137.25px] shrink-0 xl:h-[115px] xl:w-[305px]">
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-[3.45px] -left-[5.8px] h-[91.13px] w-[148.85px] max-w-none xl:hidden"
        src="/design-system/about-card-mobile.svg"
        width={149}
        height={92}
      />
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-[7.67px] -left-[12.87px] hidden h-[140.74px] w-[330.74px] max-w-none xl:block"
        src={
          side === "left"
            ? "/design-system/about-card-desktop-left.svg"
            : "/design-system/about-card-desktop-right.svg"
        }
        width={331}
        height={141}
      />
      <div
        className={`absolute top-[9.29px] left-[17.73px] flex w-[102px] flex-col items-start justify-center text-left [font-family:var(--font-nunito)] xl:w-auto ${
          side === "left"
            ? "xl:top-[25px] xl:left-[34px]"
            : "xl:top-[19px] xl:left-[31.5px]"
        }`}
      >
        <span className="bg-linear-[96deg,#43f5e7_22.45%,#d6f5f2_96.91%] bg-clip-text [font-family:var(--font-league)] text-[20px] leading-7 font-bold text-transparent xl:text-[48px] xl:leading-12">
          {value}
        </span>
        <span className="text-[12px] leading-4 text-white xl:text-[16px] xl:leading-6 xl:whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
}

function AboutMascot() {
  return (
    <div className="relative h-[333.595px] w-[257.633px] shrink-0">
      <Image
        alt="Ambassador mascot holding a microphone"
        className="absolute top-0 left-[-87px] h-[334px] w-[370px] max-w-none"
        draggable={false}
        src="/design-system/ambassador-mascot.svg"
        width={370}
        height={334}
      />
    </div>
  );
}

function AboutSection() {
  return (
    <section className="relative isolate h-[556px] w-[100dvw] max-w-[100dvw] shrink-0 overflow-hidden px-[18px] text-white xl:h-[891.5px] xl:px-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="ambassador-mobile-decoration absolute top-[50px] left-[147px] h-[557px] w-[379px] xl:top-[249px] xl:left-[11px] xl:h-[648px] xl:w-[440px]">
          <Image
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full max-w-none"
            draggable={false}
            src="/design-system/swirl.svg"
            width={440}
            height={648}
          />
          <Image
            alt=""
            aria-hidden="true"
            className="absolute top-[53.01%] left-[3.409%] h-[6.173%] w-[5%] max-w-none"
            draggable={false}
            src="/design-system/star-thick.svg"
            width={22}
            height={40}
          />
          <span className="absolute top-[60.736%] left-[2.273%] h-[0.983%] w-[1.591%] rounded-full bg-linear-to-b from-[#482b9b] to-[#ffbfe0]" />
          <span className="absolute top-[49.218%] left-[6.818%] h-[0.983%] w-[1.591%] rounded-full bg-linear-to-b from-[#482b9b] to-[#ffbfe0]" />
        </div>
        <Image
          alt=""
          aria-hidden="true"
          className="absolute top-[262px] left-[111px] hidden h-[61.941px] w-[22px] max-w-none xl:block"
          draggable={false}
          src="/design-system/star-thin.svg"
          width={22}
          height={62}
        />
      </div>
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[354px] flex-col items-center pt-8 pb-16 xl:max-w-[1273px] xl:pt-20 xl:pb-20">
        <div className="flex w-full flex-col items-center text-center [font-family:var(--font-league)] text-[24px] leading-8 font-bold xl:gap-4 xl:text-[60px] xl:leading-[60px]">
          <h2 className="w-full">Apa itu Ambassador</h2>
          <h2 className="w-full">Open House Fasilkom UI?</h2>
        </div>

        <div className="relative mt-8 h-[364px] w-full xl:mt-[60px] xl:flex xl:h-[535.5px] xl:items-center xl:justify-center xl:gap-[100px]">
          <div className="relative h-[364px] w-full shrink-0 xl:h-[535.5px] xl:w-[755.1px]">
            <div className="absolute bottom-[19.14px] left-1/2 z-0 h-[48.1px] w-[67.55px] -translate-x-1/2 text-[#1c0a3e] xl:bottom-[42.48px] xl:h-[106.9px] xl:w-[150.1px]">
              <span className="absolute top-0 left-1/2 h-full w-[4px] -translate-x-1/2 bg-current xl:w-[8px]" />
              <span className="absolute bottom-[2px] left-1/2 h-[3px] w-[42px] origin-left -translate-x-[1px] rotate-[37deg] bg-current xl:h-[5px] xl:w-[92px]" />
              <span className="absolute bottom-[2px] left-1/2 h-[3px] w-[42px] origin-right -translate-x-[41px] -rotate-[37deg] bg-current xl:h-[5px] xl:w-[92px] xl:-translate-x-[90px]" />
            </div>
            <div className="absolute inset-x-[6.67px] top-[11.47px] bottom-[52.68px] z-10 rounded-[10.8px] border-[5.4px] border-[#1c0a3e] bg-[rgba(242,235,255,0.8)] xl:inset-x-[14.83px] xl:top-[25.48px] xl:bottom-[117.02px] xl:rounded-[24px] xl:border-[12px]" />
            <div className="absolute top-[9.56px] right-[11.95px] left-[11.7px] z-20 h-[6.75px] rounded-full bg-[#1c0a3e] xl:top-[21.24px] xl:right-[26.1px] xl:left-[26px] xl:h-[15px]" />
            <div className="absolute right-[11.95px] bottom-[51.44px] left-[11.7px] z-20 h-[6.3px] rounded-full bg-[#1c0a3e] xl:right-[26.1px] xl:bottom-[114.26px] xl:left-[26px] xl:h-[14px]" />
            <div className="absolute top-[3.15px] left-1/2 z-20 h-[9.45px] w-[4.95px] -translate-x-1/2 rounded-t-full bg-[#1c0a3e] xl:top-[7px] xl:h-[21px] xl:w-[11px]" />

            <div className="absolute top-[41px] left-1/2 z-30 flex w-[290.5px] -translate-x-1/2 flex-col gap-4 [font-family:var(--font-nunito)] xl:top-[82px] xl:w-[634px] xl:gap-6">
              <p className="w-[289px] text-center text-[14px] leading-5 text-[#1c0a3e] xl:mx-auto xl:w-[602px] xl:text-[20px] xl:leading-7">
                <strong>Program Ambassador</strong> Open House Fasilkom UI 2026
                mengajak anak-anak SMA/K sederajat dan influencer untuk
                meningkatkan <strong>brand awareness Fasilkom UI</strong>.
                Ambassador bertugas membuat konten digital untuk menyebarkan
                informasi mengenai Open House Fasilkom UI dan Fasilkom UI.
              </p>
              <div className="flex w-full items-center gap-4 xl:justify-center xl:gap-6">
                <AboutStatCard
                  side="left"
                  value="200+"
                  label={
                    <>
                      Pendaftar dari
                      <br className="xl:hidden" /> seluruh Indonesia
                    </>
                  }
                />
                <AboutStatCard
                  side="right"
                  value="250+"
                  label={
                    <>
                      Pengguna <br className="xl:hidden" /> Referral Code
                    </>
                  }
                />
              </div>
            </div>
          </div>
          <div className="relative z-20 hidden xl:block">
            <AboutMascot />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchiveSection() {
  return (
    <section className="relative isolate h-[713.396px] w-[100dvw] max-w-[100dvw] shrink-0 overflow-visible text-white xl:h-[1039.829px]">
      <div className="relative z-10 mx-auto h-full w-[359.115px] xl:w-[1221.224px]">
        <h2 className="absolute top-16 left-0 w-full text-center [font-family:var(--font-league)] text-[24px] leading-8 font-bold xl:top-[120px] xl:text-[60px] xl:leading-[60px]">
          Ambassador 2025’s Archive
        </h2>

        <div className="absolute top-32 left-0 h-[521.396px] w-full xl:top-60 xl:h-[719.829px]">
          <div className="absolute top-[11px] left-[16px] z-40 h-[146px] w-[236px] xl:top-[153px] xl:left-[14px] xl:h-[317px] xl:w-[454px]">
            <Image
              alt="Welcoming Ambassador 2025 archive"
              className="size-full object-contain"
              draggable={false}
              src="/design-system/welcoming-ambassador.png"
              width={484}
              height={300}
            />
          </div>

          <div className="absolute top-[78px] left-[119px] z-20 h-[187px] w-[232px] xl:top-[89px] xl:left-[746px] xl:h-[376px] xl:w-[475px]">
            <Image
              alt="Webinar with Alumni archive"
              className="size-full object-contain"
              draggable={false}
              src="/design-system/webinar-alumni.png"
              width={472}
              height={380}
            />
          </div>

          <div className="absolute top-[177px] left-0 z-30 h-[264px] w-[205px] xl:top-[38px] xl:left-[407px] xl:h-[490px] xl:w-[384px]">
            <Image
              alt="Farewell Party archive"
              className="size-full object-contain"
              draggable={false}
              src="/design-system/farewell.png"
              width={371}
              height={477}
            />
          </div>

          <div className="absolute top-[260px] left-[159px] z-10 h-[161px] w-[229px] xl:top-[385px] xl:left-[560px] xl:h-[340px] xl:w-[451px]">
            <Image
              alt="Mentoring one-on-one archive"
              className="size-full object-contain"
              draggable={false}
              src="/design-system/mentoring1o1.png"
              width={474}
              height={334}
            />
          </div>

          <div className="absolute top-[362px] left-[63px] z-50 h-[162px] w-[214px] xl:top-[404px] xl:left-[165px] xl:h-[328px] xl:w-[420px]">
            <Image
              alt="RISTEK Class archive"
              className="size-full object-contain"
              draggable={false}
              src="/design-system/ristek-class.png"
              width={440}
              height={333}
            />
          </div>
        </div>
      </div>

      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[524.624px] -left-[51.703px] z-20 h-[155.225px] w-[113.348px] max-w-none object-contain xl:top-[928px] xl:-left-[98px] xl:h-[431.179px] xl:w-[314.845px]"
        draggable={false}
        src="/design-system/shard-thin.svg"
        width={315}
        height={432}
      />
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[531px] -right-[32px] z-20 h-[130.836px] w-[87.781px] max-w-none object-contain xl:top-[922px] xl:-right-[98.93px] xl:h-[403.816px] xl:w-[270.93px]"
        draggable={false}
        src="/design-system/shard-thick.svg"
        width={271}
        height={404}
      />
    </section>
  );
}

function FaqSection() {
  return (
    <section className="relative h-[884px] w-[100dvw] max-w-[100dvw] shrink-0 text-white xl:h-[997.171px]">
      <div className="ambassador-mobile-frame relative h-[884px] w-[345px] xl:top-[145.171px] xl:mx-auto xl:h-[852px] xl:w-[1204.671px]">
        <header className="absolute top-16 left-0 flex w-full flex-col items-center text-center xl:top-20 xl:left-[37.335px] xl:w-[1130px]">
          <h2 className="font-league-spartan text-[30px] leading-9 font-bold xl:text-[60px] xl:leading-[60px]">
            Need More Help?
          </h2>
          <p className="mt-1 w-full text-[16px] leading-6 font-bold xl:mt-6 xl:text-[24px] xl:leading-9">
            “Temukan berbagai pertanyaan serta jawaban seputar ambassador di
            sini!”
          </p>
        </header>

        <div className="absolute top-[184px] left-0 h-[636px] w-full xl:top-[260px] xl:flex xl:h-[512px] xl:items-start xl:justify-between">
          <Accordion
            className="w-full gap-4 xl:w-[737px]"
            collapsible
            defaultValue="benefits"
            type="single"
          >
            {ambassadorFaqs.map((faq) => (
              <AccordionItem
                className="bg-primary-70 text-primary-10 data-open:border-primary-50 data-open:text-primary-70 data-open:hover:border-primary-50 rounded-xl border-2 border-transparent shadow-[4px_4px_12px_rgba(28,10,62,0.2)] hover:border-transparent data-open:bg-[#f3ecff]"
                key={faq.value}
                value={faq.value}
              >
                <AccordionTrigger className="font-league-spartan [&_[data-slot=accordion-trigger-icon]]:text-primary-10 [&[aria-expanded=true]_[data-slot=accordion-trigger-icon]]:text-primary-70 items-center px-4 py-[10px] text-[16px] leading-6 font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 text-[12px] leading-4 xl:text-[14px] xl:leading-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div
            aria-hidden="true"
            className="relative hidden h-[414px] w-[364.671px] xl:block"
          >
            <Image
              alt=""
              className="size-full object-contain"
              draggable={false}
              src="/design-system/panda-bingung.svg"
              width={369}
              height={438}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPersonSection() {
  return (
    <section className="relative h-[545.663px] w-[100dvw] max-w-[100dvw] shrink-0 xl:h-[817px]">
      <div className="ambassador-mobile-frame ambassador-mobile-frame-19 relative h-[545.663px] w-[346px] xl:top-[41px] xl:mx-auto xl:h-[776px] xl:w-[1178px]">
        <header className="absolute top-16 left-0 flex w-full flex-col items-center text-center text-white xl:top-20">
          <h2 className="font-league-spartan text-[30px] leading-9 font-bold xl:text-[60px] xl:leading-[60px]">
            <span className="xl:hidden">
              Butuh bantuan atau pertanyaan lain?
            </span>
            <span className="hidden xl:inline">
              Butuh bantuan atau punya pertanyaan lain?
            </span>
          </h2>
          <p className="mt-1 text-[16px] leading-6 font-bold xl:mt-6 xl:text-[24px] xl:leading-9">
            Kamu dapat hubungi kontak di bawah ini untuk informasi lebih lanjut
            ya!
          </p>
        </header>

        <Image
          alt="Ambassador contact person mascot"
          className="absolute top-[236px] left-[2.751px] h-[155.663px] w-[340.498px] max-w-none xl:top-[264px] xl:left-[248.5px] xl:h-[311.326px] xl:w-[681px]"
          draggable={false}
          src="/design-system/panda-contact.svg"
          width={341}
          height={162}
        />

        <div className="absolute top-[439.663px] left-0 flex h-[42px] w-full gap-4 xl:top-[648px] xl:left-[381px] xl:h-12 xl:w-[416px]">
          <UiButton
            className="bg-primary-70 h-[42px] w-[165px] min-w-0 gap-2 rounded-lg px-3 text-[12px] leading-4 text-white xl:h-12 xl:w-[200px] xl:rounded-xl xl:text-[14px] xl:leading-5 [&_svg]:size-4 xl:[&_svg]:size-[18px]"
            type="button"
            variant="primary"
          >
            <MessageCircle />
            Contact Person
          </UiButton>
          <UiButton
            className="bg-primary-70 h-[42px] w-[165px] min-w-0 gap-2 rounded-lg px-3 text-[12px] leading-4 text-white xl:h-12 xl:w-[200px] xl:rounded-xl xl:text-[14px] xl:leading-5 [&_svg]:size-4 xl:[&_svg]:size-[18px]"
            type="button"
            variant="primary"
          >
            <MessageCircle />
            Contact Person
          </UiButton>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  const countdown = useRegistrationCountdown();
  const countdownBlocks = [
    { value: countdown.days, label: "Days" },
    { value: countdown.hours, label: "Hours" },
    { value: countdown.minutes, label: "Minutes" },
  ];

  return (
    <main className="ambassador-page-background relative flex min-h-screen w-full flex-col items-center justify-start overflow-x-clip">
      <div className="pointer-events-none absolute -top-2.75 -left-27.5 z-0 h-243.75 w-[213.2px] xl:-top-12.5 xl:-left-43.75 xl:h-278.25 xl:w-133.25">
        <Image
          alt="Left pillar decoration"
          className="h-full w-full object-contain"
          draggable={false}
          src="/design-system/pilar.svg"
          width={533}
          height={1113}
        />
      </div>
      <div className="pointer-events-none absolute -top-2.75 -right-27.5 z-0 h-243.75 w-[213.2px] scale-x-[-1] xl:-top-12.5 xl:-right-41.25 xl:h-278.25 xl:w-133.25">
        <Image
          alt="Right pillar decoration"
          className="h-full w-full object-contain"
          draggable={false}
          src="/design-system/pilar.svg"
          width={533}
          height={1113}
        />
      </div>
      <div className="relative z-10 flex w-full max-w-97.5 flex-col items-center px-4 pt-47.5 pb-16 xl:max-w-360 xl:px-0 xl:pt-75.5 xl:pb-0">
        <div className="flex flex-col items-center justify-center gap-8 text-center xl:gap-8">
          <div className="flex max-w-89.25 flex-col items-center justify-center gap-4 font-bold text-white xl:max-w-205.5 xl:gap-5">
            <div className="font-league-spartan flex flex-col gap-0 text-[36px] leading-none xl:gap-3 xl:text-[60px] xl:leading-none">
              <h1>Open Recruitment Ambassador</h1>
              <h1 className="text-[32px] xl:text-[60px]">
                Open House FASILKOM UI 2026
              </h1>
            </div>
            <p className="hidden max-w-89.25 text-[16px] leading-6 xl:block xl:max-w-205.5 xl:text-2xl xl:leading-[1.35]">
              Ambassador Open House Fasilkom UI adalah ikon OH Fasilkom UI yang
              bertugas untuk mempromosikan acara OH Fasilkom UI dan Fakultas
              Ilmu Komputer Universitas Indonesia kepada masyarakat.
            </p>
          </div>

          <div className="flex items-start justify-center gap-0">
            {countdownBlocks.map((block, index) => (
              <div className="flex items-start" key={block.label}>
                <CountdownBlock label={block.label} value={block.value} />
                {index < countdownBlocks.length - 1 && (
                  <span className="font-league-spartan hidden w-3.5 pt-10.5 text-center text-[48px] leading-none font-bold text-white xl:block xl:w-7.25 xl:pt-25.5">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-[16px] text-white xl:text-xl">
          Pendaftaran dibuka pada 22 Agustus 2026
        </p>

        <div className="mt-8 flex w-full max-w-89.25 flex-col gap-5 xl:max-w-93.5">
          <UiButton
            variant="tertiary"
            className="bg-tertiary-60 h-10.5 xl:h-12"
          >
            <UserRound className="h-6 w-6" /> Register
          </UiButton>
          <div className="flex flex-row gap-4">
            <UiButton
              variant="ghost"
              className="border-tertiary-50 text-tertiary-50 h-10.5 flex-1 border-2 px-0 xl:h-12"
            >
              <Search className="h-6 w-6" />
              Detail
            </UiButton>
            <UiButton
              variant="ghost"
              className="border-tertiary-50 text-tertiary-50 h-10.5 flex-1 border-2 px-0 xl:h-12"
            >
              <Book className="h-6 w-6" />
              Guidebook
            </UiButton>
          </div>
        </div>
      </div>
      <AboutSection />
      <ArchiveSection />
      <FaqSection />
      <ContactPersonSection />
      <Footer className="-mt-[44.663px] xl:mt-0" />
    </main>
  );
}
