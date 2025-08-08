import React from "react";

export default function ProductCard({ title, price, image, href }) {
  return (
    <a
      className="card overflow-hidden hover:-translate-y-0.5 transition-transform"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="aspect-[4/5] bg-ivory overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm">
            Image
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="font-medium">{title}</div>
        <div className="mt-1 text-gray-600">${price}</div>
        <div className="mt-3 inline-flex items-center gap-2 text-sm text-blueRose">
          View on Etsy <span aria-hidden>↗</span>
        </div>
      </div>
    </a>
  );
}
