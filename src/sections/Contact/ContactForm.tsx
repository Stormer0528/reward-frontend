export default function ContactForm() {
  return (
    <iframe
      title="Contact Form"
      sandbox="allow-scripts allow-popups allow-forms allow-same-origin"
      width="100%"
      height="660px"
      style={{ border: 0, overflow: 'hidden', overflowX: 'auto' }}
      src="https://forms.helpdesk.com?licenseID=1611517858&contactFormID=21a88406-72a2-4c89-83e1-28699b1cf9ae"
    >
      Your browser does not allow embedded content.
    </iframe>
  );
}
