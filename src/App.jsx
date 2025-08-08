// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

import ivlMock from "./assets/merch mockups/IVL Dropout Mockup.png";
import bessieMock from "./assets/merch mockups/Beam Me Up, Bessie Mockup.png";
import jesterMock from "./assets/merch mockups/Jester Mockup.png";

const products = [
	{
		title: "Ivy-League Dropout Tee",
		price: "25.00",
		image: ivlMock,
		href: "https://www.etsy.com/listing/000000000?utm_source=site&utm_medium=grid&utm_campaign=hero",
	},
	{
		title: "Beam Me Up, Bessie Tee",
		price: "25.00",
		image: bessieMock,
		href: "https://www.etsy.com/listing/000000000?utm_source=site&utm_medium=grid&utm_campaign=hero",
	},
	{
		title: "Jester Hoodie",
		price: "40.00",
		image: jesterMock,
		href: "https://www.etsy.com/listing/000000000?utm_source=site&utm_medium=grid&utm_campaign=hero",
	},
];

export default function App() {
	return (
		<div id="top" className="min-h-screen flex flex-col bg-cream text-ink">
			<Header />

			{/* HERO — single, professional */}
			<section className="relative">
				<div className="max-page grid md:grid-cols-[1.1fr,0.9fr] gap-10 py-16 items-center">
					<div>
						<h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight">
							EchoLeague
						</h1>
						<p className="mt-4 text-gray-700 max-w-prose">
							Small-batch graphics, printed on demand to reduce waste. Built to
							last, designed to tell stories.
						</p>

						<div className="mt-8 flex items-center gap-3">
							<a
								className="btn btn-accent"
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.etsy.com/shop/EchoLeague?utm_source=site&utm_medium=hero&utm_campaign=cta"
							>
								Shop on Etsy
							</a>
							<a className="btn btn-light" href="#shop">
								Browse capsule
							</a>
						</div>

						{/* Trust bar */}
						<div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-600">
							<span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1">
								<span aria-hidden>🇺🇸/🇪🇺</span> Printed regionally
							</span>
							<span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1">
								<span aria-hidden>♻️</span> Made-to-order (less waste)
							</span>
							<span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1">
								<span aria-hidden>✓</span> Easy returns
							</span>
						</div>
					</div>

					{/* Hero visual placeholder (swap with your image when ready) */}
					<div className="h-[15rem] md:h-[20rem] rounded-2xl bg-ivory border border-black/5 shadow-soft flex items-center justify-center">
						<img
							src="/src/assets/Banners/Echo-League Banner.png"
							className="h-full w-full object-cover rounded-2xl"
						/>
					</div>
				</div>
			</section>

			{/* Featured grid */}
			<section id="shop" className="max-page py-8">
				<div className="flex items-end justify-between">
					<h2 className="text-2xl font-serif">Featured</h2>
					<a
						className="text-sm text-blueRose hover:opacity-80"
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.etsy.com/shop/EchoLeague?utm_source=site&utm_medium=section&utm_campaign=featured"
					>
						View all ↗
					</a>
				</div>
				<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{products.map((p) => (
						<ProductCard key={p.title} {...p} />
					))}
				</div>
			</section>

			{/* About */}
			<section id="about" className="max-page py-16">
				<div className="mx-auto max-w-3xl">
					<h2 className="text-2xl font-serif">Why EchoLeague?</h2>
					<p className="mt-4 text-gray-700">
						We design pieces that carry meaning. Our designs are meant to inspire
						and evoke contemplation. With each piece we want to tell a story; big or
						small doesn't matter.
					</p>
					<ul className="mt-6 space-y-2 text-gray-700 list-disc pl-5">
						<li>Thoughtful artwork and typography</li>
						<li>Free Shipping on orders over $35</li>
						<li>Easy returns</li>
					</ul>
				</div>
			</section>

			<Footer />
		</div>
	);
}
