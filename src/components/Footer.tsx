import { CONFIG } from "../config";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border mt-auto bg-surface">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-text-muted">
          &copy; {new Date().getFullYear()} {CONFIG.GROUP_SHORT_NAME}
        </p>
      </div>
    </footer>
  );
}
