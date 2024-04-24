import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-[100svh] relative">
        <Image src="/assets/images/event-background.jpg" alt="" fill />
        <div className="absolute p-5 bg-black/50 inset-0 flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl text-center lg:text-5xl font-bold font-serif">
            Ready to attend your next event?
          </h1>
          <p className="text-center mt-1 text-lg text-white max-w-prose">
            Discover exciting events near you and beyond with our comprehensive
            events website.
          </p>
          <div className="flex gap-5 mt-8">
            <Button color="primary">Find Events</Button>
            <Button variant="ghost" color="primary">
              Create Events
            </Button>
          </div>
        </div>
      </section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ullam
        voluptates provident nisi quod sapiente itaque laudantium, harum
        cupiditate sunt facilis sed. Molestias aspernatur tenetur labore neque
        nisi tempora autem.
      </p>
    </main>
  );
}
