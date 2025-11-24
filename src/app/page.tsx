"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import Link from 'next/link';
import { BookOpen, Facebook, Instagram, Star, Twitter, Users, Youtube } from 'lucide-react';

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="fluid"
      cardStyle="glass-depth"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Hello Everybody"
          button={{
            text: "Enroll Now",
            href: "/contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero" className="mx-auto px-4 md:px-6">
        <HeroBillboard
          title="Learn English with Hello Everybody"
          description="Master the English language with our interactive and engaging teaching methods. Join thousands of students who have achieved fluency with our proven approach."
          tag="Welcome"
          tagIcon={Users}
          buttons={[
            {
              text: "Start Learning",
              href: "/contact"
            },
            {
              text: "Learn More",
              href: "/about"
            }
          ]}
          imageSrc="https://pixabay.com/get/g2ab780970cf947e0c3757ade9547329f8e53d551a396647dfd674498429f99cc9e379d60f12c01803b5b3fc9f2d3cc002b49eaf5fff4329dbcfbad9365ae7c33_1280.jpg"
          imageAlt="Happy students learning English together"
          frameStyle="card"
        />
      </div>

      <div id="testimonials" data-section="testimonials" className="mx-auto px-4 md:px-6">
        <TestimonialCardFour
          title="What Our Students Say"
          description="Hear from students who have transformed their English skills with Hello Everybody"
          tag="Success Stories"
          tagIcon={Star}
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Manager",
              company: "Tech Corp",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g8409b30e4b0dc961e3be0198418d147e3629d507944d86cfd46635eca77a1814376fc4a87426cd759cdb7e6fe9aa54b5e0cdf8b601e1eca4d1a9a450b37bf697_1280.jpg",
              imageAlt: "Sarah Johnson",
              content: "Hello Everybody transformed my English skills completely. The interactive methods made learning enjoyable and effective."
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Engineering Student",
              company: "State University",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gadf9ab3e279567aa2153b55e0f9696ad18b9b1210216a6aed718afb03ea750b16279f669784fd673fba9800898b4bf3f13f432ce6f63803f26cdbbc48ea74ed1_1280.jpg",
              imageAlt: "Mike Chen",
              content: "The teachers at Hello Everybody are amazing. They helped me gain confidence in speaking English fluently."
            },
            {
              id: "3",
              name: "Anna Rodriguez",
              role: "Business Owner",
              company: "Local Restaurant",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gf88f9c3faa089363a0ebe93f4912a46f3bd5c1ffc675d7c4f3c169cb9e039d7eaae806a3067cd88c758015827fb8b215e6a5a2c23891a1b683be880995c21251_1280.jpg",
              imageAlt: "Anna Rodriguez",
              content: "I improved my business English significantly with Hello Everybody. Their approach is practical and results-oriented."
            },
            {
              id: "4",
              name: "Carlos Silva",
              role: "Software Developer",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gc0969683a75463932fb0d6367304ff1d9d38800afd14c5dbe4fc6b8909b3f5100433c03ff1affe42f752de97c62a7f46b18cdc4ec4f7fb9903265027c65a944f_1280.jpg",
              imageAlt: "Carlos Silva",
              content: "The personalized learning approach at Hello Everybody helped me achieve my English language goals quickly."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Hello Everybody"
          copyrightText="© 2025 Hello Everybody English School. All rights reserved."
          columns={[
            {
              title: "School",
              items: [
                {
                  label: "About Us",
                  href: "/about"
                },
                {
                  label: "Our Methods",
                  href: "/courses"
                },
                {
                  label: "Teachers",
                  href: "/contact"
                }
              ]
            },
            {
              title: "Courses",
              items: [
                {
                  label: "Beginner",
                  href: "/courses"
                },
                {
                  label: "Intermediate",
                  href: "/courses"
                },
                {
                  label: "Advanced",
                  href: "/courses"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact",
                  href: "/contact"
                },
                {
                  label: "FAQ",
                  href: "/contact"
                },
                {
                  label: "Help Center",
                  href: "/contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Youtube,
              href: "https://youtube.com",
              ariaLabel: "YouTube"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}