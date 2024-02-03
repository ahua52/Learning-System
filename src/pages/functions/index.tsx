import { Button } from "antd";
import "./index.css"
import { useState } from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons"

interface personData {
  portrait: string;
  name: string;
  des: string;
  moreDes?: string;
}
const personData = [
  {
    portrait: "Dr.Zakia Adeli.jpeg",
    name:"Dr.Zakia Adeli",
    des: "Dr. Adeli is a Senior Research Fellow at the East-West Center and the Project Implementor and Board Member of the EFA, E-Learning Platform, previously held the position of Deputy Minister of Justice for the Former Islamic Republic of Afghanistan.",
    moreDes: "Furthermore, she holds a PhD in Political Science with a specialization in International Relations and served as a Professor at Kabul University’s Department of Political Science and International Relations from 2018 to 2021.  Leveraging her extensive teaching experience spanning over a decade, she has adeptly supervised and quidded a substantial number of master’s theses, amounting to more than 300 in total. Dr. Adeli’s contributions span various government commissions, including the High Commission for the Protection of Human Rights Defenders, the High Council of Women, and the High Commission for the Prevention of Violence Against Women. She was a member of the Preparatory Contact Committee for Peace with the Taliban in 2019 and participated in several senior roles within the Government of the Islamic Republic of Afghanistan. As the head of the Department of Women Studies at the Andisheh Foundation (2015-2021), she championed women’s capacity-building efforts, advocating for women’s empowerment and gender equality. Dr. Adeli’s dedication culminated in designing and hosting the inaugural National Conference on the Status of Women in Afghanistan in 2018. In addition to her governmental roles, Dr. Adeli held influential editorial positions, including Deputy Editor-in-Chief of Negah-e Moaser and Chair of the Editorial board of Andisha-Moaser and Katib Magazine, member of editorial board for Scientific Journal of Kabul University and Middle East Research Quarterly. A prolific writer, Dr. Adeli authored three books: “UN Security Council and Afghanistan Developments” (2007), “Postcolonial Situation and the Multiplicity of Afghan Constitutions” (2015), and “First National Conference pamphlet on Studying the Status of Women in Afghanistan” (2009). She further enriched academic discourse with over thirty scientific articles, contributing to platforms such as Foreign Policy Quarterly, Middle East Research Quarterly, Afghanistan foreign Ministry Strategic Studies Quarterly, Scientific Journal of Kabul University and more."
  },
  {
    portrait: "Dr. Mirwais Balkhi.jpeg",
    name:"Dr. Mirwais Balkhi.jpeg",
    des: "Dr. Mirwais Balkhi is a Fellow at Wilson Center, Washington DC . He holds PhD in International Relations (with a specialization in West Asian Studies) from Jawaharlal Nehru University, India. ",
    moreDes: "Prior to that, Mr. Balkhi joined as a Faculty Member at Georgetown University, Qatar. Dr. Mirwais Balkhi also joined the Ministry of Education of the Islamic Republic of Afghanistan and served as the Minister of Education between 2018-2020. He worked as the Deputy Ambassador (DCM) of the Islamic Republic of Afghanistan in New Delhi and previously as the head of the Africa and Middle East Desk in the Center for Strategic Studies (CSS) and as the Chief Editor of the CSS’ Quarterly Journal of Strategic Studies at the Ministry of Foreign Affairs. Prior to joining the CSS, Dr. Balkhi was a lecturer at the Law and Political Science Faculty at the American University of Afghanistan & several other Private Universities."
  },
  {
    portrait: "Dr.Salim Saay.png",
    name:"Dr.Salim Saay",
    des:"Dr. Salim Saay is an Associate Professor and Researcher at the University of Limerick and LERO-The SFI Research Centre for Software.  prior to that Saay has worked at Kabul University and Athlone Institute of Technology.",
    moreDes:"Saay has also worked in government and various industries, including as Director of IT and Manager of AfgREN-Afghanistan Research and Education Network at the Ministry of Higher Education of Afghanistan, NATO-Science for Peace and Security, and the United Nations Development Programme (UNDP). Dr Salim Saay is also a funded investigator in the R@ISE-Research for Immersive Software Engineers at the University of Limerick. His research interests include software architecture design, software development, e-learning and organisational collaboration. Salim Saay has secured international funding for his Master’s, PhD and Postdoc studies and research. He is currently working on four international research projects."
  },
  {
    portrait: "Dr. Sardar Mohamad Rahimi.jpg",
    name:"Dr. Sardar Mohamad Rahimi",
    des:"Dr Rahimi is a  distinguished Advisory board member at   the  Education for  Afghanistan E-Learning   Platform. He     holds a  PhD in Political Geography from Tehran University   (2009) and an MA in Political Science from the same   institution (2004). ",
    moreDes:"His influence within the education sector is significant. Serving as Deputy Minister of Quality Assurance (2020-2021) and Deputy Minister of Literacy (2016-2020) at the Ministry of Education of Afghanistan, he played a pivotal role in enhancing educational standards in Afghanistan. Dr. Rahimi’s academic leadership extended to his role as the Academic member and Dean of the Faculty of Political Science and International Relations at Ibn-Sina Private University (2013-2015), where he fostered excellence in learning. As a respected educator, he lectured at several private universities in Kabul (2010-2021), imparting his insights on political science. His scholarly contributions are notable. Authoring “Afghanistan Geopolitics in the 20th Century” (2012) and co-authoring “Geopolitics and Conflict in Afghanistan” (2020), he showcased a deep understanding of geopolitical complexities. His impact goes beyond academia. Dr. Rahimi participated in international peace dialogues, including roles as a Board Member of the Peace Dialogue in Dubai (2013) and he is also a Board Member of the Afghanistan Policy Group (2012-2021). His global engagement was highlighted through the Alumni status from the International Visitor Leadership Program (IVLP) by the United States Department of State (2013)."
  },
  {
    portrait: "Sadiq Sohail.jpeg",
    name:"Sadiq Sohail",
    des:"Sadiq Sohail works at the  East-West-center and he worked as senior advisor at the  Government of Afghanistan. ",
  },
]
const curriculumnTeam = [
  {
    portrait: "Dr. Haji Mohammad Naimi.jpg",
    name:"Dr. Haji Mohammad Naimi",
    des:"Dr. Haji Mohammad Naimi was Professor of Microbiology in the faculty of Pharmacy of Kabul University from 2005-2021 and Director of quality assurance and accreditation at the ministry of higher education of Afghanistan from 2017-2020.",
    moreDes:"Dr. Naimi was graduated from faculty of Pharmacy of Kabul University in 1999 and pursued his Master education in Claude Bernard University of Lyon France in the field of Epidemiology and his PhD in Microbiology at the university of Claude Bernard, Lyon France. Now He is member of IRB committee in the ministry of public health of Afghanistan and visiting researcher at International research center for infectiology in France. He has been awarded the best researcher certificate in Afghanistan in 2014 and published many articles in the international journals in the field of Pharmacy and Microbiology."
  },
  {
    portrait: "Obaidullah Wardak.jpg",
    name:"Obaidullah Wardak",
    des: "Obaidullah Wardak is an accomplished scholar known for his outstanding achievements. He graduated as a gold medalist from Kabul University’s Faculty of Mathematics in 2012, becoming an assistant professor shortly after passing a rigorous competitive exam. He also served on the Kankor Committee until 2016, contributing to fair examinations in universities.",
    moreDes: "After obtaining his Master’s degree from South Asian University, Obaidullah returned to Kabul University, focusing on teaching and research. In 2023, he completed his Ph.D. in applied mathematics from the same institution, boasting an impressive portfolio of publications in esteemed peer-reviewed journals. His journey reflects his commitment to education and academic excellence, leaving a lasting impact in the field."
  },
  {
    portrait: "Ainuddin Asadi.jpg",
    name:"Ainuddin Asadi",
    des: "Senior Curriculum development specialist with more than 11 years of experience at the  UNESCO Kabul office, USAID Project, and Ministry of Education in developing Curriculum framework,textbooks language editing, as well as Project management, Strategic planning, Mission Support, Management, teaching, training aids, hands-on exercises and expertise in translating organizational goals into action plans that lead to results.",
    moreDes:"Holding two master’s degrees in language and literature field. (MA) in English Language and Literature from Osmania University of India in 2016. (M.A.) In Persian Language and Literature from Kabul University in 2012. B.A. in Persian language and literature from Takhar University in 2009. U.S. #Exchange Alumni of Study of the U.S. Institutes (SUSIs) for Secondary Educators. ICCR Scholar.",
  },
  {
    portrait: "Muhiburrahman Muhib.jpg",
    name:"Muhiburrahman Muhib",
    des: "Muhiburrahman Muhib is a Curriculum Editor for Pashto editing with Education for Afghanistan (EFA).Muhib has about 15 years of professional experience in the education sector in Afghanistan, the United States of America, Canada, Nigeria, Zambia, and Malawi. ",
    moreDes:"He contributed to implementing the DFATD, USAID, The World Bank, Global Affairs Canada, and other donor-funded early childhood education, primary education, literacy, institutional capacity development, technical and vocational education, and learning assessment projects with international organizations such as BBC, IRC, Chemonics International, Creative Associates International, Save the Children, The Asia Foundation, The World Bank’s EQRA Project, Moore Afghanistan-supporting Global Affairs Canada, TELUS International-The Microsoft Project, Room to Read International and School-To-School International. Muhib partnered with international organizations and developed, adapted, and translated more than a hundred titles of children’s illustrated storybooks distributed to community-based education (CBE) students in deprived provinces of Afghanistan and Afghan newcomers in the United States.Muhib holds an M.A. in Pashto Linguistics and Literature from Kabul University, where he pursued his B.A degree in the same field. He is PMP certified and speaks Pashto, Dari, and English.",
  },
  {
    portrait: "Hidayatullah Amarkhail.jpg",
    name:"Hidayatullah Amarkhail",
    des: "Hidayatullah Amarkhail academic journey took him from undergraduate studies to a doctoral degree in physics. Since 2020, I am theoretically conducting doctoral research in high-energy physics to develop the Muon Collider concept to learn more about the universe in Sivas Cumhuriyet University, Sivas, Turkey. I completed my Master of Science in Physics program at COMSATS University, Islamabad, Pakistan, in 2017. I studied the Bachelor of Science in Physics at Kabul Education University, Kabul, Afghanistan between 2009-2012.",
    moreDes:"I am a physicist with a decade of experience in teaching and developing a curriculum, publication, and research in the field of physics. In 2017- 2018 I work as the Head of the Department of Physics at Kandahar University, Kandahar, Afghanistan. In 2018, I was a member of the Physics Curriculum Developing Cluster in the Ministry of Higher Education, Kabul, Afghanistan. Here, I will develop a physics curriculum that aligns with international standards. I invite you to explore my work and to learn more.",
  }
]

