const Link = ({ href, text }) => {
	return (
		<>
			<a
				href={href || '#'}
				target='_blank'
				rel='noopener noreferrer'
				className='btn btn-block btn-primary text-white font-bold text-sm capitalize hover:bg-accent hover:text-secondary transition duration-300 ease-in-out cursor-pointer'
			>
				{text}
			</a>
		</>
	);
};

export default Link;
