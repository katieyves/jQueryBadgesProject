$(function() {

  // your code will go here
  $.ajax({
  	url: 'https://www.codeschool.com/users/EkaterinaIV.json',
  	dataType: 'jsonp',
  	success: function(response) {
  		let badges = document.getElementById('badges');
  		for (i = 0; i < response.courses.completed.length; i++) {
  			badges.innerHTML += "<div class='course'></div>";
  		}
  		let coursesDivs = document.getElementsByClassName('course');
  		for (i = 0; i < coursesDivs.length; i++) {
  			coursesDivs[i].innerHTML = '<h3>' + response.courses.completed[i].title + '</h3><img src="' + response.courses.completed[i].badge + '"><a target="_blank" class="btn btn-primary" href="' + response.courses.completed[i].url + '">See Course</a>';
  		}
  	}
  })
});
