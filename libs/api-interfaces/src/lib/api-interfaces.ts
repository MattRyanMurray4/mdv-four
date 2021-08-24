export interface Patient {
  id: string;
  name: string;
  insurance: string;
  birthday: string;
  diagnosis: string;
  txInterventions: string;
  txEpisode: number;
}

export const emptyPatient = {
  id: '',
  name: '',
  insurance: '',
  birthday: '',
  diagnosis: '',
  txInterventions: '',
  txEpisode: 0,
};
