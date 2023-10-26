import { app, db } from "./config-firebase.js";
import { doc, setDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"

let nome = document.querySelector("#tarefa")
let data = document.querySelector("#data")
let status = document.querySelector("#status")
let btnTarefa = document.querySelector("#btnTarefa")
let bloco = document.querySelector("#bloco")

async function inserirtarefa() {
    try {
        // adicionar documentos com gerador de id 
        const docRef = await addDoc(collection(db, "tarefa"), {
            nome: nome.value,
            data: data.value,
            status: status.value
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {

        console.error("ocorreu o seguinte erro: " + error)
    }

}

async function consultarTarefa(){
    const busca = query(collection(db, "tarefa"), orderby("name"));

    const resultado = await getDocs(busca);
            resultado.forEach((item) => {
    // item.data() is never underfine for query item snapshots
    console.log(item.id, " => ", item.data());

    bloco.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center mb-2"
                <div class="ms-2 me-auto">
                <strong>Nome: </strong> ${item.data().name} <br>
                <strong>Nome: </strong> ${item.data().data} <br>
                <strong>Nome: </strong> ${item.data().status} <br>
                </div>

                <div class="d-flex gap-2 justify-content-end"
                <button type="button" class="btn btn-danger" id="excluir">Excluir</button>
                <button type="button" class="btn btn-info" id="alterar">Alterar</button>
            </li>
    `
})};



btnTarefa.addEventListener("click", (evento) => {
    evento.preventDefault()
    console.log(nome.value, data.value, status.value)
    inserirtarefa()
})
