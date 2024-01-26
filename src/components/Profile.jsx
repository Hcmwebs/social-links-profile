import avatar from '../assets/avatar-jessica.jpeg';
import links from '../data';
import { Bio, Link, Header } from './index';

const Profile = () => {
	return (
		<main className='container grid place-items-center min-h-screen my-0 mx-auto'>
			<div className='group card grid grid-cols-1 gap-6 place-items-center w-[327px] lg:w-96 p-6 lg:p-10 bg-secondary rounded-xl shadow-sm hover:shadow-md cursor-pointer transition duration-700 ease-in-out shadow-accent/5 hover:shadow-accent/10'>
				<Header />
				<Bio text='Front-end developer and avid reader.' />
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
