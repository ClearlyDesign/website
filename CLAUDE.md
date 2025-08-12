# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing website for Clearly Design (https://clearly.design), a product design subscription service. It's a Next.js application built with React, Tailwind CSS, and includes a blog system powered by MDX.

## Development Commands

- `yarn dev` - Start development server (Next.js dev mode)
- `yarn build` - Build production version
- `yarn start` - Start production server
- `yarn lint` - Run ESLint for code quality checks

The project uses Yarn as the package manager.

## Architecture & Structure

### Core Framework
- **Next.js 14** with React 18
- **Tailwind CSS** for styling with custom color palette and design tokens
- **MDX** for blog articles with frontmatter metadata
- **Framer Motion** for animations
- **Next SEO** for meta tags and SEO optimization

### Directory Structure

**Pages & Routing:**
- `/src/pages/` - Next.js pages using file-based routing
- `/src/pages/api/` - API routes (sitemap.xml, llms.txt rewrites)
- `/src/pages/articles/` - Dynamic article pages and article index

**Content:**
- `/src/articles/` - MDX blog articles with frontmatter (title, date, author, description, series, etc.)
- Articles support series organization and reading time estimates

**Components & Sections:**
- `/src/components/` - Reusable UI components (Header, Footer, Logo, Nav, SEO, SectionHeader)
- `/src/sections/` - Page sections (Hero, Pricing, Testimonials, FAQ, etc.)
- `/src/animation/` - Animation components (AniCardFlip)

**Styling:**
- `/src/styles/globals.css` - Global styles
- Custom Tailwind config with extended color palette and design tokens
- Typography plugin for article content

### Key Features

**Blog System:**
- MDX articles with frontmatter metadata
- Series-based organization
- Dynamic routing for articles
- SEO optimization per article

**Design System:**
- Consistent component architecture
- Custom Tailwind color palette (extended grays, vibrant accent colors)
- Custom background images and glows
- Perfect shadow utility class

**Performance:**
- Vercel Analytics and Speed Insights integration
- Static generation where possible
- Optimized font loading (Inter via next/font/google)

## Content Management

Blog articles are stored as MDX files in `/src/articles/` with this frontmatter structure:
```yaml
title: "Article Title"
date: "Jul 11, 2025"
author: "Author Name"
description: "Article description"
image: "/images/article-image.jpg"
series: ["Series Name"]
readingTime: "X min read"
ctaTitle: "CTA Title"
ctaText: "CTA description"
ctaLabel: "CTA button text"
```

## Development Notes

- The site uses custom rewrites for `/sitemap.xml` and `/llms.txt` that map to API routes
- All components use absolute imports with `@/` prefix
- Animation components use Framer Motion with intersection observers for scroll-triggered animations
- The design system emphasizes clarity and minimalism, avoiding complex layouts in favor of clean, effective design

## Writing Style Guide

When writing blog articles for Clearly Design, follow these style guidelines:

### Voice & Tone
- **Conversational but authoritative** - Sound like an expert who's approachable, not academic
- **Direct and practical** - Get to the point quickly, avoid unnecessary preamble
- **Inclusive expertise** - Use "we" to position Clearly Design as partners, not just vendors
- **Problem-solution focused** - Identify real pain points, then offer actionable solutions

### Writing Structure
- **Strong opening hooks** - Start with a shift, trend, or problem statement
- **Problem → Solution framework** - Establish the challenge before presenting the fix
- **Scannable content** - Use headers, bullets, and numbered lists liberally
- **Real-world examples** - Include concrete examples with "Example:" callouts
- **Series connectivity** - Link articles with "Earlier/Next in this series" references

### Language Preferences
- **Em dashes (—)** for emphasis and flow, not hyphens (-)
- **Contractions** for conversational tone (don't, it's, we'll)
- **Sentence variety** - Mix short, punchy statements with longer explanations
- **Technical terms explained** - Define jargon in context, don't assume knowledge
- **Bold for key concepts** - Highlight important takeaways and principles

### Visual Elements
- **Colored icon sections** - Use `<span className="flex items-center gap-3"><IconName className="size-8 text-color-500" /> Section Title</span>`
- **Horizontal rules** - Use `---` to separate major sections
- **Visual callouts** - Use colored backgrounds and icons for key points
- **Highlighted quotes** - Use `<strong className="bg-color-50 px-2.5 py-1.5 rounded text-color-900">Key insight</strong>`

### Content Patterns
- **Three-point frameworks** - Organize advice into digestible chunks (3 principles, 4 steps, etc.)
- **Question sections** - Include "Questions for Product Teams" with practical checkpoints
- **Implementation guidance** - Always include "how to" alongside "what" and "why"
- **Trust building** - Address common concerns (trust, control, transparency)

### Series Integration
- **Consistent terminology** - Maintain definitions across articles
- **Progressive complexity** - Build concepts article by article
- **Cross-references** - Link to previous articles with context
- **Strong CTAs** - End with clear calls to action that tie to Clearly Design services

### Frontmatter Standards
- **Reading time** - Estimate 200 words per minute
- **Series tags** - Use consistent series names like ["Designing for AI"]
- **CTA components** - Include ctaTitle, ctaText, and ctaLabel for conversion
- **SEO descriptions** - Write compelling 150-character descriptions that sell the value