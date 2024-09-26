"use client";

import Header from "@/components/header";
import SideTab from "@/components/side-tab";
import { Button } from "@/components/ui/button";
import { ChevronUp, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Product {
  name: string;
  desc: string;
  upvotes: number;
  tags: string[];
  image: string;
  website: string;
  makers: {
    name: string;
    image: string;
  }[];
  gallery: string[];
}

export default function Component() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const products: Product[] = [
    {
      name: "Mozalink",
      desc: "Hire people - Make your project more fast - Get paid",
      upvotes: 500,
      tags: ["Productivity", "People", "Hire", "Task Management"],
      image:
        "https://scontent-fra3-2.xx.fbcdn.net/v/t39.30808-1/393585186_6824510940961826_6505150162200080149_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeFVo7ymrUYOQPXLd6O4ooSwXQn0KSIiSO1dCfQpIiJI7a2fTE72h42OLqgaDSUWjMiYHFTvBMlNIelaqUgZb98_&_nc_ohc=qnorALkq9X0Q7kNvgHu8hdS&_nc_ht=scontent-fra3-2.xx&_nc_gid=ARZW7Ssj68szzfZpungeseB&oh=00_AYAQTcJXKD-6QJ9K7ML_ffekr1Iukznc1DUt9EIY0Zkxzg&oe=66FB4D1A",
      website: "https://mozalink.vercel.app",
      makers: [
        {
          name: "Delfim Celestino",
          image: "https://github.com/denycelestino.png",
        },
        {
          name: "Frasio Joao",
          image: "https://github.com/eufrasiojoao.png",
        },
        {
          name: "Lucas Fulano",
          image: "https://github.com/waplaf.png",
        },
      ],
      gallery: [
        "https://delfim.vercel.app/_next/image?url=%2Ftrafegotop.jpg&w=3840&q=75",
        "https://delfim.vercel.app/_next/image?url=%2Fbarn.jpg&w=3840&q=75",
        "https://delfim.vercel.app/_next/image?url=%2Fmozalink.jpeg&w=3840&q=75",
      ],
    },
    {
      name: "Fluent Academy",
      desc: "Leaern English - Be fluent",
      upvotes: 432,
      tags: ["School", "Platform", "English"],
      image: "https://fluentacademy.pro/logo-t.png",
      website: "https://www.fluentacademy.pro",
      makers: [
        {
          name: "Delfim Celestino",
          image: "https://github.com/denycelestino.png",
        },
        {
          name: "Frasio Joao",
          image: "https://github.com/eufrasiojoao.png",
        },
        {
          name: "Lucas Fulano",
          image: "https://github.com/waplaf.png",
        },
      ],
      gallery: [
        "https://fluentacademy.pro/assets/img-Bif2O3Kk.jpg",
        "https://delfim.vercel.app/_next/image?url=%2Fbarn.jpg&w=3840&q=75",
        "https://delfim.vercel.app/_next/image?url=%2Fmozalink.jpeg&w=3840&q=75",
      ],
    },
    {
      name: "Kartas pro",
      desc: "Use essa poderosa ferramenta para criar cartas e CV's incriveis",
      upvotes: 432,
      tags: ["School", "Platform", "Cv"],
      image: "https://kartas.pro/logo/logo2.png",
      website: "https://www.kartas.pro",
      makers: [
        {
          name: "Delfim Celestino",
          image: "https://github.com/denycelestino.png",
        },
        {
          name: "Frasio Joao",
          image: "https://github.com/eufrasiojoao.png",
        },
        {
          name: "Lucas Fulano",
          image: "https://github.com/waplaf.png",
        },
      ],
      gallery: [
        "https://fluentacademy.pro/assets/img-Bif2O3Kk.jpg",
        "https://kartas.pro/logo/logo2.png",
        "https://delfim.vercel.app/_next/image?url=%2Fmozalink.jpeg&w=3840&q=75",
      ],
    },
    {
      name: "BeforeSunset AI 2.0",
      desc: "Personalized AI daily planning that suits your life",
      upvotes: 432,
      tags: ["Productivity", "Task Management", "Artificial Intelligence"],
      image:
        "https://ph-files.imgix.net/47683e62-e763-4ce5-afc9-424c5813c5f4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=2",
      website: "https://www.delfim.vercel.app",

      makers: [
        {
          name: "Delfim Celestino",
          image: "https://github.com/denycelestino.png",
        },
        {
          name: "Frasio Joao",
          image: "https://github.com/eufrasiojoao.png",
        },
        {
          name: "Lucas Fulano",
          image: "https://github.com/waplaf.png",
        },
      ],
      gallery: [
        "https://delfim.vercel.app/_next/image?url=%2Ftrafegotop.jpg&w=3840&q=75",
        "https://delfim.vercel.app/_next/image?url=%2Fbarn.jpg&w=3840&q=75",
        "https://delfim.vercel.app/_next/image?url=%2Fmozalink.jpeg&w=3840&q=75",
      ],
    },
    {
      name: "daily.dev Squads",
      desc: "Build a developer community where devs already hang out",
      upvotes: 235,
      tags: ["Social Media", "Developer Tools", "GitHub"],
      image:
        "https://ph-files.imgix.net/47683e62-e763-4ce5-afc9-424c5813c5f4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=2",
      website: "https://www.delfim.vercel.app",

      makers: [
        {
          name: "Delfim Celestino",
          image: "https://github.com/denycelestino.png",
        },
        {
          name: "Frasio Joao",
          image: "https://github.com/eufrasiojoao.png",
        },
        {
          name: "Lucas Fulano",
          image: "https://github.com/waplaf.png",
        },
      ],
      gallery: [
        "https://delfim.vercel.app/_next/image?url=%2Ftrafegotop.jpg&w=3840&q=75",
        "https://delfim.vercel.app/_next/image?url=%2Fbarn.jpg&w=3840&q=75",
        "https://delfim.vercel.app/_next/image?url=%2Fmozalink.jpeg&w=3840&q=75",
      ],
    },

    {
      name: "Neolocus",
      desc: "AI Rendering Playground for Designers",
      upvotes: 187,
      tags: ["Design Tools", "Artificial Intelligence"],
      image:
        "https://ph-files.imgix.net/8e8e1714-81fb-41ec-aee2-b9a00664c7d8.svg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=2",
      website: "https://www.delfim.vercel.app",
      makers: [
        {
          name: "Delfim Celestino",
          image: "https://github.com/denycelestino.png",
        },
        {
          name: "Frasio Joao",
          image: "https://github.com/eufrasiojoao.png",
        },
        {
          name: "Lucas Fulano",
          image: "https://github.com/waplaf.png",
        },
      ],
      gallery: [
        "https://delfim.vercel.app/_next/image?url=%2Ftrafegotop.jpg&w=3840&q=75",
        "https://delfim.vercel.app/_next/image?url=%2Fbarn.jpg&w=3840&q=75",
        "https://delfim.vercel.app/_next/image?url=%2Fmozalink.jpeg&w=3840&q=75",
      ],
    },
    {
      name: "Vanta",
      desc: "Automate SOC 2 compliance and more. Get $1,000 off",
      upvotes: 2979,
      tags: ["SaaS", "Privacy", "Developer Tools"],
      image:
        "https://ph-files.imgix.net/47683e62-e763-4ce5-afc9-424c5813c5f4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=2",
      website: "https://www.delfim.vercel.app",
      makers: [
        {
          name: "Delfim Celestino",
          image: "https://github.com/denycelestino.png",
        },
        {
          name: "Frasio Joao",
          image: "https://github.com/eufrasiojoao.png",
        },
        {
          name: "Lucas Fulano",
          image: "https://github.com/waplaf.png",
        },
      ],
      gallery: [
        "https://delfim.vercel.app/_next/image?url=%2Ftrafegotop.jpg&w=3840&q=75",
        "https://delfim.vercel.app/_next/image?url=%2Fbarn.jpg&w=3840&q=75",
        "https://delfim.vercel.app/_next/image?url=%2Fmozalink.jpeg&w=3840&q=75",
      ],
    },
    {
      name: "Olly 2.0",
      desc: "AI Agent to Amplify Your Social Presence in Days",
      upvotes: 175,
      tags: ["Chrome Extensions", "Social Media"],
      image:
        "https://ph-files.imgix.net/dbe86427-675d-414c-89be-b3b0f310d679.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=2",
      website: "https://www.delfim.vercel.app",
      makers: [
        {
          name: "Delfim Celestino",
          image: "https://github.com/denycelestino.png",
        },
        {
          name: "Frasio Joao",
          image: "https://github.com/eufrasiojoao.png",
        },
        {
          name: "Lucas Fulano",
          image: "https://github.com/waplaf.png",
        },
      ],
      gallery: [
        "https://delfim.vercel.app/_next/image?url=%2Ftrafegotop.jpg&w=3840&q=75",
        "https://delfim.vercel.app/_next/image?url=%2Fbarn.jpg&w=3840&q=75",
        "https://delfim.vercel.app/_next/image?url=%2Fmozalink.jpeg&w=3840&q=75",
      ],
    },
  ];

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
