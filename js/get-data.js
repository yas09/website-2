$(document).ready(function(){
        
        data = [
         {   
             "resume-file": "/docs/YasminDaPazResume.pdf",
             "social": 
             {
                 "email":"mailto:paz.yasminl@gmail.com",
                 "github":"www.github.com/yas09",
                 "linkedin":"www.linkedin.com/yasmin-paz",
             },
             "education": 
             [
             {
                 
                 "institution": "Federal University of Pará",
                 "degree": "BSc in Computer Science",
                 "location": "Pará, Brazil",
                 "time_end": "2019",
                 "description":"BSc in Computer Science."
                 
             }
             ],
             "skills": 
             [
                 ["HTML5","CSS/SASS","JavaScript","VueJs"],
                 ["PHP","Java","Python","C#"],
                 ["MySQL","Oracle Database","Sqlite"]
             ],

             "experience": [
                 {
                     "role": "Front-End Developer",
                     "company": "Verra Mobility",
                     "time_start": "Feb 2020",
                     "time_end": "Mar 2020",
                     "location": "Mesa, Arizona",
                     "duration": "1 month",
                     "description":"Contributed to the development of a traffic monitoring solution alternative to improve how violation events were processed and how the resulting data was analyzed. Technologies included not limited to: .NET, Identity Server, VueJs, Oracle Database 19c."
                 },

                 {
                     "role": "Software Developer",
                     "company": "Court of Auditors of Municipalities of Pará",
                     "time_start": "Mar 2018",
                     "time_end": "Feb 2019",
                     "location": "Pará, Brazil",
                     "duration": "11 months",
                     "description":"Worked with Yii2 and Grails 3 frameworks developing, testing and debugging code. Other technologies included Git, Oracle SQL Developer, Oracle Data Modeler, JavaScript, HTML, CSS, Bootstrap, PHP, Docker, and osTicket. Successfully developed and deployed an incident management process to better handle problems and requests in the IT department. The process was capable of improving customer satisfaction by 30% and reducing SLA’s by 60%."
                 },
                 
                 {
                     "role": "Student in Research Project",
                     "company": "Federal University of Pará",
                     "time_start": "Mar 2017",
                     "time_end": "Sept 2017",
                     "location": "Pará, Brazil",
                     "duration": "6 months",
                     "description":"Worked on a team which researched, designed and developed open-source cross platform solutions directed at people with restrictions of movement, speech or writing. Helped conduct user-focused testing to evaluate the usability of applications adapted to certain forms of disabilities. Technologies used included Cordova, JavaScript, HTML, CSS and Unity.            "
                 },

                 {
                     "role": "Student in Research Project",
                     "company": "Federal University of Pará",
                     "time_start": "Mar 2016",
                     "time_end": "Dec 2016",
                     "location": "Pará, Brazil",
                     "duration": "9 months",
                     "description":"Gathered large amounts of data and created graph visualizations to represent a network revolving around the subject of national museums. Based on Graph Theory and SEO concepts, the project aimed to optimize the network’s visibility and promote its cultural content. Technologies used included Python and Gephi."
                 }

             ],
             "portfolio": [
                 {
                     "title": "NATI",
                     "subtitle": "ITS FRONT-END FOR AN IT DEPARTMENT",
                     "thumb": "img/portfolio/thumb-img-1.png",
                     "image": "img/portfolio/img-1.png",
                     "technologies": ["HTML", "CSS", "Bootstrap"],
                     "description":"Designed and rebranded a front-end for a newly introduced IT department's issue tracking system. The new look facilitated the utilization of the tool by users from different technology aptitude levels and was fundamental to bring more people on board with the new tool."
                 },
                 {
                     "title": "Pesquisa de Satisfacao",
                     "subtitle": "Customer Survey Routine",
                     "thumb": "img/portfolio/img-2.png",
                     "image": "img/portfolio/img-2.png",
                     "technologies": ["MySQL", "PHP", "HTML", "CSS"],
                     "description":"Created a customer survey with a quick and simple form to gather user feedback and evaluation. Each evaluation was associated with an user request/ticket. With cron jobs and Mysql procedures, automated email notifications and reminders to boost the data acquired through user feedback."
                 },
                 {
                     "title": "Gerenciamento de Chamados",
                     "subtitle": "Tracking performance and User Satisfaction",
                     "thumb": "img/portfolio/img-3.png",
                     "image": "img/portfolio/img-3.png",                        
                     "technologies": ["Yii2", "MySQL", "Bootstrap", "HTML5", "CSS"],
                     "description":"As part of a project to improve incident management processes in an IT department where I worked, I created an internal web application through which managers could track user satisfaction, employee performance and other kinds of relevant data."
                 },
                 {
                     "title": "Flapbird 2D Minigame",
                     "subtitle": "Simple Unity Minigame",
                     "thumb": "img/portfolio/img-4.png",
                     "image": "img/portfolio/img-4.png",
                     "technologies": ["Unity","C#"],
                     "description": "Flapbird-like 2D minigame with flying enemies as obstacles."
                 },
                 {
                     "title": "Sphere 3D Minigame",
                     "subtitle": "Simple Unity Minigame",
                     "thumb": "img/portfolio/img-5.png",
                     "image": "img/portfolio/img-5.png",
                     "technologies": ["Unity","C#"],
                     "description": "Simple collecting minigame made with Unity."
                 }
             ]
         }
         ];
         var countEd = 1;
         var countSk = 3;
         var countXp = 4;
         var countPort = 5;
         var output = "";
         var skillElem = document.getElementById("skill-area");
         var resumeExpElem = document.getElementById("resumeExp");
         var resumeEduElem = document.getElementById("resumeEdu");
         var portfolioElem = document.getElementById("portfolio-area");
        
         
         for (i = 0; i < countSk; i++) {

             output += "<div class='col-1-of-3'><div class='skill'><div class='skill__title'><h3 class='u-strong'>";
             if (i==0) output += " Front-End </h3><i class='skill__icon far fa-file-code'></i></div>";
             else if (i==1) output += " Back-End </h3><i class='skill__icon fas fa-cogs'></i></div>";
             else if (i==2) output += " DBMS </h3><i class='skill__icon fas fa-database'></i></div>";
             output+= "<ul class='skill__list u-list-no-style'>"

             for(j=0; j < data[0].skills[i].length; j++) {
                 output+="<li>"+ data[0].skills[i][j]+"</li>";
             }
             output += "</ul></div></div>";
         }
         skillElem.innerHTML += output;
         output="";

         var count = 0;
         while(count<countEd) {
             output = "<div class='resume__items row'>";
             output += "<div class='col-1-of-4'>";
             output += "<p class='resume__items--institution'> "+ data[0].education[count].institution + " </p>";
             output += "<p class='resume__items--location'> "+ data[0].education[count].location + " </p></div>";
             output += "<div class='col-2-of-4'><p class='resume__items--degree u-justify-text'> "+ data[0].education[count].description + " </p></div>";
             output += "<div class='col-1-of-4'><p class='resume__items--year'> "+ data[0].education[count].time_end + " </p> </div></div>";

             resumeEduElem.innerHTML = output;
             count++;
         }
         output="";

         for (i = 0; i < countXp; i++) {
             output += "<div class='row'>";
             output += "<div class='col-1-of-4'>";
             output += "<p class='resume__items--role'> " + data[0].experience[i].role + " </p>";
             output += "<p class='resume__items--company'> "+ data[0].experience[i].company + " </p>";
             output += "<p class='resume__items--location'> "+ data[0].experience[i].location+ " </p></div>";
             output += "<div class='col-2-of-4'><p class='resume__items--description u-justify-text'>"+ data[0].experience[i].description + "</p></div>";
             output += "<div class='col-1-of-4'><p class='resume__items--year'> "+ data[0].experience[i].time_start + " - " + data[0].experience[i].time_end +" </p>";
             output += "<p class='resume__items--duration'> "+ data[0].experience[i].duration + " </p></div></div>";                
         }
         resumeExpElem.innerHTML = output;
         output="";

         for (i = 0; i < countPort; i++) {
             output += "<div class='row'>";
             output += "<div class='col-1-of-2'>";
             output += "<div id='img-"+ (i + 1) + "' class=''><img class='portfolio__pic' src='";
             output += data[0].portfolio[i].thumb + "' alt=' "+ data[0].portfolio[i].subtitle + "' ></div></div>"
             output += "<div class='col-1-of-2  portfolio__card'><h3 class='heading-tertiary u-align-initial'>" + data[0].portfolio[i].subtitle + "</h3> <p class='paragraph-sm'>";
             output += data[0].portfolio[i].description +"</p>";

             for (j=0; j< data[0].portfolio[i].technologies.length; j++) {
                 output+= " <span class='portfolio__tech'> <i class='fas fa-tag'></i> "+data[0].portfolio[i].technologies[j]+" </span> ";
             }
             output+="</div></div>";
         }
         portfolioElem.innerHTML = output;
         output="";
     });
