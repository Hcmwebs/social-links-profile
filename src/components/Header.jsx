import avatar from '../assets/avatar-jessica.jpeg';

const Header = () => {
	return (
		<header className='grid grid-cols-1 gap-6 place-items-center'>
			<div className='avatar'>
				<figure className='w-[88px] h-[88px] rounded-full border-t-4 border-r-0 border-b-0 border-l-4 border-transparent group-hover:border-accent transition duration-700 ease-in-out'>
					<img src={avatar} alt='profile photo' />
				</figure>
			</div>
			<div className='grid grid-cols-1 place-items-center gap-1'>
				<h1 className='font-semibold text-white text-2xl text-center leading-9 capitalize'>
					Jessica Randall
				</h1>
				<p className='font-bold text-accent text-sm leading-5 capitalize'>
					London, United Kingdom
				</p>
			</div>
		</header>
	);
};

export default Header;
