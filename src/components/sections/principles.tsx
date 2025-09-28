import { ArrowRight } from 'lucide-react';
import React from 'react';

const principlesData = [
  {
    number: "01",
    title: "Our Vision",
    description: "To revolutionize education by providing personalized learning experiences that adapt to each student's unique needs and learning style, making quality education accessible to everyone, everywhere.",
  },
  {
    number: "02",
    title: "Core Values",
    description: "At HEXON, we believe in innovation, accessibility, and personalization. Our platform is built on the principles of adaptive learning, data-driven insights, and continuous improvement to ensure every learner achieves their full potential.",
  },
  {
    number: "03",
    title: "Our Mission",
    description: [
      "To empower learners worldwide through cutting-edge technology that personalizes education, making learning more effective, engaging, and accessible.",
      "We're committed to breaking down barriers to education and creating a future where everyone has the tools and opportunities to learn and grow at their own pace."
    ],
  },
];

const linksData = [
  { text: "Explore Our Course Catalog", href: "/courses", isExternal: false },
  { text: "Learn About Our Adaptive Learning Technology", href: "/technology", isExternal: false },
  { text: "Join Our Learning Community", href: "/community", isExternal: false },
];

const PrinciplesSection = () => {
  return (
    <section className="bg-background text-foreground py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-normal">Our Learning Philosophy</h2>
        </div>
        
        <div className="border-t border-border">
          {principlesData.map((principle, index) => {
            const isLast = index === principlesData.length - 1;
            return (
              <div
                key={principle.number}
                className={`pt-8 ${!isLast ? 'pb-8 border-b border-border' : 'pb-8'}`}
              >
                <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-4">
                  <div className="col-span-1 md:col-span-1 text-muted-foreground">
                    ({principle.number})
                  </div>
                  <div className="col-span-3 md:col-span-4">
                    <h3 className="text-xl font-medium">{principle.title}</h3>
                  </div>
                  <div className="col-span-4 md:col-span-7">
                    {Array.isArray(principle.description) ? (
                      principle.description.map((paragraph, i) => (
                        <p key={i} className="mb-4 last:mb-0 text-muted-foreground">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-muted-foreground">{principle.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <ul className="space-y-4">
            {linksData.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noopener noreferrer" : ""}
                  className="group inline-flex items-center text-foreground hover:text-foreground/80 transition-colors"
                >
                  {link.text}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;