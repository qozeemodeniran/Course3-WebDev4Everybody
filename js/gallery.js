/*Name this external file gallery.js*/

function upDate(previewPic) {
    //Changing the div text
    document.getElementById('image').innerHTML = previewPic.alt;
    //changing the background
    document.querySelector('#image').style.backgroundImage = "url('" + previewPic.src + "')";



    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */

}

function unDo() {
    //Restoring the text
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    //restoring the nackground
    document.querySelector('#image').style.backgroundImage = "url('')";


    // /* In this function you should 
    //    1) Update the url for the background image of the div with the id = "image" 
    //    back to the orginal-image.  You can use the css code to see what that original URL was

    //    2) Change the text  of the div with the id = "image" 
    //    back to the original text.  You can use the html code to see what that original text was
    //    */

}