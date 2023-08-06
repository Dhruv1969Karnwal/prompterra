"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

const Nav = () => {
  const userLoggedIn = true;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Prompterra</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {userLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={() => {}} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>{/* List down all provider for logIn and signUp */}</>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {userLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full cursor-pointer"
              alt="profile"
              onClick={handleImageClick}
            />

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>
        ) : (
          <>{/* List down provider for signIn  */}</>
        )}
      </div>
    </nav>
  );
};

export default Nav;
