import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function useRoutes() {
  const navigate = useNavigate();
  const [search, setSeacrh] = useSearchParams();
  const params = useParams();
  return {
    navigate: navigate,
    searchParams: [search, setSeacrh],
    params: params,
  };
}
