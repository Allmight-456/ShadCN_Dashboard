import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";
import { DollarSign , CreditCard ,Users,Activity } from 'lucide-react';
import Card, { CardContent, CardProps } from "@/components/ui/Card";
import BarChart from "@/components/ui/BarChart";
import SalesCard, { SalesProps } from "@/components/ui/SalesCard";
import { IndianRupee } from "lucide-react";


const cardData : CardProps[]=[
  {
    label:"Total Revenue",
    amount:"₹45,231.89",
    description:"+20.1% from last month",
    icon:IndianRupee,
  },
  {
    label:"Subscription",
    amount:"₹2350",
    description:"+180.1% from last month",
    icon:Users,
  },
  {
    label:"Sales",
    amount:"₹13,500.34",
    description:"+16.8% from last month",
    icon:CreditCard,
  },
  {
    label:"Active Now",
    amount:"₹465",
    description:"+25.1% from last month",
    icon:Activity,
  }
]

const userSalesData : SalesProps[] =[
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+₹1,999.00"
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+₹1,999.00"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+₹39.00"
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+₹299.00"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+₹39.00"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 transition-all 
      sm: grid-cols-2 xl:grid-cols-4 ">
        {/** in mapping of array we use two properties inbuilt to access elements of an array , named by us I can call it data , index */}
        {cardData.map((data,index) =>(
          <Card key={index}
          amount={data.amount}
          description={data.description}
          icon={data.icon}
          label={data.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2 ">
        <CardContent>
          <p className="p=4 font-semibold">OverView</p>
          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <p className="text-md font-semibold text-gray-500">Sales Figures </p>
          <p className="text-sm text-gray-400">Target Completed this month </p>
          {userSalesData.map((data,index)=>(
            <SalesCard key={index}
            email={data.email}
            name={data.name}
            saleAmount={data.saleAmount}
            />
          ))}
        </CardContent>

      </section>
    </div>
  );
}
