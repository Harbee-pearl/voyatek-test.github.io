import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { ReactNode } from "react";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
