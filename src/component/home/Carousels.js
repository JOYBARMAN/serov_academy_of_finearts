import Carousel from 'react-bootstrap/Carousel';
const Carousels = () => {
    return (
            <Carousel fade >
                <Carousel.Item>
                    <img
                        className="d-block w-100 opacity-75"
                        src="https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Gennadiy,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1496681278/jgjuawkqp0w9qhgupbgm.jpg"
                        alt="First slide"
                        height="520px"
                    />
                    <Carousel.Caption style={{ "color": "black" }}>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 opacity-75"
                        src="https://previews.123rf.com/images/poznyakov/poznyakov1803/poznyakov180300041/97650683-small-students-girl-and-boy-painting-in-art-school-class-children-drawing-by-paints-on-table-male-ki.jpg"
                        alt="Second slide"
                        height="520px"
                    />

                    <Carousel.Caption style={{ "color": "black" }}>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  opacity-75"
                        src="https://as2.ftcdn.net/v2/jpg/01/64/02/05/1000_F_164020560_NS0Rzv25tyyJmR5EhgDnmMCNVoAr5HrI.jpg"
                        alt="Third slide"
                        height="520px"
                    />

                    <Carousel.Caption style={{ "color": "black" }}>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Carousels