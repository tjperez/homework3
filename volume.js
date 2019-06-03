

document.getElementById('submit').onclick = volume_sphere;

//calculates the volume 

function volume_sphere() {
    var radius = document.getElementById('radius').value;
    radius = Math.abs(radius);
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('volume').value = volume.toFixed(2);

    return false;
}



