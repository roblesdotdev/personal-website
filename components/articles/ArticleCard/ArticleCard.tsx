import { ArrowRight } from '@components/icons'
import Link from 'next/link'

/**
 * ArticleCard
 **/
const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  return (
    <article key={post.slug}>
      <h3 className="mb-2 text-gray-800">
        <Link href={`blog/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </h3>
      <p className="font-serif font-light text-gray-700 line-clamp-3 text-sm">
        {post.description}
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-start space-x-2 mt-4 text-gray-700 text-sm"
      >
        <span>Read all</span>
        <span>
          <ArrowRight />
        </span>
      </a>
    </article>
  )
}

// ***************************************************************************
// Props / Types
// ***************************************************************************
interface ArticleCardProps {
  post: PostPreview
}

type PostPreview = {
  slug: string
  title: string
  description: string
}

// ***************************************************************************
// Exports
// ***************************************************************************
export default ArticleCard
