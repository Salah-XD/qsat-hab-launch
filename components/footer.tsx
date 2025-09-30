import { Rocket, Mail, Phone, MapPin, Twitter, Linkedin, Youtube, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Rocket className="h-10 w-10 text-primary" />
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
            <p className="text-muted-foreground">qsat.official@gmail.com</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold mb-3 flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>Phone</span>
            </h4>
            <p className="text-muted-foreground">+91 94870 65364</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold mb-3 flex items-center justify-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Location</span>
            </h4>
            <p className="text-muted-foreground">Chennai | Coimbatore</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <a href="https://x.com/QsatEdu" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Twitter" target="_blank">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/company/qsat/" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn" target="_blank ">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/people/qsatdiy/61577273468189/?mibextid=qi2Omg&rdid=g4mljliRHGTupmCg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1At8PWRsJp%2F%3Fmibextid%3Dqi2Omg" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn" target="_blank">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/qsat.diy/" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram" target="_blank">
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="https://www.qsat.diy/about" className="hover:text-primary transition-colors" target="_blank">
            About QSAT
          </a>
          <a href="https://www.qsat.diy/programs" className="hover:text-primary transition-colors" target="_blank">
            Educational Programs
          </a>
          <a href="https://qsat-saas-new.vercel.app/flight-data-center" className="hover:text-primary transition-colors" target="_blank">
            Mission Reports
          </a>
          <a href="https://www.qsat.diy/blog" className="hover:text-primary transition-colors" target="_blank">
            Student Resources
          </a>
          <a href="https://www.qsat.diy/contact" className="hover:text-primary transition-colors" target="_blank">
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