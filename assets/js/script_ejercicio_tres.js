const ejercicio_tres_table_radiologia = document.querySelector(
  ".ejercicio_tres_table_radiologia tbody"
);
const ejercicio_tres_table_traumatologia = document.querySelector(
  ".ejercicio_tres_table_traumatologia tbody"
);

const ejercicio_tres_table_dental = document.querySelector(
  ".ejercicio_tres_table_dental tbody"
);

function llenarTabla(tabla, sesiones) {
  let contenido = "";
  for (let consulta of sesiones) {
    contenido += `<tr>
        <td>${consulta.hora}</td>
        <td>${consulta.especialista}</td>
        <td>${consulta.paciente}</td>
        <td>${consulta.rut}</td>
        <td>${consulta.prevision}</td>
      </tr>`;
  }
  tabla.innerHTML = contenido;
}

llenarTabla(ejercicio_tres_table_radiologia, radiologia);
llenarTabla(ejercicio_tres_table_traumatologia, traumatologia);
llenarTabla(ejercicio_tres_table_dental, dental);
