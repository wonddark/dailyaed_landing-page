import Image from "next/image";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <main className="p-2.5 gap-2.5 flex flex-col">
      <section className="py-6 flex flex-col gap-6">
        <header className="flex flex-col items-center lg:flex-row">
          <strong className="font-semibold">
            Daily<span className="text-primary">AED</span>
          </strong>
        </header>
        <div className="gap-12 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col gap-12">
            <div>
              <p className="text-[10px] text-body2 text-center">
                An app built for small shop owners in the UAE
              </p>
              <p className="mb-3 font-semibold text-2xl text-center">
                Track your daily money in a{" "}
                <span className="text-accent">few seconds</span>
              </p>
              <p className="text-[13px] text-body2 text-center">
                No accounting. No complexity. Just your income and expenses for
                a fast and automatic profit calculation.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-2">
              <Link
                href="/"
                className="inline-block py-2 px-4 rounded-lg bg-primary text-primary-contrast text-center font-medium"
              >
                Start tracking today
              </Link>
              <Link
                href="/"
                className="inline-block py-2 px-4 rounded-lg text-primary text-center font-medium"
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
          <Image
            src="/hero-desktop.png"
            alt="DailyAED App"
            width={390}
            height={420}
            className="hidden lg:block"
          />
        </div>
      </section>
      <section className="py-6 flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <p className="text-xl">
            Still writing your daily numbers on paper or WhatsApp?
          </p>
          <ul className="flex flex-col gap-1 list-disc pl-5">
            <li className="text-sm">No clear daily profit</li>
            <li className="text-sm">
              Numbers scattered in notebooks and chats
            </li>
            <li className="text-sm">
              Hard to know if the shop is really making money
            </li>
          </ul>
        </div>
        <Image
          src="/writing.jpg"
          alt="avoind writing down daily numbers with DailyAED"
          width={640}
          height={427}
          className="rounded-lg"
        />
      </section>
      <section className="py-6 gap-6 flex flex-col">
        <p className="text-xl text-center">
          DailyAED keeps your shop numbers clear
        </p>
        <div className="flex flex-col lg:flex-row gap-2.5 items-center">
          <div className="flex flex-col items-center gap-3">
            <div className="aspect-square w-10 border border-accent flex items-center justify-center font-poppins font-bold text-xl text-accent rounded-full">
              1
            </div>
            <div className="flex flex-col items-center">
              <p className="font-medium">Enter today’s income</p>
              <p className="text-body2 text-sm">One number. That’s it.</p>
            </div>
          </div>
          <div className="h-10 lg:h-0.5 w-0.5 lg:w-20 bg-accent" />
          <div className="flex flex-col items-center gap-3">
            <div className="aspect-square w-10 border border-accent flex items-center justify-center font-poppins font-bold text-xl text-accent rounded-full">
              2
            </div>
            <div className="flex flex-col items-center">
              <p className="font-medium">Enter today’s expenses</p>
              <p className="text-body2 text-sm">Rent, supplies, anything.</p>
            </div>
          </div>
          <div className="h-10 lg:h-0.5 w-0.5 lg:w-20 bg-accent" />
          <div className="flex flex-col items-center gap-3">
            <div className="aspect-square w-10 border border-accent flex items-center justify-center font-poppins font-bold text-xl text-accent rounded-full">
              3
            </div>
            <div className="flex flex-col items-center">
              <p className="font-medium">See your profit instantly</p>
              <p className="text-body2 text-sm">Every day, every month.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 gap-6 flex flex-col">
        <div className="flex flex-col gap-6">
          <p className="text-xl">Why small shops choose DailyAED?</p>
          <ul className="flex flex-col gap-1 pl-5 list-disc text-sm">
            <li>Designed for small business owners in the UAE</li>
            <li>Works on any phone, tablet or desktop</li>
            <li>English and Arabic</li>
            <li>No accounting knowledge needed</li>
            <li>Your data stays yours</li>
          </ul>
        </div>
        <Image
          src="/watching.jpg"
          alt="why choose DailyAED to track your money"
          width={640}
          height={360}
          className="rounded-lg"
        />
      </section>
      <section className="py-6 gap-6 flex flex-col px-16">
        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/screen-1.png"
            alt="Today’s numbers at a glance with DailyAED"
            width={375}
            height={667}
            className="border-4 border-black rounded-xl shadow-[32px_16px_0_0_rgb(0_0_0/.15)]"
          />
          <p className="text-xs">Today’s numbers at a glance</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/screen-2.png"
            alt="Monthly totals without spreadsheets with DailyAED"
            width={375}
            height={667}
            className="border-4 border-black rounded-xl shadow-[32px_16px_0_0_rgb(0_0_0/.15)]"
          />
          <p className="text-xs">Monthly totals without spreadsheets</p>
        </div>
      </section>
      <section className="py-6 gap-6 flex flex-col">
        <p className="text-xl">Simple pricing</p>
        <div className="flex flex-col py-4 gap-4 bg-card items-stretch rounded-2xl">
          <p className="text-4xl font-light font-poppins text-center">
            39<span className="font-sans text-sm text-muted">AED</span>
          </p>
          <p className="font-semibold text-sm">What&#39;s included?</p>
          <ul className="flex flex-col gap-3 pl-5 list-disc text-sm pb-4">
            <li>Unlimited days</li>
            <li>Monthly summaries</li>
            <li>English & Arabic</li>
            <li>Support</li>
          </ul>
          <Link
            href="/"
            className="inline-block py-2 px-4 rounded-lg bg-primary text-primary-contrast font-medium text-center"
          >
            Start now
          </Link>
        </div>
      </section>
      <section className="py-6 gap-6 flex flex-col">
        <p className="text-xl">Frequently Asked Questions</p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">Is this accounting software?</p>
            <p className="text-sm font-light">
              No. DailyAED is a simple daily tracker, not accounting.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">
              Do I need accounting knowledge?
            </p>
            <p className="text-sm font-light">No.</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">Does it work in Arabic?</p>
            <p className="text-sm font-light">Yes.</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">Can I export my data?</p>
            <p className="text-sm font-light">Yes.</p>
          </div>
        </div>
      </section>
      <section className="py-6 gap-6 flex flex-col">
        <p className="text-xl text-center">
          Start tracking your shop’s profit today
        </p>
        <Link
          href="/"
          className="inline-block py-2 px-4 rounded-lg bg-primary text-primary-contrast font-medium text-center"
        >
          Start using DailyAED
        </Link>
      </section>
      <section className="py-6 gap-2 flex flex-col">
        <p className="text-center font-semibold">
          Daily<span className="text-primary">AED</span>
        </p>
        <Link href="mailto:ossmanys@gmail.com" className="text-center text-sm">
          ossmanys@gmail.com
        </Link>
        <p className="text-xs text-muted text-center">
          Your privacy is safe with us. We do not collect, store nor sell any
          data about our users.
        </p>
      </section>
    </main>
  );
}
