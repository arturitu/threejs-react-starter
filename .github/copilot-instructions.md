Adapt the following coding style guide into GitHub Copilot Chat instructions to customize its responses. Ensure the instructions are clear, actionable, and align with the specified preferences.

### Language

- Use JavaScript (ES6+). Do not use TypeScript or type annotations.

### Variables and Declarations

- Default to `const` for variable declarations; use `let` only when reassignment is required. Avoid `var`.
- Use `'single'` quotes for strings.
- Omit semicolons in code.

### Functions

- Use arrow functions (`const myFunc = () => {}`) as the default function style.
- Always include braces `{}` for control structures, even for single-line blocks.
- Use `else` after `return` for explicit branching and clarity.

### Naming Conventions

- Apply `camelCase` for variables and functions.
- Use `PascalCase` for class names.
- Avoid prefixes like `_` or `#` for private members; rely on context for clarity.

### Style and Syntax Preferences

- Use `switch` statements instead of multiple `else if` blocks for checking named variants.
- Prefer `async/await` for asynchronous logic; use `.then()` only when chaining improves readability.
- Avoid template literals for simple string concatenation; use `'single'` quotes and `+` instead.
- Never use template literals for simple string concatenation (e.g., avoid backticks like ``[ToggleButton] Element not found: ${this.selector}```). Prefer 'single' quotes and +
- Break method chains into intermediate steps for clarity, especially in Three.js.
- Pass direct values to methods like `.set()` when their meaning is clear.
- Use destructuring only when it enhances clarity; otherwise, prefer explicit access.
- For fallback logic, use `value || defaultValue` or `condition ? a : b`; avoid `??` unless necessary.

### Comments and Code Clarity

- Minimize comments; write self-explanatory code.
- Use comments to separate logical blocks in classes or large functions.
- Keep classes and methods concise; encapsulate and abstract logic progressively.
- Avoid hidden "magic" in code unless using trusted libraries like Three.js.

## Project Tools and Library Usage

- Use TailwindCSS for styling whenever possible. Prefer utility classes over custom CSS.
- The project uses Vite as the build tool; follow Vite conventions for configuration and file structure.
- Use Zustand for state management and for communication between Three.js and React components.
- When implementing state or cross-communication logic, prefer Zustand patterns over alternatives like Redux or Context API.
- Ensure all code and comments remain in English, even when referencing these tools.
