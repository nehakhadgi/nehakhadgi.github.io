

## Fix: Blank page on live GitHub Pages site

**Root cause**: `vite.config.ts` has `base: "./"` (relative paths). On GitHub Pages with a custom domain, this can cause JS/CSS assets to fail loading, resulting in a blank page.

### Changes

1. **`vite.config.ts`** — Change `base: "./"` to `base: "/"` so assets resolve correctly on the custom domain.

2. **`index.html`** — Ensure the script src uses an absolute path: `/src/main.tsx` (already correct).

3. **Verify `CNAME`** — Confirm the CNAME file contains `nehakhadgi.com.np`.

This is a one-line fix that should resolve the blank page on the deployed site.

