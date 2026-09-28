import { Contact } from "@/components/contact";
import { Facts } from "@/components/facts";
import { Hero } from "@/components/hero";
import { Leadership } from "@/components/leadership";
import { SiteHeader } from "@/components/site-header";
import { Ticker } from "@/components/ticker";
import { Trail } from "@/components/trail";
import { Work } from "@/components/work";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Ticker />
        <Facts />
        <Work />
        <Leadership />
        <Trail />
        <Contact />
      </main>
    </>
  );
}
