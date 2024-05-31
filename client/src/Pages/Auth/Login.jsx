const LoginScreen = () => {
  return (
    <div class="h-screen px-60">
      <div class="h-full">
        <div class="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="w-full"
              alt="Sample image"
            />
          </div>

          {/* <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12"> */}
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
              <div class="flex flex-row items-center justify-center">
                <p class="mb-0 me-4 text-lg ">SIGN IN</p>
              </div>

              <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 ">
                <div class="mx-4 mb-0 text-center font-semibold">
                </div>
              </div>

              <div class="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-b-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
                <label
                  for="exampleFormControlInput2"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                >
                  Email address
                </label>
              </div>

              <div class="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="password"
                  class="peer block min-h-[auto] w-full rounded border-b-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput22"
                  placeholder="Password"
                />
                <label
                  for="exampleFormControlInput22"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                >
                  Password
                </label>
              </div>

              

              <div class="text-center lg:text-left">
                <button
                  type="button"
                  class="inline-block w-full rounded bg-sky-500 px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
                >
                  Login
                </button>

                <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?
                  <a
                    href="#!"
                    class="text-sky-600 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
