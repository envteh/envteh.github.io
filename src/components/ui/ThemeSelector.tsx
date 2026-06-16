import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { SunMoon, Moon, Sun } from "lucide-react";
import { useThreeMode, type ThemeMode } from "../../hooks/useThreeMode";

const themes: { value: ThemeMode; label: string; icon: React.ReactNode }[] = [
  { value: "light", label: "Light", icon: <Sun size={20} /> },
  { value: "dark", label: "Dark", icon: <Moon size={20} /> },
  { value: "system", label: "Auto", icon: <SunMoon size={22} /> },
];

export function ThemeSelector({ isScroll }: { isScroll: boolean }) {
  const { mode, setTheme } = useThreeMode();
  const current = themes.find((t) => t.value === mode) ?? themes[2];

  return (
    <Listbox value={mode} onChange={setTheme}>
      <div className="relative">
        <ListboxButton
          aria-label="Mode Light / Dark / System"
          className="flex cursor-pointer items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {current.icon}
        </ListboxButton>

        <ListboxOptions
          modal={false}
          anchor="bottom end"
          transition
          className={`border-brand-orange z-50 mt-2 w-fit overflow-hidden rounded-xl border ${
            isScroll ? "shadow-lg backdrop-blur-md" : "backdrop-blur-xs"
          } dark:bg-brand-charcoal/70 bg-brand-light-gray/70 shadow-lg transition duration-400 ease-in-out outline-none data-closed:data-closed:translate-y-2 data-closed:data-closed:opacity-0 data-closed:data-leave:-translate-y-2 data-closed:data-leave:opacity-0`}
        >
          {themes.map((theme) => (
            <ListboxOption
              key={theme.value}
              value={theme.value}
              className="group data-focus:bg-brand-light-gray/50 flex cursor-pointer items-center gap-2 px-3 py-2 text-gray-700 transition-colors dark:text-gray-300 dark:data-focus:bg-gray-800"
            >
              <span className="text-brand-charcoal dark:text-brand-light-gray group-data-selected:text-brand-orange inline-flex w-full gap-4 opacity-100">
                {theme.icon}
                {theme.label}
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
