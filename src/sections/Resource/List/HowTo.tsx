import { useState, useEffect } from 'react';

import { CONFIG } from 'src/config';

export default function HowTo() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch(`${CONFIG.site.basePath}/html/how-to.html`)
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error('Error loading HTML file:', error));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
