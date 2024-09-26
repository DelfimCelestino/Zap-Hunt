"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, X, Zap } from "lucide-react";
import Link from "next/link";
import { Sidebar } from "@/components/side-bar";
import { useEffect, useState } from "react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-background border-b">
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <DialogHeader>
                <DialogTitle>Menu</DialogTitle>
                <DialogDescription>Pesquise por mais</DialogDescription>
              </DialogHeader>

              <Sidebar />
            </SheetContent>
          </Sheet>
          <Link href={"/"}>
            <Zap className="h-10 w-10" />
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm">
            <li>
              <Link
                href="#"
                className="text-foreground/60 hover:text-foreground"
              >
                Launches
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-foreground/60 hover:text-foreground"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-foreground/60 hover:text-foreground"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-foreground/60 hover:text-foreground"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-foreground/60 hover:text-foreground"
              >
                Advertise
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Input
            className="w-64 h-8 text-xs hidden md:block"
            placeholder="Search ( ctrl + k )"
            onClick={() => setIsSearchOpen(true)}
          />
          <ModeToggle />
          <Button
            variant="outline"
            size="sm"
            className="text-xs hidden md:block"
          >
            Subscribe
          </Button>
          <Button size="sm" className="text-xs">
            Sign in
          </Button>
        </div>
      </header>
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-background w-full max-w-2xl rounded-lg shadow-lg">
            <div className="p-4 flex items-center border-b">
              <Search className="w-5 h-5 text-muted-foreground mr-2" />
              <Input
                className="flex-grow text-lg"
                placeholder="Search products..."
                autoFocus
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">
                Start typing to search...
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
