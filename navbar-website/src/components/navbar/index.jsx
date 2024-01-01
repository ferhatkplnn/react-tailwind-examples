import { useLocation } from "react-router-dom";
import Button from "./Button";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  let [mobile, setMobile] = useState(false);

  const navContent = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Content", path: "/content" },
  ];

  return (
    <header className="mx-auto bg-white max-w-7xl border-b px-8 sticky top-0 z-50">
      <nav className="flex items-center justify-between p-4 md:p-6 lg:px-8">
        {/* Logo */}
        <div>
          <a href="" className="flex items-center gap-1 text-lg text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            <span>Logo</span>
          </a>
        </div>

        {/* Nav Buttons */}
        <div className="hidden md:flex md:space-x-8">
          <ul className="flex space-x-8">
            {navContent.map(({ name, path }) => {
              return (
                <li key={name}>
                  <Button
                    href={path}
                    name={name}
                    isActive={location.pathname === path ? true : false}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Hamburger Button */}
        <div className="flex md:hidden">
          <button
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 hover:text-red-600 duration-100  "
            onClick={() => setMobile(!mobile)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Login Button */}
        <a
          href="/"
          className="hidden md:block w-full rounded bg-red-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto "
        >
          Login
        </a>
      </nav>
      <Dialog
        className="md:hidden"
        open={mobile}
        onClose={() => setMobile(false)}
        as="div"
      >
        <div className="flex inset-0 z-50 bg-gray-50 bg-opacity-80">
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 w-screen">
            <div className="flex items-center justify-between mb-3">
              <a
                href=""
                className="flex items-center gap-1 text-lg text-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
                <span>Logo</span>
              </a>
              <button
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 hover:text-red-600 duration-100  "
                onClick={() => setMobile(!mobile)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile menu */}
            <div className="mt-6 flow-root">
              <div className="-my-2 divide-y">
                <ul className=" space-y-10 py-6">
                  {navContent.map(({ name, path }) => {
                    return (
                      <li key={name}>
                        <Button
                          href={path}
                          name={name}
                          isActive={location.pathname === path ? true : false}
                        />
                      </li>
                    );
                  })}
                </ul>
                <div className="py-6">
                  <a
                    href="/"
                    className="block w-full text-center rounded bg-red-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto "
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
}

export default Navbar;
