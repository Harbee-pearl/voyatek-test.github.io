import { Button } from "@/components/shared/button";
import { useNavigate } from "react-router-dom";

const FourOhFour = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen grid place-items-center">
      <div className="space-y-4 text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-2xl">Page not found</p>
        <Button
          onClick={() => navigate(-1)}
          btn_type="primary-btn"
          className="text-center px-10 mx-auto"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default FourOhFour;
