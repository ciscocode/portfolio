export type Category = "fullstack" | "frontend" | "desktop" | "ml";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: Category;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  problem: string;
  challenges: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    slug: "youtube-clone",
    title: "YouTube Clone",
    tagline: "Full-stack video sharing platform with cloud-based video processing",
    category: "fullstack",
    tags: ["Next.js", "TypeScript", "Firebase", "Cloud Run", "FFmpeg", "GCS"],
    repoUrl: "https://github.com/ciscocode/youtube-clone",
    problem:
      "Build a scalable video-sharing platform that can accept raw video uploads, transcode them asynchronously into web-compatible formats, and serve them through a clean user interface—mirroring the core infrastructure of YouTube.",
    challenges: [
      "Designing an asynchronous video processing pipeline that decouples upload from transcoding so the web client stays responsive.",
      "Containerizing the FFmpeg transcoding service and deploying it on Cloud Run with proper concurrency limits and pub/sub triggers.",
      "Managing Google Cloud Storage signed URLs for secure, direct-to-bucket uploads without routing large files through the API server.",
      "Keeping Firebase Authentication state in sync across the Next.js web client and the backend API service.",
    ],
    learnings: [
      "Event-driven architectures (Cloud Pub/Sub) are a natural fit for media pipelines where processing time is unpredictable.",
      "Cloud Run's pay-per-request model dramatically reduces idle costs compared to always-on VMs for bursty workloads.",
      "Firebase gives you auth, Firestore, and hosting in one SDK, but abstracting it behind a thin service layer keeps future migrations manageable.",
    ],
  },
  {
    slug: "scheduling-application",
    title: "Java Scheduling Application",
    tagline: "Desktop appointment management system with multi-timezone support",
    category: "desktop",
    tags: ["Java", "JavaFX", "MySQL", "JDBC", "MVC"],
    repoUrl: "https://github.com/ciscocode/c195schedulingapplication",
    problem:
      "Create a desktop scheduling application for a fictional consulting company whose customers and offices span multiple time zones. Appointments must be stored in UTC, displayed in the user's local time, and constrained to business hours in Eastern Time—all while preventing double-booking.",
    challenges: [
      "Converting between UTC (database), Eastern Time (business-hours validation), and the user's local timezone without using deprecated Java date APIs.",
      "Building a real-time overlap-detection query that accounts for appointments that start before or end after the proposed window.",
      "Designing JavaFX forms that dynamically populate combo boxes from a live MySQL database and validate inputs before submission.",
      "Implementing role-based views so the same codebase serves both standard users and administrators.",
    ],
    learnings: [
      "Java's java.time package (ZonedDateTime, ZoneId) makes timezone-aware programming predictable once you commit to storing everything in UTC.",
      "Parameterized JDBC queries are non-negotiable for preventing SQL injection in desktop apps that talk directly to a database.",
      "JavaFX's property-binding system keeps UI state in sync with model objects without boilerplate listener code.",
    ],
  },
  {
    slug: "inventory-management",
    title: "Inventory Management System",
    tagline: "Desktop app for tracking parts and products with an in-memory data model",
    category: "desktop",
    tags: ["Java", "JavaFX", "OOP", "MVC"],
    repoUrl: "https://github.com/ciscocode/c482inventoryproject",
    problem:
      "Build a desktop inventory system that lets a small manufacturer manage raw parts (both in-house and outsourced) and assembled products. Parts can be associated with multiple products, and the UI must enforce business rules like preventing deletion of parts that are still referenced by a product.",
    challenges: [
      "Modeling the part hierarchy (InHouse vs. Outsourced) with inheritance while keeping the JavaFX table views generic enough to display both types.",
      "Implementing bidirectional associations between parts and products and keeping them consistent when items are added or removed.",
      "Writing real-time search filters on ObservableLists that update table results on every keystroke without blocking the UI thread.",
      "Enforcing cascading business rules (e.g., a product must have at least one associated part before it can be saved).",
    ],
    learnings: [
      "JavaFX ObservableLists paired with FilteredLists provide a reactive, low-friction way to implement live search without manual table redraws.",
      "Separating the domain model from controller logic early pays off immediately when requirements change—no UI code needed to be touched for most rule changes.",
      "Unit-testing pure Java model classes independently of JavaFX makes the test suite fast and deterministic.",
    ],
  },
  {
    slug: "adventure-game",
    title: "Adventure Game",
    tagline: "Browser-based text adventure engine inspired by the classic Colossal Cave",
    category: "frontend",
    tags: ["JavaScript", "OOP", "HTML", "CSS"],
    repoUrl: "https://github.com/ciscocode/adventure",
    liveUrl: "https://ciscocode.github.io/adventure",
    problem:
      "Recreate a classic text-adventure game in the browser, implementing a parser that handles free-text commands, a room-navigation system, an inventory of collectible objects, and locked passages—all without any external libraries or frameworks.",
    challenges: [
      "Designing an extensible room graph where each room can have directional exits, a description, and a list of objects—and serializing that graph from a data file rather than hard-coding it.",
      "Writing a command parser that normalizes user input, extracts verbs and nouns, and dispatches to the correct game action without a grammar library.",
      "Implementing a custom in-browser console (JSConsole) to intercept stdout/stdin and render game output inside a styled HTML element.",
      "Handling edge cases in object interactions: picking up objects that are locked behind others, dropping in the wrong room, and synonyms for the same item.",
    ],
    learnings: [
      "Modeling game entities as classes (Room, AdvObject, AdvPassage) rather than raw objects makes the game logic read almost like the design spec.",
      "A thin adapter between game logic and the DOM (JSConsole) keeps the core engine free of browser-specific code and testable in isolation.",
      "Classic CS assignments remain excellent vehicles for practicing OOP design—the constraints force clean abstractions.",
    ],
  },
  {
    slug: "sentiment-analysis",
    title: "Sentiment Analysis Model",
    tagline: "NLP classifier that detects sentiment in text using fine-tuned transformers",
    category: "ml",
    tags: ["Python", "PyTorch", "HuggingFace", "Transformers", "Google Colab"],
    liveUrl: "https://colab.research.google.com/drive/1_kbJmZj1O3-cBeNU15_8LlFipYk7q1FW?usp=sharing",
    problem:
      "Train a sentiment classifier that goes beyond simple positive/negative labels, capturing nuanced emotional tone in short text snippets—useful for product review analysis and social-media monitoring.",
    challenges: [
      "Selecting and preprocessing a labeled sentiment dataset that was large enough to generalize but balanced enough to avoid class-skew bias.",
      "Fine-tuning a pre-trained BERT-based model within Google Colab's GPU memory limits by adjusting batch size and using gradient accumulation.",
      "Evaluating model quality beyond accuracy: computing precision, recall, and F1 per class to detect when the model was over-predicting the majority class.",
      "Exporting the fine-tuned model and tokenizer so predictions could be run outside the training notebook.",
    ],
    learnings: [
      "Transfer learning with HuggingFace Transformers cuts training time dramatically—a few epochs of fine-tuning outperforms training from scratch on small datasets.",
      "Class imbalance in sentiment data is the most common silent killer of classifier performance; weighted loss functions or oversampling are essential.",
      "Colab's free tier is surprisingly capable for NLP experimentation, but reproducibility requires pinning library versions and seeding random states.",
    ],
  },
  {
    slug: "hangkarel",
    title: "HangKarel",
    tagline: "Browser-based Hangman game built with vanilla JavaScript",
    category: "frontend",
    tags: ["JavaScript", "HTML", "CSS", "DOM", "Game Dev"],
    repoUrl: "https://github.com/ciscocode/hangkarel",
    problem:
      "Build a fully playable Hangman game that runs entirely in the browser with no dependencies. The game needed a built-in word bank, keyboard input handling, a progressively drawn gallows, and win/loss detection—delivered as a single self-contained HTML page.",
    challenges: [
      "Drawing the hangman figure incrementally using SVG so each wrong guess reveals the next body part without reloading or using canvas.",
      "Managing game state (guessed letters, remaining attempts, current word) in plain JavaScript without a framework, keeping logic and rendering cleanly separated.",
      "Building an on-screen letter keyboard that disables guessed keys in real time while also accepting physical keyboard input.",
      "Selecting words randomly from a curated bank and masking unguessed letters to display the classic underscore pattern.",
    ],
    learnings: [
      "SVG is a surprisingly elegant choice for progressive game illustrations—each element can be toggled with display:none rather than re-drawing a canvas.",
      "Pure vanilla JS forces you to be intentional about state: without a reactive framework, a single source-of-truth object and explicit render calls keep bugs from multiplying.",
      "Small, self-contained browser games are great for practicing event-driven programming and DOM manipulation before reaching for a framework.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
