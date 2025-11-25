"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BookOpen, Facebook, Headphones, Instagram, MessageCircle, PenTool, Twitter, Youtube, TrendingUp, Users, Award, Star } from 'lucide-react';

export default function AboutPage() {
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

      <div id="about" data-section="about" className="mx-auto px-4 md:px-6">
        <TextAbout
          title="We make English learning fun, interactive, and effective. Our experienced teachers use modern methods to help you achieve fluency faster than traditional approaches."
          buttons={[
            {
              text: "Our Methods",
              href: "/courses"
            },
            {
              text: "Meet Teachers",
              href: "/contact"
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric" className="mx-auto px-4 md:px-6">
        <MetricCardOne
          title="Our Impact"
          description="Key achievements that showcase our success in English education"
          tag="Results"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "500+",
              title: "Students",
              description: "Happy students learning English with us",
              icon: Users
            },
            {
              id: "2",
              value: "95%",
              title: "Success Rate",
              description: "Students achieving their fluency goals",
              icon: TrendingUp
            },
            {
              id: "3",
              value: "8",
              title: "Years",
              description: "Years of experience in English education",
              icon: Award
            },
            {
              id: "4",
              value: "4.9",
              title: "Rating",
              description: "Average student satisfaction rating",
              icon: Star
            }
          ]}
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