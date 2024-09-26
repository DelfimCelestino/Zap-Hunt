import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowUpLeftIcon, ExternalLink, Twitter } from "lucide-react";
import Header from "@/components/header";

export default function ProfilePage() {
  return (
    <div>
      <Header />

      <div className="bg-gradient-to-r from-pink-100 via-green-100 to-yellow-100 dark:bg-gradient-to-r dark:from-violet-600 dark:to-indigo-600 p-8">
        <div className="wrapper">
          <div className="flex items-start space-x-6">
            <img
              src="https://github.com/denycelestino.png"
              alt="Delfim Celestino"
              className="w-16 h-16 lg:w-24 lg:h-24 rounded-full"
            />
            <div>
              <h1 className="text-lg lg:text-3xl font-bold">
                Delfim Celestino A. Pastola{" "}
              </h1>
              <p className="text-foreground/60">
                CEO and Founder of Zap Hunt (YC W21)
              </p>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-sm">467,242 followers</span>
                <span className="text-sm">14 following</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                  329 points
                </span>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2827/2827957.png"
                  alt="Trophy"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/408/408472.png"
                  alt="Diamond"
                  className="w-5 h-5"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/426/426833.png"
                  alt="Fire"
                  className="w-5 h-5"
                />
              </div>
              <Button
                variant={"outline"}
                className="mt-4 flex items-center gap-2 border w-full"
              >
                Follow <ArrowUpLeftIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="wrapper">
        <Tabs defaultValue="about">
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="upvotes">Upvotes</TabsTrigger>
            <TabsTrigger value="collections">1 Collection</TabsTrigger>
            <TabsTrigger value="stacks">3 Stacks</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Links</h2>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Website
              </Button>
              <Button variant="outline" size="sm">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
            </div>

            <h2 className="text-lg font-semibold mt-8 mb-4">Badges</h2>
            <div className="flex space-x-4">
              <Badge variant="secondary">Buddy System</Badge>
              <Badge variant="secondary">Top 5 Launch</Badge>
              <Badge variant="secondary">Tastemaker</Badge>
              <Badge variant="secondary">Veteran</Badge>
            </div>

            <h2 className="text-lg font-semibold mt-8 mb-4">Maker History</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-md">
                  <img
                    src="https://delfim.vercel.app/_next/image?url=%2Fmozalink.jpeg&w=3840&q=75"
                    alt="Fathom"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Mozalink</h3>
                  <p className="text-sm text-foreground/60">
                    Never take notes on a Zoom call again
                  </p>
                  <div className="mt-2 space-y-2">
                    <div className="text-sm">
                      <span className="font-semibold">Mozalink 2.0</span>
                      <span className="text-foreground/60 ml-2">Feb 2023</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">Mozalink</span>
                      <span className="text-foreground/60 ml-2">Dec 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-sm text-foreground/60">
              <img
                src="https://cdn-icons-png.flaticon.com/128/426/426833.png"
                alt="Fire"
                className="w-5 h-5 inline mr-2"
              />
              Joined Zap Hunt
              <span className="ml-2">January 28th, 2015</span>
            </div>
          </TabsContent>
          {/* Add content for other tabs as needed */}
        </Tabs>
      </main>
    </div>
  );
}
