import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-svh">
      <div className="text-center">
        <h2>Not Found !!</h2>
        <p>Could not find requested resource.</p>
        <br />
        <Link
          href="/"
          className="px-7 py-3 bg-red-400 rounded-lg  hover:drop-shadow-[0px_0px_10px_rgba(248,113,113,.5)]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
