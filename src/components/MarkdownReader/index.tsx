import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "@mapbox/rehype-prism";
import ReactMarkdown from "react-markdown";
import { blueGrey } from "@mui/material/colors";
import useLoadFile from "../../hooks/useFile";

export default function MarkdownReader({
  loading,
  file,
  maxWidth = "100%",
}: MarkdownReaderProps) {
  const body = useLoadFile({ file, loading });

  return (
    <div style={{ fontFamily: "Helvetica", color: blueGrey[800] }}>
      <ReactMarkdown
        remarkPlugins={[remarkSlug, remarkToc, remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          img: ({
            alt,
            src,
            title,
          }: {
            alt?: string;
            src?: string;
            title?: string;
          }) => <img alt={alt} src={src} title={title} style={{ maxWidth }} />,
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
}

type MarkdownReaderProps = {
  file: any;
  loading: {
    isLoading: boolean;
    setIsLoading: Function;
  };
  maxWidth: number | string | undefined;
};
