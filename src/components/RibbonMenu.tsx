import { JSX } from "solid-js";

const actions = [
  { label: "Reassign", onClick: () => {} },
  { label: "Drop", onClick: () => {} },
  { label: "History", onClick: () => {} },
  { label: "View Customer Info", onClick: () => {} },
];

export default function RibbonMenu(): JSX.Element {
  return (
    <div class="w-full bg-blue-200 border-b border-gray-300 shadow flex items-center px-4 py-2 space-x-4">
      {actions.map(action => (
        <button
          type="button"
          class="bg-blue-300 hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 rounded shadow-sm border border-gray-300 transition-colors"
          onClick={action.onClick}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
} 