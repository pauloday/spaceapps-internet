import React from 'react';
import ReactDOM from 'react-dom';

function About() {
  return (
    <div class=WordSection1>

    <p class=MsoNormal><b>Problem Statement</b></p>

    <p class=MsoNormal>&nbsp;</p>

    <p class=MsoNormal><b>Distance/Time:</b></p>

    <p class=MsoNormal>Our current understanding of physics and current technology allows
    information to travel at the maximum limit of the speed of light (~300km/s).<span
    style='mso-spacerun:yes'>  </span>That means for communicating with spacecraft
    and space colonies on Mars, the fastest ONE-WAY communication is 182 seconds at
    the closest approach and 1,342 seconds at the farthest approach with an average
    of 751 seconds (source: space.com).</p>

    <p class=MsoNormal>&nbsp;</p>

    <p class=MsoNormal><b>Fault Tolerance/Speed Trade-off:</b></p>

    <p class=MsoNormal>This poses a real problem for using current networking
    protocols used on Earth such as Transmission Control Protocol (TCP).<span
    style='mso-spacerun:yes'>  </span>For example, each packet of information sent
    using TCP is error-checked and an acknowledgement is sent back to the sender.<span
    style='mso-spacerun:yes'>  </span>Additionally, each packet of information does
    not generally contain the total information.<span style='mso-spacerun:yes'> 
    </span>If one packet of information is missing the entire data may be rendered
    meaningless.</p>

    <p class=MsoNormal>&nbsp;</p>

    <p class=MsoNormal><b>Security Issues:</b></p>

    <p class=MsoNormal>An internet in space must also have the same robust security
    protocols to prevent unauthorized access of <span class=GramE>billion dollar</span>
    equipment.<span style='mso-spacerun:yes'>  </span>The Interplanetary Overlay
    Network (ION) is an implementation of a Delay Tolerant Network (DTN) architecture
    that serves to overcome these deficiencies.<span style='mso-spacerun:yes'> 
    </span></p>

    <p class=MsoNormal>&nbsp;</p>

    <p class=MsoNormal><b>Bandwidth:</b></p>

    <p class=MsoNormal>Current communications with spacecraft involve using the
    Deep Space Network (DSN). This is a ground-based system with transceivers in Goldstone,
    California; Madrid, Spain; Canberra, Australia.<span style='mso-spacerun:yes'> 
    </span>They are roughly 120 longitudinal degrees apart to maintain constant
    communications with spacecraft as the world turns no matter where they are in
    space.<span style='mso-spacerun:yes'>  </span>Communications are on the 7-8
    Gigahertz range (X-band).<span style='mso-spacerun:yes'>  </span>With
    increasing RF spectrum use and the fact that more information can be
    transmitted at higher frequencies, a higher frequency for future spacecraft is important.<span
    style='mso-spacerun:yes'>  </span>But legacy spacecraft such as the Voyager
    spacecrafts still need to be supported.</p>

    <p class=MsoNormal>&nbsp;</p>

    <p class=MsoNormal>You can view current communications with spacecraft here: <a
    href="https://eyes.nasa.gov/dsn/dsn.html">https://eyes.nasa.gov/dsn/dsn.html</a></p>

    <p class=MsoNormal>The space network (SN), Near Earth Network (NEN), and DSN
    are viewable here: <a href="https://scan-now.gsfc.nasa.gov/scan">https://scan-now.gsfc.nasa.gov/scan</a></p>

    <p class=MsoNormal>&nbsp;</p>

    <p class=MsoNormal>To increase bandwidth, NASA is working on using Lasers to
    bring current data rates up 10x – 100x.<span style='mso-spacerun:yes'>  </span>Using
    lasers from the ground pose additional challenges.<span
    style='mso-spacerun:yes'>  </span>A communications laser dedicated to space
    network in an Earth orbit could overcome some of those challenges.</p>

    <p class=MsoNormal>&nbsp;</p>

    <p class=MsoNormal>&nbsp;</p>

    <p class=MsoNormal>&nbsp;</p>

    <p class=MsoNormal>&nbsp;</p>

    <p class=MsoNormal>&nbsp;</p>

    <p class=MsoNormal><b>Dynamics:</b></p>

    <p class=MsoNormal>As you will be able to see from this demonstration, at
    certain points in time Earth and Mars do not have a direct line of site due to
    being on opposite sides of the Sun.<span style='mso-spacerun:yes'> 
    </span>During this time period, communication is not possible.<span
    style='mso-spacerun:yes'>  </span>With the demonstration, you will be able to
    see how adding additional satellites as relays to the system affect
    performance.</p>

    <p class=MsoNormal>&nbsp;</p>

    <p class=MsoNormal><b>Internet Use Cases:</b></p>

    <p class=MsoNormal>The modern concept of internet involves streaming movies,
    video conferencing, social media, education, file transfers, and more.</p>

    <p class=MsoNormal>Some problems with speed are solved on Earth using Content
    Delivery Networks (CDNs).<span style='mso-spacerun:yes'>  </span>CDNs cache
    information so that the content is closer to the user thereby reducing the
    transport speed.<span style='mso-spacerun:yes'>  </span>A similar approach can
    be made using satellites in between Earth and Mars and/or adding additional
    functionality on orbiters and extending the network further into the solar
    system.</p>

    <p class=MsoNormal>&nbsp;</p>

    <p class=MsoNormal>One possible solution imagined by the team:</p>

    <p class=MsoListParagraphCxSpFirst style='text-indent:-.25in;mso-list:l0 level1 lfo1'><![if !supportLists]><span
    style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
    style='mso-list:Ignore'>{'1)'}<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
    </span></span></span>Satellites used as CDNs and <span class=GramE>repeaters</span>
    so information is closer to the user.</p>

    <p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in;mso-list:l0 level1 lfo1'><![if !supportLists]><span
    style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
    style='mso-list:Ignore'>{'2)'}<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
    </span></span></span>Communications do not require constant
    acknowledgement of every packet.<span style='mso-spacerun:yes'>  </span>Only
    communication if a packet is not received.</p>

    <p class=MsoListParagraphCxSpLast style='text-indent:-.25in;mso-list:l0 level1 lfo1'><span style='mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'><span
    style='mso-list:Ignore'>{'3)'}<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
    </span></span></span>Laser communications in orbit near Earth but in
    contact with internet satellites such as the SpaceX <span class=SpellE>Starlink</span>
    system.</p>

    </div>
  )
}

export default About;