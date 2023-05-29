import Image from "next/image";

export default function Home() {

  return (
    <>
      {/* Navbar */}
      <nav>
        <div className="navbar bg-primary">
          <div className="flex-1">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image 
                    src="/0_0.jpg"
                    width={200}
                    height={200}
                    alt="Logo"
                  />
                </div>
              </label>
            </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <a className="btn">Begin A New Adventure</a>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image 
                    src="/ProfilePlaceholder.jpg"
                    width={200}
                    height={200}
                    alt="Profile Picture"
                  />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-neutral rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </>
  );
}