import React from "react";
import ScreenLoader from "../components/Loaders/ScreenLoader.jsx";
import Spinner from "../components/Loaders/Spinner.jsx";
import isEmpty from "./isEmpty";

export function selectPresentableData(keyData) {
  const { loading, error, data } = keyData;

  if (loading) {
    return "loading";
  }

  if (error && !isEmpty(error)) {
    return "errors";
  }

  if (data && !isEmpty(data)) {
    return "hasData";
  }

  return "noData";
}

export default function RenderUI({ keyData, children, noDataMessage = "No data" }) {
  const { error } = keyData;
  const renderFlag = selectPresentableData(keyData);

  switch (renderFlag) {
    case "loading":
      return <Spinner />;

    case "errors":
      return <div>{error}</div>;

    case "noData":
      return <ScreenLoader />;
    default:
      return children;
  }
}
