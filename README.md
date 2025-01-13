
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

## Component Documentation

### QuestionForm Component

#### Overview
The `QuestionForm` component is a powerful question generation interface combining AI capabilities with Excel/CSV upload functionality.

#### Key Features

1. **File Upload System**
   - Supports Excel (.xlsx, .xls) and CSV formats
   - Automatic subject-topic mapping
   - Real-time file processing

2. **Question Generation**
   - AI-powered question creation
   - Custom context support
   - Bloom's taxonomy integration

#### API Integration

**POST** `/generate-questions`

```json
{
  "topic": "string",
  "num": "number",
  "question_type": "string",
  "level": "string",
  "subject": "string",
  "subtopic": ["string"],
  "blooms_level": "string",
  "context": "string",
  "custom_instructions": "string"
}
```

### ViewAssessment Component

#### Overview
Comprehensive interface for viewing, managing, and analyzing assessment questions.

#### Key Features

1. **Analytics Dashboard**
   - Question distribution analysis
   - Interactive filtering system
   - Trait-based categorization

2. **Question Management**
   - CRUD operations
   - Collection transfer
   - PDF export

#### State Management

```javascript
const [questionData, setQuestionData] = useState([]);
const [analytics, setAnalytics] = useState({});
const [activeFilters, setActiveFilters] = useState({
  levels: [],
  subtopics: [],
  traits: []
});
```

### AssessmentLibrary Component

#### Overview
Central hub for managing and organizing assessment collections with real-time search capabilities.

#### Key Features

1. **Collection Management**
   - Real-time collection search
   - Collection renaming
   - Collection deletion
   - Question count tracking

#### API Integration

**GET** `/api/collections/user/${userId}`

**DELETE** `/api/collections/${collectionId}`

**PATCH** `/api/collections/${collectionId}/name`

### Search System
- Real-time filtering
- Name-based search
- Question count search
- Dynamic results update

## Project Structure

```
question-uploader/
├── src/
│   ├── axios/                 # API configurations
│   ├── Components/            # Reusable UI components
│   ├── contexts/              # Global state management
│   ├── json/                  # Static configurations
│   ├── pages/                 # Main views
│   ├── styles/                # CSS configurations
│   ├── utils/                 # Helper functions
│   ├── App.jsx               # Root component
│   └── main.jsx              # Entry point
├── public/                    # Static assets
├── package.json              # Dependencies
└── vite.config.js           # Build configuration
```

## Execute

### Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`
