// crier un script js  pour filter un tableau et calcule des statiques exmeple
const data = [
  { name: 'Alice', age: 30, score: 85 },
  { name: 'Bob', age: 25, score: 90 },
  { name: 'Charlie', age: 35, score: 80 },
];

// Filtrer les utilisateurs ayant un score supérieur à 85
const filtered = data.filter(user => user.score > 85);

// Calculer la moyenne d'âge des utilisateurs filtrés
const averageAge = filtered.reduce((sum, user) => sum + user.age, 0) / filtered.length;

console.log('Utilisateurs filtrés:', filtered);
console.log('Moyenne d\'âge:', averageAge);