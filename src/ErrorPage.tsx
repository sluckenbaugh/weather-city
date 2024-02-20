import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const userTheme = localStorage.getItem("theme");
  return (
    <div
      className={
        userTheme === "dark" ? "dark:bg-slate-900 h-screen" : undefined
      }
    >
      <div className="grid justify-center pt-20">
        <p className="text-center text-xl font-bold mx-10 dark:text-white">
          Sorry, Something went wrong. Please try again.
        </p>
        <button
          onClick={() => navigate("/")}
          className="btn w-[7rem] mt-3 justify-self-center"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
