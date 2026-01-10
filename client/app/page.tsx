import { About } from "@/components/main/about";
import { Contact } from "@/components/main/contact";
import Hero from "@/components/main/hero";
import { Project } from "@/components/main/project";

const Page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default Page;
