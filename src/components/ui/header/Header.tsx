"use client";

import { MENU } from "@/lib/constants";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { cn } from "@nextui-org/system";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed w-full flex z-50 bg-transparent"
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <p className="text-white text-xl">Next<span className="font-bold text-xl text-amber-600">Events</span></p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {MENU.map((item) => (
          <NavbarItem key={item.route}>
            <Link className="text-white" href="#">
              {item.value}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-white" href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="text-white" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {MENU.map((item) => (
          <NavbarMenuItem key={item.route}>
            <Link
              color="foreground"
              href={item.route}
              size="lg"
            >
              {item.value}
            </Link>
          </NavbarMenuItem>
        ))}
        <Divider />
        <NavbarMenuItem>
          <Link color="foreground" size="lg" href="/sign-up">
            Login
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" size="lg" href="/sign-up">
            Sign Up
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
