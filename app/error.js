"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-svh">
      <div className="text-center">
        <h2>Something went wrong !</h2> <br />
        <button
          className="px-7 py-2 bg-red-400 rounded-lg  hover:drop-shadow-[0px_0px_10px_rgba(248,113,113,.5)]"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
