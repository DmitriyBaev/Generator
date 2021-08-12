import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Deamon from './Deamon';
import Undead from './Undead';
import Zombie from './Zombie';
import Team from './Team';

const bowman = new Bowman('Edgar', 'bowman');
const swordsman = new Swordsman('Arthur', 'swordsman');
const magician = new Magician('Gendalf', 'magician');
const deamon = new Deamon('Max', 'deamon');
const undead = new Undead('Victor', 'undead');
const zombie = new Zombie('Valentin', 'zombie');
const team = new Team(bowman, swordsman, magician, deamon, undead, zombie);

for (const person of team) {
  console.log(person);
}
