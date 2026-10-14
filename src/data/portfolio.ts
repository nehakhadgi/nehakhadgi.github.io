export const profile = {
  name: "Neha Khadgi",
  email: "neha.khadgi55@gmail.com",
  phone: "+977 9863026859",
  github: "https://github.com/nehakhadgi",
  linkedin: "https://www.linkedin.com/in/nehakhadgi/",
  website: "https://nehakhadgi.com.np",
  location: "Kathmandu, Nepal",
};

export const categories = ["All projects", "Machine Learning", "Applied AI", "Data Analytics", "Computer Vision"] as const;
export type ProjectCategory = typeof categories[number];
export type Project = {
  title: string;
  category: Exclude<ProjectCategory, "All projects">;
  description: string;
  detail: string;
  tags: string[];
  url: string;
  flow: [string, string, string];
};
const repo = (slug: string) => `${profile.github}/${slug}`;

export const projects: Project[] = [
  {
    title: "Customer Retention Matrix", category: "Machine Learning",
    description: "Turning transaction histories into a clearer picture of customer retention.",
    detail: "Built a retention analytics pipeline using 800,000+ UCI Online Retail II transaction rows. Engineered behavioral features and time-based labels, then compared Logistic Regression with Histogram Gradient Boosting. Logistic Regression achieved 0.780 ROC-AUC and 0.856 PR-AUC on the holdout set.",
    tags: ["Python", "Scikit-learn", "Logistic Regression"], url: repo("customer_retention_matrix"), flow: ["Transactions", "Behavioral features", "Retention model"],
  },
  {
    title: "E-Commerce BI Agent", category: "Applied AI",
    description: "A conversational analytics assistant for exploring e-commerce data.",
    detail: "Built a Streamlit analytics assistant using the Gemini API and function calling to interpret natural-language questions, select analysis tools, and return charts and data-backed insights.",
    tags: ["Gemini API", "Function calling", "Streamlit"], url: repo("ecommerce-bi-agent"), flow: ["Question", "Analysis tools", "Data-backed insights"],
  },
  {
    title: "FraudShield", category: "Machine Learning",
    description: "Fraud scoring, experiment tracking, and drift monitoring in one workflow.",
    detail: "Developed a fraud-detection application comparing baseline and class-weighted Logistic Regression. Used MLflow for experiment tracking and Streamlit for transaction scoring, adjustable thresholds, and feature-drift monitoring.",
    tags: ["Logistic Regression", "MLflow", "Streamlit"], url: repo("fraudshield"), flow: ["Transaction", "Risk scoring", "Drift monitoring"],
  },
  {
    title: "Support Signal Radar", category: "Applied AI",
    description: "Finding recurring support themes beyond exact keyword matches.",
    detail: "Applied Sentence-Transformers embeddings and K-Means clustering to support tickets. Ranked topics using ticket volume and cluster cohesion, and compared semantic with keyword search.",
    tags: ["NLP", "Embeddings", "K-Means"], url: profile.github, flow: ["Support tickets", "Embeddings", "Topic clusters"],
  },
  {
    title: "Electricity Demand Forecasting", category: "Machine Learning",
    description: "Time-aware forecasting benchmarks for hourly electricity demand.",
    detail: "Aggregated Tetouan City smart-meter readings into hourly data and compared multivariate SARIMAX with a seasonal-naive baseline using chronological seven-day forecast evaluation.",
    tags: ["SARIMAX", "Time series", "Python"], url: repo("electricity_demand_forecasting"), flow: ["Meter readings", "Hourly series", "Forecast evaluation"],
  },
  {
    title: "Customer Retention Prioritizer", category: "Machine Learning",
    description: "Translating churn risk into a focused customer-retention list.",
    detail: "Used IBM Telco customer data and Logistic Regression to estimate churn risk and customer value at risk. Ranked customers under a fixed campaign-capacity constraint.",
    tags: ["Scikit-learn", "Churn prediction", "Python"], url: repo("retention_prioritizer"), flow: ["Customer data", "Churn risk", "Priority ranking"],
  },
  {
    title: "FoodLens", category: "Computer Vision",
    description: "Exploring meal photos with evidence-aware multimodal AI.",
    detail: "Created a meal-photo analysis application using Qwen3-VL, Transformers, Google Colab, and Gradio. Structured outputs around visible food, possible ingredients, and dietary or portion context, distinguishing visible evidence from estimates and unknowns.",
    tags: ["Qwen3-VL", "Transformers", "Gradio"], url: repo("foodlens"), flow: ["Meal photo", "Vision-language model", "Structured analysis"],
  },
  {
    title: "Sales Data Analysis", category: "Data Analytics",
    description: "Making retail sales patterns easier to explore and compare.",
    detail: "Used Python, Pandas, and Matplotlib to clean retail transactions and analyze revenue by product, region, and month, producing visual summaries of sales trends.",
    tags: ["Pandas", "Matplotlib", "EDA"], url: repo("analyze-sales-data"), flow: ["Retail data", "Data cleaning", "Sales analysis"],
  },
  {
    title: "Ranjana Script Recognition", category: "Computer Vision",
    description: "A detection-and-classification pipeline for Ranjana script characters.",
    detail: "Major engineering project combining YOLO-based object detection with ResNet-based classification for Ranjana script recognition.",
    tags: ["YOLO", "ResNet", "Deep learning"], url: profile.github, flow: ["Script image", "YOLO detection", "ResNet classification"],
  },
  {
    title: "Ranjana Script OCR", category: "Computer Vision",
    description: "Locating script content as a foundation for optical character recognition.",
    detail: "Minor engineering project exploring YOLO-based detection for Ranjana script OCR, focusing on locating script content in images as part of an optical character recognition workflow.",
    tags: ["YOLO", "OCR", "Python"], url: profile.github, flow: ["Script image", "Content detection", "OCR pipeline"],
  },
];

export const skillGroups = [
  { title: "Programming", items: ["Python", "SQL", "C", "C++"] },
  { title: "Data Analytics", items: ["Pandas", "NumPy", "Matplotlib", "EDA"] },
  { title: "Machine Learning", items: ["Scikit-learn", "Classification", "Clustering", "Logistic Regression", "K-Means", "Forecasting"] },
  { title: "AI / Deep Learning", items: ["YOLO", "ResNet", "TensorFlow/Keras", "OCR", "NLP", "Embeddings", "LLM APIs", "Function calling"] },
  { title: "Tools", items: ["Git", "GitHub", "Jupyter", "Google Colab", "Streamlit", "Gradio", "MLflow"] },
];