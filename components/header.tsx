import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center">
              <img
                src="/professional-headshot-of-young-computer-engineerin.jpg"
                alt="Arnav Shailesh Vavre"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-balance">Arnav Shailesh Vavre</h1>
            <p className="text-xl text-muted-foreground mb-4">Computer Engineering Student</p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 7710001525</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Arnav.vavre@somaiya.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a href="https://linkedin.com/in/Arnav" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a href="https://github.com/Arnav" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3">
            <ThemeToggle />
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
