/**
 * Rehype plugin to enhance images with lazy loading and placeholder containers
 * Wraps images in figure elements with placeholder styling for CLS prevention
 * Optionally prepends a base URL to absolute image paths (for GitHub Pages etc.)
 */
import type { Element, Root } from 'hast';
import { visit } from 'unist-util-visit';

interface RehypeImagePlaceholderOptions {
  /** Base URL prefix for absolute image paths (e.g. '/Web_Personal') */
  base?: string;
}

export function rehypeImagePlaceholder(options?: RehypeImagePlaceholderOptions) {
  const base = (options?.base ?? '').replace(/\/$/, '');

  function prefixSrc(node: Element) {
    if (!base || base === '') return;
    const src = node.properties?.src;
    if (typeof src === 'string' && src.startsWith('/') && !src.startsWith(base)) {
      node.properties = { ...node.properties, src: `${base}${src}` };
    }
  }

  return (tree: Root) => {
    visit(tree, 'element', (node: Element, index, parent) => {
      if (node.tagName !== 'img') return;
      if (index === undefined || !parent) return;

      // Prepend base URL to absolute image paths
      prefixSrc(node);

      // Skip if already wrapped (e.g., in a figure or custom component)
      if (parent.type === 'element' && parent.tagName === 'figure') return;

      // Skip wrapping if image is inside a link (e.g., [![alt](img)](url))
      // Only add lazy loading attributes, don't wrap with figure
      if (parent.type === 'element' && parent.tagName === 'a') {
        node.properties = {
          ...node.properties,
          loading: 'lazy',
          decoding: 'async',
        };
        return;
      }

      // Get existing class (handle both string and array formats per HAST spec)
      const existingClass = Array.isArray(node.properties?.class)
        ? node.properties.class.join(' ')
        : (node.properties?.class ?? '');

      // Add lazy loading attributes and class
      node.properties = {
        ...node.properties,
        loading: 'lazy',
        decoding: 'async',
        class: `${existingClass} markdown-image`.trim(),
      };

      // Wrap in figure container
      const wrapper: Element = {
        type: 'element',
        tagName: 'figure',
        properties: { class: 'markdown-image-wrapper' },
        children: [node],
      };

      // Replace img with wrapper
      parent.children[index] = wrapper;
    });
  };
}
