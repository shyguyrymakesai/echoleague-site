import React from "react";
import ryanMeg from "../assets/santorini/ryan-meg.jpg";
import santoHero from "../assets/santorini/santorini-hero-desktop-1920x1080.jpg";
import SEO from "../seo/SEO";

export default function Santorini() {
  return (
    <main className="bg-cream text-ink">
      <SEO
        title="Santorini — EchoLeague"
        description="The origin story and our travel goal. Shop to support the trip."
        canonical="https://echoleague.xyz/santorini"
        image="/og/og-default.jpg"
      />

      {/* Hero */}
      <section className="border-b border-black/10 bg-ivory">
        <div className="max-page py-16 grid md:grid-cols-[1fr,0.9fr] gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Travel Goal</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-serif font-semibold tracking-tight">Santorini</h1>
            <p className="mt-4 text-gray-700 max-w-prose">
              A small dream we’re building toward with EchoLeague.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                className="btn btn-accent"
                target="_blank"
                rel="noreferrer"
                href="https://www.etsy.com/shop/EchoLeague?utm_source=site&utm_medium=santorini&utm_campaign=support"
              >
                Buy on Etsy
              </a>
              <a className="btn btn-light" href="#/">Back to shop</a>
            </div>
          </div>

          {/* Visual */}
          <div className="h-[18rem] md:h-[22rem] rounded-2xl bg-white border border-black/5 shadow-soft overflow-hidden">
            <img src={santoHero} alt="Santorini cliffs and blue domes at sunset" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="max-page py-12">
        <h2 className="text-xl font-serif">Origin Story</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-10 items-start">
          <div className="h-[18rem] md:h-[22rem] rounded-2xl bg-white border border-black/5 shadow-soft overflow-hidden order-2 md:order-1">
            <img src={ryanMeg} alt="Two people smiling together" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-4 text-gray-700 max-w-prose order-1 md:order-2">
            <p>Meg and I were talking one day about places we would go if we could go anywhere, and Santorini, Greece was our decision.</p>
            <p>This clothing is my first step towards making our dream trip a reality.</p>
            <p>Some of the pieces were inspired by that conversation (Narcissus) and other conversations Meg and I have had.</p>
            <p>Others are just from my crazy imagination. But, I am using a portion of all proceeds to make our Santorini trip real.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
