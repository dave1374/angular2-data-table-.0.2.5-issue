import { Project } from './project';
export const PROJECTS: Project[] = [
  {id: 34654654, compagnie: 'x1' , envoyeur: 'Ma', dateCreation: '2016-01-05', echeanceDemande: '2016-01-06', nbrDocs: 2 , CQ: 'Carole'  , estComplete: true },
  {id: 78975435, compagnie: 'x2',  envoyeur: 'A',         dateCreation: '2016-01-06', echeanceDemande: '2016-01-07', nbrDocs: 2 , CQ: 'Carole'  , estComplete: false },
  {id: 23467546, compagnie: 'x3',  envoyeur: 'a Cogar',      dateCreation: '2016-01-07', echeanceDemande: '2016-01-08', nbrDocs: 14, CQ: 'Gunter'  , estComplete: true },
  {id: 12425673, compagnie: 'x4',                  envoyeur: 'a a', dateCreation: '2016-01-08', echeanceDemande: '2016-01-09', nbrDocs: 7 , CQ: 'Danielle', estComplete: false },
  {id: 56754343, compagnie: 'x5',                 envoyeur: 'a Westra',    dateCreation: '2016-01-09', echeanceDemande: '2016-01-11', nbrDocs: 17, CQ: 'Carole'  , estComplete: true },
  {id: 44444443, compagnie: 'x6', envoyeur: 'a Denis',        dateCreation: '2016-01-05', echeanceDemande: '2016-01-06', nbrDocs: 7 , CQ: 'Danielle', estComplete: false },
  {id: 56768791, compagnie: 'x7',                  envoyeur: 'Wen a',        dateCreation: '2016-01-05', echeanceDemande: '2016-01-06', nbrDocs: 2 , CQ: 'Danielle', estComplete: false },
  {id: 54375681, compagnie: 'x8',              envoyeur: 'a Dickerson',   dateCreation: '2016-01-05', echeanceDemande: '2016-01-06', nbrDocs: 7 , CQ: 'Danielle', estComplete: false },
  {id: 86789789, compagnie: 'x9',                  envoyeur: 'a Reading', dateCreation: '2016-01-02', echeanceDemande: '2016-01-02', nbrDocs: 6 , CQ: 'Gunter'  , estComplete: false },
  {id: 34257689, compagnie: 'x10'  ,     envoyeur: 'a Dubois',     dateCreation: '2016-01-05', echeanceDemande: '2016-01-06', nbrDocs: 9 , CQ: 'Gunter'  , estComplete: true }
];

//DATE TYPE DID NOT WORK WHEN BINDING TO A INPUT TYPE="DATE"