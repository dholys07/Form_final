  // Fungsi untuk membuat baris tabel baru
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
        const canvas = document.createElement('canvas');
        canvas.id = `canvas-${row.id}`;
        canvas.classList.add('canvas_1');
        cell.appendChild(canvas);
      } else if (index === 2) {
        const input = document.createElement('input');
        input.type = 'file';
        input.id = `fileInput-${row.id}`;
        input.classList.add('file-input_1');
        cell.appendChild(input);
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
        const canvas = document.createElement('canvas');
        canvas.id = `canvas-${row.id}`;
        canvas.classList.add('canvas_2');
        cell.appendChild(canvas);
      } else if (index === 2) {
        const input = document.createElement('input');
        input.type = 'file';
        input.id = `fileInput-${row.id}`;
        input.classList.add('file-input_2');
        cell.appendChild(input);
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