import image from "./image";

function Navbar() {
  return (
    <div className="fixed h-16 px-8 w-[75%] border-b flex items-center justify-between">
      <span>Home</span>
      <div className="flex gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-bell-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>

        <img src={image.imageprofile} alt="" className="rounded-full w-8 h-8" />

        <a href="">admin@oauife.edu.ng</a>
      </div>
    </div>
  );
}

export default Navbar;
