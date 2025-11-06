"use client"

import type React from "react"

import { useState } from "react"
import { Home, LayoutDashboard, Settings, Users, FileText, LogOut, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  icon: React.ElementType
  label: string
  href: string
  active?: boolean
}

const navItems: NavItem[] = [
  { icon: Home, label: "Home", href: "#", active: true },
  { icon: LayoutDashboard, label: "Dashboard", href: "#" },
  { icon: Users, label: "Users", href: "#" },
  { icon: FileText, label: "Documents", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
]

export function ModernSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-2xl bg-sidebar/95 backdrop-blur-xl border border-sidebar-border shadow-lg lg:hidden transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-sidebar-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-sidebar-foreground" />
        )}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 lg:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-24 bg-sidebar/80 backdrop-blur-2xl border-r border-sidebar-border/50 shadow-2xl transition-transform duration-300 ease-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full py-8">
          <div className="flex items-center justify-center mb-12">
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-sidebar-primary via-sidebar-primary to-sidebar-ring flex items-center justify-center shadow-lg shadow-sidebar-primary/20 transition-transform duration-200 hover:scale-110">
              <div className="w-7 h-7 rounded-xl bg-sidebar-primary-foreground/90" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
            </div>
          </div>

          <nav className="flex-1 flex flex-col gap-3 px-4">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "group relative flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 ease-out",
                  item.active
                    ? "bg-gradient-to-br from-sidebar-primary to-sidebar-ring text-sidebar-primary-foreground shadow-lg shadow-sidebar-primary/30 scale-105"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 hover:scale-105 hover:shadow-md active:scale-95",
                )}
                title={item.label}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <item.icon
                  className={cn(
                    "w-6 h-6 transition-transform duration-200",
                    item.active ? "scale-110" : "group-hover:scale-110",
                  )}
                />

                <span className="absolute left-full ml-6 px-4 py-2.5 bg-sidebar-primary/95 backdrop-blur-sm text-sidebar-primary-foreground text-sm font-medium rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 -translate-x-2 transition-all duration-200 whitespace-nowrap shadow-xl border border-sidebar-primary-foreground/10">
                  {item.label}
                  <span className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-sidebar-primary/95" />
                </span>

                {item.active && (
                  <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-sidebar-primary-foreground rounded-full shadow-lg" />
                )}
              </a>
            ))}
          </nav>

          <div className="px-4 pt-4 border-t border-sidebar-border/30">
            <button
              className="group relative flex items-center justify-center w-16 h-16 rounded-2xl text-sidebar-foreground/70 hover:text-destructive-foreground hover:bg-destructive/90 hover:scale-105 hover:shadow-lg hover:shadow-destructive/30 transition-all duration-300 ease-out active:scale-95"
              title="Logout"
            >
              <LogOut className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />

              <span className="absolute left-full ml-6 px-4 py-2.5 bg-destructive/95 backdrop-blur-sm text-destructive-foreground text-sm font-medium rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 -translate-x-2 transition-all duration-200 whitespace-nowrap shadow-xl border border-destructive-foreground/10">
                Logout
                <span className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-destructive/95" />
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
