const Profile = () => {
	return (
		<main className='container grid place-items-center min-h-screen '>
			<div className='group card grid place-items-center w-96  py-10 bg-secondary rounded-xl shadow-xl cursor-pointer hover:scale-105 transition duration-700 ease-in-out'>
				<div className='avatar'>
					<figure className='w-24 rounded-full ring ring-transparent group:hover ring- accentring-offset-base-100 ring-offset-0'>
						<img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
					</figure>
				</div>
				<div className='card-body grid place-items-center'>
					<h2 className='card-title'>Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'>Buy Now</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Profile;
