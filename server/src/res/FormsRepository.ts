// FormRepository: Quais ações a aplicação pode fazer com o Form do BD

export interface FormsCreateData {
   name: string;
   email: string;
   comment: string;
}

export interface FormsRepository {
   create: (data: FormsCreateData) => Promise<void>;
}