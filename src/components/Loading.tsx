export default function Loading() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="font-montserrat-semibold text-zinc-400 p-4 ml-2">
        Loading ...
      </div>
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-indigo-600"></div>
    </div>
  );
}
