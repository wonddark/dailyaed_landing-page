import Image from "next/image";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <main className="p-2.5 gap-2.5 flex flex-col">
      <section>
        <header className="hidden lg:flex">
          <strong>
            Daily<span className="text-primary">AED</span>
          </strong>
        </header>
        <div className="gap-12 py-6 flex flex-col lg:flex-row items-center">
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
                className="inline-block py-2 px-4 rounded-lg bg-primary text-primary-contrast text-center"
              >
                Start tracking today
              </Link>
              <Link
                href="/"
                className="inline-block py-2 px-4 rounded-lg text-primary text-center"
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
    </main>
  );
}
