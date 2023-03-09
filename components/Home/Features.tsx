import IconComponent from '../ui/Icon';
import TryItButton from './TryItButton';

const features = [
	{
		imgSrc: 'https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png',
		icon: 'idea',
		imgAlt: 'burger illustration',
		title: 'Generate content ideas',
		description: 'Easily generate ideas for content related to any social media topic',
	},
	{
		imgSrc: 'https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png',
		imgAlt: 'trowel illustration',
		icon: 'candy',
		title: 'One-Click Title Suggestions',
		description: 'Quickly find engaging and effective titles for your content',
	},
	{
		imgSrc: 'https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png',
		imgAlt: 'package delivery illustration',
		icon: 'twitter',
		title: 'Customizable Content Approach',
		description:
			'Generate the perfect title for your YouTube, blog, or Twitter content to help it stand out and get noticed',
	},
	{
		imgSrc: 'https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png',
		imgAlt: 'metal illustration',
		icon: 'code',
		title: 'Developed with Next.js 13',
		description:
			'Take advantage of the latest features and improvements in Next.js 13 for faster and more efficient development',
	},
];

export default function Features() {
	return (
		<div className='max-w-5xl mx-auto'>
			<div className='container m-auto  space-y-8 text-gray-500 '>
				<div>
					<h2 className='mt-4 text-2xl text-gray-900 font-bold md:text-4xl'>Features</h2>
				</div>
				<div className='mt-16 grid border-2 border-slate-700 divide-x divide-y divide-slate-700 divide-x-2 rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4'>
					{features.map((feature) => (
						<Feature key={feature.title} {...feature} />
					))}
				</div>
			</div>
		</div>
	);
}

interface FeatureProps {
	icon: string;
	imgAlt: string;
	title: string;
	description: string;
}
function Feature({ icon, imgAlt, title, description }: FeatureProps) {
	return (
		<div className='relative group bg-slate-50 hover:bg-white transition hover:z-[1] hover:shadow-2xl'>
			<div className='relative p-8 space-y-8'>
				<IconComponent name={icon} className='w-10 h-10 text-slate-800' />

				<div className='space-y-2'>
					<h5 className='text-xl text-gray-800 font-medium transition group-hover:text-purple-600'>{title}</h5>
					<p className='text-sm text-gray-600'>{description}</p>
				</div>
				<TryItButton />
				{/* <a
          href='#'
          className='flex justify-between items-center group-hover:text-purple-600'
        >
          
        </a> */}
			</div>
		</div>
	);
}
