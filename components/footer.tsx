import { Rocket, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Rocket className="h-10 w-10 text-primary rocket-animation" />
            <span className="text-3xl font-bold">QSAT</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-md mx-auto text-pretty">
            Inspiring the next generation of space explorers through hands-on education and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <h4 className="font-semibold mb-3 flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <span>Contact Us</span>
            </h4>
            <p className="text-muted-foreground">hello@qsat.diy</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold mb-3 flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>Phone</span>
            </h4>
            <p className="text-muted-foreground">+1 (555) 123-QSAT</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold mb-3 flex items-center justify-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Location</span>
            </h4>
            <p className="text-muted-foreground">Mission Control Center</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="#" className="hover:text-primary transition-colors">
            About QSAT
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Educational Programs
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Mission Reports
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Student Resources
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Contact Support
          </a>
        </div>

        <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
          <p>&copy; 2025 QSAT. Reaching for the stars, one student at a time.</p>
        </div>
      </div>
    </footer>
  )
}
