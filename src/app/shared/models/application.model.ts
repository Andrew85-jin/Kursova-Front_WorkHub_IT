export interface Application {
  id: number;
  candidateName: string;
  position: string;
  email: string;
  experience: string;
  status: 'Новий' | 'Переглянуто' | 'Запрошено' | 'Відхилено';
}
