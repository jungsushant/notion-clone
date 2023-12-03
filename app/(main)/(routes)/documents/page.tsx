"use client";

import Image from "next/image";

const DocumentsPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty.png" height="300" width="300" alt="empty" />
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="empty"
        className="hidden dark:block"
      />
    </div>
  );
};

export default DocumentsPage;
