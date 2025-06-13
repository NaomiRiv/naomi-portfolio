import { Button } from "@/components/ui/button";

export function SocialButton({ Icon, label, link}: { Icon: React.ElementType; label: string; link: string }) {
    return (
        <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform" asChild>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Icon className="w-5 h-5" />
          <span className="ml-2">{label}</span>
        </a>
      </Button>
    )
}