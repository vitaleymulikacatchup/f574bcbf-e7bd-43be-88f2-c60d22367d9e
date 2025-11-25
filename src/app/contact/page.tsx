"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BookOpen, Facebook, Headphones, Instagram, MessageCircle, PenTool, Twitter, Users, Youtube, Sparkles, Star } from 'lucide-react';

export default function ContactPage() {
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
        <HeroSplit
          title="Learn English with Expert Teachers"
          description="Our experienced instructors use proven methodologies to help you master English quickly and effectively. Join our community of successful learners."
          tag="About Our School"
          tagIcon={Users}
          imagePosition="right"
          buttons={[
            {
              text: "Start Learning",
              href: "/contact"
            },
            {
              text: "Our Courses",
              href: "/courses"
            }
          ]}
          imageSrc="https://pixabay.com/get/g2ab780970cf947e0c3757ade9547329f8e53d551a396647dfd674498429f99cc9e379d60f12c01803b5b3fc9f2d3cc002b49eaf5fff4329dbcfbad9365ae7c33_1280.jpg"
          imageAlt="Happy students learning English together"
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

      <div id="pricing" data-section="pricing" className="mx-auto px-4 md:px-6">
        <PricingCardThree
          title="Choose Your Learning Path"
          description="Select the perfect plan for your English learning journey"
          tag="Pricing"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "1",
              price: "$49/mo",
              name: "Individual Classes",
              buttons: [
                {
                  text: "Get Started",
                  href: "/contact"
                },
                {
                  text: "Learn More",
                  href: "/courses"
                }
              ],
              features: [
                "One-on-one sessions",
                "Flexible scheduling",
                "Personalized curriculum",
                "Progress tracking"
              ]
            },
            {
              id: "2",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$29/mo",
              name: "Group Classes",
              buttons: [
                {
                  text: "Join Now",
                  href: "/contact"
                },
                {
                  text: "View Schedule",
                  href: "/courses"
                }
              ],
              features: [
                "Small group sessions (4-6 students)",
                "Interactive learning",
                "Peer practice opportunities",
                "Regular assessments",
                "Certificate upon completion"
              ]
            },
            {
              id: "3",
              price: "$19/mo",
              name: "Online Self-Study",
              buttons: [
                {
                  text: "Start Learning",
                  href: "/contact"
                },
                {
                  text: "Free Trial",
                  href: "/courses"
                }
              ],
              features: [
                "Access to video lessons",
                "Interactive exercises",
                "Mobile app included",
                "Basic support"
              ]
            }
          ]}
        />
      </div>

      <div id="courses" data-section="courses" className="mx-auto px-4 md:px-6">
        <HeroSplit
          title="Choose Your Course Level"
          description="Find the perfect English course based on your current skill level and learning goals. Our comprehensive programs are designed to help you succeed."
          tag="Course Levels"
          tagIcon={BookOpen}
          imagePosition="left"
          buttons={[
            {
              text: "View All Courses",
              href: "/courses"
            },
            {
              text: "Take Assessment",
              href: "/contact"
            }
          ]}
          imageSrc="https://pixabay.com/get/g2ab780970cf947e0c3757ade9547329f8e53d551a396647dfd674498429f99cc9e379d60f12c01803b5b3fc9f2d3cc002b49eaf5fff4329dbcfbad9365ae7c33_1280.jpg"
          imageAlt="Students at different learning levels"
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