import { CustomImage } from "@/components/ui/customImage";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="page-notfound">
      <div>
        <CustomImage src="/images/error.png" width={60} height={60} alt="" />
        <h1>404 Page Not Found</h1>
        <Link href="/">Back to Home Page</Link>
      </div>
    </div>
  );
};

export default NotFound;
