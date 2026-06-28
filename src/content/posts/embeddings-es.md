---
title: "¿Qué son los Embeddings?"
date: "15 de Junio, 2026"
cover: "/posts/embeddings.webp"
description: "Los embeddings convierten texto, imágenes y otros datos en vectores que capturan el significado, haciendo posible la búsqueda semántica y RAG."
locale: "es"
slug: "embeddings"
---

## El significado como números

Un **embedding** es una lista de números —un vector— que representa el *significado* de un dato como una palabra, una frase o una imagen. Un modelo aprende a colocar los conceptos similares cerca unos de otros en este espacio de muchas dimensiones, de modo que "perro" y "cachorro" terminan cerca, mientras que "perro" y "hoja de cálculo" quedan lejos.

Como el significado se convierte en geometría, puedes medir qué tan relacionadas están dos cosas simplemente calculando la distancia (o la similitud del coseno) entre sus vectores.

## Por qué están en todas partes

Los embeddings son el motor silencioso detrás de gran parte de la IA moderna:

- **Búsqueda semántica** — encontrar documentos por significado, no por palabras exactas.
- **RAG** — recuperar los fragmentos más relevantes para alimentar a un LLM.
- **Recomendaciones y clustering** — agrupar elementos similares automáticamente.

En un pipeline de RAG, cada documento y cada pregunta se convierte en un embedding y se guarda en una **base de datos vectorial**, que es lo que permite la búsqueda por similitud rápida a gran escala.
