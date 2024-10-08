"use client";

import Header from "@/components/header";
import SideTab from "@/components/side-tab";
import { Button } from "@/components/ui/button";
import { ChevronUp, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { products, Product } from "./utils/db";

export default function Component() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const openProductModal = (index: number) => {
    setSelectedProduct(products[index]);
    setCurrentProductIndex(index);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const navigateProduct = (direction: "prev" | "next") => {
    let newIndex =
      direction === "prev" ? currentProductIndex - 1 : currentProductIndex + 1;
    if (newIndex < 0) newIndex = products.length - 1;
    if (newIndex >= products.length) newIndex = 0;
    setSelectedProduct(products[newIndex]);
    setCurrentProductIndex(newIndex);
  };

  return (
    <>
      <Header />
      <main className="wrapper">
        <div className="p-4 rounded-lg mb-6 relative">
          <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
            <X className="h-4 w-4" />
          </button>
          <h2 className="text-lg font-semibold mb-1">
            Welcome to Zap Hunt! 👋
          </h2>
          <p className="text-sm text-gray-600">
            The place to launch and discover new tech products.{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              Take a tour.
            </Link>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 lg:pr-8">
            <h1 className="text-2xl font-bold mb-4">
              Top Products Launching Today
            </h1>
            <div className="flex space-x-4 mb-6">
              <span className="text-red-500 font-medium">Featured</span>
              <span className="text-gray-500">All</span>
            </div>
            <ul className="space-y-4">
              {products.map((product, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-sm cursor-pointer"
                  onClick={() => openProductModal(index)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-base font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {product.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      {product.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Button variant="ghost" size="sm" className="h-auto p-1 ">
                      <ChevronUp className="h-4 w-4" />
                    </Button>
                    <span className="text-xs font-semibold mt-1">
                      {product.upvotes}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-muted rounded-lg text-center">
              <p className="text-sm font-medium mb-2">
                Get the best of Zap Hunt, directly in your inbox.
              </p>
              <Button>Sign me up</Button>
            </div>
          </div>
          <SideTab />
        </div>
      </main>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-background w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 flex items-center justify-between border-b">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigateProduct("prev")}
                >
                  <ChevronUp className="h-4 w-4 -rotate-90" />
                </Button>
                <h2 className="text-lg font-semibold">
                  {selectedProduct.name}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigateProduct("next")}
                >
                  <ChevronUp className="h-4 w-4 rotate-90" />
                </Button>
              </div>
              <Button variant="ghost" size="sm" onClick={closeProductModal}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-6">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16  rounded-lg">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedProduct.desc}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    {selectedProduct.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {selectedProduct.gallery.map((project, index) => (
                  <div key={index} className="bg-muted h-40 rounded-lg">
                    <img
                      src={project}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">
                  About {selectedProduct.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">Makers</h4>
                <div className="flex space-x-2">
                  {selectedProduct.makers.map((colabrator, index) => (
                    <Link key={index} href={"/profile"}>
                      <img
                        src={colabrator.image}
                        alt={`Colaborator - ${colabrator.name} - ${index + 1}`}
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4 bg-muted flex justify-between items-center">
              <Button asChild variant="outline" size="sm">
                <Link target="_blank" href={selectedProduct.website}>
                  Visit Website
                </Link>
              </Button>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="flex items-center">
                  <ChevronUp className="h-4 w-4 mr-1" />
                  {selectedProduct.upvotes}
                </Button>
                <Button variant="ghost" size="sm">
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
