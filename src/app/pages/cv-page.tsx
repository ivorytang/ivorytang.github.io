import { motion } from "motion/react";
import { GraduationCap, Briefcase, Award, Code } from "lucide-react";

const education = [
  // {
  //   degree: "Ph.D. in Computational Biology",
  //   institution: "University Name",
  //   year: "2018 - 2023",
  //   description: "Dissertation: Advanced Methods in Single-Cell Genomics Analysis",
  // },
  // {
  //   degree: "M.S. in Bioinformatics",
  //   institution: "University Name",
  //   year: "2016 - 2018",
  //   description: "Focus: Statistical Methods for Genomic Data Analysis",
  // },
  {
    degree: "B.A. in Mathematics",
    institution: "University of Virginia",
    year: "2021 - 2025",
    description: "Concentration in Probability and Statistics, Minor in Computer Science",
  },
];

const experience = [
  {
    title: "Computational Data Analyst",
    company: "The Miller Lab @ UVA",
    year: "June 2025 - Present",
    responsibilities: [
      // "Lead single-cell sequencing analysis for multiple research projects",
      // "Develop automated pipelines for multi-omics data integration",
      // "Collaborate with wet-lab scientists to design experiments and analyze results",
      // "Mentor junior scientists and interns in computational methods",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    company: "The Miller Lab @ UVA",
    year: "August 2022 - May 2025",
    responsibilities: [
      // "Built machine learning models for customer behavior prediction",
      // "Implemented ETL pipelines for large-scale data processing",
      // "Created interactive dashboards for business intelligence",
    ],
  },
  {
    title: "Undergraduate Research Intern",
    company: "The Papaemmanuil Lab @ Memorial Sloan Kettering Cancer Center",
    year: "May 2022 - September 2022",
    responsibilities: [
      "Analyzed RNA-seq and ChIP-seq data for gene regulatory networks",
      "Published 5 first-author papers in peer-reviewed journals",
      "Presented findings at international conferences",
    ],
  },
];

const skills = [
  {
    category: "Programming",
    items: ["Python", "R", "SQL", "Bash", "JavaScript"],
  },
  {
    category: "Bioinformatics",
    items: ["Seurat", "Scanpy", "DESeq2", "GATK", "Bioconductor"],
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Keras"],
  },
  {
    category: "Data Visualization",
    items: ["ggplot2", "Matplotlib", "Plotly", "Seaborn", "Tableau"],
  },
  {
    category: "Tools & Platforms",
    items: ["Docker", "Git", "AWS", "HPC Clusters", "Jupyter"],
  },
];

const awards = [
  "Best Paper Award - International Conference on Computational Biology 2022",
  "Outstanding Graduate Student Award - University Name 2021",
  "Kaggle Competition Silver Medal - Customer Analytics Challenge 2023",
  "NIH Training Grant Fellowship 2019-2021",
];

export function CVPage() {
  return (
    <section className="min-h-screen px-4 py-20 bg-card/30">
      <div className="max-w-6xl mx-auto">
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
            Curriculum Vitae
          </motion.h2>
          {/* <p className="text-muted-foreground">
            A comprehensive overview of my academic and professional journey
          </p> */}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-primary" size={32} />
            <h3 className="text-3xl">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl">{edu.degree}</h4>
                  <span className="text-sm text-muted-foreground">{edu.year}</span>
                </div>
                <p className="text-primary mb-2">{edu.institution}</p>
                <p className="text-muted-foreground text-sm">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-blue-400" size={32} />
            <h3 className="text-3xl">Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl">{exp.title}</h4>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.year}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm mt-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-pink-400" size={32} />
            <h3 className="text-3xl">Skills & Technologies</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h4 className="text-lg mb-3 text-primary">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs bg-muted text-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-purple-400" size={32} />
            <h3 className="text-3xl">Awards & Recognition</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-4 flex items-start gap-3"
              >
                <Award className="text-primary flex-shrink-0 mt-1" size={20} />
                <p className="text-sm">{award}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
