import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

export default function VCard8() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-5/12 h-2/4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg  min-w-[300px]">
      <Card
        isFooterBlurred
        className="w-full h-[350px] col-span-12 sm:col-span-7"
      >
        {/* Header */}
        <CardHeader className="absolute z-10  flex-col items-start bg-gradient-to-b from-black/90 to-black/30 p-2 rounded">
          <p className="text-xs text-white/70 uppercase font-semibold tracking-wide">
            Discussion about role of Corperate sector in tackling climate change with Kasun Yatawara{" "}
          </p>
          <h4 className="text-white font-bold text-xl mt-1">
            Discussion about role of Corperate sector in tackling climate change with Kasun Yatawara{" "}
          </h4>
        </CardHeader>

        {/* Video Thumbnail */}
        <Image
          removeWrapper
          alt="Waste managemen thumbnail"
          className="z-0 w-full h-full object-cover"
          src="https://img.youtube.com/vi/4VTfOTFXX0w/0.jpg"
        />

        {/* Footer */}
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 flex justify-between items-center">
          {/* Project Logo */}
          <div className="flex items-center gap-2">
            <Image
              alt="Project Logo"
              className="rounded-full w-10 h-11 bg-black"
              src="/images/Logo.png"
            />
            <div className="flex flex-col">
              <p className="text-sm text-white text-left">
                Discussion about role of Corperate sector in tackling climate change with Kasun Yatawara.
              </p>
            </div>
          </div>

          {/* Button */}
          <a
            href="https://www.youtube.com/watch?v=4VTfOTFXX0w"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              radius="full"
              size="sm"
              className="bg-red-500 hover:bg-red-700 text-white"
            >
              Watch on YouTube
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
