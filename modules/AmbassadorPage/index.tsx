"use client";

import { Button as UiButton } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Book, Search, UserRound } from "lucide-react";
import Image from "next/image";

const countdownBlocks = [
  { value: "03", label: "Days" },
  { value: "06", label: "Hours" },
  { value: "10", label: "Minutes" },
];

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
    <div className="relative h-[79.55px] w-[137.25px] shrink-0 md:h-[115px] md:w-[305px]">
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-[3.45px] -left-[5.8px] h-[91.13px] w-[148.85px] max-w-none md:hidden"
        src="/design-system/about-card-mobile.svg"
        width={149}
        height={92}
      />
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-[7.67px] -left-[12.87px] hidden h-[140.74px] w-[330.74px] max-w-none md:block"
        src={
          side === "left"
            ? "/design-system/about-card-desktop-left.svg"
            : "/design-system/about-card-desktop-right.svg"
        }
        width={331}
        height={141}
      />
      <div
        className={`absolute top-[9.29px] left-[17.73px] flex w-[102px] flex-col items-start justify-center text-left [font-family:var(--font-nunito)] md:w-auto ${
          side === "left"
            ? "md:top-[25px] md:left-[34px]"
            : "md:top-[19px] md:left-[31.5px]"
        }`}
      >
        <span className="bg-linear-[96deg,#43f5e7_22.45%,#d6f5f2_96.91%] bg-clip-text [font-family:var(--font-league)] text-[20px] leading-7 font-bold text-transparent md:text-[48px] md:leading-12">
          {value}
        </span>
        <span className="text-[12px] leading-4 text-white md:text-[16px] md:leading-6 md:whitespace-nowrap">
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
    <section className="relative isolate h-[556px] w-[100dvw] max-w-[100dvw] shrink-0 overflow-hidden px-[18px] text-white md:h-[891.5px] md:px-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-[235px] -left-[174px] h-[310px] w-[356px] rotate-[18deg] rounded-[50%] border-[42px] border-[#6590eb]/20 md:top-[318px] md:-left-[405px] md:h-[550px] md:w-[631px] md:border-[76px]" />
        <div className="absolute top-[257px] -left-[181px] h-[286px] w-[348px] rotate-[18deg] rounded-[50%] border-[22px] border-[#946ae7]/25 md:top-[344px] md:-left-[438px] md:h-[508px] md:w-[640px] md:border-[43px]" />
        <div className="absolute top-[283px] -left-[190px] h-[248px] w-[332px] rotate-[18deg] rounded-[50%] border-[12px] border-[#c0d2f8]/18 md:top-[386px] md:-left-[474px] md:h-[438px] md:w-[620px] md:border-[24px]" />
        <div className="absolute top-[305px] -left-[201px] h-[213px] w-[319px] rotate-[18deg] rounded-[50%] border-[7px] border-[#43f5e7]/12 md:top-[425px] md:-left-[505px] md:h-[365px] md:w-[604px] md:border-[14px]" />
        <span className="absolute top-[151px] left-[16px] h-[34px] w-[12px] bg-linear-to-b from-[#d6f5f2] to-[#946ae7] [clip-path:polygon(50%_0,62%_39%,100%_50%,62%_61%,50%_100%,38%_61%,0_50%,38%_39%)] md:top-[262px] md:left-[111px] md:h-[62px] md:w-[22px]" />
        <span className="absolute top-[298px] left-[35px] h-[22px] w-[12px] bg-[#946ae7]/75 [clip-path:polygon(50%_0,62%_39%,100%_50%,62%_61%,50%_100%,38%_61%,0_50%,38%_39%)] md:top-[508px] md:left-[37px] md:h-[39px] md:w-[22px]" />
        <span className="absolute top-[342px] left-[89px] h-[22px] w-[12px] bg-[#d6f5f2]/65 [clip-path:polygon(50%_0,62%_39%,100%_50%,62%_61%,50%_100%,38%_61%,0_50%,38%_39%)] md:top-[593px] md:left-[89px] md:h-[39px] md:w-[22px]" />
        <span className="absolute top-[379px] left-[21px] h-[22px] w-[12px] bg-[#946ae7]/70 [clip-path:polygon(50%_0,62%_39%,100%_50%,62%_61%,50%_100%,38%_61%,0_50%,38%_39%)] md:top-[646px] md:left-[12px] md:h-[39px] md:w-[22px]" />
        <span className="absolute top-[315px] left-[44px] size-[5px] rounded-full bg-[#d6f5f2]/75 md:top-[547px] md:left-[16px] md:size-[7px]" />
        <span className="absolute top-[357px] left-[112px] size-[4px] rounded-full bg-[#946ae7] md:top-[570px] md:left-[168px] md:size-[7px]" />
        <span className="absolute top-[397px] left-[66px] size-[4px] rounded-full bg-[#d6f5f2]/65 md:top-[621px] md:left-[54px] md:size-[7px]" />
        <span className="absolute top-[430px] left-[132px] size-[4px] rounded-full bg-[#946ae7]/80 md:top-[670px] md:left-[205px] md:size-[7px]" />
        <span className="absolute top-[204px] right-[23px] h-[27px] w-[10px] bg-linear-to-b from-[#d6f5f2] to-[#946ae7] [clip-path:polygon(50%_0,62%_39%,100%_50%,62%_61%,50%_100%,38%_61%,0_50%,38%_39%)] md:top-[388px] md:right-[42px] md:h-[48px] md:w-[17px]" />
        <span className="absolute top-[291px] right-[51px] size-[4px] rounded-full bg-[#d6f5f2]/80 md:top-[481px] md:right-[120px] md:size-[7px]" />
        <span className="absolute top-[420px] right-[17px] h-[20px] w-[10px] bg-[#946ae7]/65 [clip-path:polygon(50%_0,62%_39%,100%_50%,62%_61%,50%_100%,38%_61%,0_50%,38%_39%)] md:top-[674px] md:right-[84px] md:h-[39px] md:w-[22px]" />
        <span className="absolute top-[462px] right-[72px] size-[5px] rounded-full bg-[#d6f5f2]/60 md:top-[741px] md:right-[164px] md:size-[7px]" />
      </div>
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1273px] flex-col items-center pt-8 pb-16 md:pt-20 md:pb-20">
        <div className="flex w-full flex-col items-center text-center [font-family:var(--font-league)] text-[24px] leading-8 font-bold md:gap-4 md:text-[60px] md:leading-[60px]">
          <h2 className="w-full">Apa itu Ambassador</h2>
          <h2 className="w-full">Open House Fasilkom UI?</h2>
        </div>

        <div className="relative mt-8 h-[364px] w-full md:mt-[60px] md:flex md:h-[535.5px] md:items-center md:justify-center md:gap-[100px]">
          <div className="relative h-[364px] w-full shrink-0 md:h-[535.5px] md:w-[755.1px]">
            <div className="absolute bottom-[19.14px] left-1/2 z-0 h-[48.1px] w-[67.55px] -translate-x-1/2 text-[#1c0a3e] md:bottom-[42.48px] md:h-[106.9px] md:w-[150.1px]">
              <span className="absolute top-0 left-1/2 h-full w-[4px] -translate-x-1/2 bg-current md:w-[8px]" />
              <span className="absolute bottom-[2px] left-1/2 h-[3px] w-[42px] origin-left -translate-x-[1px] rotate-[37deg] bg-current md:h-[5px] md:w-[92px]" />
              <span className="absolute bottom-[2px] left-1/2 h-[3px] w-[42px] origin-right -translate-x-[41px] -rotate-[37deg] bg-current md:h-[5px] md:w-[92px] md:-translate-x-[90px]" />
            </div>
            <div className="absolute inset-x-[6.67px] top-[11.47px] bottom-[52.68px] z-10 rounded-[10.8px] border-[5.4px] border-[#1c0a3e] bg-[rgba(242,235,255,0.8)] md:inset-x-[14.83px] md:top-[25.48px] md:bottom-[117.02px] md:rounded-[24px] md:border-[12px]" />
            <div className="absolute top-[9.56px] right-[11.95px] left-[11.7px] z-20 h-[6.75px] rounded-full bg-[#1c0a3e] md:top-[21.24px] md:right-[26.1px] md:left-[26px] md:h-[15px]" />
            <div className="absolute right-[11.95px] bottom-[51.44px] left-[11.7px] z-20 h-[6.3px] rounded-full bg-[#1c0a3e] md:right-[26.1px] md:bottom-[114.26px] md:left-[26px] md:h-[14px]" />
            <div className="absolute top-[3.15px] left-1/2 z-20 h-[9.45px] w-[4.95px] -translate-x-1/2 rounded-t-full bg-[#1c0a3e] md:top-[7px] md:h-[21px] md:w-[11px]" />

            <div className="absolute top-[41px] left-1/2 z-30 flex w-[290.5px] -translate-x-1/2 flex-col gap-4 [font-family:var(--font-nunito)] md:top-[82px] md:w-[634px] md:gap-6">
              <p className="w-[289px] text-center text-[14px] leading-5 text-[#1c0a3e] md:mx-auto md:w-[602px] md:text-[20px] md:leading-7">
                <strong>Program Ambassador</strong> Open House Fasilkom UI 2026
                mengajak anak-anak SMA/K sederajat dan influencer untuk
                meningkatkan <strong>brand awareness Fasilkom UI</strong>.
                Ambassador bertugas membuat konten digital untuk menyebarkan
                informasi mengenai Open House Fasilkom UI dan Fasilkom UI.
              </p>
              <div className="flex w-full items-center gap-4 md:justify-center md:gap-6">
                <AboutStatCard
                  side="left"
                  value="200+"
                  label={
                    <>
                      Pendaftar dari
                      <br className="md:hidden" /> seluruh Indonesia
                    </>
                  }
                />
                <AboutStatCard
                  side="right"
                  value="250+"
                  label={
                    <>
                      Pengguna <br className="md:hidden" /> Referral Code
                    </>
                  }
                />
              </div>
            </div>
          </div>
          <div className="relative z-20 hidden md:block">
            <AboutMascot />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchiveSection() {
  return (
    <section className="relative isolate h-[713.396px] w-[100dvw] max-w-[100dvw] shrink-0 overflow-visible text-white lg:h-[1039.829px]">
      <div className="relative z-10 mx-auto h-full w-[359.115px] lg:w-[1221.224px]">
        <h2 className="absolute top-16 left-0 w-full text-center [font-family:var(--font-league)] text-[24px] leading-8 font-bold lg:top-[120px] lg:text-[60px] lg:leading-[60px]">
          Ambassador 2025’s Archive
        </h2>

        <div className="absolute top-32 left-0 h-[521.396px] w-full lg:top-60 lg:h-[719.829px]">
          <div className="absolute top-[11px] left-[16px] z-40 h-[146px] w-[236px] lg:top-[153px] lg:left-[14px] lg:h-[317px] lg:w-[454px]">
            <Image
              alt="Welcoming Ambassador 2025 archive"
              className="size-full object-contain"
              draggable={false}
              src="/design-system/welcoming-ambassador.png"
              width={484}
              height={300}
            />
          </div>

          <div className="absolute top-[78px] left-[119px] z-20 h-[187px] w-[232px] lg:top-[89px] lg:left-[746px] lg:h-[376px] lg:w-[475px]">
            <Image
              alt="Webinar with Alumni archive"
              className="size-full object-contain"
              draggable={false}
              src="/design-system/webinar-alumni.png"
              width={472}
              height={380}
            />
          </div>

          <div className="absolute top-[177px] left-0 z-30 h-[264px] w-[205px] lg:top-[38px] lg:left-[407px] lg:h-[490px] lg:w-[384px]">
            <Image
              alt="Farewell Party archive"
              className="size-full object-contain"
              draggable={false}
              src="/design-system/farewell.png"
              width={371}
              height={477}
            />
          </div>

          <div className="absolute top-[260px] left-[159px] z-10 h-[161px] w-[229px] lg:top-[385px] lg:left-[560px] lg:h-[340px] lg:w-[451px]">
            <Image
              alt="Mentoring one-on-one archive"
              className="size-full object-contain"
              draggable={false}
              src="/design-system/mentoring1o1.png"
              width={474}
              height={334}
            />
          </div>

          <div className="absolute top-[362px] left-[63px] z-50 h-[162px] w-[214px] lg:top-[404px] lg:left-[165px] lg:h-[328px] lg:w-[420px]">
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
        className="pointer-events-none absolute top-[524.624px] -left-[51.703px] z-20 h-[155.225px] w-[113.348px] max-w-none object-contain lg:top-[928px] lg:-left-[98px] lg:h-[431.179px] lg:w-[314.845px]"
        draggable={false}
        src="/design-system/shard-thin.svg"
        width={315}
        height={432}
      />
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[531px] -right-[32px] z-20 h-[130.836px] w-[87.781px] max-w-none object-contain lg:top-[922px] lg:-right-[98.93px] lg:h-[403.816px] lg:w-[270.93px]"
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
    <section className="relative h-[884px] w-[100dvw] max-w-[100dvw] shrink-0 text-white lg:h-[997.171px]">
      <div className="relative ml-5 h-[884px] w-[345px] lg:top-[145.171px] lg:mx-auto lg:h-[852px] lg:w-[1204.671px]">
        <header className="absolute top-16 left-0 flex w-full flex-col items-center text-center lg:top-20 lg:left-[37.335px] lg:w-[1130px]">
          <h2 className="font-league-spartan text-[30px] leading-9 font-bold lg:text-[60px] lg:leading-[60px]">
            Need More Help?
          </h2>
          <p className="mt-1 w-full text-[16px] leading-6 font-bold lg:mt-6 lg:text-[24px] lg:leading-9">
            “Temukan berbagai pertanyaan serta jawaban seputar ambassador di
            sini!”
          </p>
        </header>

        <div className="absolute top-[184px] left-0 h-[636px] w-full lg:top-[260px] lg:flex lg:h-[512px] lg:items-start lg:justify-between">
          <Accordion
            className="w-full gap-4 lg:w-[737px]"
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
                <AccordionContent className="px-4 pb-5 text-[12px] leading-4 lg:text-[14px] lg:leading-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div
            aria-hidden="true"
            className="relative hidden h-[414px] w-[364.671px] lg:block"
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

export default function LandingPage() {
  return (
    <main className="ambassador-page-background relative flex min-h-screen w-full flex-col items-center justify-start overflow-x-clip">
      <div className="pointer-events-none absolute -top-2.75 -left-27.5 z-0 h-243.75 w-[213.2px] md:-top-12.5 md:-left-43.75 md:h-278.25 md:w-133.25">
        <Image
          alt="Left pillar decoration"
          className="h-full w-full object-contain"
          draggable={false}
          src="/design-system/pilar.svg"
          width={533}
          height={1113}
        />
      </div>
      <div className="pointer-events-none absolute -top-2.75 -right-27.5 z-0 h-243.75 w-[213.2px] scale-x-[-1] md:-top-12.5 md:-right-41.25 md:h-278.25 md:w-133.25">
        <Image
          alt="Right pillar decoration"
          className="h-full w-full object-contain"
          draggable={false}
          src="/design-system/pilar.svg"
          width={533}
          height={1113}
        />
      </div>
      <div className="relative z-10 flex w-full max-w-97.5 flex-col items-center px-4 pt-47.5 pb-16 md:max-w-360 md:px-0 md:pt-75.5 md:pb-0">
        <div className="flex flex-col items-center justify-center gap-8 text-center md:gap-8">
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

        <div className="mt-8 flex w-full max-w-89.25 flex-col gap-5 md:max-w-93.5">
          <UiButton
            variant="tertiary"
            className="bg-tertiary-60 h-10.5 md:h-12"
          >
            <UserRound className="h-6 w-6" /> Register
          </UiButton>
          <div className="flex flex-row gap-4">
            <UiButton
              variant="ghost"
              className="border-tertiary-50 text-tertiary-50 h-10.5 flex-1 border-2 px-0 md:h-12"
            >
              <Search className="h-6 w-6" />
              Detail
            </UiButton>
            <UiButton
              variant="ghost"
              className="border-tertiary-50 text-tertiary-50 h-10.5 flex-1 border-2 px-0 md:h-12"
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
    </main>
  );
}
