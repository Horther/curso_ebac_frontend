function Pessoa(nome, idade, profissao, estadoCivil){
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    this.estadoCivil = estadoCivil;
}


function Estudante(nome, idade,  profissao, estadoCivil, curso, semestre) {
    let _semestre = semestre;
    
    this.curso = curso;
    

    this.getSemestre = function (){
        return _semestre;
    }

    this.setSemestre = function(semAtual){
        _semestre = semAtual;
    }

    Pessoa.call(this, nome, idade, profissao, estadoCivil);
}

function Funcionario(nome, idade, profissao, estadoCivil, cargo, salario){
    let _salario = salario;
    let _cargo = cargo;
    
    
    this.getCargo = function (){
        return _cargo;
    }
    this.getSalario = function(){
        return _salario;
    }

    this.setCargo = function(funcao){
        if(funcao === "string") {
            _cargo = funcao;
        }
    }

    this.setSalario = function(valor){
        if(valor === "number"){
            _salario = valor;
        }

    }

    Pessoa.call(this, nome, idade,profissao, estadoCivil);
    
}



const pessoa1 = new Estudante("Carlos", 18,"estudante", "solteiro", "historia", 3);

pessoa1.setSemestre(3);
console.log(pessoa1);
console.log(pessoa1.getSemestre());

const pessoa2 = new Funcionario("Kleber", 22, "Gerente", "Casado", "Gerente de Vendas", 10000);
console.log(pessoa2);
console.log(pessoa2.getCargo());
console.log(pessoa2.getSalario());

