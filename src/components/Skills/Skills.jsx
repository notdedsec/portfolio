import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import SkillImg from '../Image/SkillImg';
import Tilt from 'react-tilt';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  const { skillOne, skillTwo, skillThree, skillFour, skillOneImg, skillTwoImg, skillThreeImg, skillFourImg, } = skills;

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
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Row className="skills-wrapper">
          <Col md={3} sm={6}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={600} distance="30px">
            <Tilt options={{
                  reverse: false,
                  max: 8,
                  perspective: 1000,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}>
                <div className="skills-wrapper__info">
                  <div className="skills-wrapper__image">
                    <div data-tilt className="thumbnail rounded">
                      <SkillImg alt={skillOne} filename={skillOneImg} />
                      <p className="skills-wrapper__info-text">
                        {skillOne}
                      </p>
                    </div>
                  </div>
                </div>
              </Tilt>
            </Fade>
          </Col>

          <Col md={3} sm={6}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={600} distance="30px">
            <Tilt options={{
                  reverse: false,
                  max: 8,
                  perspective: 1000,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}>
              <div className="skills-wrapper__info">
                <div className="skills-wrapper__image">
                  <div data-tilt className="thumbnail rounded">
                    <SkillImg alt={skillTwo} filename={skillTwoImg} />
                  </div>
                  <p className="skills-wrapper__info-text">
                    {skillTwo}
                  </p>
                </div>
              </div>
              </Tilt>
            </Fade>
          </Col>

          <Col md={3} sm={6}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={600} distance="30px">
            <Tilt options={{
                  reverse: false,
                  max: 8,
                  perspective: 1000,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}>
              <div className="skills-wrapper__info">
                <div className="skills-wrapper__image">
                  <div data-tilt className="thumbnail rounded">
                    <SkillImg alt={skillThree} filename={skillThreeImg} />
                  </div>
                  <p className="skills-wrapper__info-text">
                    {skillThree}
                  </p>
                </div>
              </div>
              </Tilt>
            </Fade>
          </Col>

          <Col md={3} sm={6}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={600} distance="30px">
            <Tilt options={{
                  reverse: false,
                  max: 8,
                  perspective: 1000,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}>
              <div className="skills-wrapper__info">
                <div className="skills-wrapper__image">
                  <div data-tilt className="thumbnail rounded">
                    <SkillImg alt={skillFour} filename={skillFourImg} />
                  </div>
                  <p className="skills-wrapper__info-text">
                    {skillFour}
                  </p>
                </div>
              </div>
              </Tilt>
            </Fade>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Skills;
