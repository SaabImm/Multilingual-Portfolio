import { createContext, useContext } from "react";

// Kept apart from the provider components so React Fast Refresh keeps working.
export const DarkModeContext = createContext();
export const LanguageContext = createContext();

export function useDarkMode() {
  return useContext(DarkModeContext);
}

export function useLangueContext() {
  return useContext(LanguageContext);
}

// localStorage can throw (private mode, blocked storage) — never let that break the page.
export function readPref(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

export function writePref(key, value) {
  try { localStorage.setItem(key, value); } catch { /* ignore */ }
}
