import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Calendar, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    firm: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.firm || !form.date) {
      toast({
        title: "Missing information",
        description: "Please fill in your name, email, preferred firm, and date.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Appointment requested!",
      description: `Thanks ${form.name.split(" ")[0]} — we'll confirm your booking with ${form.firm} shortly.`,
    });
    setForm({ name: "", email: "", phone: "", firm: "", date: "", time: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@ascendpath.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 234-9087" },
    { icon: MapPin, label: "Office", value: "200 Madison Ave, New York" },
    { icon: Clock, label: "Hours", value: "Mon–Fri, 9am – 6pm EST" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page header */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--accent)/0.25),transparent_60%)]" />
        <div className="container relative mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <Calendar className="h-3.5 w-3.5" /> Book Your Appointment
          </span>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Let's talk about your future.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Reach out to one of our partner firms or schedule directly with a career coach. We'll confirm within one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-3">
          {/* Form */}
          <Card className="border-border/50 shadow-elegant lg:col-span-2">
            <CardContent className="p-6 md:p-10">
              <h2 className="text-2xl font-bold">Request an Appointment</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us a bit about you and pick the firm you'd like to meet with.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firm">Preferred Firm *</Label>
                    <Select value={form.firm} onValueChange={(v) => setForm({ ...form, firm: v })}>
                      <SelectTrigger id="firm">
                        <SelectValue placeholder="Choose a firm" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pinnacle Advisors">Pinnacle Advisors</SelectItem>
                        <SelectItem value="NorthStar Careers">NorthStar Careers</SelectItem>
                        <SelectItem value="Brightline Mentors">Brightline Mentors</SelectItem>
                        <SelectItem value="No preference">No preference</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input id="date" name="date" type="date" value={form.date} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select value={form.time} onValueChange={(v) => setForm({ ...form, time: v })}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Pick a time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Morning (9am – 12pm)">Morning (9am – 12pm)</SelectItem>
                        <SelectItem value="Afternoon (12pm – 4pm)">Afternoon (12pm – 4pm)</SelectItem>
                        <SelectItem value="Evening (4pm – 6pm)">Evening (4pm – 6pm)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">What would you like guidance on?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly share where you are in your career and what you're hoping to figure out..."
                    rows={5}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                  Confirm Appointment Request
                </Button>

                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Your details stay private. We'll only share them with your selected firm.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact info sidebar */}
          <div className="space-y-6">
            <Card className="border-border/50 shadow-card-soft">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">Reach us directly</h3>
                <p className="mt-1 text-sm text-muted-foreground">Prefer a quick chat? Use any of the channels below.</p>
                <div className="mt-6 space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-hero">
                          <Icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.label}</p>
                          <p className="text-sm font-medium text-foreground">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-gradient-hero text-primary-foreground shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">First session is on us</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">
                  Every new client receives a complimentary 30-minute discovery call. No obligations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
