
$(document).ready(function() {
  const apiUrl ='https://data-cv.herokuapp.com/db';
  
  let getJSON = function(apiUrl, callback) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', apiUrl, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
        let status = xhr.status;
        if (status === 200) {
          callback(null, xhr.response);
        } else {
          callback(status, xhr.response);
        }
      };
      xhr.send();
  };

  let loadMyData = function (myData) {
    let ed = (myData.education.length); // Education
    let sk =(myData.skills.length);  // Skills 
    let li =(myData.links.length);   // Links (last one is a pdf file)
    let ex =(myData.experience.length); // Experience
    let pf =(myData.portfolio.length); // Projects
    let output = "";
    
    for (i = 0; i < sk; i++) {
        output += "<div class='col-lg-4 col-md-4 col-sm-12'><div class='skill'><div class='skill__title'><span class='skill__title--span'>";
        
        if (i==0) 
            output += " Front-End </span> <i class='skill__icon far fa-file-code'></i></div>";
        else 
            if (i==1) output += " Back-End </span> <i class='skill__icon fas fa-cogs'></i></div>";
        else 
            if (i==2) output += " DBMS </span> <i class='skill__icon fas fa-database'></i></div>";
        
        output += "<ul class='skill__list u-list-no-style'>"
        
        for(j = 0; j < sk; j++) {
            output +="<li>"+ myData.skills[i][j]+"</li>";
        }
        output += "</ul></div></div>";
    }

    $('#skills').append(output);

    output = "";
    for(i = 0; i < ed; i++) {
      if (i==0)
        output+= "<div class='row'> <div class='col-md-3 align-center'><h3 class='heading-tertiary'><i class='fa fa-graduation-cap'></i> Education</h2><br></div></div>";
      output += "<div class='resume__items row u-padding-bottom'>";
      output += "<div class='col-md-3'>";
      output += "<p class='resume__items--institution'> "+ myData.education[i].institution + " </p>";
      output += "<p class='resume__items--location'> "+ myData.education[i].location + " </p></div>";
      output += "<div class='col-md-6'><p class='resume__items--degree u-justify-text'> "+ myData.education[i].description + " </p></div>";
      output += "<div class='col-md-3'><p class='resume__items--year'> "+ myData.education[i].started_at + " </p> <p class='resume__items--year'> "+ myData.education[i].ended_at + " </p> </div></div>";

    }
    $('#resumeEd').append(output);
    output = "";
    
    for(i = 0; i < ex; i++) {
    if (i==0)
      output+= "<div class='row'> <div class='col-md-3 align-center'><h3 class='heading-tertiary'><i class='fa fa-briefcase'></i> Experience </h2><br></div></div>";

      output += "<div class='resume__items row u-padding-bottom'>";
      output += "<div class='col-md-3'>";
      output += "<p class='resume__items--role'> " + myData.experience[i].role + " </p>";
      output += "<p class='resume__items--company'> "+ myData.experience[i].company + " </p>";
      output += "<p class='resume__items--location'> "+ myData.experience[i].location+ " </p></div>";
      output += "<div class='col-md-6'><p class='resume__items--description u-justify-text'>"+ myData.experience[i].description + "</p></div>";
      output += "<div class='col-md-3'><p class='resume__items--year'> "+ myData.experience[i].started_at + " - " + myData.experience[i].ended_at +" </p>";
      output += "<p class='resume__items--duration'> "+ myData.experience[i].duration + " </p></div></div>";                
    } 

    $('#resumeEx').append(output);
    output="";

    output += "<div class='row align-center'>";
      for (j = 0; j < pf; j++) {
        output += "<div class='col-md-4 align-center'><div class='card text-center'>";
        output += "<div class='card__side card__side--front'>";
        output += "<h4 class='card__heading'> <span class='card__heading-span'>" + myData.portfolio[j].title+ "</span></h4>";
        output += "<div class='card__details'>" + myData.portfolio[j].summary+ "</div></div>";
        output += "<div class='card__side card__side--back'>";
        output += "<div class='card__details'><ul class='card__list'>";
        let t = myData.portfolio[j].technologies.length;
        for (k = 0; k < t; k++) {
            output+= " <li class='portfolio__tech'> <i class='fas fa-tag'></i> "+ myData.portfolio[j].technologies[k]+" </li> ";
        }
        output += "</div>" // div card detail, div card side back
        let pId = '#popup-'+j;
        output += "<a href='"+ pId + "' class='btn btn--grad card__button'> Overview </a>";
        output += "</div>"
        output +="</div></div>"; // div card,  div md 4, 
      }
      output += "</div>" // Row

    $('#portfolio').append(output);
    output="";

    for(i = 0; i < pf; i++) {
      let popId = "popup-"+ i;
      output += "<div class='popup container' id="+popId+">";
      output += "<div class='popup__content row'>";
      output += "<div class='popup__left col-sm-12'>";
        output += "<a href='#section-portfolio' class='popup__close'>&times;</a>";
        output += "<img src='"+ myData.portfolio[i].image_path +"' alt='"+ myData.portfolio[i].title +"' class='popup__img'>";
      output += "</div>"
      output += "<div class='popup__right col-sm-12'>";
        output += "<h4 class='popup__right--heading text-center'>" + myData.portfolio[i].title+ "</h4>";
        output += "<div class='popup__text'>" + myData.portfolio[i].description;
        output += "<br><br><ul>";      
      let t = myData.portfolio[i].technologies.length;
        for (k = 0; k < t; k++) {
            output+= " <li class='popup__right--tech'> <i class='fas fa-tag'></i> "+ myData.portfolio[i].technologies[k]+" </li> ";
        }
        output += "</ul>";
      output += "</div>";
      output += "</div>";
      output += "</div>";
      output += "</div>";
    }
    
    $('#popups').append(output);

  };

  getJSON(apiUrl,
  function(err, data) {
    if (err !== null) {
      alert('Something went wrong: ' + err);
    } else {
      loadMyData(data);
    }
  });

   
});
