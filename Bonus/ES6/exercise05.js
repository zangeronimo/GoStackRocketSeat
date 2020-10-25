// 5.1
const arr = [1, 2, 3, 4, 5, 6];
const [a, ...y] = arr;
console.log(a);
console.log(y);

const soma = (...a) => a.reduce((total, item) => total + item);
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

// 5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
const user2 = { ...usuario, nome: 'Gabriel'};
const user3 = { ...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'} }

console.log(usuario);
console.log(user2);
console.log(user3);