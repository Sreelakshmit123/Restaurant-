import React from 'react'
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap'
import '../CarouselPage.css'
import img from '../assets/images/chefwomen.png'
import { Parallax } from 'react-parallax'
import firstparallax from '../assets/images/firstparallax.jpg'
import secondparallax from '../assets/images/secondparallax.jpg'



function Home() {
    return (
        <>
            {/* carousel */}
            <Carousel fade >
                <Carousel.Item>
                    <img className='d-block w-100' style={{ height: '90vh' }} src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg" alt="first slide" />

                    <Carousel.Caption style={{ marginBottom: '210px' }}>
                        <h3 style={{ fontSize: '35px', fontFamily: 'initial' }}>WELCOME TO</h3>
                        <h1 style={{ fontSize: '85px', fontFamily: '"Protest Revolution", sans-serif' }}>SPICE SAGA RESTAURANT</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100 ' style={{ height: '90vh' }} src="https://cdn.vox-cdn.com/thumbor/SiCQ7_0adtqvL7ugRrSZ1g0daJ4=/0x560:6720x3920/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/24693444/loija_nguyen_NYBnDWeOX2c_unsplash.jpg" alt="second slide" />
                    <Carousel.Caption style={{ marginBottom: '210px' }}>
                        <h3 style={{ fontSize: '35px', fontFamily: 'initial' }}>SPICE SAGA RESTAURANT</h3>
                        <h1 style={{ fontSize: '85px', fontFamily: '"Protest Revolution", sans-serif' }}>BEST QUALITY FOOD</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' style={{ height: '90vh' }} src="https://grub24s3.s3.eu-west-2.amazonaws.com/upload/1690472577-1667823097-backk.jpg" />
                    <Carousel.Caption style={{ marginBottom: '210px' }}>
                        <h3 style={{ fontSize: '35px', fontFamily: 'initial' }}>SPICE SAGA RESTAURANT</h3>
                        <h1 style={{ fontSize: '85px', fontFamily: '"Protest Revolution", sans-serif' }}>TREAT YOURSELF</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <Container>
            
                <Row style={{ marginTop: '105px' }}>
                    <Col sm className='bg-danger text-center pt-5 text-light ' >
                            <h3>Book Your Table</h3>
                            <div  className='mb-2' style={{fontSize:'22px' }} >
                                <input  type="text" placeholder='Name' />
                                </div> 
                                <div className='mb-2'  style={{fontSize:'22px' }} >
                                <input  type="email" placeholder='Email' />
                                </div>
                              <div className='mb-2' style={{fontSize:'22px'}}>  
                              <input  type="number" placeholder='Phone' />
                              </div>
                              <div  className='mb-2' style={{fontSize:'22px'}} >
                                <input  type="number" placeholder='check-in' />
                                </div>
                                <div  className='mb-2' style={{fontSize:'22px'}} >
                                <input  type="number" placeholder='Time' />
                                </div>
                                <div  className='mb-2' style={{fontSize:'22px'}} >
                                <input  type="text" placeholder='Guest' />
                                </div>
                                <Button className='btn btn-light ' style={{width:'255px'}}>Book Your Table Now</Button>
                              
                    </Col>
                    <Col sm >
                        <div className='mt-4  ps-5'>
                          
                            <span className='text-danger' style={{ fontSize: '25px', fontFamily: '"Protest Revolution", sans-serif' }}>About</span>
                            <p style={{ fontSize: '35px', fontWeight: 'bolder' }}>  Welcome to <br /> Spice Saga</p>
                            <p >On her way she met a copy. The copy warned the  Little Blind Text, that where it came from it would have been rewritten a thousand times and  everything that was left from its origin would be  the word "and" and the Little Blind Text should  turn around and return to its own, safe country. A small river named Duden flows by their place and  supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        </div>
                    </Col>
                    <Col sm>
                        <img style={{ height: '65vh' }} src={img} alt="" />
                    </Col>
                </Row>
            </Container>

{/* parallax1 */}

            <Parallax strength={150} bgImage={firstparallax}>
                <div className='content text-center'>
                    <div className='text-content '>
                      <span  style={{fontSize:'25px', fontFamily: 'initial'}}><b>NOW BOOKING</b></span>  
                      <h1 style={{fontSize:'55px', fontFamily: '"Protest Revolution", sans-serif'}}><b>Private Dinner & Happy Hours</b></h1>  
                    </div>
                </div>
            </Parallax>

            {/* menu */}
            <div className='text-center mt-5'>
                <span  className='text-danger' style={{fontSize:'25px', fontFamily: '"Protest Revolution", sans-serif'}}>Specialties</span>
                <h1><b>Our Menu</b></h1>
            </div>
            <Row>
                <Col sm className='mb-3 d-flex justify-content-around' >
                    <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://s.wsj.net/public/resources/images/OD-BH945_ENGLIS_M_20151005125740.jpg" />
              <Card.Body>
                <Card.Title className='text-center' style={{ fontFamily: '"Protest Revolution", sans-serif'}}><b>BREAKFAST</b></Card.Title>
                <Card.Text className='text-dark' style={{fontSize:'20px',fontFamily: 'initial' }}>
                "Starting the day mindfully with a breakfast that fuels both body and mind."
                </Card.Text>
                <Button className='btn btn-danger  ' style={{marginLeft:'35%'}} variant="primary">VIEW MENU</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col sm className='mb-3 d-flex justify-content-around'>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://www.tellicherrykitchen.com/images/gallery/top-restaurant-for-a-quick-and-delicious-lunch-in-kochi.jpg" />
              <Card.Body>
              <Card.Title className='text-center' style={{ fontFamily: '"Protest Revolution", sans-serif'}}><b>LUNCH</b></Card.Title>
              <Card.Text className='text-dark' style={{fontSize:'20px',fontFamily: 'initial' }}>
                  "Lunch is not just a meal, it's a mini-vacation in the middle of the day."
                </Card.Text>
                <Button className='btn btn-danger  mt-4' style={{marginLeft:'35%'}} variant="primary">VIEW MENU</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col sm className='mb-3 d-flex justify-content-around'>
            <Card  style={{ width: '22rem' }}>
              <Card.Img style={{height:'235px'}} variant="top" src="https://myfoodbook.com.au/sites/default/files/styles/card_c_mo/public/recipe_photo/Asia201812155_0.jpg" />
              <Card.Body>
              <Card.Title className='text-center' style={{ fontFamily: '"Protest Revolution", sans-serif'}}><b>DINNER</b></Card.Title>
              <Card.Text className='text-dark' style={{fontSize:'20px',fontFamily: 'initial' }}>
                "Rather go to bed without dinner than to rise in debt."
                </Card.Text>
                <Button className='btn btn-danger mt-4 ' style={{marginLeft:'35%'}} variant="primary">VIEW MENU</Button>
              </Card.Body>
            </Card>
                </Col>
                
            </Row>
            <Row>
                <Col sm className='mb-3 d-flex justify-content-around' >
                    <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://img.delicious.com.au/d5QTry6b/del/2018/08/molten-chocolate-cakes-with-sour-cream-85915-2.jpg" />
              <Card.Body>
                <Card.Title className='text-center' style={{ fontFamily: '"Protest Revolution", sans-serif'}}><b>DESSERTS</b></Card.Title>
                <Card.Text className='text-dark' style={{fontSize:'20px',fontFamily: 'initial' }}>
                "Dessert is like a feel-good song, and the best ones make you dance."
                </Card.Text>
                <Button className='btn btn-danger  ' style={{marginLeft:'35%'}} variant="primary">VIEW MENU</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col sm className='mb-3 d-flex justify-content-around'>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src="https://img.delicious.com.au/6tS9cdjX/del/2020/02/watermelon-and-gin-slushies-126036-2.jpg" />
              <Card.Body>
              <Card.Title className='text-center' style={{ fontFamily: '"Protest Revolution", sans-serif'}}><b>DRINKS & TEA</b></Card.Title>
              <Card.Text className='text-dark' style={{fontSize:'20px',fontFamily: 'initial' }}>
              "Drown the heat with the coolest tunes and coldest sips."
                </Card.Text>
                <Button className='btn btn-danger  mt-4' style={{marginLeft:'35%'}} variant="primary">VIEW MENU</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col sm className='mb-3 d-flex justify-content-around'>
            <Card  style={{ width: '22rem' }}>
              <Card.Img style={{height:'235px'}} variant="top" src="https://sulavineyards.com/images/media2/source-wines/source-cabernet-sauvignon.webp" />
              <Card.Body>
              <Card.Title className='text-center' style={{ fontFamily: '"Protest Revolution", sans-serif'}}><b>WINES</b></Card.Title>
              <Card.Text className='text-dark' style={{fontSize:'20px',fontFamily: 'initial' }}>
                "Age is just a number. It's irrelevant unless, of course, you happen to be a bottle of wine. "
                </Card.Text>
                <Button className='btn btn-danger mt-4 ' style={{marginLeft:'35%'}} variant="primary">VIEW MENU</Button>
              </Card.Body>
            </Card>
                </Col>
                
            </Row>


            {/* parallax2 */}

            <Parallax strength={150} bgImage={secondparallax}>
                <div className='content text-center'>
                    <div className='text-content '>
                      <span  style={{fontSize:'25px', fontFamily: 'initial' }}><b>SPECIAL RECIPIES</b></span>  
                      <h1 style={{fontSize:'55px',fontFamily: '"Protest Revolution", sans-serif'}}><b>Taste Of Precious</b></h1> 
                      <p style={{fontSize:'20px'}}>"Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories. It's about sharing. It's about honesty. It's about identity." </p> 
                      <Button className='btn btn-danger'>Click Here</Button>
                    </div>
                </div>
            </Parallax>

         {/* chefs */}
         <div className='text-center mt-5'>
                <span  className='text-danger' style={{fontSize:'25px', fontFamily: '"Protest Revolution", sans-serif'}}>Chef</span>
                <h1><b>Our Master Chef</b></h1>
            </div>

         <Row>
                <Col sm className='mb-3  d-flex justify-content-evenly' >
                    <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/60b24c226382fc0fc047fc96/1622297792690-1QL67WSY0SQ0XD82T3RO/Chef+Jeffrey+Tan+%28White+Uniform%29.jpg" />
              <Card.Body>
                <Card.Title style={{ fontFamily: '"Protest Revolution", sans-serif'}}><b>John Gustavo</b></Card.Title>
                <Card.Text className='text-secondary'>CEO, Co Founder</Card.Text>
                <Card.Text className='text-dark' style={{fontSize:'20px',fontFamily: 'initial' }}>
                I am an ambitious workaholic, but apart from that, pretty simple person.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col sm className='mb-3 d-flex justify-content-evenly'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/portrait-man-smiling-kitchen_23-2150771051.jpg" />
              <Card.Body>
              <Card.Title style={{ fontFamily: '"Protest Revolution", sans-serif'}}><b>Antonio Santibanez</b></Card.Title>
              <Card.Text className='text-secondary'>Head Chef</Card.Text>
              <Card.Text className='text-dark' style={{fontSize:'20px',fontFamily: 'initial' }}>
                I am an ambitious workaholic, but apart from that, pretty simple person.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col sm className='mb-3 d-flex justify-content-evenly'>
            <Card  style={{ width: '18rem' }}>
              <Card.Img style={{height:'430px'}} variant="top" src="https://www.foodandwine.com/thmb/jBKaP2Q_U2s2QU65MgJfWaeXYpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Best-New-Chefs-Eunji-Lee-Portrait-VT-MAG1023-2cb513aadeb5449db867229680ba03e4.jpg" />
              <Card.Body>
              <Card.Title  style={{ fontFamily: '"Protest Revolution", sans-serif'}}><b>Michelle Fraulen</b></Card.Title>
              <Card.Text className='text-secondary'>Chef Cook</Card.Text>
              <Card.Text className='text-dark' style={{fontSize:'20px',fontFamily: 'initial' }}>
                I am an ambitious workaholic, but apart from that, pretty simple person.
                </Card.Text>
              </Card.Body>
            </Card>
                </Col>
                <Col sm className='mb-3 d-flex justify-content-evenly'>
            <Card  style={{ width: '18rem' }}>
              <Card.Img  variant="top" src="https://images.practicaladultinsights.com/linecook.jpg" />
              <Card.Body>
              <Card.Title style={{ fontFamily: '"Protest Revolution", sans-serif'}}><b>Alfred Smith</b></Card.Title>
              <Card.Text className='text-secondary'>Chef Cook</Card.Text>
              <Card.Text className='text-dark' style={{fontSize:'20px',fontFamily: 'initial' }}>
                I am an ambitious workaholic, but apart from that, pretty simple person.
                </Card.Text>
              </Card.Body>
            </Card>
                </Col> 
            </Row>


        </>
    )
}

export default Home