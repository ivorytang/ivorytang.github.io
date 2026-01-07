import { motion } from "motion/react";
import { ExternalLink, Github, Database, BarChart3, Dna } from "lucide-react";

const projects = [
  {
    title: "Customer Segmentation Analysis",
    type: "Kaggle",
    description: "Developed a clustering model to segment customers based on purchasing behavior using K-means and hierarchical clustering. Achieved 87% accuracy in predicting customer lifetime value.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    icon: <BarChart3 className="text-primary" size={32} />,
    link: "https://kaggle.com",
    github: "https://github.com",
  },
  {
    title: "Predictive Sales Forecasting",
    type: "Kaggle",
    description: "Built a time series forecasting model using LSTM networks to predict quarterly sales. Implemented feature engineering techniques that improved RMSE by 23%.",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy"],
    icon: <Database className="text-blue-400" size={32} />,
    link: "https://kaggle.com",
    github: "https://github.com",
  },
  {
    title: "Single-Cell RNA Sequencing Pipeline",
    type: "Work",
    description: "Developed an automated pipeline for processing 10x Genomics scRNA-seq data. Integrated quality control, normalization, and cell type annotation using Seurat and Scanpy.",
    technologies: ["R", "Python", "Seurat", "Scanpy", "Docker"],
    icon: <Dna className="text-pink-400" size={32} />,
    link: null,
    github: null,
  },
  {
    title: "Spatial Transcriptomics Analysis",
    type: "Work",
    description: "Analyzed spatial gene expression patterns in tissue samples. Identified novel cell-cell interaction networks and spatial niches in tumor microenvironments.",
    technologies: ["R", "Seurat", "Squidpy", "Giotto", "ggplot2"],
    icon: <Dna className="text-purple-400" size={32} />,
    link: null,
    github: null,
  },
  {
    title: "Sentiment Analysis on Social Media",
    type: "Kaggle",
    description: "Created a sentiment classification model using BERT transformers to analyze tweet sentiments. Deployed as a real-time API with FastAPI.",
    technologies: ["Python", "PyTorch", "Transformers", "FastAPI"],
    icon: <BarChart3 className="text-pink-400" size={32} />,
    link: "https://kaggle.com",
    github: "https://github.com",
  },
  {
    title: "Multi-Omics Data Integration",
    type: "Work",
    description: "Integrated transcriptomics, proteomics, and metabolomics data to identify biomarkers for disease progression. Applied dimensionality reduction and network analysis techniques.",
    technologies: ["R", "Python", "MOFA", "Network Analysis"],
    icon: <Database className="text-purple-400" size={32} />,
    link: null,
    github: null,
  },
];

export function ProjectsPage() {
  return (
    <section className="min-h-screen px-4 py-20">
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
            Featured Projects
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my data analytics and bioinformatics projects, from Kaggle competitions to single-cell sequencing analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {project.icon}
                  <div>
                    <h3 className="text-xl">{project.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {project.type === "Kaggle" ? "📊 Kaggle Project" : "🔬 Work Project"}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
