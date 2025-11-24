"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Instagram, Twitter, Users, Youtube } from 'lucide-react';

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