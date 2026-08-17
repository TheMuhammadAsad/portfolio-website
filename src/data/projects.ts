export type ProjectCategory =
  | "Data Analysis"
  | "Machine Learning"
  | "Power BI"
  | "Energy"
  | "Petroleum"
  | "Full-Stack"
  | "Statistics";

export interface Project {
  slug: string;
  title: string;
  description: string;
  categories: ProjectCategory[];
  tech: string[];
  github: string;
  live?: string;
  liveLabel?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "energy-intelligence-platform",
    title: "Energy Intelligence Platform",
    description:
      "Full-stack application over 25 years of European electricity-mix data — FastAPI + PostgreSQL backend, Next.js/TypeScript frontend, trend forecasting, Docker Compose, and GitHub Actions CI. The one project that goes all the way from raw data to a deployed product rather than stopping at a notebook.",
    categories: ["Full-Stack", "Energy"],
    tech: ["FastAPI", "PostgreSQL", "Next.js", "TypeScript", "Docker", "GitHub Actions"],
    github: "https://github.com/TheMuhammadAsad/energy-intelligence-platform",
    featured: true,
  },
  {
    slug: "fraud-detection-analysis",
    title: "Credit Card Fraud Detection",
    description:
      "Real transaction fraud analysis under extreme 0.17% class imbalance — PR-AUC vs. ROC-AUC, supervised vs. unsupervised anomaly detection, and a cost-based threshold optimizer shipped as an interactive Streamlit dashboard.",
    categories: ["Machine Learning", "Data Analysis"],
    tech: ["Python", "scikit-learn", "XGBoost", "Streamlit", "Plotly"],
    github: "https://github.com/TheMuhammadAsad/fraud-detection-analysis",
    live: "https://fraud-detection-analyse.streamlit.app/",
    liveLabel: "Live dashboard",
    featured: true,
  },
  {
    slug: "image-classification-cnn",
    title: "Image Classification: CNN vs. Transfer Learning",
    description:
      "A CNN trained from scratch compared against MobileNetV2 transfer learning on real flower photographs, with an augmentation ablation study and Grad-CAM analysis of misclassified images.",
    categories: ["Machine Learning"],
    tech: ["TensorFlow", "Keras", "Grad-CAM", "Python"],
    github: "https://github.com/TheMuhammadAsad/image-classification-cnn",
    featured: true,
  },
  {
    slug: "ab-testing-retention-analysis",
    title: "A/B Testing: Mobile Game Retention",
    description:
      "Full statistical analysis of a real 90K-player mobile game experiment — a Sample Ratio Mismatch check before trusting any result, two-proportion z-tests cross-validated against bootstrap resampling, and a simulation proving why checking significance daily is a real trap.",
    categories: ["Statistics", "Data Analysis"],
    tech: ["Python", "pandas", "SciPy", "NumPy"],
    github: "https://github.com/TheMuhammadAsad/ab-testing-retention-analysis",
    featured: true,
  },
  {
    slug: "energy-demand-forecasting-deep-learning",
    title: "Energy Demand Forecasting",
    description:
      "60-minute-ahead energy demand forecasting comparing a naive baseline, regularized XGBoost, and an LSTM sequence model — including a documented overfitting failure and the fix, not just the working result.",
    categories: ["Machine Learning", "Energy"],
    tech: ["XGBoost", "TensorFlow", "LSTM", "pandas"],
    github: "https://github.com/TheMuhammadAsad/energy-demand-forecasting-deep-learning",
  },
  {
    slug: "network-intrusion-detection",
    title: "Network Intrusion Detection",
    description:
      "Multi-class network traffic classifier on 148K labelled connections, explicitly measuring the generalization gap between known attack types (87.5% accuracy) and entirely novel attacks (27.6%).",
    categories: ["Machine Learning"],
    tech: ["Random Forest", "XGBoost", "scikit-learn"],
    github: "https://github.com/TheMuhammadAsad/network-intrusion-detection",
  },
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    description:
      "Churn prediction with model comparison, SHAP interpretation of the drivers behind each prediction, and a cost-based retention-campaign economics model translating accuracy into dollars.",
    categories: ["Machine Learning"],
    tech: ["scikit-learn", "SHAP", "Python"],
    github: "https://github.com/TheMuhammadAsad/customer-churn-prediction",
  },
  {
    slug: "oil-production-decline-analysis",
    title: "Oil Production Decline Curve Analysis",
    description:
      "Classical petroleum-engineering decline curve analysis (Arps exponential/hyperbolic/harmonic models) applied to 60 years of real country-level oil production data.",
    categories: ["Petroleum", "Data Analysis"],
    tech: ["Python", "SciPy", "Arps models"],
    github: "https://github.com/TheMuhammadAsad/oil-production-decline-analysis",
    featured: true,
  },
  {
    slug: "energy-transition-dashboard",
    title: "European Energy Transition Dashboard",
    description:
      "Interactive Streamlit + Plotly dashboard over 24 years of European electricity-mix data, with dynamic country/year/metric filtering and comparative renewables-share visualizations.",
    categories: ["Energy", "Data Analysis"],
    tech: ["Streamlit", "Plotly", "pandas"],
    github: "https://github.com/TheMuhammadAsad/energy-transition-dashboard",
    live: "https://energy-transition-dashboard.streamlit.app/",
    liveLabel: "Live dashboard",
  },
  {
    slug: "europe-energy-transition-analysis",
    title: "Europe Energy Transition: EDA",
    description:
      "Python/pandas exploratory analysis of Europe's electricity decarbonization from 2000-2024 — trend analysis, hypothesis testing, and projection on real Our World in Data figures.",
    categories: ["Data Analysis", "Energy", "Statistics"],
    tech: ["Python", "pandas", "SciPy"],
    github: "https://github.com/TheMuhammadAsad/europe-energy-transition-analysis",
  },
  {
    slug: "sql-revenue-retention-analytics",
    title: "SQL Revenue & Retention Analytics",
    description:
      "Business analytics entirely in SQL — CTEs, window functions, and RFM customer segmentation over a relational sales database.",
    categories: ["Data Analysis"],
    tech: ["SQL", "PostgreSQL", "Window functions"],
    github: "https://github.com/TheMuhammadAsad/sql-revenue-retention-analytics",
  },
  {
    slug: "retail-sales-performance-dashboard-powerbi",
    title: "Retail Sales Performance Dashboard",
    description:
      "Power BI sales dashboard over 9,994 real retail orders, with region/category/segment breakdowns and verified cross-filtering — segment KPIs sum exactly back to the unfiltered totals.",
    categories: ["Power BI", "Data Analysis"],
    tech: ["Power BI", "DAX", "Power Query"],
    github: "https://github.com/TheMuhammadAsad/retail-sales-performance-dashboard-powerbi",
  },
  {
    slug: "global-health-economic-dashboard-powerbi",
    title: "Global Health & Economic Dashboard",
    description:
      "Power BI dashboard merging three independent OECD datasets — GDP, labour-market exit age, and avoidable mortality — into a single cross-filterable data model.",
    categories: ["Power BI", "Data Analysis"],
    tech: ["Power BI", "DAX", "Power Query"],
    github: "https://github.com/TheMuhammadAsad/global-health-economic-dashboard-powerbi",
  },
];

export const categoryOrder: ProjectCategory[] = [
  "Data Analysis",
  "Machine Learning",
  "Power BI",
  "Energy",
  "Petroleum",
  "Full-Stack",
  "Statistics",
];
