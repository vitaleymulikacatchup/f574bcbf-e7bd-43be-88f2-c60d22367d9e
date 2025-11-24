"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import Link from 'next/link';
import { BookOpen, Facebook, Headphones, Instagram, MessageCircle, PenTool, Twitter, Users, Youtube } from 'lucide-react';

export default function CoursesPage() {
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

      <div id="feature" data-section="feature" className="mx-auto px-4 md:px-6">
        <FeatureCardTwo
          title="Our Teaching Methods"
          description="Discover our comprehensive approach to English language learning"
          tag="Learning"
          tagIcon={BookOpen}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Speaking Practice",
              description: "Interactive conversation sessions with native speakers to build confidence and fluency",
              icon: MessageCircle
            },
            {
              title: "Listening Skills",
              description: "Audio exercises and multimedia content to improve comprehension and pronunciation",
              icon: Headphones
            },
            {
              title: "Reading Comprehension",
              description: "Engaging texts and stories to expand vocabulary and understanding",
              icon: BookOpen
            },
            {
              title: "Writing Excellence",
              description: "Structured writing exercises to master grammar and express ideas clearly",
              icon: PenTool
            },
            {
              title: "Grammar Mastery",
              description: "Comprehensive grammar lessons with practical exercises and real-world applications",
              icon: BookOpen
            },
            {
              title: "Pronunciation Training",
              description: "Focused pronunciation practice with phonetic guidance and accent reduction techniques",
              icon: MessageCircle
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