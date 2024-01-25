import avatar from '../assets/avatar-jessica.jpeg';
import links from '../data';
import Link from './Link';

const Profile = () => {
	return (
		<main className='container grid place-items-center min-h-screen my-0 mx-auto'>
			<div className='group card grid grid-cols-1 gap-6 place-items-center w-[327px] lg:w-96 p-6 lg:p-10 bg-secondary rounded-xl shadow-sm hover:shadow-md cursor-pointer transition duration-700 ease-in-out shadow-white/5 hover:shadow-white/10'>
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
				<h2 className='font-normal text-sm text-white text-center'>
					<q>Front-end developer and avid reader.</q>
				</h2>
				<div className=' w-full grid grid-cols-1 place-items-center gap-4'>
					{links.map((link) => {
						return <Link key={link.id} {...link} />;
					})}
				</div>
			</div>
		</main>
	);
};

export default Profile;
