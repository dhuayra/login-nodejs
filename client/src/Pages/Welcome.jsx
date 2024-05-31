const WelcomeScreen = () => {
    return (
      <div class="h-screen bg-white">
        <div class="h-full">
          <div class="flex flex-wrap justify-center pt-5">
            Welcome: User 001
            
          </div>
          <div class="flex flex-wrap justify-center" >
            <button
                  type="button"
                  class="rounded bg-sky-600 px-7 py-1 text-sm font-medium uppercase leading-normal text-white shadow-sky-3 transition duration-150 ease-in-out hover:bg-sky-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
                >
                  Logout
                </button>
            </div>
        </div>
      </div>
    );
  };
  
  export default WelcomeScreen;
  