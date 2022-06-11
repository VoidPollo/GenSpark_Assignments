import './aboutme.css';

export default function aboutme() {
	return (
		<>
			<section id='about' className='about-mf sect-pt4 route'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12'>
							<div className='box-shadow-full'>
								<div className='row'>
									<div className='col-md-6'>
										<div className='row'>
											<div className='col-sm-6 col-md-5'>
												<div className='about-img'>
													<img src='assets/img/testimonial-2.jpg' className='img-fluid rounded b-shadow-a' alt='' />
												</div>
											</div>
											<div className='col-sm-6 col-md-7'>
												<div className='about-info'>
													<p>
														<span className='title-s'>Name: </span>{' '}
														<span>Miguel</span>
													</p>
													<p>
														<span className='title-s'>Profile: </span>{' '}
														<span>full stack developer</span>
													</p>
													<p>
														<span className='title-s'>Email: </span>{' '}
														<span>eg@example.com</span>
													</p>
													<p>
														<span className='title-s'>Phone: </span>{' '}
														<span>(786) 123-4567</span>
													</p>
												</div>
											</div>
										</div>
										<div className='skill-mf'>
											<p className='title-s'>Skill</p>
											<span>HTML</span>{' '}
											<span className='pull-right'>85%</span>
											<div className='progress'>
												<div className='progress-bar' role='progressbar' style={{width: "85%"}} aria-valuenow='85' aria-valuemin='0' aria-valuemax='100'></div>
											</div>
											<span>CSS3</span>{' '}
											<span className='pull-right'>75%</span>
											<div className='progress'>
												<div className='progress-bar' role='progressbar' style={{width: "75%"}} aria-valuenow='75' aria-valuemin='0' aria-valuemax='100'></div>
											</div>
											<span>PHP</span>{' '}
											<span className='pull-right'>50%</span>
											<div className='progress'>
												<div className='progress-bar' role='progressbar' style={{width: "50%"}} aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'></div>
											</div>
											<span>JAVASCRIPT</span>{' '}
											<span className='pull-right'>90%</span>
											<div className='progress'>
												<div className='progress-bar' role='progressbar' style={{width: "85%"}} aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'></div>
											</div>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='about-me pt-4 pt-md-0'>
											<div className='title-box-2'>
												<h5 className='title-left'>About me</h5>
											</div>
											<p className='lead'>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Duis ac viverra eros. Sed neque mauris, consectetur sed 
												tortor non, tempor tristique nibh. Vestibulum ullamcorper, 
												dolor at malesuada iaculis, lectus nisi porta erat, ut facilisis magna purus at risus. 
											</p>
											<p className='lead'>
												Sed nec tincidunt ex. Praesent dignissim tortor at massa
												mollis fringilla. Nulla scelerisque, neque ut suscipit auctor,
												nisi tortor auctor dolor, nec euismod massa dui quis nisl.
												Sed cursus arcu libero, id efficitur est vehicula sed.
												Vestibulum magna arcu, mollis eget malesuada ac, bibendum sit amet sem.
											</p>
											<p className='lead'>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
												Duis interdum sit amet mi et pulvinar. In vel nisi arcu. 
												Suspendisse mattis pharetra libero ut fermentum. Etiam et
												justo tortor. Morbi rhoncus justo in turpis congue fermentum.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
