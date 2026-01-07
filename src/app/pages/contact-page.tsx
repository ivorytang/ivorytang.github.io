import { motion } from "motion/react";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export function ContactPage() {
  return (
    <section className="min-h-screen px-4 py-20 flex items-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-5xl bg-gradient-to-r from-primary via-blue-400 to-pink-400 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Let's Connect
          </motion.h2>
          <p className="text-muted-foreground">
            Interested in collaboration or just want to chat?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.a
            href="mailto:ivory.tang01@gmail.com"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-card border border-border rounded-lg p-6 flex items-center gap-4 hover:border-primary/50 transition-all"
          >
            <div className="p-3 bg-primary/10 rounded-lg">
              <Mail className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-lg mb-1">Email</h3>
              {/* <p className="text-sm text-muted-foreground">ivory.tang01@gmail.com</p> */}
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/ivorytang"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-card border border-border rounded-lg p-6 flex items-center gap-4 hover:border-primary/50 transition-all"
          >
            <div className="p-3 bg-primary/10 rounded-lg">
              <Github className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-lg mb-1">GitHub</h3>
              <p className="text-sm text-muted-foreground">@ivorytang</p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ivory-tang/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-card border border-border rounded-lg p-6 flex items-center gap-4 hover:border-primary/50 transition-all"
          >
            <div className="p-3 bg-blue-400/10 rounded-lg">
              <Linkedin className="text-blue-400" size={24} />
            </div>
            <div>
              <h3 className="text-lg mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Ivory Tang</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border rounded-lg p-6 flex items-center gap-4"
          >
            <div className="p-3 bg-pink-400/10 rounded-lg">
              <MapPin className="text-pink-400" size={24} />
            </div>
            <div>
              <h3 className="text-lg mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">USA</p>
            </div>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-primary/10 via-blue-400/10 to-pink-400/10 border border-primary/20 rounded-lg p-8 text-center"
        >
          <p className="text-muted-foreground">
            "The best way to predict the future is to create it... with data."
          </p>
          <p className="text-sm text-muted-foreground mt-2">- A data enthusiast</p>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-sm text-muted-foreground"
        >
          <p>© 2026 Ivory Tang. Built with React, Tailwind CSS, and lots of ☕</p>
        </motion.div>
      </div>
    </section>
  );
}
