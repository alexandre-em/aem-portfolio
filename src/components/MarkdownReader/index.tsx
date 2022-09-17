import { useEffect, useState } from 'react';
import remarkSlug from 'remark-slug';
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from '@mapbox/rehype-prism';
import ReactMarkdown from "react-markdown";
import {blueGrey} from '@mui/material/colors';

type MarkdownReaderProps = {
  file: any,
  loading: {
    isLoading: boolean,
    setIsLoading: Function,
  },
  maxWidth: number | string | undefined
}

export default function MarkdownReader({ loading, file, maxWidth = '100%' }: MarkdownReaderProps) {
  const [body, setBody] = useState<string>('');

  useEffect(() => {
    if (file && !loading?.isLoading && body === '') {
      loading.setIsLoading(true);

      fetch(file)
        .then((res) => res.text())
        .then((txt) => {
          setBody(txt);
          loading.setIsLoading(false);
        })
        .catch(console.error)
    }
  }, [body, loading, file]);

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

