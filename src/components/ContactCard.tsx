export default function ContactCard() {
  return (
    <div className="flex flex-col appearance-none m-4 md:m-8 lg:m-14 rounded-xl bg-white shadow-xl  hover:-translate-y-1 touch:-translate-y-1 duration-500 hover:shadow-gray-500">
      <div className="text-center">
        <h3 className="text-xl pt-4">Contact</h3>
        <p className="px-6 py-2">
          send us a message and your contacts and I get back you you as soon as
          possible!
        </p>
      </div>
      <form action="" className="px-4 pb-4 flex flex-col">
        <input
          className="my-2 p-2 bg-slate-200 rounded-xl"
          type="text"
          placeholder="name"
        />
        <input
          className="my-2 p-2 bg-slate-200 rounded-xl "
          type="text"
          placeholder="phone"
        />
        <input
          className="my-2 p-2 bg-slate-200 rounded-xl "
          type="text"
          placeholder="email"
        />

        <textarea
          className="my-2 p-2 bg-slate-200 rounded-xl "
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="message"
        ></textarea>
      </form>
    </div>
  );
}
