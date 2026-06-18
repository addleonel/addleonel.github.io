---
title: "¿Qué es RAG?"
date: "17 de Junio, 2026"
description: "La Generación Aumentada por Recuperación explicada: cómo conectar un LLM a una base de conocimiento externa produce respuestas fundamentadas, actualizadas y verificables."
locale: "es"
slug: "rag"
---

## Generación Aumentada por Recuperación

**RAG (Retrieval-Augmented Generation)** es un patrón que le da a un modelo de lenguaje acceso a conocimiento externo en el momento de responder. En lugar de depender solo de lo que el modelo memorizó durante el entrenamiento, el sistema primero *recupera* los documentos más relevantes y luego le pide al LLM que genere una respuesta usándolos como contexto.

El flujo típico tiene dos etapas:

1. **Recuperación** — la pregunta del usuario se convierte en un **embedding** y se compara contra una **base de datos vectorial** para encontrar los fragmentos de texto más similares.
2. **Generación** — esos fragmentos se insertan en el prompt para que el LLM responda fundamentado en datos reales y actuales.

## Por qué usarlo

RAG resuelve dos de las mayores debilidades de los LLMs: el conocimiento desactualizado y las alucinaciones. Como la respuesta se construye a partir de fuentes recuperadas, puede mantenerse al día e incluso citar de dónde salió la información.

En mis propios proyectos uso tanto RAG clásico como **Hybrid-RAG**, que combina la búsqueda semántica (vectorial) con la búsqueda por palabras clave para obtener lo mejor de ambos mundos.
