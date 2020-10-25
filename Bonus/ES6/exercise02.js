const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const ages = usuarios.map(user => user.idade);
console.log(ages);

const RocketseatStaff = usuarios.filter(user => user.empresa === 'Rocketseat');
console.log(RocketseatStaff);

const GoogleStaff = usuarios.find(user => user.empresa === 'Google');
console.log(GoogleStaff);

const newUsers = usuarios
                    .map(user => {
                        user.idade *= 2;
                        return user;
                    })
                    .filter(user => user.idade <= 50);
console.log(newUsers);
