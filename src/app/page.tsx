import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <PageTitle title="Dashboard" />
      Cards
    </div>
  );
}
