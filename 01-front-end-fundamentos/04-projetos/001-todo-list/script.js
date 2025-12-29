const itens = document.querySelectorAll(".item");
//querySelectorAll serve para selecionar todos os blocos

const btnAdd = document.querySelector("#btnAdd");
const input = document.querySelector("#novaTarefa");
const fieldset = document.querySelector("fieldset");

let contadorId = 3;

itens.forEach(item => {
    const box = item.querySelector(".box");
    const task = item.querySelector(".task");

    box.addEventListener("change", () => {
        task.classList.toggle("task-checked");
    });
})


//adicionar uma tarefa
btnAdd.addEventListener("click", () => {
    const texto = input.value.trim();

    if(texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    //cria elementos 
    const div = document.createElement("div");
    div.classList.add("item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("box");
    checkbox.id = `task${contadorId}`;

    const label = document.createElement("label");
    label.classList.add("task");
    label.setAttribute("for",checkbox.id);
    label.textContent = texto;

    checkbox.addEventListener("change", () => {
        label.classList.toggle("task-checked");
    });

    //monta a estrutura
    div.appendChild(checkbox);
    div.appendChild(label);
    fieldset.appendChild(div);

    input.value = "";
    contadorId++;
});

//lembrar de refatorar esse codigo e deixar ele mais limpo possibel 