function secondsToMinutes(time){
  const minutes = Math.floor(time/60); //minutos com numeros arredondados
  const seconds = Math.floor(time % 60);
  return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;  //slice -2 pega a strig de tempo de trás pra frente sem deixar acumular números na tela.
}

const path = function (file) {
  //trazer arquivos do files
  return `files/${file}`;
};

export { path, secondsToMinutes };
