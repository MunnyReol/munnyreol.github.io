export default function Footer({ name }) {
  return (
    <footer className="py-8 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}