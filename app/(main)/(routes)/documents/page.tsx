"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" });
    toast.promise(promise, {
      loading: "Creating a new note",
      success: "New Note Created",
      error: "Failed to create a new note",
    });
  };
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
      <Button onClick={onCreate}>
        <PlusCircleIcon className="h-4 w-4 mr-2" /> Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
