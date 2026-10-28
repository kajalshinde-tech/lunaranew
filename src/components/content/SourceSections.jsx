import Link from 'next/link';
const allowed = new Set([
  'section',
  'div',
  'main',
  'nav',
  'ol',
  'ul',
  'li',
  'p',
  'span',
  'strong',
  'b',
  'em',
  'small',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'a',
  'img',
  'br',
  'hr',
  'table',
  'thead',
  'tbody',
  'tr',
  'th',
  'td',
]);
export default function SourceSections({ sections }) {
  let hasTitle = false;
  function render(node, key) {
    if (typeof node === 'string') return node;
    const { tag, attrs, children } = node;
    const props = { ...attrs };
    if (
      /^h[1-6]$/.test(tag) &&
      children.every((child) => typeof child === 'string' && !child.trim())
    )
      return null;
    if (props.colspan) {
      props.colSpan = props.colspan;
      delete props.colspan;
    }
    if (props.rowspan) {
      props.rowSpan = props.rowspan;
      delete props.rowspan;
    }
    const content = children
      .filter(
        (child) =>
          !['table', 'thead', 'tbody', 'tr'].includes(tag) ||
          typeof child !== 'string' ||
          child.trim(),
      )
      .map((child, index) => render(child, index));
    if (tag === 'img') return <img key={key} {...props} />;
    if (tag === 'br') return <br key={key} />;
    if (tag === 'hr') return <hr key={key} />;
    if (tag === 'a' && props.href?.startsWith('/'))
      return (
        <Link key={key} {...props}>
          {content}
        </Link>
      );
    if (tag === 'a' && (!props.href || props.href === '#')) return <span key={key}>{content}</span>;
    let Tag = tag === 'main' ? 'div' : allowed.has(tag) ? tag : 'div';
    if (tag === 'h1') {
      Tag = hasTitle ? 'h2' : 'h1';
      hasTitle = true;
    }
    if (
      /^h[1-6]$/.test(tag) &&
      children.some((child) => typeof child === 'object' && /^h[1-6]$/.test(child.tag))
    )
      Tag = 'div';
    return (
      <Tag key={key} {...props}>
        {content}
      </Tag>
    );
  }
  return (
    <div className="reference-content">
      {sections.map((section, index) => render(section, index))}
    </div>
  );
}
