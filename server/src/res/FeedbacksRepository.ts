// FeedbacksRepository: Quais ações a aplicação pode fazer com os feedbacks do BD

export interface FeedbacksCreateData {
   type: string;
   comment: string;
   screenshot?: string;
}

export interface FeedbacksRepository {
   create: (data: FeedbacksCreateData) => Promise<void>;
}