export default function Efateam() {
  return (
    <>
      <div className='home-content '>
        <h2>EFA Team</h2>
        <p className="elementor-widget-text-editor">The Education for Afghanistan (EFA) platform aims to provide free and accessible online education to students in Afghanistan, particularly focusing on the K-12 curriculum. In Afghanistan, access to quality education remains a challenge, especially after the recent changes in the country’s educational landscape. We aim to bridge this gap by establishing a comprehensive e-learning platform that fosters interactive learning experiences, promotes engagement, and enables students to overcome educational barriers.</p>
        <p>&nbsp;</p>
        <div className="elementor-widget-container">
          <h2 className="elementor-heading-title elementor-size-default">EFA Advisory Board</h2>
          <ul className="ul-board-list">
            {personData.map((item) => {
              return renderBoardList(item)
            })}
          </ul>
        </div>
        <div className="elementor-widget-container">
          <h2 className="elementor-heading-title elementor-size-default">Curriculum Development Team</h2>
          <ul className="ul-board-list">
            {curriculumnTeam.map((item) => {
              return renderBoardList(item)
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
function renderBoardList(item:personData) {
   const [LoadMore, setLoadMore] = useState(false)
 return (
    <>
      <li>
        <div className="top-li">
          <div className="left-li">
            <img className="" src={getImgUrl(item.portrait)}></img>
            {item.moreDes && <Button type="text" icon={LoadMore? <CaretUpOutlined />: <CaretDownOutlined />} onClick={()=>setLoadMore(!LoadMore)}>LoadMore</Button>}
          </div>
          <div className="right-li">
            <div className="person-name">{item.name}</div>
            <div className="text">{item.des}</div>
          </div>
        </div>
        <div className="more-content text">{LoadMore && item.moreDes && <div>{item.moreDes}</div>}</div>
      </li>
    </>
 )
}

function getImgUrl(name: string) {
  return new URL(`../../assets/images/portrait/${name}`, import.meta.url).href;
}