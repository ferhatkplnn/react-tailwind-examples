import Button from "../shared/Button";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3">
        <div className="sm:col-span-2">
          <h1 className="sm:text-5xl text-2xl font-bold py-2">
            Want tips & tricks to potimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        <div className="my-4 space-y-2">
          <div className="flex flex-col lg:flex-row items-center justify-center sm:space-x-2 max-sm:space-y-2">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />

            <Button className="bg-[#00df9a] text-nowrap" text="Notify Me" />
          </div>
          <p>
            We care bout the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
