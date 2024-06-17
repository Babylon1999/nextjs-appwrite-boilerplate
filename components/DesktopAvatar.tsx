"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useEffect, useState } from "react";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { signOut } from "@/utils/server/appwrite";
import { getGravatarUrl } from "@/utils/server/gravatar";
import Image from "next/image";
import { Spinner } from "@nextui-org/spinner";
export function DesktopAvatar() {
  const [gravatarUrl, setGravatarUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGravatarUrl = async () => {
      try {
        const url = await getGravatarUrl();
        setGravatarUrl(url);
      } catch (error) {
        setGravatarUrl(null); // Set to null in case of an error
      } finally {
        setIsLoading(false);
      }
    };

    fetchGravatarUrl();
  }, []);

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          {isLoading ? (
            <Spinner size="sm" />
          ) : (
            <Image
              alt=""
              width={45}
              height={45}
              /* Gravatar will always respond with the URL, this is just to
               make typescript happy */
              src={gravatarUrl || "https://www.gravatar.com/avatar/"}
              className="p-0.7 rounded-full border border-blue-500 object-cover"
            />
          )}
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="account" href="/account">
            Account
          </DropdownItem>
          <DropdownItem key="logout">
            <form action={signOut}>
              <button
                type="submit"
                className={clsx(linkStyles({ color: "danger" }))}
              >
                Logout
              </button>
            </form>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export function ProfileAvatar() {
  const [gravatarUrl, setGravatarUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGravatarUrl = async () => {
      try {
        const url = await getGravatarUrl();
        setGravatarUrl(url);
      } catch (error) {
        setGravatarUrl(null); // Set to null in case of an error
      } finally {
        setIsLoading(false);
      }
    };

    fetchGravatarUrl();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner size="md" />
      ) : (
        <Image
          className="text-center border-solid border-black"
          alt=""
          width={80}
          height={80}
          /* Gravatar will always respond with the URL, this is just to
          make typescript happy */
          src={gravatarUrl || "https://www.gravatar.com/avatar/"}
        />
      )}
    </div>
  );
}
