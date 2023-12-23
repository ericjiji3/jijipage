
import { draftMode } from 'next/headers'
import { fetchBlogPosts } from '../../contentful/blogPosts'
import Link from 'next/link'
import Image from 'next/image'
import DragNDrop from '../components/DragNDrop'


async function Home() {
	// Fetch blog posts using the content preview
	// if draft mode is enabled:
	const blogPosts = await fetchBlogPosts('sotw')
	console.log(blogPosts);
	return (
		<div className="relative p-14 h-full overflow-hidden">
			<h2>SITE OF THE WEEK</h2>
			<div>
				{
					blogPosts.map((post:any, key) => {
						let date = new Date(post.date);
						let month = date.getMonth() + 1;
						let day = date.getDate();
						let year = date.getFullYear();

						return(
							<div key={key}>
								<span>{month}/{day}/{year}</span>
								<div>
									<Image
										src={post.featuredImage.src}
										width={200}
										height={50}
										alt="oops"
									/>
								</div>
							</div>
						)
					})
				}
				
			</div>
		</div>
	)
}

export default Home