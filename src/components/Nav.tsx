import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";
  return (
    <nav class="bg-sky-950 flex justify-center">
      <ul class="container flex items-center justify-center p-3 text-gray-200">
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
          <a href="/">Case Manager</a>
        </li>
        <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
          <a href="/about">Admin</a>
        </li>
        <li class={`border-b-2 ${active("/reports")} mx-1.5 sm:mx-6`}>
          <a href="/reports">Reports</a>
        </li>
      </ul>
    </nav>
  );
}
