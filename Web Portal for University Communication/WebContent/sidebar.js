	$(document).ready(function(){
		$('#sidebar-btn-course').click(function(){
			$('#sidebar-course').toggleClass('visible');
		});
		$('#sidebar-btn-exams').click(function(){
			$('#sidebar-exams').toggleClass('visible');
		});
		$('#sidebar-btn-resources').click(function(){
			$('#sidebar-resources').toggleClass('visible');
		});
		$('#sidebar-btn-phd').click(function(){
			$('#sidebar-phd').toggleClass('visible');
		});
		$('#sidebar-btn-alumni').click(function(){
			$('#sidebar-alumni').toggleClass('visible');
		});
		$('#sidebar-btn-announcements').click(function(){
			$('#sidebar-announcements').toggleClass('visible');
		});
	});