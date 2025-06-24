import { Github, Mail, Download, Heart, Linkedin } from "lucide-react";
import { SocialButton } from "./social-button";

const socialLinks = [
  { Icon: Github, link: "https://github.com/NaomiRiv", label: "Github" },
  {
    Icon: Linkedin,
    link: "https://www.linkedin.com/in/naomi-rivkin/",
    label: "LinkedIn",
  },
  { Icon: Mail, link: "mailto:naomi@dotcore.co.il", label: "Email" },
  { Icon: Download, link: "./resume.pdf", label: "Resume" },
];

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map(({ Icon, link, label }) => (
              <SocialButton key={label} Icon={Icon} link={link} label={label} />
            ))}
          </div>
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Naomi Rivkin. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>and lots of coffee.</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Computer Science Graduate • Technion Alumni • Problem Solver
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
