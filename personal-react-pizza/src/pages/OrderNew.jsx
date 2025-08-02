import { Form } from "react-router-dom";

function OrderNew() {
  return (
    <section className="pt-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-700 mb-5">
        Ready to order? Let's go!
      </h1>
      <Form method="post">
        <div className="space-y-5">
          <div className="flex items-center">
            <label className="basis-40 text-lg" htmlFor="firstName">
              Full Name
            </label>
            <input
              className="grow border border-gray-300 bg-white focus:outline-none focus:ring-4 focus:ring-amber-300 rounded-full transition-all duration-300 py-2 px-4"
              type="text"
              name="firstName"
            />
          </div>
          <div className="flex items-center">
            <label className="basis-40 text-lg" htmlFor="phoneNo">
              Phone number
            </label>
            <input
              className="grow border border-gray-300 bg-white focus:outline-none focus:ring-4 focus:ring-amber-300 rounded-full transition-all duration-300 py-2 px-4"
              type="text"
              name="phoneNo"
            />
          </div>
          <div className="flex items-center">
            <label className="basis-40 text-lg" htmlFor="address">
              Address
            </label>
            <div className="relative grow">
              <input
                className="w-full border border-gray-300 bg-white focus:outline-none focus:ring-4 focus:ring-amber-300 rounded-full transition-all duration-300 py-2 px-4"
                type="text"
                name="address"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-amber-300 py-1 px-3 hover:bg-amber-200 rounded-full ">
                GET POSITION
              </button>
            </div>
          </div>
          <div className="gap-4 flex items-center text-lg">
            <input
              className="w-[22px] h-[22px] accent-yellow-400 focus:ring-amber-300 focus:ring-4 focus:ring-offset-2"
              type="checkbox"
              name="priority"
            />
            <label htmlFor="priority">
              Want to yo give your order priority?
            </label>
          </div>
          <button
            className="block bg-amber-300 py-2 px-3 rounded-full hover:bg-amber-200"
            type="submit"
          >
            ORDER NOW FOR $56
          </button>
        </div>
      </Form>
    </section>
  );
}

export default OrderNew;
