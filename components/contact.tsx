import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium text-card-foreground">Email</p>
              <p className="text-muted-foreground">Arnav.vavre@somaiya.edu</p>
            </div>
            <div>
              <p className="font-medium text-card-foreground">Phone</p>
              <p className="text-muted-foreground">+91 7710001525</p>
            </div>
            <div>
              <p className="font-medium text-card-foreground">LinkedIn</p>
              <a href="https://linkedin.com/in/Arnav" className="text-primary hover:underline">
                linkedin.com/in/Arnav
              </a>
            </div>
            <div>
              <p className="font-medium text-card-foreground">GitHub</p>
              <a href="https://github.com/Arnav" className="text-primary hover:underline">
                github.com/Arnav
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Send a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" className="bg-input border-border" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="bg-input border-border" />
              </div>
              <div>
                <Textarea placeholder="Your Message" rows={4} className="bg-input border-border resize-none" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
