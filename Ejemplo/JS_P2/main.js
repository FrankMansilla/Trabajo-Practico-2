let title = 'Ejemplo Cards solo HTML - CSS - JS';

// Aca cargan los datos necesario para mostrar
const person = {firstName:"John", lastName:"Doe", Age:46};
let array_persons = []

text = ''
for (let i = 0; i < 12; i++) {
    text += '<div class="flip-container"> \
                <div class="card"> \
                    <div class="frente"> \
                        <h3>' + person['firstName'] + '<h3/> \
                    </div> \
                    <div class="dorso"> \
                        <h3>' + person['lastName'] + '</h3> \
                        <p>' + person['Age'] + '</p> \
                        <button>Botón</button> \
                    </div> \
                </div> \
            </div>';
  }

document.getElementById("navtitle").innerHTML = title
document.getElementById("cards").innerHTML = text
