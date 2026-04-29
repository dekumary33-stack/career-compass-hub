import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Compass, Target, Users, Sparkles, CheckCircle2, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-career.jpg";

const Index = () => {
  const services = [
    {
      icon: Compass,
      title: "Career Discovery",
      description: "Identify your strengths, values, and the paths that genuinely fit who you are.",
    },
    {
      icon: Target,
      title: "Goal Strategy",
      description: "Build a clear roadmap with measurable milestones to land your next role.",
    },
    {
      icon: Users,
      title: "Interview Coaching",
      description: "Practice with experts and walk into every interview with quiet confidence.",
    },
    {
      icon: Sparkles,
      title: "Personal Branding",
      description: "Sharpen your résumé, LinkedIn, and story so the right opportunities find you.",
    },
  ];

  const firms = [
    { name: "Pinnacle Advisors", focus: "Executive Coaching", rating: 4.9 },
    { name: "NorthStar Careers", focus: "Tech & Engineering", rating: 4.8 },
    { name: "Brightline Mentors", focus: "Graduate Guidance", rating: 4.9 },
  ];

  const testimonials = [
    {
      quote: "Within three months I went from feeling stuck to signing an offer I'm genuinely excited about.",
      name: "Amelia R.",
      role: "Product Manager",
    },
    {
      quote: "The clarity I gained was worth every minute. My coach treated my career like it mattered.",
      name: "David K.",
      role: "Software Engineer",
    },
    {
      quote: "Professional, warm, and incredibly insightful. I'd recommend AscendPath to anyone at a crossroads.",
      name: "Priya S.",
      role: "Marketing Director",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto grid items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-2 lg:py-32">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Trusted by 10,000+ professionals
            </span>
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Find the career
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                you were meant for.
              </span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Connect with vetted career guidance firms, book one-on-one appointments, and build a path forward with experts who actually listen.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Book a Free Consultation <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#services">Explore Services</a>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Certified coaches
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" /> No commitment
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-hero opacity-20 blur-2xl" />
            <img
              src={heroImage}
              alt="Career coach mentoring a professional in a modern office"
              width={1536}
              height={1024}
              className="relative rounded-2xl shadow-elegant"
            />
            <Card className="absolute -bottom-6 -left-6 hidden w-56 border-0 shadow-elegant md:block">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-accent">
                  <Star className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold">4.9 / 5</p>
                  <p className="text-xs text-muted-foreground">2,400+ reviews</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gradient-soft py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">How we guide your journey</h2>
            <p className="mt-4 text-muted-foreground">
              Tailored guidance from real humans, designed around the moments that actually move careers forward.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group border-border/50 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero shadow-glow transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Firms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Featured guidance firms</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Hand-picked partners with verified track records. Reach out directly or book through us.
              </p>
            </div>
            <Button asChild variant="accent">
              <Link to="/contact">Contact a Firm <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {firms.map((firm) => (
              <Card key={firm.name} className="overflow-hidden border-border/50 shadow-card-soft transition-all hover:shadow-elegant">
                <div className="h-2 bg-gradient-hero" />
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    <span className="ml-2 text-sm font-medium text-foreground">{firm.rating}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{firm.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{firm.focus}</p>
                  <Button asChild variant="link" className="mt-4 h-auto p-0">
                    <Link to="/contact">Book with {firm.name.split(" ")[0]} →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Stories of clarity</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border/50 bg-background shadow-card-soft">
                <CardContent className="p-6">
                  <div className="mb-3 flex gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mb-4 italic leading-relaxed text-foreground">"{t.quote}"</p>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-center shadow-elegant md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.3),transparent_60%)]" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                Your next chapter starts with one conversation.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Book a complimentary 30-minute consultation and walk away with one tangible next step.
              </p>
              <Button asChild variant="accent" size="lg" className="mt-8">
                <Link to="/contact">Book Your Appointment <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
