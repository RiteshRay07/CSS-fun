# SME Question Uploader Platform

A modern web application for educators to create, manage, and analyze assessment questions.

## Features

- **Question Analytics Dashboard**
- **Multi-level Question Filtering**
- **LaTeX Support for Mathematical Equations**
- **PDF Export Functionality**
- **AI-powered Question Generation**
- **Collection Management**
- **Real-time Question Recommendations**
- **Image Support with Preview**
- **Interactive Question Editor**

## Tech Stack

- **React**
- **Tailwind CSS**
- **Vite**
- **React Router DOM**
- **React-Latex-next**
- **jsPDF**

---

## Folder Structure

Here's the comprehensive folder structure of the Question Uploader project with descriptions:



```bash
question-uploader/
├── src/
│   ├── axios/                 # API configurations and interceptors
│   │   ├── questionGenAPI.js  # Question generation API configuration
│   │   └── smeQgenApi.js      # SME platform API configuration
│   │
│   ├── Components/            # Reusable UI components
│   │   ├── common/            # Common UI elements
│   │   │   ├── Button.jsx     # Reusable button component
│   │   │   ├── Card.jsx       # Card layout component
│   │   │   ├── Dropdown.jsx   # Custom dropdown component
│   │   │   ├── DynamicTextarea.jsx # Auto-resizing textarea
│   │   │   ├── Input.jsx      # Custom input component
│   │   │   ├── LabelInput.jsx # Labeled input component
│   │   │   └── OptionsAll.jsx # Question options component
│   │   │
│   │   └── Modals/            # Modal components
│   │       ├── PreviewModal.jsx # Question preview modal
│   │       └── ValidationModal.jsx # Form validation modal
│   │
│   ├── contexts/              # Global state management
│   │   ├── LoaderContext.jsx  # Loading state management
│   │   └── NotyfContext.jsx   # Notification system context
│   │
│   ├── json/                  # Static data configurations
│   │   ├── questionData.js    # Sample question data
│   │   └── traitStyles.js     # Question trait configurations
│   │
│   ├── pages/                 # Main application views
│   │   ├── AddAssessment.jsx  # Assessment creation page
│   │   ├── Library.jsx        # Question collection library
│   │   └── ViewCollection.jsx # Collection detail view
│   │
│   ├── styles/                # Custom styling configurations
│   │   └── tailwind.css       # Tailwind CSS customizations
│   │
│   ├── utils/                 # Helper functions
│   │   ├── validators.js      # Form validation utilities
│   │   └── helpers.js         # Helper functions
│   │
│   ├── App.jsx                # Root application component
│   └── main.jsx               # Application entry point
│
├── public/
│   ├── assets/
│   │   └── images/            # Static image assets
│   └── icons/                 # Application icons
│
├── package.json              # Project dependencies and scripts
├── vite.config.js            # Vite configuration
└── tailwind.config.js        # Tailwind CSS configuration


---

### Key Directory Descriptions

#### **axios/**
- Houses API configurations and interceptors.
- Manages different API endpoints and their configurations.

#### **Components/common/**
- Reusable UI components that maintain consistency across the application and implement common functionality patterns.

#### **contexts/**
- Global state management, including loading and notifications utilities.

#### **json/**
- Static data configurations with default values and configurations.

#### **pages/**
- Contains core functionality implementations for main application views and route-specific components.

#### **styles/**
- Custom Tailwind CSS configurations and global style definitions.

#### **utils/**
- Helper functions and form validation utilities for common operations.

#### **public/**
- Static assets including public resources and deployment assets.

---

## QuestionForm.jsx

### Overview

The `QuestionForm` component is a powerful question generation interface combining AI capabilities with Excel/CSV upload functionality. It serves as the core feature for creating educational assessments efficiently.

### Key Features

1. **File Upload System**
   - Supports Excel (.xlsx, .xls) and CSV formats.
   - Automatic subject-topic mapping.
   - Real-time file processing with upload status tracking.
   
2. **Question Generation**
   - AI-powered question creation with custom context support.
   - Integrates Bloom's Taxonomy.
   - Multiple difficulty levels and question count configuration.
   
3. **Subject-Topic Management**
   - Dynamic subject selection, topic filtering, and subtopic tagging.
   - Hierarchical data organization.

### API Integration

**Question Generation**

# POST /generate-questions

Payload: { topic: string, num: number, question_type: string, level: string, subject: string, subtopic: string[], blooms_level: string, context: string, custom_instructions: string }

# GET /api/collections/user/{userId}/latest 
# POST /api/collections 
# POST /api/collections/{collectionId}/questions


### Data Processing Features
- Excel/CSV parsing.
- Subject-topic mapping and subtopic extraction.
- Data validation with real-time progress tracking and preview system.

---

## ViewAssessment.jsx

### Overview

The `ViewAssessment` component provides a comprehensive interface for viewing, managing, and analyzing assessment questions. It features advanced filtering, recommendation generation, and detailed analytics visualization.

### Key Features

1. **Analytics Dashboard**
   - Question distribution by level, subtopic analysis, trait-based categorization.
   - Interactive filtering system.
   
2. **Question Management**
   - View, edit, delete questions, and transfer collections.
   
3. **Recommendation System**

# POST /generate-recommendations

Payload: { questionData, options, recommendations }

### Advanced Features

1. **Filtering System**
   - Level-based, subtopic, and trait-based filtering.
   - Search functionality.

2. **PDF Export**
   - Custom formatting with question organization and timestamp integration.

3. **Image Handling**
   - Preview, enlargement, and responsive display for images.

### Technical Implementation

**State Management:**
```jsx
const [questionData, setQuestionData] = useState([]);
const [analytics, setAnalytics] = useState({});
const [activeFilters, setActiveFilters] = useState({
  levels: [],
  subtopics: [],
  traits: []
});
```
