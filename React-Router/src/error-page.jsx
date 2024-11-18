import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
        <>
      <div id="error-page" className="flex flex-col items-center justify-center min-h-screen bg-red-50">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-2">Sorry, an unexpected error has occurred.</p>
        <p className="text-sm text-gray-500">(Please try again later or contact support.)</p>

        <div className="return">
          <a href="/" className="text-blue-600 hover:underline transition-colors duration-300 mt-4 ">Return to Home</a>
        </div>
      </div>
      </>
    );
  }

  export default ErrorPage ; 
  