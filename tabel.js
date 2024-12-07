function createTableRow(deviceName_1) {
  const row = document.createElement('tr');
  row.id = deviceName_1.toLowerCase().replace(/ /g, '-'); // Membuat ID unik

  const cells = ['td', 'td', 'td', 'td'];
  cells.forEach((cellType, index) => {
    const cell = document.createElement(cellType);
    if (index === 0) {
      const perangkat = document.createElement('div');
      perangkat.id = `perangkat-${row.id}`;
      perangkat.classList.add('perangkat');
      cell.appendChild(perangkat);
      perangkat.textContent = deviceName_1;
    } else if (index === 1) {
      // Scanner
      const canvas_scan = document.createElement('canvas');
      canvas_scan.id = `canvas_scan-${row.id}`;
      canvas_scan.classList.add('canvas_scan_1');
      cell.appendChild(canvas_scan);
      
      // image clasification
      const canvas = document.createElement('canvas');
      canvas.id = `canvas-${row.id}`;
      canvas.classList.add('canvas_1');
      cell.appendChild(canvas);


    } else if (index === 2) {
      // Scanner
      const label_scan = document.createElement('label');
      label_scan.for = `fileScan-${row.id}`;
      label_scan.classList.add('custom-file-scan'); // Add custom class for styling

      const img_1 = document.createElement('img');
      img_1.src = "Images/qr-code-scan.png"; // Replace with path to your icon image
      img_1.alt = "Scan image";
      label_scan.appendChild(img_1);

      const Scan_input = document.createElement('button');
      Scan_input.id = `fileScan-${row.id}`;
      Scan_input.classList.add('file-scan_1');
      Scan_input.style.display = 'none'; // Hide the default input

      cell.appendChild(Scan_input);

      // image clasification
      const label = document.createElement('label');
      label.for = `fileInput-${row.id}`;
      label.classList.add('custom-file-upload'); // Add custom class for styling

      const img = document.createElement('img');
      img.src = "Images/camera-icon.png"; // Replace with path to your icon image
      img.alt = "Upload File";
      label.appendChild(img);

      const input = document.createElement('input');
      input.type = 'file';
      input.id = `fileInput-${row.id}`;
      input.classList.add('file-input_1');
      input.style.display = 'none'; // Hide the default input





      cell.appendChild(label_scan);
      cell.appendChild(label);
      cell.appendChild(input);

      label.addEventListener('click', function() {
      input.click(); // Memicu klik pada input file yang tersembunyi
  });

  label_scan.addEventListener('click', function() {
    Scan_input.click(); // Memicu klik pada input file yang tersembunyi
});



    } else {
      const result = document.createElement('div');
      result.id = `result-${row.id}`;
      result.classList.add('result_1');
      cell.appendChild(result);
    }
    row.appendChild(cell);
  });

  document.getElementById('device-list').appendChild(row);

  // Tambahkan atribut data-id
  row.dataset.id = `row-${deviceName_1.toLowerCase().replace(/ /g, '-')}`;
}


  // Contoh penggunaan: membuat baris untuk perangkat FCC, FDM, dan seterusnya
  const devices_1 = ['FCC', 'FDM', 'PC POS', 'ROUTER', 'RACK IT', 'SWITCH', 'UPS'];
  const devices_2 = ['ATG CONSOLE', 'ATG PROBE', 'DOCKING', 'EDC', 'MONITOR', 'ONT'];


  // Fungsi untuk membuat baris tabel baru
  function createTableRow_2(deviceName_2) {
    const row = document.createElement('tr');
    row.id = deviceName_2.toLowerCase().replace(/ /g, '-'); // Membuat ID unik

    const cells = ['td', 'td', 'td', 'td'];
    cells.forEach((cellType, index) => {
      const cell = document.createElement(cellType);
      if (index === 0) {
        const perangkat2 = document.createElement('div');
        perangkat2.id = `perangkat2-${row.id}`;
        perangkat2.classList.add('perangkat2');
        cell.appendChild(perangkat2);
        perangkat2.textContent = deviceName_2;
      
      } else if (index === 1) {
         //scanner
        const canvas_scan = document.createElement('canvas');
        canvas_scan.id = `canvas_scan-${row.id}`;
        canvas_scan.classList.add('canvas_scan_2');
        cell.appendChild(canvas_scan);

        //image clasification
        const canvas = document.createElement('canvas');
        canvas.id = `canvas-${row.id}`;
        canvas.classList.add('canvas_2');
        cell.appendChild(canvas);
      } else if (index === 2) {
      // Scanner
      const label_scan = document.createElement('label');
      label_scan.for = `fileScan-${row.id}`;
      label_scan.classList.add('custom-file-scan'); // Add custom class for styling

      const img_1 = document.createElement('img');
      img_1.src = "Images/qr-code-scan.png"; // Replace with path to your icon image
      img_1.alt = "Scan image";
      label_scan.appendChild(img_1);

      const Scan_input = document.createElement('button');
      Scan_input.id = `fileScan-${row.id}`;
      Scan_input.classList.add('file-scan_2');
      Scan_input.style.display = 'none'; // Hide the default input

      cell.appendChild(Scan_input);



     // image clasification

        const label = document.createElement('label');
        label.for = `fileInput-${row.id}`;
        label.classList.add('custom-file-upload'); // Add custom class for styling
  
        const img = document.createElement('img');
        img.src = "Images/camera-icon.png"; // Replace with path to your icon image
        img.alt = "Upload File";
        label.appendChild(img);
  
        const input = document.createElement('input');
        input.type = 'file';
        input.id = `fileInput-${row.id}`;
        input.classList.add('file-input_2');
        input.style.display = 'none'; // Hide the default input


        cell.appendChild(label_scan);
        cell.appendChild(label);
        cell.appendChild(input);
  
        label.addEventListener('click', function() {
          input.click(); // Memicu klik pada input file yang tersembunyi
        });

        

      } else {
        const result = document.createElement('div');
        result.id = `result-${row.id}`;
        result.classList.add('result_2');
        cell.appendChild(result);
      }
      row.appendChild(cell);
    });

    document.getElementById('device-list').appendChild(row);



  // Tambahkan atribut data-id
  row.dataset.id = `row-${deviceName_2.toLowerCase().replace(/ /g, '-')}`;


  }
