import { RemixBrowser } from '@remix-run/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document as unknown as Element);

root.render(
  <StrictMode>
    <RemixBrowser />
  </StrictMode>
);
