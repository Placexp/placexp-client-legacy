import React,{useEffect, useState} from 'react'
import usericon from '../Component/Auth/user.png'
import '../Component/Auth/register.css';
import Swal from 'sweetalert2';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './profile.css'
import axios from 'axios';
import {Url} from '../Url';
const  Policy=()=> {
return (
<div>
   

This website is a multi-utility platform to facilitate all the VITians timely access to all the academic related resources and solve any queries related to the curriculum or co-curriculum, for exploring opportunities and enhancing outreach using the online search and other tools available for all the VITians. It is owned and managed by the team of PlaceXP as a registered club of Vellore Technology, Chennai, 600127(India). 


In order for all of our users to enjoy the PlaceXP Services, it is important to follow the terms and conditions described in this Terms of Use ("Terms of Use or "Terms"). By visiting the PlaceXP Site (whether or not you are a registered user) or using any of the PlaceXP Services on any of the Sites, you are accepting this Terms of Use. Please take a moment to carefully read through these Terms. It is our goal to provide you with an excellent user experience, so if you have any questions or comments about these Terms, please contact us at placexpvitc@gmail.com.


Accepting the Terms:

1. In order to use the Service, you must firstly agree to the Terms. You may not use the Service if you do not accept the Terms.

2. You can accept the Terms by simply using the Service. You understand and agree that PlaceXP will treat your use of the Service as acceptance of the Terms from that point onwards.

3. You may not use the Service and may not accept the Terms if (a) you are not of legal age to form a binding contract with PlaceXP, or (b) you are a person who is either barred or otherwise legally prohibited from receiving or using the Service under the laws of the country in which you are resident or from which you access or use the Service.

Who can use PlaceXP:
Our platform is not just open and as inclusive as possible, but also is safe, secure and in accordance with VIT. 
Our website would be highly beneficial if you are-
1.	A college student
2.	A person in the field of Engineering
3.	Wants exponential growth in your career and life
Who can’t use PlaceXP:
 You can’t use this site if-
1.  You misuse our data.
2.  We have prohibited you from using our site.
3.  You have violated our community guidelines.
4.	You don’t agree with our policies.
5.	You  attempt to create accounts or access or collect information in unauthorized ways.

Your Responsibilities:
Hereby I confirm that I won’t use this platform to-
●	Obtain unauthorised access to the services
●	Make available any threatening, harassing, abusing, obscene or hateful content
●	Invade anyone’s privacy
●	Violate any laws or regulations
●	Make available any sort of plagiarised content
●	Make available viruses or unwanted files
●	Interfere with or disrupt our services 


The Content:

The PlaceXP Site includes a combination of content that we write or that is created and posted by our creative team. All of the content on the PlaceXP Site is protected by the copyright of PlaceXP, other content providers or our users. Materials uploaded to PlaceXP may be subject to posted limitations on usage, reproduction and/or dissemination. 

As a user of the PlaceXP Site, you may not modify, publish, transmit. participate in the transfer or sale of, reproduce, create derivative works of, distribute, publicly perform, publicly display, or in any way exploit any of the content on the PlaceXP Site in whole or in part outside of the specific usage rights granted to you. If you download or print a copy of any PlaceXP content for personal use, you must retain all copyright and other proprietary notices contained therein. You may not otherwise use, reproduce, display, publicly perform, or distribute such content in any way for any public or commercial purpose unless such use is expressly granted by a particular license.


Maintenance of Service:

PlaceXP may at any time deactivate or suspend the Member's access to and/or the Services (as the case may be) without any prior notice in order to carry out system maintenance, upgrading, testing, repairs and other related work. Without prejudice to the other provisions of this Agreement, PlaceXP shall not be liable for any loss and damage, costs and expense that the Member may suffer or incur, and no fees or charges payable by the Member to the PlaceXP shall be deducted, refunded or rebated, as a result of such deactivation or suspension.


Termination of Service:

PlaceXP may terminate this Agreement with immediate effect, without prior notice to the Member/User and without further prejudice to all other rights:

1.	If in the opinion of PlaceXP, the Member has breached any of the terms or conditions of this agreement.

2.	If in the opinion of PlaceXP or any regulatory authority, it is not in the public interest to continue providing the Service to the Member for any reason.

The following could be deemed as the reason for the termination of the services:
1.	harasses or advocates harassment of another person;
2.	is patently offensive to the online community, any such content that promotes racism, bigotry, hatred or physical harm of any kind against any group or individual;
3.	involves unsolicited mass mailing or "spamming", the transmission of "junk mail", "chain letters": promotes any information that is misleading, is false or that promotes illegal activities or conduct that is abusive,
4.	threatening, obscene, defamatory or libellous:
5.	promotes unauthorized or an illegal copy of another person's copyrighted work, such as providing pirated computer programs or links to them, providing information to circumvent manufacture-installed copy-protect devices:
6.	contains restricted or password only access pages, or hidden pages or images (those not linked to or from another accessible page):
7.	provides any kind of instructional information about illegal activities such as violating someone's privacy, making or buying illegal weapons, or providing or creating computer viruses, or hacking:
8.	solicits passwords or personal identifying information for commercial or unlawful purposes from other users; 


Any kind of misbehaviour mentioned above, can lead to account suspension and might also lead to the involvement of VIT management.  


Updating These Terms
We may change our Service and policies, and we may need to make changes to these Terms so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to these Terms and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Terms. If you do not want to agree to these or any updated Terms, you can delete your account, here.  


Thank you for taking the time to read this Terms Of Use. By following these Terms, the experience will be better for all users. 

Enjoy PlaceXP Services!
</div>
);
}

export default Policy