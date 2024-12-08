"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Services from "@/components/common/services";
import Swagger from "@/components/common/swagger";

function PageContent() {
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

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
