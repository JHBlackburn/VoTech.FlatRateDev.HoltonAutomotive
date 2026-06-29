import { About } from "~/components/About";
import { Contact } from "~/components/Contact";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { MobileContactBar } from "~/components/MobileContactBar";
import { ModelsServiced } from "~/components/ModelsServiced";
import { Reputation } from "~/components/Reputation";
import { Services } from "~/components/Services";
import { TrustStrip } from "~/components/TrustStrip";
import { autoRepairSchema } from "~/utils/schema";
import { homeMeta } from "~/utils/seo";

export const meta = homeMeta;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(autoRepairSchema()) }}
      />
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <TrustStrip />
        <Services />
        <ModelsServiced />
        <About />
        <Reputation />
        <Contact />
      </main>
      <Footer />
      <MobileContactBar />
    </>
  );
}
