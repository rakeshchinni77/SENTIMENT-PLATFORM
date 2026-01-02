# SENTIMENT-PLATFORM

A **real-time, distributed sentiment analysis platform** that ingests social-media-style posts, analyzes sentiment using AI models, persists results, and visualizes **live insights** on a modern dashboard.

This project showcases **event-driven microservices**, **AI-powered NLP**, **WebSockets**, and **full-stack engineering** using **Docker & Docker Compose**.

---

## Key Features

- Real-time ingestion of social media–like posts
- AI-powered sentiment analysis using Hugging Face Transformers
- Event-driven architecture using Redis Streams
- Live updates via WebSockets
- Interactive dashboard built with React + Tailwind CSS
- Automated alerting for negative sentiment spikes
- REST APIs + WebSocket APIs
- Unit & integration test coverage
- Fully containerized microservices setup

---

## System Architecture

```
        ┌────────────┐
        │  Frontend  │  (React + Vite)
        │ Dashboard  │
        └─────▲──────┘
              │ WebSocket / REST
        ┌─────┴──────┐
        │  Backend   │  (FastAPI)
        │ API + WS   │
        └─────▲──────┘
              │ Redis Streams / PubSub
        ┌─────┴──────┐
        │   Redis    │
        └─────▲──────┘
              │
    ┌─────────┴─────────┐
    │       Worker       │  (AI Processing)
    │ Sentiment Engine   │
    └─────────▲─────────┘
              │
        ┌─────┴──────┐
        │ PostgreSQL │
        │  Database  │
        └────────────┘

        ┌────────────┐
        │  Ingester  │
        │ Fake Posts │
        └────────────┘

```

---

## Project Structure

```
SENTIMENT-PLATFORM
├── backend
│ ├── services
│ │ └── alerting.py
│ ├── tests
│ │ ├── test_api.py
│ │ ├── test_integration.py
│ │ └── test_sentiment.py
│ ├── database.py
│ ├── models.py
│ ├── main.py
│ ├── Dockerfile
│ └── requirements.txt
│
├── frontend
│ ├── src
│ │ ├── components
│ │ │ ├── Dashboard.jsx
│ │ │ ├── StatCard.jsx
│ │ │ ├── SentimentChart.jsx
│ │ │ ├── DistributionChart.jsx
│ │ │ └── LiveFeed.jsx
│ │ ├── services
│ │ │ └── api.js
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ ├── Dockerfile
│ ├── index.html
│ ├── package.json
│ ├── tailwind.config.js
│ └── vite.config.js
│
├── ingester
│ ├── ingester.py
│ ├── Dockerfile
│ └── requirements.txt
│
├── worker
│ ├── worker.py
│ ├── sentiment_analyzer.py
│ ├── database.py
│ ├── models.py
│ ├── Dockerfile
│ └── requirements.txt
│
├── docker-compose.yml
├── ARCHITECTURE.md
├── README.md
├── .env.example
└── .gitignore
```

---

## Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- WebSockets

**Backend**
- FastAPI
- WebSockets
- SQLAlchemy

**AI / NLP**
- Hugging Face Transformers
- PyTorch (CPU)

**Infrastructure**
- Redis (Streams)
- PostgreSQL
- Docker & Docker Compose

---

## Environment Setup

Create a `.env` file using the template:

```bash
cp .env.example .env

```

---

## Example variables

POSTGRES_USER=sentiment_user
POSTGRES_PASSWORD=sentiment_password
POSTGRES_DB=sentiment_db
REDIS_HOST=redis
ALERT_NEGATIVE_RATIO_THRESHOLD=0.5

---
## Running the Project

Start all services

```bash
docker compose up --build
```
First run may take a few minutes due to AI model downloads.

---

## Access Points

Frontend Dashboard → http://localhost:3000

Backend API Docs → http://localhost:8000/docs

WebSocket Endpoint → ws://localhost:8000/ws/sentiment

---

## API Overview

REST APIs

GET /api/health – service health check

GET /api/posts – recent posts

GET /api/sentiment/distribution – sentiment distribution

GET /api/sentiment/aggregate – time-series sentiment data

WebSocket

/ws/sentiment – real-time sentiment stream

---

## Running Tests

```bash
docker compose exec backend pytest
```

Includes:

Unit tests

Integration tests

Sentiment logic validation

---

## Alerting Logic

Monitors negative sentiment ratio

Triggers alerts when threshold is exceeded

Designed for extensibility (email / Slack hooks)

---

## Dashboard Features

Live sentiment trend chart

Sentiment distribution donut chart

Real-time post feed

Connection status indicator

Auto-updating metrics via WebSockets

---

### Design Goals

Event-driven & scalable architecture

Clear separation of responsibilities

Real-time data flow

Production-style container orchestration

Clean Git commit history

---

## Notes

Designed to run entirely on CPU

Easily extensible for real social media APIs

Suitable for learning microservices, AI integration, and real-time systems

---

## Author

Chinni Rakesh
B.Tech CSE (AI & ML)
Aditya College of Engineering and Technology

---

### License

This project is for educational and demonstration purposes.
