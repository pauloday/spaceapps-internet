/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
import React from 'react';
import Modal from 'react-modal';

function About() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  Modal.setAppElement('#root');
  return (
    <div style={{display: "inline"}} >
      <button onClick={openModal} style={{color: "black", background: "dodgerblue", borderColor: "dodgerblue", borderRadius: "5px", border: "solid 1px"}}>About</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <section>
          <div className="WordSection1">

            <p className="MsoNormal"><b>Problem Statement</b></p>

            <p className="MsoNormal">&nbsp;</p>

            <p className="MsoNormal"><b>Distance/Time:</b></p>

            <p className="MsoNormal">
              // eslint-disable-next-line max-len
              Our current understanding of physics and current technology allows information to travel at the maximum limit of the speed of light (~300km/s).
              <span />
              That means for communicating with spacecraft
              and space colonies on Mars, the fastest ONE-WAY communication is 182 seconds at
              the closest approach and 1,342 seconds at the farthest approach with an average
              of 751 seconds (source: space.com).
            </p>

            <p className="MsoNormal">&nbsp;</p>

            <p className="MsoNormal"><b>Fault Tolerance/Speed Trade-off:</b></p>

            <p className="MsoNormal">
              This poses a real problem for using current networking
              protocols used on Earth such as Transmission Control Protocol (TCP).
              <span />
              For example, each packet of information sent
              using TCP is error-checked and an acknowledgement is sent back to the sender.
              <span />
              Additionally, each packet of information does
              not generally contain the total information.
              <span />
              If one packet of information is missing the entire data may be rendered
              meaningless.
            </p>

            <p className="MsoNormal">&nbsp;</p>

            <p className="MsoNormal"><b>Security Issues:</b></p>

            <p className="MsoNormal">
              An internet in space must also have the same robust security
              protocols to prevent unauthorized access of
              {' '}
              <span className="GramE">billion dollar</span>
              equipment.
              The Interplanetary Overlay
              Network (ION) is an implementation of a Delay Tolerant Network (DTN) architecture
              that serves to overcome these deficiencies.
              <span />
            </p>

            <p className="MsoNormal">&nbsp;</p>

            <p className="MsoNormal"><b>Bandwidth:</b></p>

            <p className="MsoNormal">
              Current communications with spacecraft involve using the
              Deep Space Network (DSN). This is a ground-based system with transceivers in Goldstone,
              California; Madrid, Spain; Canberra, Australia.
              <span />
              They are roughly 120 longitudinal degrees apart to maintain constant
              communications with spacecraft as the world turns no matter where they are in
              space.
              Communications are on the 7-8
              Gigahertz range (X-band).
              With
              increasing RF spectrum use and the fact that more information can be
              transmitted at higher frequencies, a higher frequency for future spacecraft is important.
              <span />
              But legacy spacecraft such as the Voyager
              spacecrafts still need to be supported.
            </p>

            <p className="MsoNormal">&nbsp;</p>

            <p className="MsoNormal">
              You can view current communications with spacecraft here:
              {' '}
              <a
                href="https://eyes.nasa.gov/dsn/dsn.html"
              >
                https://eyes.nasa.gov/dsn/dsn.html
              </a>
            </p>

            <p className="MsoNormal">
              The space network (SN), Near Earth Network (NEN), and DSN
              are viewable here:
              {' '}
              <a href="https://scan-now.gsfc.nasa.gov/scan">https://scan-now.gsfc.nasa.gov/scan</a>
            </p>

            <p className="MsoNormal">&nbsp;</p>

            <p className="MsoNormal">
              To increase bandwidth, NASA is working on using Lasers to
              bring current data rates up 10x – 100x.
              Using
              lasers from the ground pose additional challenges.
              <span />
              A communications laser dedicated to space
              network in an Earth orbit could overcome some of those challenges.
            </p>

            <p className="MsoNormal">&nbsp;</p>

            <p className="MsoNormal">&nbsp;</p>

            <p className="MsoNormal">&nbsp;</p>

            <p className="MsoNormal">&nbsp;</p>

            <p className="MsoNormal">&nbsp;</p>

            <p className="MsoNormal"><b>Dynamics:</b></p>

            <p className="MsoNormal">
              As you will be able to see from this demonstration, at
              certain points in time Earth and Mars do not have a direct line of site due to
              being on opposite sides of the Sun.
              <span />
              During this time period, communication is not possible.
              <span />
              With the demonstration, you will be able to
              see how adding additional satellites as relays to the system affect
              performance.
            </p>

            <p className="MsoNormal">&nbsp;</p>

            <p className="MsoNormal"><b>Internet Use Cases:</b></p>

            <p className="MsoNormal">
              The modern concept of internet involves streaming movies,
              video conferencing, social media, education, file transfers, and more.
            </p>

            <p className="MsoNormal">
              Some problems with speed are solved on Earth using Content
              Delivery Networks (CDNs).
              CDNs cache
              information so that the content is closer to the user thereby reducing the
              transport speed.
              A similar approach can
              be made using satellites in between Earth and Mars and/or adding additional
              functionality on orbiters and extending the network further into the solar
              system.
            </p>

            <p className="MsoNormal">&nbsp;</p>

            <p className="MsoNormal">One possible solution imagined by the team:</p>

            <p className="MsoListParagraphCxSpFirst">
              <span>
                1.
                <span>
      &nbsp;&nbsp;&nbsp;
                </span>
              </span>

              Satellites used as CDNs and
              {' '}
              <span className="GramE">repeaters</span>
              so information is closer to the user.
            </p>

            <p className="MsoListParagraphCxSpMiddle">
              <span>
                <span>
                  2.
                  <span>
      &nbsp;&nbsp;&nbsp;
                  </span>
                </span>
              </span>
              Communications do not require constant
              acknowledgement of every packet.
              Only
              communication if a packet is not received.
            </p>

            <p className="MsoListParagraphCxSpLast">
              <span>
                <span>
                  3.
                  <span>
      &nbsp;&nbsp;&nbsp;
                  </span>
                </span>
              </span>
              Laser communications in orbit near Earth but in
              contact with internet satellites such as the SpaceX
              {' '}
              <span className="SpellE">Starlink</span>
              system.
            </p>

          </div>
        </section>
      </Modal>
    </div>
  );
}

export default About;
