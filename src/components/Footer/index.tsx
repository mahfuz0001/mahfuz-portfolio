import UnderlineLink from "@/components/links/UnderlineLink";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="absolute bottom-2 items-center justify-center text-center text-gray-200">
      © {new Date().getFullYear()}. All Rights Reserved |{" "}
      <UnderlineLink href="https://mahfuz-portfolio.com">
        Mahfuz - Portfolio
      </UnderlineLink>
    </footer>
  );
};

export default Footer;
