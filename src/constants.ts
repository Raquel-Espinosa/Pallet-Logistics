import { Material, PalletAction } from './types';

export const MOCK_MATERIALS: Material[] = [
  {
    id: '1',
    code: 'MAT-8820-A',
    name: 'Cajas de cartón corrugado',
    description: 'Cajas de cartón corrugado de alta resistencia para componentes electrónicos.',
    bedsPerPallet: 6,
    piecesPerBed: 12,
    totalPieces: 72,
    status: 'ACTIVO',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv6Nm8XxI3SOY4jp9Vjn21bklWlqlZv0kqwAYFa5uLqDfvon-RWjgppyyERvhJ89Z8xaRzb2dAm7kM9YRPT5QXYRQ3viraF7cfwOZEQ5esmokukZzAtc5X5OQTDm90tVyT0jAgZev83wufjbsZL_pg2y27aUR9V3PhgNevqmsu_herWeCHFR16uCwfbQ15Hirq01XXDYObjsKBicGF-te42EvaB6ak5YYSXAaWsAYe44E3g2VkaVMGlciOixCdYZRvQHAcNTWMI9LJ'
  },
  {
    id: '2',
    code: 'MAT-4190-B',
    name: 'Contenedores plásticos',
    description: 'Contenedores plásticos de grado alimenticio, formato estándar europeo.',
    bedsPerPallet: 8,
    piecesPerBed: 8,
    totalPieces: 64,
    status: 'EN REVISIÓN',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwx8R8vEn3j5LyGpuGvLUi6dkx0u80EqXDRdpNIqFgd42dmEAu2lsJ_HcRBJR5V5dXCbK_9rv0jESkNKdEO1M_o5HQujP6pERx7KIS9gzeIeCFnMHx59dodq67FyWIuLY42vq5edXtNb3Ops10Q79I1SGPswLUbCPRTVnO7y4rnzHi_QOhd9DKMeN8jzIj6nYIF6diDXuswFRENlC99WzBQAd-u_ajsZtHFP512ITZPkotEFPgUpiwTzwooP9sVxG2zZFyyL3PJEHV'
  },
  {
    id: '3',
    code: 'MAT-1055-X',
    name: 'Rollos de película estirable',
    description: 'Rollos de película estirable industrial para embalaje secundario.',
    bedsPerPallet: 3,
    piecesPerBed: 16,
    totalPieces: 48,
    status: 'ACTIVO',
  }
];

export const MOCK_ACTIONS: PalletAction[] = [
  {
    id: 'a1',
    code: 'PLT-8921',
    title: 'PLT-8921',
    subtitle: 'Expires in 12h',
    type: 'expiry',
    priority: 'high'
  },
  {
    id: 'a2',
    code: 'PLT-8905',
    title: 'PLT-8905',
    subtitle: 'Expires in 18h',
    type: 'expiry',
    priority: 'high'
  },
  {
    id: 'a3',
    code: 'B-4ALA',
    title: 'Aisle B-4',
    subtitle: 'Capacity Warning (95%)',
    type: 'capacity',
    priority: 'medium'
  }
];

export const CAPACITY_DATA = [60, 65, 70, 68, 75, 80, 82];
export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
