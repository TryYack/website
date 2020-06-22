import React from 'react'
import Head from 'next/head'
import Features from '../components/features'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/hero'

export default function TermsOfUse(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Yack - Give your team superpowers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/static/images/favicon.png" rel="shortcut icon" />
        <link rel="stylesheet" href="https://use.typekit.net/kfw2ghz.css"></link>
      </Head>

      <style global jsx>{`
        * {
          margin: 0px;
          padding: 0px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        body {
          background: white;
        }

        .container {
          padding-top: 50px;
          padding-bottom: 30px;
          margin-left: auto;
          margin-right: auto;
          width: 80%;
        }

        .container h1 {
          font-size: 50px;
          color: #202529;
          font-weight: 900;
          font-family: aktiv-grotesk-extended, sans-serif;
          line-height: 80px;
          margin-bottom: 20px;
        }

        .container h2 {
          margin-top: 25px;
          font-size: 25px;
          color: #202529;
          line-height: 40px;
          font-weight: 300;
          width: 40%;
        }

        .container a {
          color: #10ACF3;
        }

        .container p, .container li {
          font-size: 16px;
          color: #808080;
          padding-bottom: 10px;
          font-weight: 500;
        }
      `}</style>

      <Header />
      
      <div className="container">
        <h1>Terms of use</h1>
        <article>
          <p><strong>Terms of Use</strong></p>
          <p><strong>(Last updated June 22nd, 2020)</strong></p>
          <p>Yreeka Pty Ltd., together with its wholly owned subsidiaries (collectively “Yreeka”, “teachfolk”, “we”, “us”, or “our”), has created, owns and operates multiple websites and learning software applications.These terms of use (“Terms of Use”) govern access to and use of the Yreeka websites, services, software, and applications provided online and/or made available offline via personal computer or mobile device (collectively, “the Service”).By using the Service, you agree to be bound by these Terms of Use, unless you or your organization have entered into a separate written agreement with us, in which case those terms and conditions shall take precedent over these Terms of Use.These Terms of Use incorporate by reference Yreeka’s<span>&nbsp;</span><a href="https://www.cornerstoneondemand.com/client-privacy-policy">Privacy Policy</a>.</p>
          <p>Yreeka may modify these Terms of Use at any time, and such modification shall be effective on the date stated in the amended Terms of Use. Your continued use of the Service following any amendment to these Terms of Use will signify your assent to and acceptance of the revised terms.If you do not agree to any of these terms or any future amendments, do not use or access (or continue to access) the Service.</p>
          <p><strong>1. DESCRIPTION OF SERVICE</strong></p>
          <p>The Service enables a user to do some or all of the following: view online content (e.g., in the form of text, images and video); take online courses, lessons and assessments; connect with other users; participate in online discussions; create online communities pertaining to specific topics; create and/or administer courses, lessons and assessments per section created; create and or amend your learning applications layout and content; add, remove or disable teachers and or student users; download or export user data in PDF or CSV format pertaining specifically and only to students assessment or attendance data including enrolments, courses completed, active users and courses created; to offer courses for sale on a monthly subscription or once off payment or on a pay per course basis, and purchase goods and services offered by Yreeka or third parties (each a “Third Party”).Unless explicitly stated otherwise, any new features that augment or enhance the Service shall be subject to these Terms of Use. The Service may not be used for any purpose not expressly permitted by these Terms of Use. You may not reproduce, copy, duplicate, sell or resell any part of the Service, except to the limited extent expressly permitted by these Terms of Use.</p>
          <p><strong>2. USAGE AND ACCESS RIGHTS</strong></p>
          <p>In consideration of your use of the Service, you represent that you are not a person barred from using the Service under the laws of any applicable jurisdiction.You also agree to: (a) provide accurate, current and complete information about you as may be prompted by any registration forms on the Service (“Registration Data”); (b) maintain the security of your password and identification; (c) maintain and promptly update the Registration Data, and any other information you provide to Yreeka, to keep it accurate, current and complete; and (d) be responsible for all use of your account and for any actions that take place using your account.If you provide any information that is untrue, inaccurate, not current or incomplete, or Yreeka has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, Yreeka has the right to suspend or terminate your account and refuse any and all current or future use of the Service.</p>
          <p>You are responsible for all activity occurring on your account and shall abide by all applicable local, provincial, federal and foreign laws, treaties and regulations in connection with your use of Yreeka’s products including teachfolk, including without limitation, those related to data privacy. You may never use another user’s account without permission. You must notify Yreeka immediately of any breach of security or unauthorized use of your account. Yreeka will not be liable for your losses caused by any unauthorized use of your account, but you shall be liable for the losses of Yreeka or others due to such unauthorized use. All usernames and passwords remain the property of Yreeka and may be cancelled, changed or suspended at any time by Yreeka without notice. Yreeka is not under any obligation to verify the actual identity or authority of the user of any username or password.</p>
          <p>By providing Yreeka your email address you consent to our using the email address to send you Service-related notices, including any notices required by law, in lieu of communication by postal mail. We may also use your email address to send you other messages, including changes to features of the Service and special offers. If you do not want to receive such email messages, you may opt out by emailing us stating so. Opting out may prevent you from receiving email messages regarding updates, improvements, or offers.</p>
          <p><strong>3. OWNERSHIP OF CONTENT AND LIMITED LICENSE</strong></p>
          <p>The following definitions apply to material on the Service:</p>
          <p>(a)“Content” means any and all content, including, without limitation, photos, profiles, messages, notes, text, courses, tests, information, music, video, advertisements, listings, and other content appearing anywhere on the Service at any time.</p>
          <p>(b)“User Content” means any and all Content that you upload, publish, offer, display (collectively,“post”) transmit, sell, share, and/or otherwise make available on and/or through the Service.</p>
          <p>“Third Party Content” means any and all Content that a Third Party posts, transmits, sells, shares, and/or otherwise makes available on and/or through the Service.</p>
          <p>(d)“Site Content” means any and all Content that is neither User Content nor Third Party Content.</p>
          <p>The Service and the Site Content are the property of Yreeka, its users or its licensors, with all rights reserved.Neither the Service nor any Site Content may be modified, copied, distributed, framed, reproduced, republished, downloaded, displayed, posted, transmitted, or sold in any form or by any means, in whole or in part, without Yreeka’s prior written permission.</p>
          <p>Yreeka grants you a limited license to access and use any portion of the Site Content to which you have properly gained access, solely for your personal use, and provided that you keep all copyright or other proprietary notices intact.Such license is subject to these Terms of Use and does not include use of any data mining, robots or similar data gathering or extraction methods.</p>
          <p>Your rights to use Third Party Content are governed by the applicable Third Party license terms that are established by those Third Parties from time to time.</p>
          <p>Any use of the Service or the Site Content other than as specifically authorized herein, without the prior written permission of Yreeka or the applicable Third Party, as the case may be, is strictly prohibited and will terminate the license granted herein. Such unauthorized use may also violate applicable laws including without limitation copyright and trademark laws.Unless explicitly stated herein, nothing in these Terms of Use shall be construed as conferring any license to intellectual property rights, whether by estoppel, implication or otherwise.This license is revocable at any time without notice and with or without cause.</p>
          <p>From time to time, Yreeka may offer a limited-term campaign to specific Yreeka clients and other companies or individual users to access the learning platform and or participate in free online training (a “Digital Learning Event”).These courses will be selected by Yreeka and include a subset of Yreeka’s course catalog from a variety of course publishers.The following additional terms apply to Digital Learning Events in which you participate:</p>
          <p>Yreeka is collecting the data you input on the registration form including without limitation your name, email address, and all fields complete in your Profile area. Additionally, we collect information about the courses you started and/or completed plus any related transcript information such as your certifications or test results.</p>
          <p>Yreeka may share the information collected with your employer such as the course enrollment so they can learn what types of courses their employees are interested in.</p>
          <p>The information collected will also be used by Yreeka to evaluate the Digital Learning Event and to know what courses to offer in future Digital Learning Events.The information used will be aggregated, anonymized data that may also be used to provide benchmarking for courses taken by specific industries or local markets.</p>
          <p>Yreeka will retain your login and your transcript so you can continue your course progress in a future Digital Learning Event, if offered.</p>
          <p>Yreeka retains the right to retain the information for a period of five (5) years unless, where applicable, you specifically opt-out of the Digital Learning Event program by sending an email to info@teachfolk.com.</p>
          <p><strong>4. TRADEMARKS</strong></p>
          <p>“teachfolk,” and other teachfolk graphics, logos, designs, page headers, button icons, scripts and service names are registered trademarks or are pending registration, trademarks, or trade dress of teachfolk (Yreeka). Trademarks and trade dress used by Third Parties in association with the sale or license of their goods or services on the Service are the property of the respective owner.</p>
          <p>Such trademarks and trade dress may not be used, including as part of trademarks and/or as part of domain names, in connection with any product or service in any manner that is likely to cause confusion and may not be copied, imitated, or used, in whole or in part, without the prior written permission of the respective owner.</p>
          <p><strong>5. USER CONTENT</strong></p>
          <p>You are solely responsible for all User Content.You understand and agree that Yreeka may, but is not obligated to, review, delete, and/or remove User Content (without notice) in its sole discretion, for any reason or no reason, including without limitation User Content that, in each case in the sole judgment of Yreeka, violates these Terms of Use, might be offensive, illegal, or might violate the rights, harm, or threaten the safety of users or others.</p>
          <p>You agree you will not:</p>
          <p>(a) post, transmit, sell, share or otherwise make available any User Content that is unlawful, harmful, threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, libelous, invasive of another’s privacy, hateful, or racially, ethnically or otherwise objectionable;</p>
          <p>(b) post, transmit, sell, share or otherwise make available any User Content that you did not create or that you do not have permission to post, transmit, sell, or share;</p>
          <p>(c) post, transmit, sell, share or otherwise make available any User Content (i) that violates any federal, provincial, foreign or local law or regulation, (ii) for which you do not have full power and authority to distribute, including all necessary licenses and authorizations, or (iii) that Yreeka determines, in its sole discretion, is inappropriate for distribution through the Service;</p>
          <p>(d) post, transmit, sell, share or otherwise make available any User Content that infringes any patent, trademark, trade secret, copyright, rights of privacy or publicity, or other proprietary rights of any party; and forge headers or otherwise manipulate identifiers in order to disguise the origin of any User Content.</p>
          <p>You are solely responsible, at your own cost and expense, for creating backup copies and replacing any User Content you post or store on the Service or provide to Yreeka. When you post User Content to the Service, you authorize and direct us to make such copies thereof as we deem necessary in order to facilitate the posting and storage of the User Content on the Service.</p>
          <p><strong>6. USE OF SERVICE</strong></p>
          <p>You agree that by utilizing and/or accessing the Service you will not:</p>
          <p>(a) post, transmit, sell, share or otherwise make available unsolicited commercial email or “spam.”This includes, without limitation, unethical marketing, advertising, or any other practice that is in any way connected with “spam”, such as (i) sending mass email to recipients who have not requested email from you or with a fake return address, (ii) promoting a site with inappropriate links, titles, descriptions, or (iii) promoting your site by posting multiple submissions in public forums that are identical;</p>
          <p>(b) use or launch any automated system, including without limitation, “robots,” “spiders,” “offline readers,” etc., that accesses the Service in a manner that sends more request messages to the Service servers than a human can reasonably produce in the same period of time by using a conventional online web browser;</p>
          <p>(c) post, transmit, sell, share or otherwise make available any material that contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment;</p>
          <p>(d) interfere with or disrupt the Service or servers or networks connected to the Service, or disobey any requirements, procedures, policies or regulations of networks connected to the Service;</p>
          <p>(e) harm, stalk, harass or otherwise violate the rights of others in any way in your use of the Service;</p>
          <p>(f) impersonate any person or entity, including, but not limited to, a Yreeka official, forum leader, guide or host, or falsely state or otherwise misrepresent your affiliation with a person or entity;</p>
          <p>(g) intentionally or unintentionally violate any applicable local, state, national or international law;</p>
          <p>(h) promote or provide instructional information about illegal activities, promote physical harm or injury against any group or individual, or promote any act of cruelty to animals;</p>
          <p>(i) exceed the scope of any Yreeka service or product for which you have registered; by, for example, accessing and using the tools that you do not have a right to use, or deleting, adding to, or otherwise changing the comments or content of other persons; and</p>
          <p>(j) collect or harvest any personally identifiable information, including account names, from the Service.</p>
          <p>You understand that by using the Service, you may be exposed to Content that you consider to be offensive, indecent or objectionable. You acknowledge that Yreeka does not pre-screen User Content or Third Party Content. You agree that you must evaluate, and bear all risks associated with, the use of any Third Party Content or Site Content, including any reliance on the accuracy, completeness, or usefulness of such Content.</p>
          <p><strong>7. INTELLECTUAL PROPERTY POLICY</strong></p>
          <p>Yreeka respects the intellectual property and other rights of others, and we ask you to do the same.You are prohibited from uploading, posting or otherwise transmitting on or through the Service any Content that violates another party’s intellectual property and other rights on teachfolk or any other Yreeka product. Yreeka is not responsible for the conduct of its users and has no responsibility or liability for User Content or for the loss or corruption thereof.</p>
          <p>It is Yreeka’s policy, in appropriate circumstances and at its discretion, to disable and/or terminate the accounts of users who may infringe or repeatedly infringe the copyrights or other intellectual property rights of Yreeka and its product teachfolk and/or others.</p>
          <p><strong>8. DIGITAL MILLENIUM COPYRIGHT ACT</strong></p>
          <p>If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible via the Service, please notify Yreeka’s copyright agent, as set forth in the Digital Millennium Copyright Act of 1998 (“DMCA”). For your complaint to be valid under the DMCA, you must provide the following information in writing:</p>
          <p>An electronic or physical signature of a person authorized to act on behalf of the copyright owner;</p>
          <p>Identification of the copyrighted work that you claim has been infringed;</p>
          <p>Identification of the material that is claimed to be infringing and where it is located on the Service;</p>
          <p>Information reasonably sufficient to permit Yreeka to contact you, such as your address, telephone number, and, e-mail address;</p>
          <p>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or law; and</p>
          <p>A statement, made under penalty of perjury, that the above information is accurate, and that you are the copyright owner or are authorized to act on behalf of the owner.</p>
          <p>The above information must be submitted to:</p>
          <p>Attn: DMCA Notice</p>
          <p>Yreeka Pty Ltd.</p>
          <p>Address:&nbsp; 9 Spartan Road</p>
          <p className="p1">Aeroport</p>
          <p className="p1">Kempton Park</p>
          <p className="p1">1619</p>
          <p>Telephone: (083) 448-6623</p>
          <p>UNDER FEDERAL LAW, IF YOU KNOWINGLY MISREPRESENT THAT ONLINE MATERIAL IS INFRINGING, YOU MAY BE SUBJECT TO CRIMINAL PROSECUTION FOR PERJURY AND CIVIL PENALTIES, INCLUDING MONETARY DAMAGES, COURT COSTS, AND ATTORNEYS’ FEES.</p>
          <p>The preceding requirements are intended to comply with Yreeka’s rights and obligations under the DMCA, including 17 U.S.C. §512(c), but do not constitute legal advice.Please note that this procedure is exclusively for notifying Yreeka and its affiliates that your copyrighted material has been infringed. It may be advisable to contact an attorney regarding your rights and obligations under the DMCA and other applicable laws.</p>
          <p>In accordance with the DMCA and other applicable law, Yreeka has adopted a policy of terminating, in appropriate circumstances and at Yreeka’s sole discretion, users who are deemed to be repeat infringers. Yreeka may also, at its sole discretion, limit access to the Service and/or terminate the accounts of any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.</p>
          <p><strong>9. YREEKA’s TEACHFOLK LEARNING MANAGEMENT SYSTEM</strong></p>
          <p>Yreeka may from time to time offer goods and services through the Service, and may offer you or other Third Parties the ability to offer and/or purchase goods and services for sale to and/or from Third Parties through the Service (“Third Party Transaction”).All transactions conducted in connection with this aspect of the Service are subject to and governed by such guidelines as Yreeka posts from time to time (the “Guidelines”), as well as these Terms of Use.The Guidelines are subject to change without prior notice at any time, in Yreeka’s sole discretion; you should review the Guidelines before each Third Party Transaction.</p>
          <p>You are solely responsible for your interactions with other users of the Service.Parties to a Third Party Transaction are solely responsible for all interactions with each other, for arranging for payment and the exchange of the goods or services purchased if applicable, and for the results and performance of any transaction or relationship entered into with Third Parties through the Service.Purchases of products or services from Third Parties through Yreeka are subject to the terms of sale of those Third Parties, as those transactions are strictly between you and the other party to the transaction.</p>
          <p>You acknowledge that Yreeka, and its subsidiaries (including teachfolk), affiliates, officers, directors, shareholders, agents, licensors, suppliers, co-branders or other partners, employees, successors and assigns (the “Yreeka Parties”) are not responsible or liable for any action or inaction of any Third Party to a transaction, for any failure to perform, to pay any amounts due, or to deliver any merchandise or services as promised, or for any other aspect of a Third Party Transaction. The capability to conduct Third Party Transactions or otherwise deal with Third Parties through the Service is provided by Yreeka on teachfolk “as is” and any such transactions and dealings are at your own risk. You agree that you are solely responsible for establishing Third Party License Terms for any User Content provided by you to the Service, and that Yreeka has no responsibility or liability for any breach by Third Parties of such Third Party License Terms, and that you are solely responsible therefor.</p>
          <p><strong>10. FEES</strong></p>
          <p>Yreeka may from time to time charge fees for the use of the Service.Our fees, if any, are available on the Service.Unless otherwise stated, our fees are quoted in RSA (Rand). You and/or your organization are responsible for paying all fees associated with the use of the Service through your account, and for all applicable taxes.</p>
          <p>In addition, Third Parties may charge fees for Third Party Content that they provide through the Service. Certain taxes and government charges may be payable in relation to purchases you make from Third Parties through the Service. Yreeka is not responsible for any transaction between you and such Third Parties, and as a result we have no control over the quality, safety or legality of the items or services advertised, the truth or accuracy of any descriptions, or the ability of sellers to sell or buyers to pay.We accept no responsibility for such taxes and government charges.</p>
          <p><strong>11. INTERNATIONAL USE</strong></p>
          <p>Recognizing the global nature of the internet, you agree to comply with all local rules regarding online conduct and acceptable content.Specifically, you agree to comply with all applicable laws regarding the transmission of technical data in the country, jurisdiction, state and locality in which you reside. Yreeka makes no representations that the Service is appropriate or available for use in your location.Access to the Service from your jurisdiction is at your own risk, and you are responsible for compliance with local law.</p>
          <p><strong>12. LINKS</strong></p>
          <p>On teachfolk we may provide, or third parties may provide, links to other world wide web sites or resources.Because Yreeka has no control over such sites and resources, you acknowledge and agree that Yreeka is not responsible for the availability of such external sites or resources, and does not endorse and is not responsible or liable for any content, advertising, products, or other materials on or available from such sites or resources.You further acknowledge and agree that Yreeka shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such site or resource.</p>
          <p><strong>13. INDEMNITY AND RELEASE</strong></p>
          <p>You agree to defend, indemnify and hold harmless Yreeka (including teachfolk) and its subsidiaries, agents, managers, and other affiliated companies, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney’s fees) arising from: (i) your use of and access to the Service; (ii) your violation of any term of these Terms of Use, including without limitation, your breach of any of the representations and warranties above; (iii) your violation of any third party right, including without limitation any right of privacy, publicity rights or intellectual property rights; (iv) your violation of any law, rule or regulation of the Republic of South Africa or any other country; (v) any claim or damages that arise as a result of any of your User Content; (vi) any other party’s access and use of the Service with your unique username, password or other appropriate security code; and (vii) any dispute you have with one or more of our users or any Third Party providing goods and services through the Service.</p>
          <p><strong>14. DISCLAIMERS</strong></p>
          <p>YOU EXPRESSLY UNDERSTAND AND AGREE THAT:</p>
          <p>A.YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK.THE SERVICE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS.YREEKA, AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AFFILIATES AND AGENTS EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, PERFORMANCE AND NON-INFRINGEMENT, OR OF AVAILABILITY OR RESULTS.YREEKA DOES NOT WARRANT THAT (I) YREEKA WILL MEET YOUR SPECIFIC REQUIREMENTS, (II) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (III) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE, (IV) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH YREEKA WILL MEET YOUR EXPECTATIONS, AND (V) ANY ERRORS IN THE SERVICE WILL BE CORRECTED.YREEKA IS NOT RESPONSIBLE OR LIABLE IN ANY MANNER FOR ANY USER CONTENT OR THIRD PARTY CONTENT.ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS ACCESSED AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR AND HEREBY WAIVE ANY AND ALL CLAIMS, CAUSES OF ACTION, AND DAMAGES THAT ARISE FROM OR RELATE TO SUCH MATERIAL.YREEKA ASSUMES NO RESPONSIBILITY FOR ANY ERROR, OMISSION, INTERRUPTION, DELETION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMMUNICATIONS LINE FAILURE, THEFT OR DESTRUCTION OR UNAUTHORIZED ACCESS TO, OR ALTERATION OF, USER COMMUNICATIONS.YREEKA IS NOT RESPONSIBLE FOR ANY TECHNICAL MALFUNCTION OR OTHER PROBLEMS OF ANY TELEPHONE NETWORK OR SERVICE, COMPUTER SYSTEMS, SERVERS OR PROVIDERS, COMPUTER OR MOBILE PHONE EQUIPMENT, SOFTWARE, FAILURE OF EMAIL OR PLAYERS ON ACCOUNT OF TECHNICAL PROBLEMS OR TRAFFIC CONGESTION ON THE INTERNET OR AT ANY SITE OR COMBINATION THEREOF, INCLUDING INJURY OR DAMAGE TO A USER’S OR TO ANY OTHER PERSON’S COMPUTER, MOBILE PHONE, OR OTHER HARDWARE OR SOFTWARE, RELATED TO OR RESULTING FROM USING OR DOWNLOADING MATERIALS IN CONNECTION WITH THE WEB AND/OR IN CONNECTION WITH THE SERVICE.</p>
          <p>B.UNDER NO CIRCUMSTANCES WILL YREEKA BE RESPONSIBLE FOR ANY LOSS OR DAMAGE, INCLUDING ANY LOSS OR DAMAGE TO ANY USER CONTENT OR PERSONAL INJURY OR DEATH, RESULTING FROM ANYONE’S USE OF THE SERVICE, ANY USER CONTENT POSTED ON OR THROUGH THE SERVICE, OR ANY INTERACTIONS BETWEEN USERS OF THE SERVICE, WHETHER ONLINE OR OFFLINE. YOU POST USER CONTENT ON THE SERVICE AT YOUR OWN RISK.</p>
          <p>C.ANY CONTENT DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS DONE AT YOUR OWN DISCRETION AND RISK AND, YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.</p>
          <p>D.NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED THROUGH OR FROM YREEKA SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE TERMS OF USE.</p>
          <p>E.YREEKA RESERVES THE RIGHT TO CHANGE ANY AND ALL TEACHFOLK AND OTHER SITE CONTENT, SOFTWARE AND OTHER ITEMS USED OR CONTAINED IN OR ON THE SERVICE AND ANY SERVICES OFFERED THROUGH THE SERVICE AT ANY TIME WITHOUT NOTICE.</p>
          <p>F.REFERENCE TO ANY PRODUCTS, SERVICES, PROCESSES OR OTHER INFORMATION, BY TRADE NAME, TRADEMARK, MANUFACTURER, SUPPLIER OR OTHERWISE DOES NOT CONSTITUTE OR IMPLY ENDORSEMENT, SPONSORSHIP OR RECOMMENDATION THEREOF, OR ANY AFFILIATION THEREWITH, BY YREEKA.</p>
          <p><strong>15. LIMITATION OF LIABILITY</strong></p>
          <p>IN NO EVENT SHALL YREEKA, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT; (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR SERVICES; (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN; (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR SERVICES, (IV) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY; AND/OR (V) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT THE COMPANY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, YREEKA WILL NOT PAY ANY FEES. <em>LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER, AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE: (i) AMOUNT PAID, IF ANY, BY YOU TO YREEKA FOR THE SERVICE DURING THE TWELVE MONTHS PRIOR TO THE DATE THE CLAIM(S) AROSE; OR (ii) THE SUM OF ONE THOUSAND DOLLARS ($1,000).THE EXISTENCE OF MORE THAN ONE CLAIM SHALL NOT EXPAND SUCH LIMIT.</em>YOU ACKNOWLEDGE THAT IF NO FEES ARE PAID TO YREEKA FOR THE SERVICE, YOU SHALL BE LIMITED TO INJUNCTIVE RELIEF ONLY, UNLESS OTHERWISE PERMITTED BY LAW, AND SHALL NOT BE ENTITLED TO DAMAGES OF ANY KIND FROM THE YREEKA PARTIES, REGARDLESS OF THE CAUSE OF ACTION. THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION.</p>
          <p>YOU SPECIFICALLY ACKNOWLEDGE THAT YREEKA SHALL NOT BE LIABLE FOR CONTENT OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY AND THAT THE RISK OF HARM OR DAMAGE FROM THE FOREGOING RESTS ENTIRELY WITH YOU.</p>
          <p><strong>16. NOTICE</strong></p>
          <p>You acknowledge that Yreeka may establish general practices and additional limits concerning use of the Service. Notices to you may be made via email or website posting. Yreeka may also provide notices of changes to the Terms of Use or other matters by displaying notices or links to notices to you generally on Yreeka or teachfolk. You agree that all communications we provide to you electronically satisfy any legal requirement that such communications be in writing or be delivered in a particular manner and you agree to keep your account contact information current.</p>
          <p><strong>17. GENERAL</strong></p>
          <p><em>Independent Contractors.</em>You and Yreeka (teachfolk) are independent contractors, and no agency, partnership, joint venture, employee-employer or franchisor-franchisee relationship is intended or created by these Terms of Use.</p>
          <p><em>Entire Agreement</em>.The Terms of Use, the information provided to you and by you during the sign-up process and during the upgrade/downgrade of your account, and any other documents that are incorporated into these Terms of Use by reference, constitute the entire agreement between you and Yreeka and govern your use of the Service, superseding any prior agreements between you and Yreeka (including, but not limited to, any prior versions of these Terms of Use). You also may be subject to additional terms and conditions that may apply when you use other Yreeka services, Third Party Content, third-party software or third-party services offered through the Service.In the event of any conflict between the terms of these Terms of Use and an Agreement, the terms of the Agreement will prevail.</p>
          <p><em>Choice of Law and Forum</em>.These Terms of Use will be governed<span className="light">&nbsp;by and construed in&nbsp;</span><span className="light">accordance with the laws of The Republic of South Africa. The parties further irrevocably&nbsp;</span><span className="light">agree to submit to the exclusive jurisdiction of the courts of The Republic of South Africa.</span></p>
          <p><span className="light"><em>Force Majeure</em>. Except for the obligation to pay money, neither party will be liable for any&nbsp;</span><span className="light">failure or delay in its performance under this Agreement due to any cause beyond its reasonable control, including acts of war, acts of God, earthquake, flood, weather conditions, embargo, riot, epidemic, acts of terrorism, acts or omissions of vendors or suppliers, equipment failures, sabotage, labor shortage or dispute, governmental act, failure of the Internet or other acts beyond such party’s reasonable control, provided that the delayed party: (i) gives the other party prompt notice of such cause; and (ii) uses reasonable commercial efforts to correct promptly such failure or delay in performance.</span></p>
          <p><span className="light"><em>No Third Party Beneficiaries</em>. The representations, warranties and other terms contained&nbsp;</span><span className="light">herein are for the sole benefit of the parties hereto and their respective successors and permitted assigns, and they shall not be construed as conferring any rights on any other persons, whether under the Contracts (Rights of Third Parties) Act 1999 or otherwise.</span></p>
          <p><em>Waiver and Severability of Terms</em>.The failure of Yreeka to exercise or enforce any right or provision of the Agreement shall not constitute a waiver of such right or provision. If any provision of the Terms of Use or incorporated documents is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties’ intentions as reflected in the provision, and the other provisions of the Terms of Use remain in full force and effect.</p>
          <p><em>Titles</em>.The section titles in the Terms of Use are for convenience only and have no legal or contractual effect.</p>
          <p><em>Assignability</em>. You may not assign your rights or obligations under these terms without Yreeka’s prior written consent. If consent is given, these Terms of Use will bind your successors and assigns. Any attempt by you to transfer your rights, duties, or obligations under these Terms of Use except as expressly provided in these Terms of Use is void. Yreeka may freely assign its rights, duties, and obligations under these Terms of Use.</p>
          <p><em>Language. </em>Yreeka may provide translations of these terms or other terms or policies. Translations are provided for informational purposes.If there is an inconsistency or conflict between a translation and the English version, the English version will control.</p>
          <p><strong>19. VIOLATIONS</strong></p>
          <p>Please report any violations of the Agreement to:</p>
          <h2>Yack</h2>
          <p>Address: 60 Marine Drive, Umhlanga</p>
          <p>Email: support@yack.co</p>
          <p>South Africa.</p>
        </article>
      </div>
      <Footer />
    </React.Fragment>
  )
}
