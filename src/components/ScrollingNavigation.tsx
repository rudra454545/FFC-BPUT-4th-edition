import { useEffect, useState } from "react";
import { DynamicNavigation } from "./DynamicNavigation";
import { Home, Calendar, Users, Award, MessageCircle } from "lucide-react";

export const ScrollingNavigation = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.85;
      setIsFixed(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://chat.whatsapp.com/E1e94eyrfCGAVzcq250vCn", "_blank");
  };

  const navLinks = [
    { id: "home", label: "Home", href: "/", icon: <Home /> },
    { id: "schedule", label: "Schedule", href: "/schedule", icon: <Calendar /> },
    { id: "teams", label: "Teams", href: "/teams", icon: <Users /> },
    { id: "points", label: "Points", href: "/points", icon: <Award /> },
    { id: "whatsapp", label: "Join Group", href: "#", icon: <MessageCircle />, onClick: handleWhatsAppClick },
  ];

  return (
    <div
      className={`${
        isFixed
          ? "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
          : "absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl"
      } transition-all duration-500`}
    >
      <DynamicNavigation
        links={navLinks}
        showLabelsOnMobile={false}
        glowIntensity={8}
      />
    </div>
  );
};
