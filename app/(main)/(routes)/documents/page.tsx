"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle, PlusCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
const DocumentsPage = () => {
  const { user } = useUser();
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
      <h2 className="text-lg">Welcome to {user?.firstName}&apos;s jotion</h2>
      <Button>
        <PlusCircleIcon className="h-4 w-4 mr-2" /> Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
