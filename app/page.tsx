import { ModernSidebar } from "@/components/modern-sidebar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <ModernSidebar />

      {/* Main Content */}
      <main className="lg:pl-24 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4 px-6">
          <h1 className="text-5xl font-bold tracking-tight text-balance bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            Modern Sidebar
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            Una sidebar minimalista y elegante con efectos glassmorphism, animaciones suaves y tooltips interactivos.
          </p>
        </div>
      </main>
    </div>
  )
}
