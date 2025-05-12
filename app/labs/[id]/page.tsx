import { ComponentPropsWithoutRef, ComponentPropsWithRef, ReactNode } from 'react'
import { Card } from '@/ui/card'

import { cx } from '@/lib/utils'
import { ContentPlaceholder } from '@/components/content-placeholder'

// Domain model for our posts
interface Post {
  id: string // Unique identifier for each post
  title: string // Post headline
  category: string // Category/section the post belongs to
  date: string // Publication date as a string
  imageUrl: string // URL to the post's thumbnail image
  imageAlt?: string // Optional alt text for the image
}

// Sample data - in a real app this would likely come from an API
const posts: Post[] = [
  {
    id: 'post-1',
    title: 'The Bank of England Risks Hiking Too Far Ahead',
    category: 'Business',
    date: '18 Nov 2022',
    imageUrl:
      'https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
    imageAlt: 'Bank of England building',
  },
  {
    id: 'post-2',
    title: 'The Bank of England Risks Hiking Too Far Ahead',
    category: 'Business',
    date: '18 Nov 2022',
    imageUrl:
      'https://images.unsplash.com/photo-1550510537-89d5433de5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    imageAlt: 'Financial district',
  },
  {
    id: 'post-3',
    title: 'The Bank of England Risks Hiking Too Far Ahead',
    category: 'Business',
    date: '18 Nov 2022',
    imageUrl:
      'https://images.unsplash.com/photo-1587614380862-0294308ae58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    imageAlt: 'Financial graph',
  },
]

// The extracted PostPreview component
interface PostPreviewProps {
  post: Post
}

const PostPreview = ({ post }: PostPreviewProps) => {
  return (
    <>
      <div className="mr-4 flex-1">
        <h4 className="text-base/6 leading-snug font-medium">{post.title}</h4>
        <div className="text-cnt-secondary mt-1 text-sm">
          <span>{post.category}</span> • <time>{post.date}</time>
        </div>
      </div>
      <div>
        {/*<img*/}
        {/*  src={post.imageUrl}*/}
        {/*  className="size-20 rounded-lg object-cover"*/}
        {/*  alt={post.imageAlt || ''}*/}
        {/*/>*/}
        <ContentPlaceholder className="size-20 rounded-md" />
      </div>
    </>
  )
}

const ExperimentPage = () => {
  return (
    <Card className="mx-auto max-w-sm overflow-hidden">
      <ul className="divide-y px-4 py-2">
        {/* Map over the posts array to render each post preview */}
        {posts.map((post) => (
          <li key={post.id} className="flex py-4">
            <PostPreview post={post} />
          </li>
        ))}
      </ul>
    </Card>
  )
}

// Unchanged from original
function Surface({ children, className }: ComponentPropsWithRef<'div'>) {
  return (
    <div className={cx('overflow-hidden rounded-lg bg-white shadow-sm', className)}>
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  )
}

export default ExperimentPage
