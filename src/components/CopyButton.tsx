"use client";

import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

type CopyButtonProps = {
  value: string;
};

const CopyButton = ({ value }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex items-center justify-center p-1 text-muted transition-colors hover:text-primary cursor-pointer"
      aria-label={copied ? "Copied" : "Copy"}
    >
      {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
    </button>
  );
};

export default CopyButton;
