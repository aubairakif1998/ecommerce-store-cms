"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Model } from "@/components/ui/model";
import { useStoreModel } from "@/hooks/use-store-model";
import { useEffect } from "react";
const SetupPage = () => {
  const onOpen = useStoreModel((state) => state.onOpen);
  const isOpen = useStoreModel((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) onOpen();
  }, [onOpen, isOpen]);
  return <div className="p-4"></div>;
};
export default SetupPage;
