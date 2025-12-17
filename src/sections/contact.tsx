import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-5xl relative z-10">
        {/* Heading */}
        <div className="mb-12 text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            through any of these channels.
          </p>
        </div>

        {/* Contact card centered */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl rounded-2xl bg-card/95 border border-border/70 shadow-sm px-6 py-7 sm:px-8 sm:py-8 space-y-6 backdrop-blur-sm">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-background border border-border/70 shadow-xs">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <a
                  href="mailto:piamontejess@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  piamontejess@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-background border border-border/70 shadow-xs">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Phone</p>
                <a
                  href="tel:+639924748797"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +63 992 474 8797
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-background border border-border/70 shadow-xs">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Address</p>
                <p className="text-sm text-muted-foreground">Mandaue, Cebu, Philippines</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-border/60" />

            {/* Follow Me below address */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/piamontejess"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background border border-border/70 shadow-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/piamonte-jessel-ann-080539263/"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background border border-border/70 shadow-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide text-center">
                Follow Me
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
