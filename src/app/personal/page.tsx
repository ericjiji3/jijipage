import { fetchBlogPosts } from '../../contentful/blogPosts'
import Link from 'next/link'
import Image from 'next/image'
import Calendar from '../components/Calendar'

async function Home() {
	// Fetch blog posts using the content preview
	// if draft mode is enabled:
	const blogPosts = await fetchBlogPosts('personal')

	return (
		<main className="h-full">
			<Calendar data={blogPosts}/>

		</main>
	)
}

export default Home