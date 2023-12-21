
import { draftMode } from 'next/headers'
import { fetchBlogPosts } from '../../contentful/blogPosts'
import Link from 'next/link'
import Image from 'next/image'
import DragNDrop from '../components/DragNDrop';


async function Home() {
	// Fetch blog posts using the content preview
	// if draft mode is enabled:
	const blogPosts = await fetchBlogPosts('webDev')

	return (
		<main className="p-5">
			<div className="prose">
				<h1>My Contentful Blog</h1>
				<div className="">
					{blogPosts.map((blogPost, key) => {
						return (
              <DragNDrop data={blogPost} key={key}/>
						)
					})}
				</div>
			</div>
		</main>
	)
}

export default Home