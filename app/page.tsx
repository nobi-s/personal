import Image from "next/image"
import Link from "next/link"
import { Trophy, Star, Calendar, Users, ChevronRight, Instagram, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=36&width=36"
                width={36}
                height={36}
                alt="Liverpool FC Logo"
                className="h-9 w-9"
              />
              <span className="inline-block font-bold">Liverpool FC</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#highlights"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Highlights
              </Link>
              <Link
                href="#players"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Players
              </Link>
              <Link
                href="#season"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Season
              </Link>
              <Link
                href="#gallery"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Gallery
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">{/* Header right section */}</div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#C8102E]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    CHAMPIONS OF ENGLAND
                  </h1>
                  <p className="text-xl text-white md:text-2xl">Liverpool FC - Premier League Champions 2024/25</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-[#C8102E] hover:bg-gray-100">Relive The Journey</Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Watch Highlights
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Premier League Trophy"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="highlights" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#C8102E] px-3 py-1 text-sm text-white">
                  Championship Moments
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Road to Glory</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Relive the most memorable moments from our championship season.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="p-0">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Key Match"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">The Decisive Victory</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      The 3-0 win against Manchester City that sealed our path to the title.
                    </p>
                    <Button variant="link" className="p-0 mt-4 text-[#C8102E]">
                      Watch Now <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Trophy Lift"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">The Trophy Lift</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Captain lifting the Premier League trophy at Anfield.
                    </p>
                    <Button variant="link" className="p-0 mt-4 text-[#C8102E]">
                      Watch Now <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Celebration"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">The Celebration</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Team and fans celebrating together after securing the title.
                    </p>
                    <Button variant="link" className="p-0 mt-4 text-[#C8102E]">
                      Watch Now <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="players" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Championship Squad</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The heroes who brought the Premier League trophy back to Anfield.
                </p>
              </div>
            </div>
            <Tabs defaultValue="starters" className="mt-12">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="starters">Starting XI</TabsTrigger>
                  <TabsTrigger value="squad">Full Squad</TabsTrigger>
                  <TabsTrigger value="staff">Coaching Staff</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="starters" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=160&width=160&text=Alisson"
                        alt="Alisson Becker"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-bold">Alisson Becker</h3>
                    <p className="text-sm text-muted-foreground">Goalkeeper</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=160&width=160&text=Van Dijk"
                        alt="Virgil van Dijk"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-bold">Virgil van Dijk</h3>
                    <p className="text-sm text-muted-foreground">Defender</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=160&width=160&text=Alexander-Arnold"
                        alt="Trent Alexander-Arnold"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-bold">Trent Alexander-Arnold</h3>
                    <p className="text-sm text-muted-foreground">Defender</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=160&width=160&text=Robertson"
                        alt="Andrew Robertson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-bold">Andrew Robertson</h3>
                    <p className="text-sm text-muted-foreground">Defender</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=160&width=160&text=Konaté"
                        alt="Ibrahima Konaté"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-bold">Ibrahima Konaté</h3>
                    <p className="text-sm text-muted-foreground">Defender</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=160&width=160&text=Mac Allister"
                        alt="Alexis Mac Allister"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-bold">Alexis Mac Allister</h3>
                    <p className="text-sm text-muted-foreground">Midfielder</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=160&width=160&text=Szoboszlai"
                        alt="Dominik Szoboszlai"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-bold">Dominik Szoboszlai</h3>
                    <p className="text-sm text-muted-foreground">Midfielder</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=160&width=160&text=Salah"
                        alt="Mohamed Salah"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-bold">Mohamed Salah</h3>
                    <p className="text-sm text-muted-foreground">Forward</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=160&width=160&text=Diaz"
                        alt="Luis Díaz"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-bold">Luis Díaz</h3>
                    <p className="text-sm text-muted-foreground">Forward</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=160&width=160&text=Gakpo"
                        alt="Cody Gakpo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-bold">Cody Gakpo</h3>
                    <p className="text-sm text-muted-foreground">Forward</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=160&width=160&text=Núñez"
                        alt="Darwin Núñez"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-bold">Darwin Núñez</h3>
                    <p className="text-sm text-muted-foreground">Forward</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="squad" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Alisson"
                        alt="Alisson Becker"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Alisson Becker</h3>
                    <p className="text-xs text-muted-foreground">Goalkeeper</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Kelleher"
                        alt="Caoimhin Kelleher"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Caoimhin Kelleher</h3>
                    <p className="text-xs text-muted-foreground">Goalkeeper</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Van Dijk"
                        alt="Virgil van Dijk"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Virgil van Dijk</h3>
                    <p className="text-xs text-muted-foreground">Defender</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Konaté"
                        alt="Ibrahima Konaté"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Ibrahima Konaté</h3>
                    <p className="text-xs text-muted-foreground">Defender</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Gomez"
                        alt="Joe Gomez"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Joe Gomez</h3>
                    <p className="text-xs text-muted-foreground">Defender</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Alexander-Arnold"
                        alt="Trent Alexander-Arnold"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Trent Alexander-Arnold</h3>
                    <p className="text-xs text-muted-foreground">Defender</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Robertson"
                        alt="Andrew Robertson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Andrew Robertson</h3>
                    <p className="text-xs text-muted-foreground">Defender</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Tsimikas"
                        alt="Kostas Tsimikas"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Kostas Tsimikas</h3>
                    <p className="text-xs text-muted-foreground">Defender</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Quansah"
                        alt="Jarell Quansah"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Jarell Quansah</h3>
                    <p className="text-xs text-muted-foreground">Defender</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Mac Allister"
                        alt="Alexis Mac Allister"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Alexis Mac Allister</h3>
                    <p className="text-xs text-muted-foreground">Midfielder</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Szoboszlai"
                        alt="Dominik Szoboszlai"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Dominik Szoboszlai</h3>
                    <p className="text-xs text-muted-foreground">Midfielder</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Jones"
                        alt="Curtis Jones"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Curtis Jones</h3>
                    <p className="text-xs text-muted-foreground">Midfielder</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Elliott"
                        alt="Harvey Elliott"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Harvey Elliott</h3>
                    <p className="text-xs text-muted-foreground">Midfielder</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Endo"
                        alt="Wataru Endo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Wataru Endo</h3>
                    <p className="text-xs text-muted-foreground">Midfielder</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Gravenberch"
                        alt="Ryan Gravenberch"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Ryan Gravenberch</h3>
                    <p className="text-xs text-muted-foreground">Midfielder</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Salah"
                        alt="Mohamed Salah"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Mohamed Salah</h3>
                    <p className="text-xs text-muted-foreground">Forward</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Gakpo"
                        alt="Cody Gakpo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Cody Gakpo</h3>
                    <p className="text-xs text-muted-foreground">Forward</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Diaz"
                        alt="Luis Díaz"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Luis Díaz</h3>
                    <p className="text-xs text-muted-foreground">Forward</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Núñez"
                        alt="Darwin Núñez"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Darwin Núñez</h3>
                    <p className="text-xs text-muted-foreground">Forward</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Jota"
                        alt="Diogo Jota"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Diogo Jota</h3>
                    <p className="text-xs text-muted-foreground">Forward</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Chiesa"
                        alt="Federico Chiesa"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Federico Chiesa</h3>
                    <p className="text-xs text-muted-foreground">Forward</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=96&width=96&text=Bradley"
                        alt="Conor Bradley"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium">Conor Bradley</h3>
                    <p className="text-xs text-muted-foreground">Defender</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="staff" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=128&width=128&text=Slot"
                        alt="Arne Slot"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-3 font-bold">Arne Slot</h3>
                    <p className="text-sm text-muted-foreground">Manager</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=128&width=128&text=Lijnders"
                        alt="Pepijn Lijnders"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-3 font-bold">Pepijn Lijnders</h3>
                    <p className="text-sm text-muted-foreground">Assistant Manager</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=128&width=128&text=Achterberg"
                        alt="John Achterberg"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-3 font-bold">John Achterberg</h3>
                    <p className="text-sm text-muted-foreground">Goalkeeping Coach</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-[#C8102E]">
                      <Image
                        src="/placeholder.svg?height=128&width=128&text=Kornmayer"
                        alt="Andreas Kornmayer"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-3 font-bold">Andreas Kornmayer</h3>
                    <p className="text-sm text-muted-foreground">Head of Fitness</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="season" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#C8102E] px-3 py-1 text-sm text-white">Season Stats</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Record-Breaking Season
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    The 2024/25 season was one for the history books. Liverpool dominated the Premier League with
                    impressive statistics.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4">
                    <Trophy className="h-10 w-10 text-[#C8102E] mb-2" />
                    <div className="text-2xl font-bold">1st</div>
                    <p className="text-xs text-muted-foreground">Final Position</p>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4">
                    <Star className="h-10 w-10 text-[#C8102E] mb-2" />
                    <div className="text-2xl font-bold">92</div>
                    <p className="text-xs text-muted-foreground">Points</p>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4">
                    <Calendar className="h-10 w-10 text-[#C8102E] mb-2" />
                    <div className="text-2xl font-bold">29</div>
                    <p className="text-xs text-muted-foreground">Wins</p>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4">
                    <Users className="h-10 w-10 text-[#C8102E] mb-2" />
                    <div className="text-2xl font-bold">89</div>
                    <p className="text-xs text-muted-foreground">Goals Scored</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Season Highlights"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Fan Celebrations</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fans around the world celebrating our Premier League triumph.
                </p>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Fan${i + 1}`}
                    alt={`Fan Celebration ${i + 1}`}
                    fill
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button className="bg-[#C8102E] hover:bg-[#A00D25] text-white">View Full Gallery</Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#C8102E]">
          <div className="container px-4 md:px-6 text-white">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">You'll Never Walk Alone</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Thank you to all our supporters around the world who made this championship possible.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-white text-[#C8102E] hover:bg-gray-100">Join The Celebration</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:py-12 lg:flex-row lg:items-start lg:gap-12">
          <div className="flex flex-col gap-3 lg:w-1/3">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=36&width=36"
                width={36}
                height={36}
                alt="Liverpool FC Logo"
                className="h-9 w-9"
              />
              <span className="inline-block font-bold">Liverpool FC</span>
            </Link>
            <p className="text-sm text-muted-foreground">Premier League Champions 2024/25. You'll Never Walk Alone.</p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Club</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    History
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Anfield
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Teams</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Men's Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Women's Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Academy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Legends
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Fans</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Tickets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Hospitality
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Liverpool Football Club. All rights reserved.
            </p>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              This is a celebratory fan website. All trademarks belong to their respective owners.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
