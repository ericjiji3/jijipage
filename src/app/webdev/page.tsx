
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
		<main className="relative p-14 h-full overflow-hidden">
			<div className="h-full">
				<h1>My Contentful Blog</h1>
				<div className="h-full">
					{blogPosts.map((blogPost, key) => {
            // keep image in bounds between 10-90


						return (
						<div key={key}>
							<DragNDrop data={blogPost}/>
						</div>
              
						)
					})}
				</div>
			</div>
		</main>
	)
}

export default Home