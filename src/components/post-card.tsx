import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { ChevronRight, MessageCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { type Post } from "@/types/post"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative">
          <div className="absolute left-4 top-4 z-10">
            {post.isNew && (
              <Badge className="bg-blue-600 text-white hover:bg-blue-600">NEW</Badge>
            )}
          </div>
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={250}
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex gap-2 mb-4">
          {post.categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="text-xs font-normal"
            >
              {category}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-muted-foreground mb-4">{post.description}</p>
      </CardContent>
      <CardDescription className="p-6 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <div className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span>{post.commentCount} comments</span>
          </div>
        </div>
        </CardDescription>
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <Button
          variant="ghost"
          className="text-blue-600 hover:text-blue-700"
          asChild
        >
          <Link href="#" className="flex items-center gap-1">
            Learn More
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

