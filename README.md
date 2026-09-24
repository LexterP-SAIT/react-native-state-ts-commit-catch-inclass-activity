# Check It! — State, TypeScript & Commit Catch

## Objective

This is a paired/small-group lab built around a partially finished React
Native todo app. You'll be practicing four things at once:

- **Implementing state** — replacing static placeholder values with real
  `useState` so the interface actually responds to user input.
- **Completing event handlers** — wiring up the logic that runs when a
  button is pressed or text is typed.
- **Converting JavaScript to TypeScript** — adding types to components,
  props, and functions.
- **Collaborating through Git** — working in the same repository at the
  same time without stepping on each other.

## Setup

1. One member of your team forks the starter repository.
2. That person adds the rest of the team as collaborators on their fork
   (Settings → Collaborators), or opens it up so teammates can push
   directly.
3. Everyone else clones that fork — **not** the original starter repo —
   so you're all working against the same history.
4. As a team, look over the project structure (below) and decide who is
   working in which file(s). Staying out of each other's files is what
   makes the commit game work.

### Project structure

```
App.jsx
assets/
  theme.jsx
components/
  PageHeader.jsx
  TodoSection.jsx
  TodoInput.jsx
  TodoList.jsx
  TodoItem.jsx
  AppButton.jsx
utils/
  generateId.ts
```

## The game: Commit Catch

You'll be playing a round-based commit game for the full session.

- **A round** is complete when every member of your team has committed
  and pushed their work, and everyone has pulled everyone else's changes — in any order.
  - You don't need to commit in the same sequence
    each round, but a round has to fully finish (everyone in, everyone pulled) before anyone commits again.
- **Your team earns 1 point per completed round.** Rounds are tracked by the order of commits visible in your Git history
  - so commit messages and timing matter — make it obvious when a round starts and ends.
- Isolate your work to your assigned file(s) and communicate with your team before you commit
  - especially if a change touches something shared (like `theme.ts` or a type another file depends on).
- You're encouraged to look over a teammate's diff before they push — catching a bug or a naming mismatch before it lands saves the whole team a round.

**Duration:** 1 hour 15 minutes.

## Task 1: State

- Throughout the components, there are static variables standing in for what should be real state — some paired with commented-out or empty handler functions, others just sitting there unused.
- Find them, and work together to turn them into working `useState` (or, where the logic is already written for you, just the missing state declaration).

```jsx
setItems((prevItems) => [...prevItems, newItem]);
```

```jsx
setItems((prevItems) => prevItems.filter((item) => item.id !== id));
```

## Task 2: TypeScript

Each component has an inline comment marking what it needs. In general:

- Every `.jsx` file needs to become a `.tsx` file.
- Every helper function needs a full type signature — a type for each
  argument, and an explicit return type. Don't rely on inference.
- Every component that takes props needs a `type` or `interface`
  describing those props, used to type its destructured parameters.
- Once everything is converted, turn on strict type checking

## AI Usage and Attributions

- Colours and Themes from Catpuccin
- AI used to generate some of the code in the components
- AI used to summarize activity instructions from instructor notes & planning materials
