const insert = document.getElementById('insert')
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    
  <table>
    <tr>
      <th>Key Pressed</th>
      <th>Key Code</th>
      <th>Code</th>
    </tr>
    <tr>
      <td id="key">${e.key === "" ? "Space" : e.key}</td>
      <td id="keycode">${e.keyCode}</td>
      <td id="code">${e.code}</td>
    </tr>
  </table>
    `
})