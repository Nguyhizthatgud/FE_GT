
const video = document.getElementById('video');
// const canvas = document.getElementById('canvas');
// const snap = document.getElementById('snap');

// snap.addEventListener("click", function () {
//     context.drawImage(video, 0, 0, 640, 480);
//     canvas.style.display = 'block';
// });
Promise.all([faceapi.nets.ssdMobilenetv1.loadFromUri('./models'),
// accordingly for the other models:
// await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
// await faceapi.nets.faceRecognitionNet.loadFromUri('/models')
// ...
faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
faceapi.nets.faceExpressionNet.loadFromUri('./models')
]).then(startVideo)

function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}
video.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions(canvas, displaySize)
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks().withFaceExpressions();
        //const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        console.log('detections', detections)
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        //faceapi.draw.drawDetections(canvas, resizedDetections);
        //faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        //faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
    }, 100)
});



