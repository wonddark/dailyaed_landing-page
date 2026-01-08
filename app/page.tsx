import Image from "next/image";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <main className="p-2.5 lg:px-8 lg:py-0 gap-2.5 flex flex-col w-full max-w-360 mx-auto">
      <section className="py-6 lg:p-0 flex flex-col gap-6 lg:gap-0">
        <header className="flex flex-col items-center lg:flex-row lg:py-4 justify-between">
          <strong className="font-semibold lg:text-xl">
            Daily<span className="text-primary">AED</span>
          </strong>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-4">
              <li className="text-xl">
                <Link href="/#how-it-works">How it works?</Link>
              </li>
              <li className="text-xl">
                <Link href="/#pricing">Pricing</Link>
              </li>
              <li className="text-xl">
                <Link href="/#faq">FAQ</Link>
              </li>
              <li className="text-xl">EN | AR</li>
            </ul>
          </nav>
        </header>
        <div className="gap-12 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col gap-12 lg:gap-16 flex-auto lg:pr-6">
            <div className="flex flex-col lg:gap-4 max-w-194.75">
              <div className="flex flex-col">
                <p className="max-md:text-[10px] text-body2 max-md:text-center">
                  An app built for small shop owners in the UAE
                </p>
                <p className="mb-3 font-semibold lg:font-bold text-2xl lg:text-6xl max-md:text-center">
                  Track your daily money in a{" "}
                  <span className="text-accent">few seconds</span>
                </p>
              </div>
              <p className="text-[13px] lg:text-xl text-body2 max-md:text-center max-w-130">
                No accounting. No complexity. Just your income and expenses for
                a fast and automatic profit calculation.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-2">
              <Link
                href="/"
                className="inline-block py-2 lg:py-3 px-4 lg:px-6 rounded-lg bg-primary text-primary-contrast text-center font-medium"
              >
                Start tracking today
              </Link>
              <Link
                href="/"
                className="inline-block py-2 lg:py-3 px-4 lg:px-6 text-primary text-center font-medium"
              >
                Request a demo
              </Link>
            </div>
          </div>
          <div className="px-25.25 lg:hidden">
            <Image
              src="/screen-1.png"
              alt="DailyAED App"
              width={375}
              height={667}
              className="border-4 border-black rounded-xl shadow-[32px_16px_0_0_rgb(0_0_0/.15)]"
            />
          </div>
          <div className="max-md:hidden py-16 px-24 flex-auto">
            <Image
              src="/hero-desktop.png"
              alt="DailyAED App"
              width={390}
              height={420}
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>
      <section className="py-6 lg:py-8 flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex flex-col gap-6 lg:gap-8">
          <p className="text-xl lg:text-[32px]">
            Still writing your daily numbers on paper or WhatsApp?
          </p>
          <ul className="flex flex-col gap-1 list-disc pl-5">
            <li className="text-sm lg:text-xl lg:font-medium">
              No clear daily profit
            </li>
            <li className="text-sm lg:text-xl lg:font-medium">
              Numbers scattered in notebooks and chats
            </li>
            <li className="text-sm lg:text-xl lg:font-medium">
              Hard to know if the shop is really making money
            </li>
          </ul>
        </div>
        <Image
          src="/writing.jpg"
          alt="avoind writing down daily numbers with DailyAED"
          width={640}
          height={427}
          className="rounded-lg lg:rounded-2xl lg:shrink-0"
        />
      </section>
      <section
        id="how-it-works"
        className="py-6 lg:py-8 flex flex-col gap-6 lg:gap-8"
      >
        <p className="text-xl lg:text-[32px] text-center">
          DailyAED keeps your shop numbers clear
        </p>
        <div className="flex flex-col lg:flex-row gap-2.5 lg:gap-6 items-center justify-center">
          <div className="flex flex-col items-center gap-3 lg:gap-4">
            <div className="aspect-square w-10 lg:w-20 border lg:border-2 border-accent flex items-center justify-center font-poppins font-bold text-xl lg:text-4xl text-accent rounded-full">
              1
            </div>
            <div className="flex flex-col items-center lg:gap-2">
              <p className="font-medium lg:text-xl">Enter today’s income</p>
              <p className="text-body2 text-sm lg:text-base">
                One number. That’s it.
              </p>
            </div>
          </div>
          <div className="h-10 lg:h-0.5 w-0.5 lg:w-30 bg-accent" />
          <div className="flex flex-col items-center gap-3">
            <div className="aspect-square w-10 lg:w-20 border lg:border-2 border-accent flex items-center justify-center font-poppins font-bold text-xl lg:text-4xl text-accent rounded-full">
              2
            </div>
            <div className="flex flex-col items-center lg:gap-2">
              <p className="font-medium lg:text-xl">Enter today’s expenses</p>
              <p className="text-body2 text-sm lg:text-base">
                Rent, supplies, anything.
              </p>
            </div>
          </div>
          <div className="h-10 lg:h-0.5 w-0.5 lg:w-30 bg-accent" />
          <div className="flex flex-col items-center gap-3">
            <div className="aspect-square w-10 lg:w-20 border lg:border-2 border-accent flex items-center justify-center font-poppins font-bold text-xl lg:text-4xl text-accent rounded-full">
              3
            </div>
            <div className="flex flex-col items-center lg:gap-2">
              <p className="font-medium lg:text-xl">
                See your profit instantly
              </p>
              <p className="text-body2 text-sm lg:text-base">
                Every day, every month.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 lg:py-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 lg:justify-between">
        <div className="flex flex-col gap-6 lg:gap-8">
          <p className="text-xl lg:text-[32px]">
            Why small shops choose DailyAED?
          </p>
          <ul className="flex flex-col gap-1 list-disc pl-5">
            <li className="text-sm lg:text-xl lg:font-medium">
              Designed for small business owners in the UAE
            </li>
            <li className="text-sm lg:text-xl lg:font-medium">
              Works on any phone, tablet or desktop
            </li>
            <li className="text-sm lg:text-xl lg:font-medium">
              English and Arabic
            </li>
            <li className="text-sm lg:text-xl lg:font-medium">
              No accounting knowledge needed
            </li>
            <li className="text-sm lg:text-xl lg:font-medium">
              Your data stays yours
            </li>
          </ul>
        </div>
        <Image
          src="/watching.jpg"
          alt="why choose DailyAED to track your money"
          width={640}
          height={360}
          className="rounded-lg lg:rounded-2xl lg:shrink-0"
        />
      </section>
      <section className="py-6 lg:py-8 flex flex-col lg:flex-row px-16 gap-6 lg:gap-16 items-center justify-start">
        <div className="flex flex-col gap-4 lg:gap-6 items-center">
          <Image
            src="/screen-1.png"
            alt="Today’s numbers at a glance with DailyAED"
            width={375}
            height={667}
            className="border-4 border-black rounded-[20px] shadow-[32px_16px_0_0_rgb(0_0_0/.15)]"
          />
          <p className="text-xs lg:text-base">Today’s numbers at a glance</p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 items-center">
          <Image
            src="/screen-2.png"
            alt="Monthly totals without spreadsheets with DailyAED"
            width={375}
            height={667}
            className="border-4 border-black rounded-[20px] shadow-[32px_16px_0_0_rgb(0_0_0/.15)]"
          />
          <p className="text-xs lg:text-base">
            Monthly totals without spreadsheets
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 items-center max-md:hidden">
          <div className="grid grid-cols-12 grid-rows-1 rounded-[20px] shadow-[32px_16px_0_0_rgb(0_0_0/.15)]">
            <Image
              src="/screen-3.png"
              alt="DailyAED supports both light and dark themes"
              width={375}
              height={667}
              className="col-start-1 col-end-10 row-start-1 row-span-1 border-4 border-black rounded-[20px]"
            />
            <Image
              src="/screen-1.png"
              alt="DailyAED supports both light and dark themes"
              width={375}
              height={667}
              className="col-start-4 -col-end-1 row-start-1 row-span-1 border-4 border-black rounded-[20px]"
            />
          </div>
          <p className="text-xs lg:text-base">
            Support both Light and Dark themes
          </p>
        </div>
      </section>
      <section id="pricing" className="py-6 gap-6 flex flex-col items-center">
        <p className="text-xl lg:text-[32px]">Simple pricing</p>
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8">
          <div className="flex flex-col p-6 lg:p-8 gap-6 lg:gap-8 bg-card items-stretch rounded-2xl max-w-82.25 border border-divider">
            <div className="flex flex-col items-center">
              <p className="text-[40px] lg:text-[64px] font-light font-poppins text-center">
                0
                <span className="font-sans text-sm lg:text-base text-muted">
                  AED
                </span>
              </p>
              <p className="uppercase text-primary text-base lg:text-xl font-medium">
                Free
              </p>
              <p className="px-8 lg:px-4 text-[10px] lg:text-sm font-light text-center">
                For starters and owners wanting to see if it fits in their
                workflow
              </p>
            </div>
            <ul className="flex flex-col gap-3 pl-5 list-disc flex-auto">
              <li className="text-sm lg:text-base">Up to 30 days history</li>
              <li className="text-sm lg:text-base">
                Current month summary only
              </li>
              <li className="text-sm lg:text-base">
                Share summary by WhatsApp
              </li>
              <li className="text-sm lg:text-base">English & Arabic</li>
              <li className="text-sm lg:text-base">Support</li>
            </ul>
            <Link
              href="/"
              className="inline-block py-2 lg:py-3 px-4 lg:px-6 rounded-lg bg-primary hover:bg-primary-hover transition-colors ease-in-out duration-300 text-primary-contrast font-medium text-center"
            >
              Start now for free
            </Link>
          </div>
          <div className="flex flex-col p-6 lg:p-8 gap-6 lg:gap-8 bg-card items-stretch rounded-2xl max-w-86.25 border border-divider">
            <div className="flex flex-col items-center">
              <p className="text-[40px] lg:text-[64px] font-light font-poppins text-center">
                39
                <span className="font-sans text-sm lg:text-base text-muted">
                  AED
                </span>
              </p>
              <p className="uppercase text-primary text-base lg:text-xl font-medium">
                Professional
              </p>
              <p className="px-8 lg:px-4 text-[10px] lg:text-sm font-light text-center">
                For busy business man wanting to save as much time as possible
              </p>
            </div>
            <ul className="flex flex-col gap-3 pl-5 list-disc flex-auto">
              <li className="text-sm lg:text-base">Unlimited days history</li>
              <li className="text-sm lg:text-base">
                Unlimited monthly summaries
              </li>
              <li className="text-sm lg:text-base">
                Export summary to PDF and Excel
              </li>
              <li className="text-sm lg:text-base">
                Share summary by WhatsApp
              </li>
              <li className="text-sm lg:text-base">English & Arabic</li>
              <li className="text-sm lg:text-base">Support</li>
            </ul>
            <Link
              href="/"
              className="inline-block py-2 lg:py-3 px-4 lg:px-6 rounded-lg bg-primary hover:bg-primary-hover transition-colors ease-in-out duration-300 text-primary-contrast font-medium text-center"
            >
              Act smart now
            </Link>
          </div>
        </div>
      </section>
      <section
        id="faq"
        className="py-6 lg:py-8 flex flex-col lg:flex-row gap-6 lg:gap-16 justify-between items-center"
      >
        <div className="flex flex-col gap-6 lg:gap-8">
          <p className="text-xl lg:text-[32px] max-md:text-center">
            Frequently Asked Questions
          </p>
          <div className="flex flex-col gap-3 lg:gap-4">
            <div className="flex flex-col gap-1">
              <p className="max-md:text-sm font-medium">
                Is this accounting software?
              </p>
              <p className="max-md:text-sm font-light">
                No. DailyAED is a simple daily tracker, not accounting.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="max-md:text-sm font-medium">
                Do I need accounting knowledge?
              </p>
              <p className="max-md:text-sm font-light">No.</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="max-md:text-sm font-medium">
                Does it work in Arabic?
              </p>
              <p className="max-md:text-sm font-light">Yes.</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="max-md:text-sm font-medium">
                Can I export my data?
              </p>
              <p className="max-md:text-sm font-light">Yes.</p>
            </div>
          </div>
        </div>
        <Image
          src="/thinking.jpg"
          alt="frequently asked questions about DailyAED"
          width={640}
          height={338}
          className="hidden lg:block rounded-lg lg:rounded-2xl lg:shrink-0"
        />
      </section>
      <section className="py-6 lg:py-8 gap-6 flex flex-col lg:items-center">
        <p className="text-xl lg:text-[32px] text-center px-6">
          Start tracking your shop’s profit today
        </p>
        <Link
          href="/"
          className="inline-block py-2 lg:py-3 px-4 lg:px-6 rounded-lg bg-primary hover:bg-primary-hover transition-colors ease-in-out duration-300 text-primary-contrast font-medium text-center"
        >
          Start using DailyAED
        </Link>
      </section>
      <section className="py-6 lg:py-8 gap-2 lg:gap-4 flex flex-col lg:flex-row flex-wrap justify-between">
        <p className="text-center font-semibold lg:text-xl">
          Daily<span className="text-primary">AED</span>
        </p>
        <Link href="mailto:ossmanys@gmail.com" className="text-center text-sm">
          ossmanys@gmail.com
        </Link>
        <p className="text-xs lg:text-[15px] text-muted text-center w-full">
          Your privacy is safe with us. We do not collect, store nor sell any
          data about our users.
        </p>
      </section>
    </main>
  );
}
