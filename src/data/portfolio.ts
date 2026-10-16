export const profile = {
  name: "Neha Khadgi",
  email: "nehakhadgi55@gmail.com",
  phone: "+977 9863026859",
  github: "https://github.com/nehakhadgi",
  linkedin: "https://www.linkedin.com/in/nehakhadgi/",
  website: "https://nehakhadgi.com.np",
  location: "Kathmandu, Nepal",
};

export const categories = ["All projects", "Machine Learning", "Applied AI", "MLOps", "Data Analytics", "Computer Vision"] as const;
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
  { title: "Local RAG API with CI/CD Test Suite", category: "MLOps", description: "A private, fully local RAG API that is testable in CI.", detail: "Built a FastAPI POST /query endpoint that retrieves the top match from a persistent ChromaDB store and prompts TinyLlama via Ollama, packaged with Docker and Kubernetes manifests. Pytest semantic tests with a mock-LLM mode run in GitHub Actions, making LLM answers testable with deterministic builds.", tags: ["FastAPI", "ChromaDB", "Ollama", "Docker", "Kubernetes", "GitHub Actions"], url: repo("nextwork-rag-api"), flow: ["Query", "ChromaDB retrieval", "TinyLlama answer"] },
  { title: "Customer Retention Matrix", category: "Machine Learning", description: "Turning 800,000+ transactions into a risk-versus-value action matrix.", detail: "Built a churn pipeline on 800,000+ UCI Online Retail II rows with 12-month features and a 90-day forward label; caught target leakage (ROC-AUC 1.000) and compared Logistic Regression with Histogram Gradient Boosting. Logistic Regression won (ROC-AUC 0.780, PR-AUC 0.856 vs. 0.769, 0.839); 5+ orders linked to 63.8% lower churn odds.", tags: ["Python", "Pandas", "Scikit-learn"], url: repo("customer_retention_matrix"), flow: ["Transactions", "Behavioral features", "Action matrix"] },
  { title: "E-Commerce BI Agent", category: "Applied AI", description: "A conversational analytics assistant over 3,500+ e-commerce records.", detail: "Gemini function calling picks metric or chart tools, with multi-turn memory, HTTP 503 backoff, and rotation across 5 API keys. Delivers data-backed answers and charts on demand and stays available through quota limits.", tags: ["Gemini API", "Streamlit", "Pandas", "Matplotlib"], url: repo("ecommerce-bi-agent"), flow: ["Question", "Function calling", "Charts & insights"] },
  { title: "FraudShield", category: "Machine Learning", description: "Fraud scoring, experiment tracking, and drift monitoring in one app.", detail: "Compared a majority-class baseline with a class-weighted Logistic Regression in MLflow; built a Streamlit app with live scoring, adjustable thresholds, and a custom drift monitor. Replaced a 0.0%-recall baseline with a model that detects fraud and alerts on feature mean shifts above 1.0 standard deviation.", tags: ["Scikit-learn", "MLflow", "Streamlit"], url: repo("fraudshield"), flow: ["Transaction", "Risk scoring", "Drift monitoring"] },
  { title: "Support Signal Radar", category: "Applied AI", description: "Surfacing recurring support issues that keyword search misses.", detail: "Embedded banking support tickets with all-MiniLM-L6-v2, clustered them into 12 topics with K-Means, ranked by volume and cohesion, and validated with silhouette score and Adjusted Rand Index.", tags: ["Sentence-Transformers", "K-Means", "Streamlit"], url: repo("support-_signal_-radar"), flow: ["Support tickets", "Embeddings", "12 topic clusters"] },
  { title: "M5 Retail Demand Forecasting", category: "Machine Learning", description: "Tying forecast quality directly to stocking decisions.", detail: "Built an app forecasting 28 days of M5 unit sales; compared Seasonal Naive, SARIMA, and Prophet with an asymmetric cost model ($8 per unit short, $2 overstocked) and planned 28-day retraining with a 20% MAE alert.", tags: ["SARIMA", "Prophet", "Streamlit"], url: repo("M5-_Retail-_Demand-_Forecasting"), flow: ["Unit sales", "Model comparison", "Stocking cost"] },
  { title: "Targeted Rollout Uplift", category: "Data Analytics", description: "From “does it work on average” to “who should receive it.”", detail: "Built a causal-ML workflow with A/B lift summaries (95% confidence intervals, p-values, minimum detectable effect at 80% power), segment analysis, and uplift models validated by Qini curves across four rollout policies.", tags: ["CausalML", "A/B Testing", "Jupyter"], url: repo("targeted-rollout-uplift"), flow: ["A/B test", "Uplift models", "Rollout policy"] },
  { title: "Music Genre Classifier", category: "Machine Learning", description: "Classifying 8,000 tracks into 8 genres with a human-in-the-loop rule.", detail: "Classified Free Music Archive tracks from 518 audio features using artist-separated splits; benchmarked a Keras MLP against a Logistic Regression baseline. Predictions below 70% confidence are routed to human curators.", tags: ["TensorFlow", "Keras", "Streamlit"], url: repo("music_genre_classifier"), flow: ["Audio features", "Keras MLP", "Genre / curator"] },
  { title: "Ranjana Script Recognition", category: "Computer Vision", description: "Major project supporting digital preservation of the Ranjana script.", detail: "Built a script-recognition system combining YOLO object detection with ResNet classification, automating character detection and classification across the recognition workflow.", tags: ["YOLO", "ResNet", "Deep learning"], url: profile.github, flow: ["Script image", "YOLO detection", "ResNet classification"] },
  { title: "Electricity Demand Forecasting", category: "Machine Learning", description: "Hourly demand forecasting with weather regressors.", detail: "SARIMAX with weather regressors vs. a seasonal-naive baseline on a 7-day (168-hour) chronological holdout, with a 20% MAPE alert, baseline fallback, and weekly retraining.", tags: ["SARIMAX", "Pandas", "Python"], url: repo("electricity_demand_forecasting"), flow: ["Meter readings", "SARIMAX", "7-day holdout"] },
  { title: "Customer Retention Prioritizer", category: "Machine Learning", description: "Ranking customers by 12-month value at risk.", detail: "Logistic Regression on IBM Telco data ranks customers by value at risk, producing a retention queue for the top 10% of the holdout with segment-specific actions.", tags: ["Scikit-learn", "Matplotlib", "Python"], url: repo("retention_prioritizer"), flow: ["Customer data", "Churn risk", "Retention queue"] },
  { title: "FoodLens", category: "Computer Vision", description: "A meal-photo coach powered by a vision-language model.", detail: "Describes dishes and ingredients using dietary and portion context, separating visible evidence from estimates and unknowns.", tags: ["Qwen3-VL", "Transformers", "Gradio"], url: repo("foodlens"), flow: ["Meal photo", "Qwen3-VL", "Structured analysis"] },
  { title: "Customer Segmentation Pipeline", category: "Data Analytics", description: "Turning transactions into actionable customer groups.", detail: "RFM features, elbow-method clustering, and segment and CLV-projection plots on Online Retail II.", tags: ["Pandas", "Scikit-learn", "RFM"], url: profile.github, flow: ["Transactions", "RFM features", "Segments"] },
  { title: "AI Security Scanner", category: "Applied AI", description: "Prioritized code-security findings from one command.", detail: "CLI that flags SQL injection, command injection, hardcoded secrets, and weak hashing with severity-coded reports.", tags: ["Python", "Gemini API", "CLI"], url: profile.github, flow: ["Source code", "Gemini analysis", "Severity report"] },
  { title: "Self-Validating AI & CI Pipeline", category: "MLOps", description: "Automating architecture compliance in CI.", detail: "Q&A service whose C4 architecture diagram is enforced by a CI architecture check.", tags: ["FastAPI", "GitHub Actions", "Gemini API"], url: profile.github, flow: ["Commit", "Architecture check", "Deploy"] },
  { title: "AI Calendar Automator", category: "Applied AI", description: "Creating calendar events from plain English.", detail: "n8n agent with function calling and chat memory that creates Google Calendar events via OAuth 2.0, replacing manual calendar entry.", tags: ["n8n", "GPT-4o-mini", "Google Calendar API"], url: profile.github, flow: ["Plain English", "Agent", "Calendar event"] },
  { title: "Sales Data Analysis", category: "Data Analytics", description: "Making retail sales patterns easy to explore.", detail: "Cleaned retail sales data and charted revenue by product and month, identifying Laptop as the top revenue driver.", tags: ["Pandas", "Matplotlib", "EDA"], url: repo("analyze-sales-data"), flow: ["Retail data", "Cleaning", "Revenue charts"] },
  { title: "Ranjana Script OCR", category: "Computer Vision", description: "Minor project: the detection stage for Ranjana OCR.", detail: "YOLO-based detection of Ranjana characters in images, delivering a working detection stage for OCR.", tags: ["YOLO", "OCR", "Python"], url: profile.github, flow: ["Script image", "YOLO detection", "OCR stage"] },
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "SQL", "C", "C++"] },
  { title: "Machine Learning", items: ["Scikit-learn", "Logistic Regression", "Gradient Boosting", "K-Means", "Classification", "Clustering", "Time-Series Forecasting (SARIMAX, SARIMA, Prophet)", "Causal ML (CausalML)", "Model Evaluation", "Drift Detection"] },
  { title: "AI & Deep Learning", items: ["TensorFlow", "Keras", "YOLO", "ResNet", "OCR", "Computer Vision", "NLP", "Embeddings", "Sentence-Transformers", "RAG", "LLM APIs (Gemini, OpenAI)", "Function Calling", "Ollama"] },
  { title: "Data & Analytics", items: ["Pandas", "NumPy", "Matplotlib", "EDA", "A/B Testing", "Business Intelligence"] },
  { title: "Backend & DevOps", items: ["FastAPI", "ChromaDB", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Pytest", "MLflow", "Git", "GitHub"] },
  { title: "Tools", items: ["Streamlit", "Gradio", "Jupyter Notebook", "Google Colab", "n8n"] },
];

export const coursework = ["Machine Learning", "Data Structures and Algorithms", "Database Systems", "Statistics and Data Analysis", "Artificial Intelligence"];
