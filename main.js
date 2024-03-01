//Mettre du code HTML dans une variable
//Utiliser cette variable avec .insertAdjacentHTML
//Et mettre tout ça dans une fonction pour afficher plusieurs lignes

const todoList = [
  {
    item: "Je suis une todo-une tâche à faire",
    done: false,
  },
];

const ajouterToDo = (todo) => {
  const list = document.querySelector("li");
  console.log(list);

  const text = `<li class="item"><strong>${todo}</strong></li>`;

  console.log(text);

  const position = "afterend";

  list.insertAdjacentHTML(position, text);
};

ajouterToDo("Faire les courses");
ajouterToDo("Faire le ménage");
ajouterToDo("Faire la vaisselle");
