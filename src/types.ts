export type Status = 'ACTIVO' | 'EN REVISIÓN' | 'EN INSPECCIÓN' | 'RECHAZADO';

export interface Material {
  id: string;
  code: string;
  name: string;
  description: string;
  bedsPerPallet: number;
  piecesPerBed: number;
  totalPieces: number;
  status: Status;
  imageUrl?: string;
}

export interface PalletAction {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  type: 'expiry' | 'capacity' | 'info';
  priority: 'high' | 'medium' | 'low';
}

export interface KPI {
  label: string;
  value: string | number;
  unit?: string;
  trend?: string;
  type: string;
}
