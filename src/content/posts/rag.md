---
title: "What is RAG?"
date: "June 17, 2026"
cover: "/posts/rag.webp"
description: "Retrieval-Augmented Generation explained: how connecting an LLM to an external knowledge base produces grounded, up-to-date and verifiable answers."
locale: "en"
slug: "rag"
---

## Retrieval-Augmented Generation

**RAG (Retrieval-Augmented Generation)** is a pattern that gives a language model access to external knowledge at answer time. Instead of relying only on what the model memorized during training, the system first *retrieves* the most relevant documents and then asks the LLM to generate an answer using them as context.

The typical pipeline has two stages:

1. **Retrieval** — the user's question is converted into an **embedding** and compared against a **vector database** to find the most similar chunks of text.
2. **Generation** — those chunks are inserted into the prompt so the LLM answers grounded in real, current data.

## Why use it

RAG solves two of the biggest weaknesses of LLMs: outdated knowledge and hallucinations. Because the answer is built from retrieved sources, it can stay up to date and even cite where the information came from.

In my own projects I use both classic RAG and **Hybrid-RAG**, which combines semantic (vector) search with keyword search to get the best of both worlds.
