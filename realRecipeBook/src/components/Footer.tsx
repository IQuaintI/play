interface FooterProps {
  title: string;
}

function Footer({ title }: FooterProps) {
  return <div>{title}</div>;
}

export default Footer;
