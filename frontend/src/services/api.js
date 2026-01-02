export const API_URL = "http://localhost:8000";

export const WS_URL =
  window.location.protocol === "https:"
    ? "wss://localhost:8000/ws/sentiment"
    : "ws://localhost:8000/ws/sentiment";
