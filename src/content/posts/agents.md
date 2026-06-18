---
title: "What are AI Agents?"
date: "June 16, 2026"
description: "An introduction to AI agents: LLMs that can plan, use tools and act in a loop to accomplish goals instead of just answering a single prompt."
locale: "en"
slug: "agents"
---

## From answering to acting

An **AI agent** is a system built around an LLM that doesn't just produce text — it *decides what to do next*. Given a goal, the agent reasons about the steps, calls **tools** (search, code execution, APIs, databases), observes the results, and repeats the loop until the task is done.

The core idea is the **reason → act → observe** cycle. The model proposes an action, the system executes it, and the outcome is fed back into the model so it can adjust its plan. This turns a passive text generator into something that can complete multi-step work.

## Building blocks

A practical agent usually combines:

- **Tools / function calling** — the bridge between the model and the real world.
- **Memory** — short-term context and long-term storage of past interactions.
- **Planning** — breaking a goal into smaller, ordered steps.

I build agents with frameworks like **LangChain** and orchestrate workflows with **n8n**, often pairing them with RAG so the agent can ground its decisions in real data.
