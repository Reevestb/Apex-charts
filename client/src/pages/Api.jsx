import { useEffect, useState } from "react";
import ApiFetching from "../utils/apiFetch";
import ApiComponent from "../components/Apicomponent";
export default function ApiPage() {
  return (
    <>
      <h1>Apple Stock Data</h1>

      <ApiFetching />
    </>
  );
}
