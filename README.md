# RC72 — Amalan Muslim iPad-first PDF PWA

RC72 is a separate rebuild from RC71.

PDF reader: PDF.js canvas rendering, first 3 pages prioritized, last-page restore with current ±1 pre-render, retina DPR up to 2×, progressive rendering, zoom, and iPad/iOS Safari support.

Deploy all files at repository root using GitHub Pages: `main` / `(root)`.


## RC72 Revision 2
- Automatically bridges/recover the original PDF from RC71/RC72 IndexedDB stores on the shared GitHub Pages origin, then caches a local RC72 copy.
- No mandatory "Pilih PDF" screen.
- First 3 pages are rendered immediately; current page ±1 is pre-rendered.
- Fixed last-page selector class used by the position saver.
