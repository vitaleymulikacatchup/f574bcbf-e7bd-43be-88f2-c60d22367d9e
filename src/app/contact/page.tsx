"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Instagram, Twitter, Users, Zap, TrendingUp, Globe, MessageCircle, Clock } from 'lucide-react';

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
        <HeroBillboard
          title="Get in Touch with Hello Everybody"
          description="Ready to start your English learning journey? Contact us today and discover how our proven teaching methods can help you achieve fluency faster."
          tag="Contact Us"
          tagIcon={Zap}
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

      <div id="metric" data-section="metric" className="mx-auto px-4 md:px-6">
        <MetricCardTwo
          title="Our Impact in Numbers"
          description="See the measurable results of our English teaching methods"
          tag="Student Success"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          carouselMode="buttons"
          metrics={[
            {
              id: "1",
              value: "2,500+",
              description: "Happy Students Worldwide"
            },
            {
              id: "2",
              value: "95%",
              description: "Success Rate in Fluency"
            },
            {
              id: "3",
              value: "8 Weeks",
              description: "Average Time to Conversational Level"
            },
            {
              id: "4",
              value: "15+",
              description: "Countries We Serve"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact" className="mx-auto px-4 md:px-6">
        <ContactCenter
          tag="Enroll Today"
          tagIcon={Users}
          title="Ready to Start Your English Journey?"
          description="Join Hello Everybody today and take the first step towards English fluency. Our experienced teachers are ready to guide you through every step of your learning journey."
          inputPlaceholder="Enter your email"
          buttonText="Get Started"
          termsText="By signing up, you agree to receive updates about our courses and teaching methods. Unsubscribe anytime."
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