import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-36">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Just a simple starter for &nbsp;</h1>
        <h1 className={title({ color: "pink" })}>Appwrite&nbsp;</h1>
        <br />
        <h1 className={title()}>
          to help you get your project up and running quickly.
        </h1>
      </div>
      <div className="flex gap-3"></div>
    </section>
  );
}
