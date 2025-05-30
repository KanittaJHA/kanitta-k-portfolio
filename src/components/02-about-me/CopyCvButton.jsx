import React, { useState } from "react";
import { RiFileCopyFill, RiDownloadFill, RiCheckFill } from "react-icons/ri";
import CV from "../../assets/PDF/KANITTA_KET-IN.pdf";

function DownloadCvButton() {
  const [downloadStatus, setDownloadStatus] = useState("initial");

  const handleDownloadClick = async () => {
    setDownloadStatus("loading");

    try {
      const response = await fetch(CV);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "KANITTA_KET-IN_CV.pdf");

      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);

      setDownloadStatus("success");
      setTimeout(() => {
        setDownloadStatus("initial");
      }, 3000);
    } catch (error) {
      console.error("Download failed:", error);
      setDownloadStatus("error");
      setTimeout(() => {
        setDownloadStatus("initial");
      }, 3000);
    }
  };

  const getButtonContent = () => {
    switch (downloadStatus) {
      case "loading":
        return (
          <>
            <RiDownloadFill className="text-xl animate-bounce" /> Loading...
          </>
        );
      case "success":
        return (
          <>
            <RiCheckFill className="text-xl" />
            Downloaded!
          </>
        );
      case "error":
        return (
          <>
            <RiCloseFill className="text-xl" /> Failed!
          </>
        );
      default:
        return (
          <>
            <RiFileCopyFill className="text-xl" />
            Download CV
          </>
        );
    }
  };

  return (
    <button
      onClick={handleDownloadClick}
      disabled={downloadStatus === "loading"}
      className={`relative px-1 py-3 text-sm text-center rounded-full font-[400] w-[11rem] cursor-pointer overflow-hidden uppercase text-secondary flex items-center justify-center gap-2
        ${
          downloadStatus === "loading"
            ? "bg-gray-700 cursor-not-allowed"
            : "bg-[#fc546d]"
        }
        ${downloadStatus === "success" ? "bg-green-700" : ""}
        ${downloadStatus === "error" ? "bg-red-700" : ""}
        transition-colors duration-200 hover:bg-neutral-950
      `}
    >
      {getButtonContent()}
    </button>
  );
}

export default DownloadCvButton;
