import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { Client } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { BillboardClient } from "./components/client";

interface BillboardsPageProps {
  params: {
    storeid: string;
  };
}

const BillboardsPage: React.FC<BillboardsPageProps> = async ({ params }) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeid,
      userId,
    },
  });
  if (!store) {
    redirect("/");
  }
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient />
      </div>
    </div>
  );
};

export default BillboardsPage;