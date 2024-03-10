export default function Vita() {
  return (
    <div className="text-4xl text-center p-32 bg-gray-400 text-white">
      Vita 📝
      <div className="relative bg-amber-400 w-full top-0">
        parent
        <div className="absolute bg-green-500 top-20">child 1</div>
        <div className="absolute  bg-blue-500 top-10">child 2</div>
      </div>
    </div>
  );
}
