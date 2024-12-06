let HasilPrediksi;

async function loadModel(modelUrl) {
  try {
    const model = await tf.loadLayersModel(modelUrl);
    return model;
  } catch (error) {
    console.error('Error loading model:', error);
    alert('Terjadi kesalahan saat memuat model. Silakan coba lagi.');
    return null;
  }
}

async function predictImage(model, imageData, resultDiv, classes) {
  try {
    const tensor = tf.browser.fromPixels(imageData)
      .resizeBilinear([224, 224])
      .expandDims(0)
      .toFloat()
      .div(255.0);

    const predictions = await model.predict(tensor);
    const classProbabilities = predictions.dataSync();
    const maxProbability = Math.max(...classProbabilities);
    const classIndex = predictions.argMax(1).dataSync()[0];

    if (maxProbability < 0.99) {
      resultDiv.textContent = "Evident Tidak Sesuai ";
      const model2Prediction = await predictImage(model2, imageData, resultDiv, classes2);
    } else {
      HasilPrediksi = `${classes[classIndex]}`;
    }
  } catch (error) {
    //console.error('Error during prediction:', error);
    resultDiv.textContent = 'Terjadi kesalahan dalam prediksi. Silakan coba lagi.';
  }


    
}





// Ganti dengan URL model Anda
const modelUrl1 = '/model_1/model1.json';
const modelUrl2 = '/model_2/model2.json';

// Kelas untuk setiap model
const classes1 = ['FCC', 'FDM', 'PC POS', 'RACK IT', 'ROUTER', 'SWITCH', 'UPS'];
const classes2 = ['ATG CONSOLE', 'ATG PROBE', 'DOCKING', 'EDC', 'MONITOR', 'ONT'];

// Load model
Promise.all([loadModel(modelUrl1), loadModel(modelUrl2)])
  .then(([model1, model2]) => {

    const namaperangkat_uji = document.querySelectorAll('.perangkat');
    const namaperangkat_uji2 = document.querySelectorAll('.perangkat2');
    // Semua input file
    const fileInputs1 = document.querySelectorAll('.file-input_1');
    const fileInputs2 = document.querySelectorAll('.file-input_2');

    // Semua canvas
    const canvases1 = document.querySelectorAll('.canvas_1');
    const canvases2 = document.querySelectorAll('.canvas_2');

    // Semua elemen result
    const resultDivs1 = document.querySelectorAll('.result_1');
    const resultDivs2 = document.querySelectorAll('.result_2');

    // Iterasi melalui setiap input file dan lakukan prediksi untuk model 1
    fileInputs1.forEach((input, index) => {
      input.addEventListener('change', async () => {
        const reader = new FileReader();
        reader.onload = async () => {
          const image = new Image();
          image.onload = async () => {
            const canvas = canvases1[index];
            const ctx = canvas.getContext('2d');
            const resultDiv = resultDivs1[index];

            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);

            await predictImage(model1, canvas, resultDiv, classes1);

    // Ambil nama perangkat dari elemen perangkat
    const perangkatName = namaperangkat_uji[index].textContent.trim();

    // Bandingkan hasil prediksi dengan nama perangkat
    if (HasilPrediksi === perangkatName) {
      resultDiv.innerHTML = `${HasilPrediksi}  &#9989;`;
    } else {
      resultDiv.innerHTML = `Evident Tidak sesuai (${HasilPrediksi}) &#10060;`;
    }


          };
          image.src = reader.result;
        };
        reader.readAsDataURL(input.files[0]);
      });
    });

    // Iterasi melalui setiap input file dan lakukan prediksi untuk model 2
    fileInputs2.forEach((input, index) => {
      input.addEventListener('change', async () => {
        const reader = new FileReader();
        reader.onload = async () => {
          const image = new Image();
          image.onload = async () => {
            const canvas = canvases2[index];
            const ctx = canvas.getContext('2d');
            const resultDiv = resultDivs2[index];

            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);

            await predictImage(model2, canvas, resultDiv, classes2);
              // Membersihkan canvas untuk melepaskan memori
          
           // Ambil nama perangkat dari elemen perangkat
           const perangkatName = namaperangkat_uji2[index].textContent.trim();

           // Bandingkan hasil prediksi dengan nama perangkat
           if (HasilPrediksi === perangkatName) {
             resultDiv.innerHTML = `${HasilPrediksi}  &#9989;`;
           } else {
             resultDiv.innerHTML = `Evident Tidak sesuai (${HasilPrediksi}) &#10060;`;
           }   

          };
          image.src = reader.result;
        };
        reader.readAsDataURL(input.files[0]);
      });
    });
  })
  .catch(err => {
    console.error('Terjadi kesalahan saat memuat model:', err);
    alert('Terjadi kesalahan saat memuat model. Silakan coba lagi.');
  });