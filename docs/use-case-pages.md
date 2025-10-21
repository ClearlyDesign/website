# Clearly Design - Use Case Pages Build

## Project Overview
Building dedicated use-case landing pages for Clearly Design (https://clearly.design), a design-as-a-service for founders. Currently have a homepage focused on monthly design subscriptions, but need project-based offerings to attract different buyer types.

## Current Site Stack
- Next.js (assumed based on custom stack mention)
- Hosted at clearly.design
- Existing design system/brand in place

## Goal
Create 4 use-case landing pages that are:
- Scannable and conversion-focused
- SEO-friendly with clear problem → solution structure
- Easy to link to directly from sales conversations
- Include project-based pricing (not just subscription)

---

## Voice & Tone Guidelines

### Writing Style
- **Conversational but authoritative** - Expert who's approachable, not academic
- **Direct and practical** - Get to the point quickly, no fluff
- **Inclusive expertise** - Use "we" to position as partners, not vendors
- **Problem-solution focused** - Establish challenge before presenting fix

### Formatting Rules
- NO em dashes (—) - Use periods, commas, or parentheses instead
- NO emojis - Keep professional and clean
- Use contractions (don't, it's, we'll)
- Bold key concepts and takeaways
- Headers are sentence case, descriptive
- Mix short punchy sentences with longer explanations

### Content Structure
- Strong opening hooks (trend, shift, or problem statement)
- Problem → Solution framework
- Scannable with headers and bullets
- Real-world examples with "Example:" callouts
- Three-point frameworks (3 principles, 4 steps, etc.)
- "Questions for [Audience]" sections with practical checkpoints

---

## Use Case Pages to Build

### 1. SaaS Launch Sites (`/use-cases/saas-launch-sites`)

**Target Audience:** Pre-seed to Series A founders, technical co-founders

**Problem Statement:**
You need to validate demand fast, but typical agency timelines are 6-8 weeks and cost $25K+. You're technical enough to build product, but frontend and conversion optimization isn't your strength.

**Solution Positioning:**
2-week launch sites with built-in conversion optimization. We make the stack decision (Webflow vs Next.js) based on your technical reality and growth plans.

**Key Benefits:**
- Speed: 2-week delivery from kickoff to live
- Conversion-focused: Not just pretty, built to convert visitors
- Stack flexibility: Webflow for non-technical teams, Next.js for engineering-led companies
- Growth-ready: Easy to hand off to your team or scale with us

**What's Included:**
- Competitor and market research
- Conversion-optimized page structure
- Custom design system
- Responsive development
- Basic SEO setup
- Analytics integration
- 2 rounds of revisions

**Pricing:** $8-12K project-based, 2-week delivery

**Example Projects to Reference:**
- Churnkey Intelligence Suite launch
- [Other examples as available]

**Questions for Founders:**
- Do you have product-market fit or still validating?
- Will your team maintain the site or do you need ongoing support?
- What's your timeline to start taking signups?

---

### 2. Internal Tool Replacement (`/use-cases/internal-tools`)

**Target Audience:** Operations teams, agencies, companies paying for multiple SaaS tools

**Problem Statement:**
You're paying $50-200 per seat for tools that solve 20% of your actual workflow. The other 80% lives in spreadsheets, Slack messages, and manual processes. Off-the-shelf tools force you to adapt your process to their limitations.

**Solution Positioning:**
Custom internal tools that replace multiple SaaS subscriptions and adapt to your exact workflow. Built as web apps that work on any device, no app store required.

**Key Benefits:**
- Cost savings: Often pays for itself in 6-12 months of SaaS savings
- Exact fit: Built for your workflow, not a generic solution
- Ownership: You own the code, no per-seat pricing forever
- Integration: Connect to your existing tools and databases

**What's Included:**
- Workflow mapping and process audit
- Custom application design
- Full-stack development
- Integration with existing tools (Airtable, Google Sheets, APIs)
- User testing and iteration
- Documentation and handoff

**Pricing:** $12-20K project-based, 3-4 week delivery

**Example Projects to Reference:**
- Candidate screening portal for remote hiring agency (cut screening time from 4 hours to 45 minutes)
- [Other examples as available]

**Questions for Operations Teams:**
- Which tools are you paying for that you only use partially?
- What manual processes eat up the most team time?
- Do you need this to integrate with existing systems?

---

### 3. MVP to Production Bridge (`/use-cases/mvp-rebuild`)

**Target Audience:** Founders who validated with no-code, now need something that scales

**Problem Statement:**
You found product-market fit with Bubble, Webflow, or Airtable. Congrats! But now you're hitting limits: performance issues, can't hire engineers to extend it, paying increasing no-code fees. You need a proper rebuild but can't afford to start from scratch.

**Solution Positioning:**
Rebuild proven concepts with proper architecture. We take what's validated and working, then build the scalable version. Not a greenfield MVP (too risky), but a faithful rebuild of something proven.

**Key Benefits:**
- Validation first: Only rebuild what's proven to work
- Feature parity: Launch with everything users expect
- Performance: Proper database, caching, optimization
- Extensibility: Your future engineering team can build on it
- Migration plan: Smooth transition from old to new

**What's Included:**
- Current product audit
- Architecture planning
- Database design
- Full application rebuild
- User migration strategy
- Testing and QA
- Deployment and monitoring setup

**Pricing:** $15-25K project-based, 4-6 week delivery

**Example Projects to Reference:**
- [Add when available]

**Questions for Founders:**
- What specifically are you hitting limits with?
- Do you have usage data to inform the rebuild?
- What's your timeline before no-code costs become prohibitive?

---

### 4. Design System for AI Teams (`/use-cases/design-systems-ai`)

**Target Audience:** Lean tech teams (2-5 people) shipping with AI assistance

**Problem Statement:**
Your team ships fast with Cursor, Copilot, and v0. But everything looks inconsistent. Each feature feels designed by a different person (or AI). You need consistency without slowing down your AI-assisted velocity.

**Solution Positioning:**
Flexible design systems that work with AI coding tools. Not rigid component libraries that break when AI generates code. Instead: principles, patterns, and prompts that keep AI-generated interfaces consistent.

**Key Benefits:**
- AI-friendly: Works with how your team actually builds
- Flexibility: Guidelines, not handcuffs
- Speed: Doesn't slow down your velocity
- Consistency: Products that feel cohesive, not Frankenstein'd
- Prompt library: Reusable prompts for AI tools that generate on-brand UI

**What's Included:**
- Visual design system (colors, typography, spacing)
- Component patterns (not rigid components)
- AI prompt library for consistent generation
- Integration guides for Cursor/Copilot/v0
- Living documentation
- Figma source files

**Pricing:** $6-10K project-based, 2-3 week delivery

**Example Projects to Reference:**
- [Add when available]

**Questions for AI-Assisted Teams:**
- What AI tools is your team using to ship?
- What's the biggest consistency problem you're seeing?
- Do you have a designer on the team or fully technical?

---

## Page Structure Template

Each use-case page should follow this structure:
```
1. Hero Section
   - H1: Problem-focused headline
   - Subheadline: Clarify who it's for
   - CTA: "Start Your Project" or "Get Pricing"
   - Trust element: "2-week delivery" or similar

2. Problem Section
   - Bold opening: "Here's what we're hearing from [audience]"
   - 3-4 specific pain points
   - Real quotes or scenarios

3. Solution Section
   - "Here's how we solve it"
   - Approach overview
   - Key differentiators (3-4 points)

4. What's Included
   - Scannable list of deliverables
   - Timeline expectations
   - What happens after delivery

5. How It Works
   - 4-step process
   - Keep simple: Kickoff → Build → Review → Launch
   - Include timeline for each phase

6. Pricing
   - Clear project-based range
   - What affects pricing
   - Comparison to subscription option
   - CTA to discuss specifics

7. Example Projects (Proof Thumbnails)
   - 2-4 screenshot cards
   - Problem + Result format
   - Tech stack + Timeline
   - Link to full case studies when available

8. Questions for [Audience]
   - 4-5 practical checkpoints
   - Helps qualify if this is right fit

9. FAQ
   - 5-6 common objections/questions
   - Keep answers short

10. Final CTA
    - Strong restatement of value
    - Dual CTA: "Start Your Project" + "View Subscription Option"

11. Related Use Cases
    - Links to 2 other relevant use case pages
```

---

## Technical Requirements

### SEO
- Meta titles: "[Problem] - [Solution] | Clearly Design"
- Meta descriptions: 150-160 characters, problem + solution + outcome
- H1 once per page, H2s for major sections
- Image alt text descriptive
- Schema markup for service offerings

### Performance
- Images optimized (WebP where supported)
- Lazy loading below fold
- Fast page load (under 2 seconds)

### Navigation
- Link to these pages from main nav under "Services" dropdown
- Breadcrumb: Home > Use Cases > [Specific Use Case]
- Footer links in "Services" section

### CTAs
- Primary CTA: Link to cal.com form
- Secondary CTA: Link to subscription homepage
- Consistent CTA placement: Hero, after solution, after examples, final section

---

## Content Writing Tasks

1. **Write all 4 use-case page copy** following structure template above
2. **Create page metadata** (titles, descriptions, slugs)
3. **Draft FAQ sections** with common objections for each use case
4. **Write CTA copy variations** for A/B testing consideration
5. **Create "Questions for [Audience]" sections** specific to each use case

---

## Development Tasks

1. **Create use-case page template** component in Next.js
2. **Build reusable sections** (Hero, Problem, Solution, etc.)
3. **Set up routing** for `/use-cases/[slug]` structure
4. **Add metadata/SEO** handling
5. **Create proof thumbnail** component for example projects
6. **Mobile responsive** for all breakpoints
7. **Add analytics tracking** for CTA clicks by use case

---

## Delivery Checklist

- [ ] All 4 use-case pages live and linked from navigation
- [ ] Mobile responsive on all devices
- [ ] SEO metadata complete
- [ ] Page load under 2 seconds
- [ ] CTAs tracking in analytics
- [ ] Proofread and spell-checked
- [ ] Preview deploys for review before production

---

## Notes
- Start with **SaaS Launch Sites** page first (highest demand)
- Use Churnkey as example project for that page
- Leave placeholder sections for case studies (we'll add those later)
- Pricing ranges are estimates, adjust based on actual project scope
- Keep tone conversational throughout, avoid corporate speak