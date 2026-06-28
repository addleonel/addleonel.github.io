---
title: "¿Qué son los Agentes de IA?"
date: "16 de Junio, 2026"
cover: "/posts/agents.webp"
description: "Una introducción a los agentes de IA: LLMs que pueden planificar, usar herramientas y actuar en un bucle para lograr objetivos en lugar de solo responder a un prompt."
locale: "es"
slug: "agents"
---

## De responder a actuar

Un **agente de IA** es un sistema construido alrededor de un LLM que no solo produce texto, sino que *decide qué hacer a continuación*. Dado un objetivo, el agente razona sobre los pasos, llama a **herramientas** (búsqueda, ejecución de código, APIs, bases de datos), observa los resultados y repite el bucle hasta completar la tarea.

La idea central es el ciclo **razonar → actuar → observar**. El modelo propone una acción, el sistema la ejecuta y el resultado se devuelve al modelo para que ajuste su plan. Esto convierte a un generador de texto pasivo en algo capaz de completar trabajo de varios pasos.

## Componentes

Un agente práctico suele combinar:

- **Herramientas / function calling** — el puente entre el modelo y el mundo real.
- **Memoria** — contexto de corto plazo y almacenamiento de largo plazo de interacciones pasadas.
- **Planificación** — dividir un objetivo en pasos más pequeños y ordenados.

Construyo agentes con frameworks como **LangChain** y orquesto flujos con **n8n**, a menudo combinándolos con RAG para que el agente fundamente sus decisiones en datos reales.
