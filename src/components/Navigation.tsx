import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy, Home, Calendar, Users, Award, LogIn } from "lucide-react";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Schedule", href: "/matches", icon: Calendar },
    { label: "Teams", href: "/teams", icon: Users },
    { label: "Points Table", href: "/points", icon: Award },
  ];

  return (
    <motion.nav
      className={`fixed top-4 left-0 right-0 z-40 transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="glass-card flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2 group">
            <Trophy className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold gradient-text hidden md:block">
              BPUT FFIC
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-smooth group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="glass border-glass-border hover:bg-primary/10"
              onClick={() => navigate("/auth")}
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-gradient-accent hover:opacity-90 transition-smooth hidden sm:flex"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
