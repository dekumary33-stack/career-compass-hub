import { Briefcase, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">AscendPath</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Trusted career guidance to help you find clarity, confidence, and your next opportunity.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-base font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-base font-semibold">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@ascendpath.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +1 (555) 234-9087</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> 200 Madison Ave, NY</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AscendPath Career Guidance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
