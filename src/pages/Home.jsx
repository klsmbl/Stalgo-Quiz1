import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { services } from '../data/dummyData'
// Using user-provided service photos (external URLs)
const servicePhotos = [
  'https://static.wixstatic.com/media/11062b_0cc3d7ff67194760b9328156c82c1dcf~mv2.jpg/v1/fill/w_1905,h_484,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_0cc3d7ff67194760b9328156c82c1dcf~mv2.jpg',
  'https://static.wixstatic.com/media/13c4a1_553024d034bb48fc967cd43ed6a4fa0b~mv2.jpg/v1/fill/w_310,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shirts_edited.jpg',
  'https://static.wixstatic.com/media/13c4a1_2c83583965e94115b601a735f660dcfd~mv2.jpg/v1/crop/x_181,y_0,w_719,h_654/fill/w_310,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(6)_edited_edited.jpg'
  , 'https://static.wixstatic.com/media/13c4a1_0fbeaa199d094e43987739f0fc06cad9~mv2.png/v1/crop/x_104,y_143,w_872,h_793/fill/w_310,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(7).png'
]

function Home() {
  return (
    <div id="home">
      <section id="hero" className="hero-banner rounded-3 mb-4">
        <div className="hero-overlay">
          <div className="container text-center py-5">
            <h1 className="display-5">Welcome</h1>
            <p className="lead">We are the leading professional Laundry and Dry Cleaning Service in Pampanga. Serving Mabalacat City</p>
            <p>
              <a href="#services" className="btn btn-primary">Explore Services</a>
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="mb-4">
        <h2>About Us</h2>
        <p>
          LaVadami Laundry Services has provided exceptional laundry services since 2020! Our top priority is ensuring that our customers receive the best quality service and impeccably laundered clothes. You can trust us to handle your garments with the utmost care and attention. Our commitment to customer satisfaction is unwavering, which is why we have invested in state-of-the-art washing machines and laundry equipment to guarantee the best possible results. Our experienced and knowledgeable staff are experts in the most effective washing and drying techniques, and we take pride in their exceptional skills. We understand the value of your clothes, which is why every piece of clothing is meticulously inspected before it is returned to you. We are confident that you will be impressed with our exceptional services!
        </p>
      </section>

      <section id="services" className="mb-4">
        <h2>Our Services</h2>
        <Row>
          {services.map((s, idx) => {
              const img = servicePhotos[idx] || servicePhotos[0]
              return (
              <Col key={s.id} xs={12} md={4} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={img} className="service-img" />
                  <Card.Body>
                    <Card.Title>{s.title}</Card.Title>
                    <Card.Text>{s.summary}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              )
            })}
        </Row>
      </section>

      {/* Team section removed as requested */}

      <section id="contact" className="mb-4">
        <h2>Contact</h2>
        <p>
          To schedule pickup or request a quote, email <a href="mailto:LaVadami@gmail.com">LaVadami@gmail.com</a> or call <a href="tel:09982923056">09982923056</a>.
        </p>
        <p>
          Address: Bonifacio St., San Joaquin, Mabalacat City, Pampanga
        </p>
      </section>
    </div>
  )
}

export default Home
