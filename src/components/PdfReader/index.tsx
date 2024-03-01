import { useCallback, useMemo, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

export default function PdfReader({
  file,
  page = 0,
  maxWidth = 0.75 * window.innerWidth,
}: PdfReaderProps) {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = useCallback(
    (numPages: any) => setNumPages(numPages),
    []
  );

  const pages = useMemo(() => {
    const content = [];

    if (numPages) {
      for (let i = 1; i <= page; i++) {
        content.push(
          <Page width={maxWidth} key={`page_${i}`} pageNumber={i} />
        );
      }
    }

    return content;
  }, [page, numPages, maxWidth]);

  return (
    <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
      {pages}
    </Document>
  );
}

type PdfReaderProps = {
  file: any;
  maxWidth: number | undefined;
  page: number | undefined;
};
