'use client';

import { cn } from "@/lib/utils";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import FlowingMenu from "@/components/FlowingMenu/FlowingMenu";
import { Search } from "lucide-react";
import {
  IconTerminal2,
  IconEaseInOut,
  IconCurrencyDollar,
  IconCloud,
} from "@tabler/icons-react";

interface MenuItem {
  text: string;
  link: string;
  image: string;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  borderColor: string;
  textColor: string;
  hoverBg: string;
}

interface FeatureCardsProps {
  features: Feature[];
}

export default function Page() {
  const menuItems: MenuItem[] = [
    {
      text: 'Programming',
      link: '/courses/courses/programming',
      image: 'https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2022/10/shutterstock_577183882.jpg'
    },
    {
      text: 'Content Creation',
      link: '/courses/courses/content-creation',
      image: 'https://d9pfvpeevxz0y.cloudfront.net/blog/wp-content/uploads/2021/05/Blog_052121-1200x675.jpg'
    },
    {
      text: 'Business',
      link: '/courses/courses/business',
      image: 'https://i.pinimg.com/736x/60/77/c0/6077c042e1327b473a468346d6e98f18.jpg'
    },
    {
      text: 'Marketing',
      link: '/courses/courses/marketing',
      image: 'https://cdn.pixabay.com/photo/2021/02/08/15/44/social-media-5995266_1280.png'
    }
  ];

  const features: Feature[] = [
    {
      title: "Built for learners",
      description:
        "HEXON is designed for students, professionals, and lifelong learners who want to master new skills through personalized, adaptive learning experiences.",
      icon: <IconTerminal2 />,
      bgColor: "bg-gray-900",
      borderColor: "border-gray-700",
      textColor: "text-gray-300",
      hoverBg: "hover:bg-gray-800",
    },
    {
      title: "Next-gen learning",
      description:
        "Experience the future of education with AI-powered course recommendations, interactive content, and real-time progress tracking that adapts to your learning style.",
      icon: <IconEaseInOut />,
      bgColor: "bg-gray-900",
      borderColor: "border-gray-700",
      textColor: "text-gray-300",
      hoverBg: "hover:bg-gray-800",
    },
    {
      title: "Learn anywhere, anytime",
      description: "Access thousands of courses from industry experts, available 24/7 on any device. Your learning journey never stops with HEXON's cloud-based platform.",
      icon: <IconCloud />,
      bgColor: "bg-gray-900",
      borderColor: "border-gray-700",
      textColor: "text-gray-300",
      hoverBg: "hover:bg-gray-800",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-[270px]">
        {/* Hero Section */}
        <section className="bg-black">
          <div className="w-full px-0 py-8">
            <h1 className="text-[5rem] md:text-[10rem] font-thin text-white leading-none mb-0 pl-4">
              Courses
            </h1>
          </div>
        </section>

        {/* Full-width Search Bar */}
        <section className="bg-black border-t border-gray-800">
          <div className="w-full px-2 py-4">
            <div className="relative max-w-full">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-black border border-gray-700 px-16 py-5 text-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-black">
          <div className="w-full px-2 pt-10 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left Section: Feature Cards */}
              <div className="lg:col-span-1 space-y-6">
                <FeatureCards features={features} />
              </div>

              {/* Right Section: Flowing Menu for Courses */}
              <div className="lg:col-span-3">
                <div className="mb-12" style={{ height: '600px', position: 'relative' }}>
                  <FlowingMenu items={menuItems} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function FeatureCards({ features }: FeatureCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 relative z-10 py-10 max-w-full mx-auto">
      {features.map((feature: Feature, index: number) => (
        <Feature key={feature.title} {...feature} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, bgColor, borderColor, textColor, hoverBg }: Feature) => {
  return (
    <div
      className={cn(
        "flex flex-col py-8 relative rounded-lg border cursor-pointer transition-all duration-300",
        bgColor,
        borderColor,
        textColor,
        hoverBg,
        "hover:scale-[1.02] hover:shadow-lg"
      )}
    >
      <div className="mb-4 px-10">{icon}</div>
      <h3 className="text-lg font-bold mb-2 px-10">{title}</h3>
      <p className="text-sm px-10">{description}</p>
    </div>
  );
};