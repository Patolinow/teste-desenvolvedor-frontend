export interface IBula {
  id: string;
  name: string;
  published_at: string;
  company: string;
  documents: IDocument[];
  active_principles: IActivePrinciple[];
}

interface IActivePrinciple {
  id: string;
  name: string;
}

interface IDocument {
  id: string;
  expedient: string;
  type: string;
  url: string;
}