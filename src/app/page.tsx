import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/76e849b6-3eda-46cb-bdde-a21ef1033791-yy06qs.png",
  "https://utfs.io/f/4b4efac0-3990-4dd1-98fc-905715e05428-yxzjs4.png",
  "https://utfs.io/f/1a9398d8-9650-42ca-9de1-86574241a7b9-yy06nd.png",
  "https://utfs.io/f/faabb1c3-4715-4804-8692-f80c3d7da479-yy06n8.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
