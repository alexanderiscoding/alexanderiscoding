"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Services from "@/components/common/services";
import Swagger from "@/components/common/swagger";

export default function Page() {
  const [serviceID, setServiceID] = useState(null);
  const searchParams = useSearchParams();
  const availableServices = ["iam"];

  useEffect(() => {
    const paramServiceID = searchParams.get("id");

    if (paramServiceID && availableServices.includes(paramServiceID)) {
      setServiceID(paramServiceID);
    }
  }, [searchParams]);

  return serviceID ? <Swagger serviceID={serviceID} /> : <Services />;
}
