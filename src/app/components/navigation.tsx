import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/projects", label: "Projects" },
    { id: "/cv", label: "CV" },
    { id: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link key={item.id} to={item.id}>
                <motion.span
                  className={`flex items-center gap-2 transition-colors ${
                    location.pathname === item.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}