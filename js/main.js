$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    // Отключение точек пагинации
    dots: false,
    margin: 48,
    // Для бесконечного прокручивания
    loop: true
  });
});


const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');




videoBtn.addEventListener('click', function () {
	videoPicture.classList.add('none');
	videoWrapper.classList.remove('video-overlay');
	videoBtn.classList.add('none');



	if (video.paused) {
		video.play()
	}

})


video.addEventListener('click', function() {

	if (video.paused) {
		video.play();

	} else {
		videoWrapper.classList.add('video-overlay');
		videoBtn.classList.remove('none');
		video.pause();
	}



})





// // Работаем с кнопкой видео
// const videoBtn = document.querySelector('#video-btn');
// const videoPicture = document.querySelector('.video__picture');
// // убираем оверлей
// const videoWrapper = document.querySelector('.video');
// // Проигрываем видео
// const video = document.querySelector('#video-file');


// videoWrapper.addEventListener('click', function() {
//   if (video.paused) {
//       videoPicture.classList.add('none');
//       videoWrapper.classList.remove('video-overlay');
//       videoBtn.classList.add('none');
//       video.play();

//   } else {

//       videoWrapper.classList.add('video-overlay');
//       videoBtn.classList.remove('none');
//       video.pause();

//     }

// });



