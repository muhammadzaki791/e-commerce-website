import { PostCard } from "./post-card"

const FEATURED_POSTS = [
  {
    id: "1",
    image: "/post-pic-1.png",
    isNew: true,
    categories: ["Google", "Trending", "New"],
    title: "Loudest a la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    commentCount: 10
  },
  {
    id: "2",
    image: "/post-pic-2.png",
    isNew: true,
    categories: ["Google", "Trending", "New"],
    title: "Loudest a la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    commentCount: 10
  },
  {
    id: "3",
    image: "/post-pic-3.png",
    isNew: true,
    categories: ["Google", "Trending", "New"],
    title: "Loudest a la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    commentCount: 10
  }
]

export function FeaturedPosts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-sm font-medium tracking-wider text-blue-600 uppercase">
              Practice Advice
            </h2>
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Posts
            </h3>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 pt-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {FEATURED_POSTS.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

