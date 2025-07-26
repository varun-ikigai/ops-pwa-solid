import { JSX, createSignal } from "solid-js";

export default function LeftMenu(): JSX.Element {
  const [collapsed, setCollapsed] = createSignal(false);

  return (
    <nav class={`transition-all duration-200 h-screen p-4 bg-sky-950 ${collapsed() ? 'w-18' : 'w-52'}`}>
      <div class={collapsed() ? "flex justify-center mb-6" : "flex justify-end mb-6"}>
        <button
          class="focus:outline-none flex items-center justify-center w-6 h-6"
          onClick={() => setCollapsed(v => !v)}
          aria-label="Collapse menu"
        >
          <img src="/collapse.svg" alt="Collapse" class="w-6 h-6" />
        </button>
      </div>
      <ul class="list-none p-0 m-0">
        <li class="mb-4 flex items-center">
          <span class={collapsed() ? 'sr-only' : ''}>Menu Item 1</span>
        </li>
        <li class="mb-4 flex items-center">
          <span class={collapsed() ? 'sr-only' : ''}>Menu Item 2</span>
        </li>
        <li class="mb-4 flex items-center">
          <span class={collapsed() ? 'sr-only' : ''}>Menu Item 3</span>
        </li>
      </ul>
    </nav>
  );
} 