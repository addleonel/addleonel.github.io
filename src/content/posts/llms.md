---
title: "What are LLMs?"
date: "June 18, 2026"
cover: "/posts/llms.webp"
description: "A short introduction to Large Language Models: what they are, how they are trained, and why they have become the backbone of modern AI applications."
locale: "en"
slug: "llms"
---

## Large Language Models

A **Large Language Model (LLM)** is a neural network trained on enormous amounts of text to predict the next token in a sequence. From that deceptively simple objective emerges a surprising range of abilities: writing, summarizing, translating, answering questions and reasoning step by step.

Modern LLMs are based on the **Transformer** architecture and scaled to billions of parameters. They are first *pre-trained* on broad text corpora and then *fine-tuned* or aligned (for example with reinforcement learning from human feedback) so their answers are helpful and safe.

## Why they matter

LLMs turned natural language into a programming interface. Instead of writing rigid rules, you describe what you want and the model produces it. This is what powers chat assistants, code generation, and the **agents** and **RAG** systems I build.

Their main limitations are that they can *hallucinate* facts and that their knowledge is frozen at training time — which is exactly why techniques like retrieval-augmented generation exist.
