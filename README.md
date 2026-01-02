# SENTIMENT-PLATFORM

A **real-time, distributed sentiment analysis platform** that ingests social media posts, analyzes sentiment using AI models, stores results in a database, and visualizes live insights on a dashboard.

This project demonstrates **event-driven microservices**, **AI-powered NLP**, **real-time WebSockets**, and **full-stack engineering** using Docker.

---

## Key Features

- **Real-time ingestion** of social media–like posts
- **AI-powered sentiment & emotion analysis** (Hugging Face + optional External LLM)
- **Live updates via WebSockets**
- **Interactive dashboard** (React + Tailwind)
- **Automated alerting system** for sentiment spikes
- **Comprehensive test suite** (unit + integration)
- **Fully containerized** using Docker Compose

---

## System Architecture

```text
            ┌────────────┐
            │  Frontend  │  (React + Vite)
            │ Dashboard  │
            └─────▲──────┘
                  │ WebSocket / REST
            ┌─────┴──────┐
            │  Backend   │  (FastAPI)
            │ API + WS   │
            └─────▲──────┘
                  │ Pub/Sub
            ┌─────┴──────┐
            │   Redis    │  (Streams + PubSub)
            └─────▲──────┘
                  │
        ┌─────────┴─────────┐
        │       Worker       │  (AI Processing)
        │  Sentiment Engine  │
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
