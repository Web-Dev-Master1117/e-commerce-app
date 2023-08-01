import avatar1 from '@/../public/images/ig_01.jpg';
import avatar2 from '@/../public/images/ig_02.jpg';
import avatar3 from '@/../public/images/ig_03.jpg';
import avatar4 from '@/../public/images/ig_04.jpg';
import avatar5 from '@/../public/images/ig_05.jpg';
import { Tab } from '@headlessui/react';
import Review from './Review';
import ReviewFormDialog from './ReviewFormDialog';

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

export default function ReviewsTab() {
	return (
		<Tab.Panel className='animate-fade-slide space-y-5'>
			<h3 className='font-secondary text-4xl'>Reviews</h3>
			<div className='relative flex flex-wrap justify-center gap-5 font-semibold sm:justify-between'>
				<div className='flex'>
					<span className='text-5xl'>4.5</span>
					<div className='before:content-[" "] relative self-stretch pl-8 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:rotate-[25deg] before:bg-slate-400'>
						<div className='flex h-full items-center'>
							<h3>5 Reviews</h3>
						</div>
					</div>
				</div>

				<ReviewFormDialog />

				<hr className='absolute -bottom-5 w-full border border-gray-200 dark:border-gray-600' />
			</div>
			{avatars.map((avatar, index) => (
				<Review key={index} image={avatar} />
			))}
		</Tab.Panel>
	);
}
