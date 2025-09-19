import { Shield, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

export const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Resources", href: "/resources" },
    { name: "Magazine", href: "/magazine" },
    { name: "Get Help", href: "/help" }
  ]

  const emergencyContacts = [
    { name: "Cyber Crime Helpline", number: "1930" },
    { name: "Child Helpline", number: "1098" },
    { name: "Women Helpline", number: "181" }
  ]

  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/40 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/93b852b6-2299-4d71-8e1c-db8820fecc60.png" 
                alt="Cyber Awareness Club"
                className="w-8 h-8"
              />
              <h3 className="text-lg font-semibold text-gradient">Cyber Awareness Club</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Delhi Public School Noida
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Sector 30, Noida, UP</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-500">Emergency Helplines</h3>
            <ul className="space-y-2">
              {emergencyContacts.map((contact) => (
                <li key={contact.number} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{contact.name}</span>
                  <a 
                    href={`tel:${contact.number}`}
                    className="text-sm font-mono text-red-500 hover:text-red-400 transition-colors"
                  >
                    {contact.number}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Join */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get Involved</h3>
            <div className="space-y-3">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScpZxpPMVItnjuU6TUW_dNXcgooP7prEjjlQVNqHEJhpkgS4g/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Join Our Club
              </a>
              <Link 
                to="/help"
                className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
              >
                <Shield className="h-4 w-4" />
                Report an Issue
              </Link>
            </div>
            <div className="pt-2 border-t border-border/40">
              <p className="text-xs text-muted-foreground">
                Stay safe online. Report cyberbullying.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 Cyber Awareness Club, DPS Noida. Empowering digital safety.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Made with ❤️ for student safety</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
