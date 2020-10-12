import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Work = () => {
  const { work } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="work">
      <Container>
        <div className="job-wrapper">
          <Title title="Work" />
          {work.map((job,index) => {
            const { title, year, info, info2 } = job;

            return (
              <Row key={index}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={400}
                    distance="30px"
                  >
                    <div className="job-wrapper__text">
                      <h3 className="job-wrapper__text-title">{title}</h3>
                      <h3 className="job-wrapper__text-subtitle">{year}</h3>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={600}
                    distance="30px"
                  >
                    <div className="job-wrapper__image">
                      <div>
                        <p>
                          {info}
                          </p>
                          <p className="mb-4">{info2}</p>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Work;
