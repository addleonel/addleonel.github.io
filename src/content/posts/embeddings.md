---
title: "What are Embeddings?"
date: "June 15, 2026"
cover: "/posts/embeddings.webp"
description: "Embeddings turn text, images and other data into vectors that capture meaning, making semantic search and RAG possible."
locale: "en"
slug: "embeddings"
---

## Meaning as numbers

An **embedding** is a list of numbers — a vector — that represents the *meaning* of a piece of data such as a word, a sentence or an image. A model learns to place similar concepts close together in this high-dimensional space, so "dog" and "puppy" end up near each other, while "dog" and "spreadsheet" sit far apart.

Because meaning becomes geometry, you can measure how related two things are simply by computing the distance (or cosine similarity) between their vectors.

## Why they are everywhere

Embeddings are the quiet engine behind a lot of modern AI:

- **Semantic search** — find documents by meaning, not exact keywords.
- **RAG** — retrieve the most relevant chunks to feed an LLM.
- **Recommendations and clustering** — group similar items automatically.

In a RAG pipeline, every document and every question is converted into an embedding and stored in a **vector database**, which is what makes fast similarity search possible at scale.
