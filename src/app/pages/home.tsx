import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Headshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                {/* Placeholder for headshot - replace with your image */}
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-blue-400/10 to-pink-400/10 flex items-center justify-center">
                  <span className="text-6xl text-muted-foreground/30">👤</span>
                </div>
                {/* Uncomment below and add your image */}
                {/* <img 
                  src="/path/to/your/headshot.jpg" 
                  alt="Ivory Tang" 
                  className="w-full h-full object-cover"
                /> */}
              </div>
              {/* Decorative accent */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-pink-400 opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Right Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-6xl leading-normal mb-4 bg-gradient-to-r from-primary via-blue-400 to-pink-400 bg-clip-text text-transparent"
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
              Ivory Tang
            </motion.h1>
            
            <h2 className="text-2xl text-foreground mb-6">
              Computational Data Analyst
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Hello! I'm a recent graduate from the University of Virginia (UVA) and currently working
                as a data analyst in the Miller Lab @ UVA. I use single-cell sequencing analysis to 
                examine the regulatory programs underlying cardiovascular disease.
              </p>
              <p>
                With a strong foundation in statistical modeling, I transform complex biological data 
                into actionable insights. My work spans from Kaggle competitions 
                to cutting-edge genomics research, always driven by curiosity and a passion for discovery.
              </p>
              <p>
                I seek to unlock new understanding by solving meaningful problems and communicating novel insight
                at the intersection of data and technology.
              </p>
            </div>

            <div className="flex gap-4 mb-8">
              <motion.a
                href="mailto:ivory.tang01@gmail.com"
                className="p-3 rounded-lg bg-card hover:bg-primary/10 border border-border transition-colors shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} className="text-primary" />
              </motion.a>
              <motion.a
                href="https://github.com/ivorytang"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card hover:bg-primary/10 border border-border transition-colors shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} className="text-primary" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ivory-tang/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card hover:bg-primary/10 border border-border transition-colors shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} className="text-primary" />
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              {/* <p className="text-sm text-muted-foreground italic">
                "In God we trust, all others must bring data." - W. Edwards Deming
              </p> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
