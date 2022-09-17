import remarkSlug from 'remark-slug';
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import ReactMarkdown from "react-markdown";
import {blueGrey} from '@mui/material/colors';


export default function MarkdownReader({ body, maxWidth }: { body: string, maxWidth: number | undefined }) {
  return (
    <div style={{ fontFamily: 'Helvetica', color: blueGrey[800] }}>
      <ReactMarkdown
        remarkPlugins={[remarkSlug, remarkToc, remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{ img: ({ alt, src, title }: { alt?: string, src?: string, title?: string }) => (<img alt={alt} src={src} title={title} style={{ maxWidth }} />) }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
};

