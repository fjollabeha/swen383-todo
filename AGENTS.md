# AGENTS.md

## Project snapshot
- This repository is a small static browser app with a plain HTML, CSS, and JavaScript structure.
- Main entry points are [index.html](index.html), [style.css](style.css), and [src/todo.js](src/todo.js).
- See [README.md](README.md) for the app-level usage notes.
- There is no package manager or build step required for normal development.

## Working conventions
- Keep changes small, readable, and browser-compatible.
- Prefer plain JavaScript over framework introductions unless the task explicitly requires them.
- Do not add dependencies or tooling for simple UI fixes.
- Validate UI work by opening the page in a browser and checking the behavior directly.

## PlantUML server guidance
- If a task involves a PlantUML server, prefer a lightweight integration that does not require a local install unless the request explicitly demands it.
- Keep the PlantUML endpoint configurable via a constant or small config object rather than hard-coding it inline.
- Prefer graceful fallback behavior when the server is unavailable; show a clear message instead of breaking the page.
- For browser-based usage, avoid exposing secrets or credentials in client-side code.
- If the feature is documentation-only or preview-only, favor a static fallback or a simple error state over introducing a heavy runtime dependency.
- Verify both the happy path and the failure path: successful rendering and server-down behavior.

## Validation checklist
- Open the app in a browser with a local static server such as VS Code Live Server.
- Confirm the affected behavior still works after each change.
- For any PlantUML-related work, verify that rendering succeeds when the service is reachable and fails gracefully when it is not.
