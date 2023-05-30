"use client"

import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  const isSigningOut = status === "loading";

  const handleLogout = async () => {
    await signOut();
  }


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
            <Link href='/NewAdventure'>
              <button className="btn">Begin A New Adventure</button>
            </Link>
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
                <li>
                  <a>Settings</a>
                </li>
                {session ? (
                  <li>
                    <button
                      onClick={handleLogout}
                      disabled={isSigningOut}
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <li>
                    <Link href="api/auth/signin">
                      Sign In
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </>
  );
}