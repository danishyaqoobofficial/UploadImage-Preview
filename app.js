let input_file = document.getElementById('input_file');
let image = document.getElementById('image');
let cancle = document.getElementById('cancle');
let image_preview = document.getElementById('image_preview');


input_file.addEventListener('change', (e) =>{
    image_preview.classList.add('!block');
    if (e.target.files.length == 0) {
        return;
    }else{
        let temUrl = URL.createObjectURL(e.target.files[0]);
        image.src = temUrl;
    }
})

cancle.addEventListener('click', () =>{
    image_preview.classList.remove('!block');
});