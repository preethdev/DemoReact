
import React, { useState } from "react";
import { Bigspinner } from "../../components/Bigspinner";


export default function Dashboard() {
  const [isLoading, setisLoading] = useState(true);

  return (
    <>
   {
              isLoading ? <Bigspinner /> : <div></div>
   }
    </>
  )
}
