function FollowBar() {
	return (
		<div className='px-6 py-4 hidden lg:block'>
			<div className='bg-neutral-800 rounded-xl p-4'>
				<h3 className='text-xl text-white font-semibold'> Who to follow</h3>
				<div className='flex flex-col gap-6 mt-4'>{/* TODO USER LIST */}</div>
			</div>
		</div>
	);
}
export default FollowBar;
