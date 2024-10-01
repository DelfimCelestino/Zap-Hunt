export interface Product {
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

export const products: Product[] = [
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
