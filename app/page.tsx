import { Container, Filters, Title, TopBar } from '@/components/shared'


export default function Home() {
	return (
		<>
			<Container className='mt-8'>
				<Title text='All Pizza' size='lg' className='font-extrabold' />
			</Container>
			<TopBar />
			<Container className='pb-10'>
				<div className='flex gap-[60px] mt-14'>
					<div className='w-[250px]'>
						<Filters/>
					</div>
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							List of pizza
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
